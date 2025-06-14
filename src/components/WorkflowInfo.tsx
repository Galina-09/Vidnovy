import React from 'react';
import { X, FileText, CheckCircle, Users, Hammer, ArrowRight } from 'lucide-react';

interface WorkflowInfoProps {
  onClose: () => void;
}

const WorkflowInfo: React.FC<WorkflowInfoProps> = ({ onClose }) => {
  const steps = [
    {
      id: 1,
      title: 'Модерація',
      description: 'Перевірка поданої інформації на достовірність та повноту',
      icon: FileText,
      color: 'bg-blue-500',
      details: [
        'Перевірка фотографій та документів',
        'Валідація адреси та координат',
        'Оцінка повноти опису пошкоджень',
        'Термін: 1-2 робочі дні'
      ],
      status: 'current'
    },
    {
      id: 2,
      title: 'Верифікація',
      description: 'Підтвердження об\'єкта експертами та відповідальними органами',
      icon: CheckCircle,
      color: 'bg-green-500',
      details: [
        'Експертна оцінка пошкоджень',
        'Підтвердження від місцевих органів влади',
        'Технічна перевірка кошторису',
        'Термін: 3-5 робочих днів'
      ],
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Громадське голосування',
      description: 'Визначення пріоритетності проєкту громадою',
      icon: Users,
      color: 'bg-purple-500',
      details: [
        'Відкрите голосування зареєстрованих користувачів',
        'Обговорення в громадських форумах',
        'Збір додаткових пропозицій',
        'Термін: 14 днів'
      ],
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Відновлення',
      description: 'Реалізація проєкту через прозорі тендери',
      icon: Hammer,
      color: 'bg-orange-500',
      details: [
        'Публікація тендера в системі Prozorro',
        'Вибір підрядника',
        'Контроль виконання робіт',
        'Звітність про використання коштів'
      ],
      status: 'upcoming'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Процес обробки об'єкта</h2>
            <p className="text-gray-600">Ваш об'єкт успішно додано! Ось що відбувається далі:</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Success Message */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-bold text-green-900">Об'єкт успішно зареєстровано!</h3>
            </div>
            <p className="text-green-800">
              Ваша заявка отримала унікальний номер <strong>#VO-2024-0001</strong> та передана на модерацію. 
              Ви отримаєте сповіщення на електронну пошту про кожен етап обробки.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={step.id} className="relative">
                  {/* Connector Line */}
                  {!isLast && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Step Icon */}
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 ${
                      step.status === 'current' ? 'ring-4 ring-blue-100' : ''
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        {step.status === 'current' && (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            Поточний етап
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Що включає цей етап:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="mt-12 bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Орієнтовний часовий план</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1-2 дні</div>
                <div className="text-sm text-blue-800">Модерація</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3-5 днів</div>
                <div className="text-sm text-green-800">Верифікація</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">14 днів</div>
                <div className="text-sm text-purple-800">Голосування</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Залежить</div>
                <div className="text-sm text-orange-800">Відновлення</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">Що ви можете зробити зараз:</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-800">Поділіться посиланням з друзями для збільшення підтримки</span>
              </li>
              <li className="flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-800">Приєднайтеся до обговорення в розділі "Громада"</span>
              </li>
              <li className="flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-800">Слідкуйте за оновленнями через сповіщення</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Зрозуміло, дякую!
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
              Переглянути мій об'єкт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowInfo;