import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { mockReports } from '../data/mockData';
import { Search, Filter, MapPin, Calendar, TrendingUp } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('');

  const categories = [
    { value: '', label: 'Всі категорії' },
    { value: 'infrastructure', label: 'Інфраструктура' },
    { value: 'residential', label: 'Житлові будинки' },
    { value: 'commercial', label: 'Комерційні об\'єкти' },
    { value: 'industrial', label: 'Промислові об\'єкти' },
    { value: 'transport', label: 'Транспортна інфраструктура' }
  ];

  const statuses = [
    { value: '', label: 'Всі статуси' },
    { value: 'reported', label: 'Повідомлено' },
    { value: 'verified', label: 'Верифіковано' },
    { value: 'in_progress', label: 'Виконується' },
    { value: 'completed', label: 'Завершено' }
  ];

  const severities = [
    { value: '', label: 'Всі рівні' },
    { value: 'low', label: 'Низький' },
    { value: 'medium', label: 'Середній' },
    { value: 'high', label: 'Високий' },
    { value: 'critical', label: 'Критичний' }
  ];

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || report.category === selectedCategory;
    const matchesStatus = !selectedStatus || report.status === selectedStatus;
    const matchesSeverity = !selectedSeverity || report.severity === selectedSeverity;

    return matchesSearch && matchesCategory && matchesStatus && matchesSeverity;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedStatus('');
    setSelectedSeverity('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Дашборд проєктів</h1>
          <p className="text-lg text-gray-600">
            Керуйте та відслідковуйте всі проєкти відновлення інфраструктури
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{mockReports.length}</p>
                <p className="text-sm text-gray-600">Всього звітів</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {mockReports.filter(r => r.status === 'completed').length}
                </p>
                <p className="text-sm text-gray-600">Завершено</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {mockReports.filter(r => r.status === 'in_progress').length}
                </p>
                <p className="text-sm text-gray-600">В роботі</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Filter className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{filteredReports.length}</p>
                <p className="text-sm text-gray-600">Відфільтровано</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Пошук за назвою, описом або адресою..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statuses.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
              
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {severities.map(severity => (
                  <option key={severity.value} value={severity.value}>{severity.label}</option>
                ))}
              </select>
              
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Скинути
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Не знайдено проєктів
            </h3>
            <p className="text-gray-600">
              Спробуйте змінити фільтри або пошуковий запит
            </p>
          </div>
        )}
      </div>
    </div>
  );
};