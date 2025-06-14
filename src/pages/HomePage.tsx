import React from 'react';
import { Hero } from '../components/Hero';
import { StatsOverview } from '../components/StatsOverview';
import { ProjectCard } from '../components/ProjectCard';
import { mockStats, mockReports } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const featuredProjects = mockReports.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />
      <StatsOverview stats={mockStats} />
      
      {/* Featured Projects Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Активні проєкти</h2>
              <p className="text-lg text-gray-600">
                Найважливіші об'єкти, що потребують відновлення
              </p>
            </div>
            <Link
              to="/projects"
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Всі проєкти
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Станьте частиною відбудови України
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Кожен голос має значення. Приєднуйтесь до прозорого процесу відновлення інфраструктури.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/report"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Повідомити про пошкодження
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Переглянути проєкти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};