import React from 'react';
import { TrendingUp, Calendar, MapPin, DollarSign } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: MapPin,
      label: 'Всього об\'єктів',
      value: '3,842',
      change: '+127',
      changeType: 'increase' as const
    },
    {
      icon: DollarSign,
      label: 'Загальна вартість',
      value: '₴847М',
      change: '+₴45М',
      changeType: 'increase' as const
    },
    {
      icon: TrendingUp,
      label: 'Відновлено',
      value: '1,249',
      change: '+89',
      changeType: 'increase' as const
    },
    {
      icon: Calendar,
      label: 'Цього місяця',
      value: '234',
      change: '+18%',
      changeType: 'increase' as const
    }
  ];

  const regions = [
    { name: 'Київська область', objects: 542, progress: 78 },
    { name: 'Харківська область', projects: 421, progress: 65 },
    { name: 'Донецька область', objects: 389, progress: 45 },
    { name: 'Луганська область', objects: 298, progress: 52 },
    { name: 'Запорізька область', objects: 267, progress: 71 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Статистика відновлення
          </h2>
          <p className="text-xl text-gray-600">
            Актуальні дані про стан відновлення по всій Україні
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.changeType === 'increase' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {stat.change}
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Progress */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Прогрес по регіонах
          </h3>
          
          <div className="space-y-6">
            {regions.map((region, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{region.name}</span>
                    <span className="text-sm text-gray-600">{region.objects} об'єктів</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${region.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="ml-4 text-lg font-bold text-gray-900">
                  {region.progress}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;