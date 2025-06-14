import React from 'react';
import { FileText, CheckCircle, DollarSign, Clock } from 'lucide-react';
import { ProjectStats } from '../types';

interface StatsOverviewProps {
  stats: ProjectStats;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('uk-UA', {
      style: 'currency',
      currency: 'UAH',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const statsItems = [
    {
      name: 'Всього звітів',
      value: stats.totalReports.toLocaleString(),
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      change: '+12% за місяць'
    },
    {
      name: 'Верифіковано',
      value: stats.verifiedReports.toLocaleString(),
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50',
      change: `${Math.round((stats.verifiedReports / stats.totalReports) * 100)}% від загальної кількості`
    },
    {
      name: 'Завершено проєктів',
      value: stats.completedProjects.toLocaleString(),
      icon: Clock,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      change: '+8% за місяць'
    },
    {
      name: 'Загальна вартість',
      value: formatCurrency(stats.totalEstimatedCost),
      icon: DollarSign,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      change: 'Орієнтовна оцінка'
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Статистика платформи</h2>
          <p className="text-lg text-gray-600">
            Актуальні дані про стан відновлення інфраструктури по всій Україні
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center">
                <div className={`${item.bg} p-3 rounded-lg`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-500">{item.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{item.change}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Приєднуйтесь до відбудови</h3>
              <p className="text-blue-100 mb-6">
                Кожен звіт має значення. Разом ми створюємо прозору систему відновлення України.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Почати зараз
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {Math.round((stats.verifiedReports / stats.totalReports) * 100)}%
                </div>
                <div className="text-blue-100">Верифікація</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {Math.round((stats.totalActualCost / stats.totalEstimatedCost) * 100)}%
                </div>
                <div className="text-blue-100">Виконано</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};