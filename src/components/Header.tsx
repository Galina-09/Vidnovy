import React from 'react';
import { Map, Plus, Home, BarChart3, Users, Settings } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'map' | 'analytics' | 'community';
  onNavigate: (view: 'home' | 'map' | 'analytics' | 'community') => void;
  onAddObject: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onAddObject }) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">В+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Віднова+</h1>
              <p className="text-xs text-gray-500">Прозоре відновлення</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentView === 'home'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Home size={18} />
              <span>Головна</span>
            </button>
            
            <button
              onClick={() => onNavigate('map')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentView === 'map'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Map size={18} />
              <span>Карта</span>
            </button>

            <button
              onClick={() => onNavigate('analytics')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentView === 'analytics'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <BarChart3 size={18} />
              <span>Аналітика</span>
            </button>

            <button
              onClick={() => onNavigate('community')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentView === 'community'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Users size={18} />
              <span>Громада</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onAddObject}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Додати об'єкт</span>
            </button>

            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;