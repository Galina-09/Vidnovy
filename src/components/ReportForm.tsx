import React, { useState } from 'react';
import { Upload, MapPin, Camera, DollarSign } from 'lucide-react';

export const ReportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
    category: '',
    severity: '',
    photos: [] as string[]
  });

  const [step, setStep] = useState(1);

  const categories = [
    { value: 'infrastructure', label: 'Інфраструктура' },
    { value: 'residential', label: 'Житлові будинки' },
    { value: 'commercial', label: 'Комерційні об\'єкти' },
    { value: 'industrial', label: 'Промислові об\'єкти' },
    { value: 'transport', label: 'Транспортна інфраструктура' }
  ];

  const severities = [
    { value: 'low', label: 'Низька', color: 'text-green-600' },
    { value: 'medium', label: 'Середня', color: 'text-yellow-600' },
    { value: 'high', label: 'Висока', color: 'text-orange-600' },
    { value: 'critical', label: 'Критична', color: 'text-red-600' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting report:', formData);
    // Here would be API call to submit the report
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Mock photo upload - in real app would handle file upload
    const mockPhotos = [
      'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400'
    ];
    setFormData(prev => ({ ...prev, photos: mockPhotos }));
  };

  const estimatedCost = React.useMemo(() => {
    if (!formData.category || !formData.severity) return 0;
    
    const baseCosts = {
      infrastructure: 1000000,
      residential: 500000,
      commercial: 800000,
      industrial: 1500000,
      transport: 2000000
    };

    const multipliers = {
      low: 0.5,
      medium: 1,
      high: 2,
      critical: 4
    };

    return baseCosts[formData.category as keyof typeof baseCosts] * 
           multipliers[formData.severity as keyof typeof multipliers];
  }, [formData.category, formData.severity]);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Повідомити про пошкодження</h2>
        <p className="text-gray-600">Допоможіть зробити відбудову більш прозорою та ефективною</p>
      </div>

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">Крок {step} з 3</span>
          <span className="text-sm font-medium text-gray-500">{Math.round((step / 3) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Назва пошкодження *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Наприклад: Пошкодження даху школи №15"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Детальний опис *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Опишіть характер пошкоджень, що саме потребує відновлення..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Адреса *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="м. Київ, вул. Хрещатик, 1"
                required
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категорія об'єкта *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Оберіть категорію</option>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ступінь пошкодження *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {severities.map(severity => (
                  <label key={severity.value} className="relative">
                    <input
                      type="radio"
                      name="severity"
                      value={severity.value}
                      checked={formData.severity === severity.value}
                      onChange={(e) => setFormData(prev => ({ ...prev, severity: e.target.value }))}
                      className="sr-only"
                    />
                    <div className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                      formData.severity === severity.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className={`font-medium ${severity.color}`}>
                        {severity.label}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {estimatedCost > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-900">
                    Орієнтовна вартість відновлення:
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-900 mt-1">
                  {new Intl.NumberFormat('uk-UA', {
                    style: 'currency',
                    currency: 'UAH',
                    minimumFractionDigits: 0,
                  }).format(estimatedCost)}
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  *Розрахунок базується на середніх показниках та буде уточнений експертами
                </p>
              </div>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Camera className="inline h-4 w-4 mr-1" />
                Фото пошкоджень
              </label>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="sr-only"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600">
                    Натисніть для завантаження фото або перетягніть їх сюди
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG до 10MB кожне
                  </p>
                </label>
              </div>

              {formData.photos.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {formData.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Фото ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Підсумок звіту</h3>
              <dl className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Назва:</dt>
                  <dd className="text-gray-900">{formData.title}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Категорія:</dt>
                  <dd className="text-gray-900">
                    {categories.find(c => c.value === formData.category)?.label}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Серйозність:</dt>
                  <dd className="text-gray-900">
                    {severities.find(s => s.value === formData.severity)?.label}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Фото:</dt>
                  <dd className="text-gray-900">{formData.photos.length} шт.</dd>
                </div>
              </dl>
            </div>
          </>
        )}

        <div className="flex justify-between pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Назад
            </button>
          )}
          
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              disabled={
                (step === 1 && (!formData.title || !formData.description || !formData.address)) ||
                (step === 2 && (!formData.category || !formData.severity))
              }
              className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Далі
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Відправити звіт
            </button>
          )}
        </div>
      </form>
    </div>
  );
};