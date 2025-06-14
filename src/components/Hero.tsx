import React from 'react';
import { Map, ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGoToMap: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGoToMap }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-yellow-600 opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Прозора система відновлення
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Відновлюємо
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent"> разом</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Платформа для прозорого документування пошкоджень, розрахунку кошторисів 
            та залучення громадської підтримки для відновлення інфраструктури України
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onGoToMap}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl flex items-center space-x-3 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-semibold"
            >
              <Map size={24} />
              <span>Переглянути карту</span>
              <ArrowRight size={20} />
            </button>

            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg font-semibold">
              Дізнатись більше
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15,247</div>
              <div className="text-gray-600">Активних користувачів</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl mb-4 mx-auto">
                <Map className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3,842</div>
              <div className="text-gray-600">Зареєстрованих об'єктів</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₴2.8М</div>
              <div className="text-gray-600">Залучено коштів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;