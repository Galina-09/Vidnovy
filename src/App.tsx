import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Statistics from './components/Statistics';
import MapView from './components/MapView';
import Analytics from './components/Analytics';
import Community from './components/Community';
import ObjectDetails from './components/ObjectDetails';
import AddObjectModal from './components/AddObjectModal';
import WorkflowInfo from './components/WorkflowInfo';
import { DamageObject } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'map' | 'analytics' | 'community'>('home');
  const [selectedObject, setSelectedObject] = useState<DamageObject | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWorkflow, setShowWorkflow] = useState(false);

  const sampleObjects: DamageObject[] = [
    {
      id: '1',
      title: 'Школа №15 імені Тараса Шевченка',
      description: 'Пошкодження від ракетного удару, зруйновано покрівлю та вікна',
      type: 'school',
      location: { lat: 50.4501, lng: 30.5234 },
      address: 'вул. Хрещатик, 25, Київ',
      estimatedCost: 2500000,
      priority: 'high',
      status: 'verified',
      supportCount: 1247,
      images: ['https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg'],
      dateReported: '2024-01-15',
      reporter: 'Київська міська рада'
    },
    {
      id: '2',
      title: 'Лікарня швидкої допомоги',
      description: 'Пошкодження енергосистеми та частини медичного обладнання',
      type: 'hospital',
      location: { lat: 49.2331, lng: 28.4682 },
      address: 'пр. Миру, 12, Вінниця',
      estimatedCost: 4200000,
      priority: 'critical',
      status: 'verified',
      supportCount: 2156,
      images: ['https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'],
      dateReported: '2024-01-10',
      reporter: 'Вінницька ОДА'
    },
    {
      id: '3',
      title: 'Житловий будинок',
      description: 'Пошкодження від вибухової хвилі, тріщини в стінах',
      type: 'residential',
      location: { lat: 49.9935, lng: 36.2304 },
      address: 'вул. Сумська, 78, Харків',
      estimatedCost: 850000,
      priority: 'medium',
      status: 'pending',
      supportCount: 324,
      images: ['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'],
      dateReported: '2024-01-20',
      reporter: 'Мешканці будинку'
    }
  ];

  const handleAddObjectSuccess = () => {
    setShowAddModal(false);
    setShowWorkflow(true);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'map':
        return (
          <MapView 
            objects={sampleObjects}
            onObjectSelect={setSelectedObject}
          />
        );
      case 'analytics':
        return <Analytics objects={sampleObjects} />;
      case 'community':
        return <Community objects={sampleObjects} />;
      default:
        return (
          <div>
            <Hero onGoToMap={() => setCurrentView('map')} />
            <Features />
            <Statistics />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header 
        currentView={currentView} 
        onNavigate={setCurrentView}
        onAddObject={() => setShowAddModal(true)}
      />
      
      {renderCurrentView()}

      {selectedObject && (
        <ObjectDetails 
          object={selectedObject}
          onClose={() => setSelectedObject(null)}
        />
      )}

      {showAddModal && (
        <AddObjectModal 
          onClose={() => setShowAddModal(false)}
          onSuccess={handleAddObjectSuccess}
        />
      )}

      {showWorkflow && (
        <WorkflowInfo onClose={() => setShowWorkflow(false)} />
      )}
    </div>
  );
}

export default App;