import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { mockReports } from '../data/mockData';
import { MapPin, BarChart3, Calendar, Filter } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const sortOptions = [
    { value: 'newest', label: 'Найновіші' },
    { value: 'oldest', label: 'Найстаріші' },
    { value: 'cost_high', label: 'За вартістю (спочатку дорожчі)' },
    { value: 'cost_low', label: 'За вартістю (спочатку дешевші)' },
    { value: 'priority', label: 'За пріоритетом' },
  ];

  const sortedReports = [...mockReports].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime();
      case 'oldest':
        return new Date(a.reportedAt).getTime() - new Date(b.reportedAt).getTime();
      case 'cost_high':
        return b.estimatedCost - a.estimatedCost;
      case 'cost_low':
        return a.estimatedCost - b.estimatedCost;
      case 'priority':
        return b.votes.priority - a.votes.priority;
      default:
        return 0;
    }
  });

  const statusCounts = {
    all: mockReports.length,
    reported: mockReports.filter(r => r.status === 'reported').length,
    verified: mockReports.filter(r => r.status === 'verified').length,
    in_progress: mockReports.filter(r => r.status === 'in_progress').length,
    completed: mockReports.filter(r => r.status === 'completed').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Всі проєкти</h1>
            <p className="text-lg text-gray-600">
              Повний каталог проєктів відновлення інфраструктури по всій Україні
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BarChart3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'map'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <MapPin className="h-4 w-4" />
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{statusCounts.all}</div>
            <div className="text-sm text-gray-600">Всього</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-gray-600">{statusCounts.reported}</div>
            <div className="text-sm text-gray-600">Повідомлено</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-yellow-200 bg-yellow-50">
            <div className="text-2xl font-bold text-yellow-800">{statusCounts.verified}</div>
            <div className="text-sm text-yellow-700">Верифіковано</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200 bg-blue-50">
            <div className="text-2xl font-bold text-blue-800">{statusCounts.in_progress}</div>
            <div className="text-sm text-blue-700">В роботі</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-green-200 bg-green-50">
            <div className="text-2xl font-bold text-green-800">{statusCounts.completed}</div>
            <div className="text-sm text-green-700">Завершено</div>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedReports.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Карта проєктів
            </h3>
            <p className="text-gray-600 mb-6">
              Інтерактивна карта з усіма проєктами відновлення буде доступна в наступній версії платформи.
            </p>
            <button
              onClick={() => setViewMode('grid')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Повернутися до списку
            </button>
          </div>
        )}
      </div>
    </div>
  );
};