import React from 'react';
import { Calculator, Users, FileText, Shield, Eye, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Автоматичний кошторис',
      description: 'Розрахунок вартості відновлення на основі стандартизованих моделей будівництва та актуальних цін',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Громадська підтримка',
      description: 'Система голосування та підтримки проєктів з можливістю верифікації учасників',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'Детальні звіти',
      description: 'Експорт повних звітів з фотодокументацією та розрахунками для тендерів',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Прозорість Prozorro',
      description: 'Інтеграція з системою державних закупівель для забезпечення прозорості процесу',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Eye,
      title: 'Громадський контроль',
      description: 'Моніторинг виконання робіт та використання коштів у режимі реального часу',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Пріоритизація',
      description: 'Розумний алгоритм визначення пріоритетності об\'єктів на основі критичності та підтримки',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ключові можливості платформи
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексний підхід до відновлення з використанням сучасних технологій 
            та принципів прозорості
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;