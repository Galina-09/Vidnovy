import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Filter, Search, List, MapPin } from 'lucide-react';
import { DamageObject } from '../types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapViewProps {
  objects: DamageObject[];
  onObjectSelect: (object: DamageObject) => void;
}

// Custom marker icons based on priority
const createCustomIcon = (priority: string, type: string) => {
  const getColor = (priority: string) => {
    switch (priority) {
      case 'critical': return '#ef4444';
      case 'high': return '#f97316';
      case 'medium': return '#eab308';
      case 'low': return '#22c55e';
      default: return '#6b7280';
    }
  };

  const getEmoji = (type: string) => {
    switch (type) {
      case 'school': return '🏫';
      case 'hospital': return '🏥';
      case 'residential': return '🏠';
      case 'infrastructure': return '🏗️';
      case 'cultural': return '🏛️';
      default: return '📍';
    }
  };

  return L.divIcon({
    html: `
      <div style="
        background-color: ${getColor(priority)};
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        cursor: pointer;
      ">
        ${getEmoji(type)}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

const MapView: React.FC<MapViewProps> = ({ objects, onObjectSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const filters = [
    { id: 'all', label: 'Всі об\'єкти', count: objects.length },
    { id: 'critical', label: 'Критичні', count: objects.filter(o => o.priority === 'critical').length },
    { id: 'verified', label: 'Верифіковані', count: objects.filter(o => o.status === 'verified').length },
    { id: 'school', label: 'Школи', count: objects.filter(o => o.type === 'school').length },
    { id: 'hospital', label: 'Лікарні', count: objects.filter(o => o.type === 'hospital').length }
  ];

  const filteredObjects = objects.filter(obj => {
    const matchesFilter = selectedFilter === 'all' || 
                         obj.priority === selectedFilter || 
                         obj.status === selectedFilter || 
                         obj.type === selectedFilter;
    const matchesSearch = obj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         obj.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'school': return '🏫';
      case 'hospital': return '🏥';
      case 'residential': return '🏠';
      case 'infrastructure': return '🏗️';
      case 'cultural': return '🏛️';
      default: return '📍';
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Search and Filter Bar */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Пошук об'єктів..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'map'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                Карта
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <List className="w-4 h-4 inline mr-2" />
                Список
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'map' ? (
          <div className="relative h-full">
            <MapContainer
              center={[49.0, 32.0]} // Center of Ukraine
              zoom={6}
              style={{ height: '100%', width: '100%' }}
              className="z-10"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {filteredObjects.map((obj) => (
                <Marker
                  key={obj.id}
                  position={[obj.location.lat, obj.location.lng]}
                  icon={createCustomIcon(obj.priority, obj.type)}
                  eventHandlers={{
                    click: () => onObjectSelect(obj),
                  }}
                >
                  <Popup>
                    <div className="p-2 min-w-[250px]">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{getTypeIcon(obj.type)}</span>
                        <h3 className="font-bold text-gray-900">{obj.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{obj.description}</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div>📍 {obj.address}</div>
                        <div>💰 ₴{obj.estimatedCost.toLocaleString()}</div>
                        <div>👥 {obj.supportCount} підтримок</div>
                      </div>
                      <button
                        onClick={() => onObjectSelect(obj)}
                        className="mt-3 w-full bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        Детальніше
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg z-20">
              <h4 className="font-semibold text-gray-900 mb-3">Пріоритет</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-600">Критичний</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-600">Високий</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-gray-600">Середній</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Низький</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* List View */
          <div className="h-full overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredObjects.map((obj) => (
                <div
                  key={obj.id}
                  onClick={() => onObjectSelect(obj)}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-3xl">{getTypeIcon(obj.type)}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{obj.title}</h3>
                          <span className={`w-3 h-3 rounded-full ${getPriorityColor(obj.priority)}`}></span>
                          {obj.status === 'verified' && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Верифіковано
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-3">{obj.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>📍 {obj.address}</span>
                          <span>💰 ₴{obj.estimatedCost.toLocaleString()}</span>
                          <span>👥 {obj.supportCount} підтримок</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapView;