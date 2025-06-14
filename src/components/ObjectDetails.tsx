import React, { useState } from 'react';
import { X, Heart, Share2, Calendar, MapPin, DollarSign, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import { DamageObject } from '../types';

interface ObjectDetailsProps {
  object: DamageObject;
  onClose: () => void;
}

const ObjectDetails: React.FC<ObjectDetailsProps> = ({ object, onClose }) => {
  const [isSupporting, setIsSupporting] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'critical': return 'Критичний';
      case 'high': return 'Високий';
      case 'medium': return 'Середній';
      case 'low': return 'Низький';
      default: return 'Невизначено';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'verified': return 'Верифіковано';
      case 'pending': return 'На розгляді';
      case 'in_progress': return 'В роботі';
      case 'completed': return 'Завершено';
      default: return 'Невизначено';
    }
  };

  const handleSupport = () => {
    setIsSupporting(true);
    // Тут буде логіка підтримки
    setTimeout(() => setIsSupporting(false), 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">{object.title}</h2>
            {object.status === 'verified' && (
              <CheckCircle className="w-6 h-6 text-green-500" />
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Image Gallery */}
          {object.images && object.images.length > 0 && (
            <div className="mb-8">
              <img
                src={object.images[0]}
                alt={object.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Status and Priority */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(object.priority)}`}>
              <AlertTriangle className="w-4 h-4 inline mr-1" />
              {getPriorityLabel(object.priority)}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {getStatusLabel(object.status)}
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Опис пошкоджень</h3>
            <p className="text-gray-600 leading-relaxed">{object.description}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Адреса</div>
                  <div className="font-medium text-gray-900">{object.address}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Дата реєстрації</div>
                  <div className="font-medium text-gray-900">
                    {new Date(object.dateReported).toLocaleDateString('uk-UA')}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Заявник</div>
                  <div className="font-medium text-gray-900">{object.reporter}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Орієнтовна вартість</div>
                  <div className="font-bold text-2xl text-gray-900">
                    ₴{object.estimatedCost.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Підтримка громади</div>
                  <div className="font-medium text-gray-900">
                    {object.supportCount} осіб підтримали
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Деталізація кошторису</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Матеріали</span>
                <span className="font-medium">₴{Math.round(object.estimatedCost * 0.6).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Роботи</span>
                <span className="font-medium">₴{Math.round(object.estimatedCost * 0.3).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Логістика та інше</span>
                <span className="font-medium">₴{Math.round(object.estimatedCost * 0.1).toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Загалом</span>
                  <span>₴{object.estimatedCost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSupport}
              disabled={isSupporting}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              <Heart className="w-5 h-5" />
              <span>{isSupporting ? 'Підтримуємо...' : 'Підтримати проєкт'}</span>
            </button>

            <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-600 hover:text-white transition-all">
              <Share2 className="w-5 h-5" />
              <span>Поділитися</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetails;