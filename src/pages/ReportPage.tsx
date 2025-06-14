import React from 'react';
import { ReportForm } from '../components/ReportForm';
import { FileText, Users, Zap } from 'lucide-react';

export const ReportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Повідомити про пошкодження
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ваш звіт допоможе створити прозору систему відновлення. 
            Кожне повідомлення важливе для відбудови України.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Автоматичний розрахунок
            </h3>
            <p className="text-gray-600">
              Система автоматично розрахує орієнтовну вартість відновлення на основі ваших даних
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Громадська верифікація
            </h3>
            <p className="text-gray-600">
              Спільнота зможе підтвердити та проголосувати за пріоритетність вашого звіту
            </p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Швидке опрацювання
            </h3>
            <p className="text-gray-600">
              Звіти автоматично потрапляють до відповідних органів влади для швидкого реагування
            </p>
          </div>
        </div>

        {/* Form */}
        <ReportForm />

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Що відбувається після подання звіту?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Модерація</h3>
                <p className="text-sm text-gray-600">Звіт перевіряється на достовірність</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Верифікація</h3>
                <p className="text-sm text-gray-600">Експерти підтверджують оцінку вартості</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Голосування</h3>
                <p className="text-sm text-gray-600">Громада визначає пріоритетність</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Виконання</h3>
                <p className="text-sm text-gray-600">Проєкт передається до Prozorro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};