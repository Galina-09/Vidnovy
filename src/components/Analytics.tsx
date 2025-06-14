import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar, MapPin, DollarSign, Users, Clock, Filter, Download } from 'lucide-react';
import { DamageObject } from '../types';

interface AnalyticsProps {
  objects: DamageObject[];
}

const Analytics: React.FC<AnalyticsProps> = ({ objects }) => {
  const [timeRange, setTimeRange] = useState('month');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Calculate statistics
  const totalObjects = objects.length;
  const totalCost = objects.reduce((sum, obj) => sum + obj.estimatedCost, 0);
  const verifiedObjects = objects.filter(obj => obj.status === 'verified').length;
  const criticalObjects = objects.filter(obj => obj.priority === 'critical').length;

  const typeDistribution = {
    school: objects.filter(obj => obj.type === 'school').length,
    hospital: objects.filter(obj => obj.type === 'hospital').length,
    residential: objects.filter(obj => obj.type === 'residential').length,
    infrastructure: objects.filter(obj => obj.type === 'infrastructure').length,
    cultural: objects.filter(obj => obj.type === 'cultural').length,
  };

  const priorityDistribution = {
    critical: objects.filter(obj => obj.priority === 'critical').length,
    high: objects.filter(obj => obj.priority === 'high').length,
    medium: objects.filter(obj => obj.priority === 'medium').length,
    low: objects.filter(obj => obj.priority === 'low').length,
  };

  const regions = [
    { name: 'Київська область', objects: 542, cost: 1200000000, progress: 78 },
    { name: 'Харківська область', objects: 421, cost: 980000000, progress: 65 },
    { name: 'Донецька область', objects: 389, cost: 1500000000, progress: 45 },
    { name: 'Луганська область', objects: 298, cost: 750000000, progress: 52 },
    { name: 'Запорізька область', objects: 267, cost: 650000000, progress: 71 }
  ];

  const monthlyData = [
    { month: 'Січ', objects: 45, cost: 125000000 },
    { month: 'Лют', objects: 67, cost: 189000000 },
    { month: 'Бер', objects: 89, cost: 234000000 },
    { month: 'Кві', objects: 123, cost: 345000000 },
    { month: 'Тра', objects: 156, cost: 423000000 },
    { month: 'Чер', objects: 134, cost: 378000000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Аналітика відновлення</h1>
              <p className="text-gray-600">Детальна статистика та тренди по всій Україні</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="week">Тиждень</option>
                <option value="month">Місяць</option>
                <option value="quarter">Квартал</option>
                <option value="year">Рік</option>
              </select>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download size={18} />
                <span>Експорт</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+12%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{totalObjects.toLocaleString()}</div>
            <div className="text-gray-600">Всього об'єктів</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+8%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">₴{(totalCost / 1000000).toFixed(1)}М</div>
            <div className="text-gray-600">Загальна вартість</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+15%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{verifiedObjects}</div>
            <div className="text-gray-600">Верифіковано</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-sm text-red-600 font-medium">+3%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{criticalObjects}</div>
            <div className="text-gray-600">Критичні</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Trend */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Динаміка по місяцях</h3>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-gray-900">{data.month}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{data.objects} об'єктів</div>
                    <div className="text-sm text-gray-500">₴{(data.cost / 1000000).toFixed(0)}М</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Type Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Розподіл за типами</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏫</span>
                  <span className="font-medium text-gray-900">Школи</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(typeDistribution.school / totalObjects) * 100}%` }}></div>
                  </div>
                  <span className="font-bold text-gray-900">{typeDistribution.school}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="font-medium text-gray-900">Лікарні</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(typeDistribution.hospital / totalObjects) * 100}%` }}></div>
                  </div>
                  <span className="font-bold text-gray-900">{typeDistribution.hospital}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏠</span>
                  <span className="font-medium text-gray-900">Житло</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(typeDistribution.residential / totalObjects) * 100}%` }}></div>
                  </div>
                  <span className="font-bold text-gray-900">{typeDistribution.residential}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏗️</span>
                  <span className="font-medium text-gray-900">Інфраструктура</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(typeDistribution.infrastructure / totalObjects) * 100}%` }}></div>
                  </div>
                  <span className="font-bold text-gray-900">{typeDistribution.infrastructure}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Analysis */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Аналіз по регіонах</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Регіон</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Об'єкти</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Вартість</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Прогрес</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((region, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">{region.name}</td>
                    <td className="py-4 px-4 text-right text-gray-900">{region.objects}</td>
                    <td className="py-4 px-4 text-right text-gray-900">₴{(region.cost / 1000000).toFixed(0)}М</td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" 
                            style={{ width: `${region.progress}%` }}
                          ></div>
                        </div>
                        <span className="font-medium text-gray-900">{region.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Priority Analysis */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Аналіз пріоритетності</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-red-600">{priorityDistribution.critical}</span>
              </div>
              <div className="font-semibold text-gray-900">Критичні</div>
              <div className="text-sm text-gray-500">Потребують негайного втручання</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-orange-600">{priorityDistribution.high}</span>
              </div>
              <div className="font-semibold text-gray-900">Високі</div>
              <div className="text-sm text-gray-500">Важливі для громади</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-yellow-600">{priorityDistribution.medium}</span>
              </div>
              <div className="font-semibold text-gray-900">Середні</div>
              <div className="text-sm text-gray-500">Планове відновлення</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">{priorityDistribution.low}</span>
              </div>
              <div className="font-semibold text-gray-900">Низькі</div>
              <div className="text-sm text-gray-500">Косметичні роботи</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;