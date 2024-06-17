// src/MapApp.js
import React, { useState } from 'react';
import Map from './components/Map.js';
import ProvinceMap from './components/ProvinceMap.js';
import MunicipalitiesList from './components/MunicipalitiesList';
import 'tailwindcss/tailwind.css';

const MapApp = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [communes, setCommunes] = useState([
    { id: '1', name: 'Commune 1' },
    { id: '2', name: 'Commune 2' },
    // Ajoutez toutes les communes ici
  ]);

  const handleProvinceClick = (e) => {
    // Logique pour déterminer la province cliquée
    // Par exemple, utilisez e.target pour obtenir l'identifiant de la province
    setSelectedProvince('ProvinceName');
  };

  const handleDragEnd = (result) => {
    // Logique pour réordonner les communes après le drag-and-drop
    if (!result.destination) return;

    const items = Array.from(communes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCommunes(items);
  };

  return (
    <div className="min-h-screen p-4">
      <Map onProvinceClick={handleProvinceClick} />
      {selectedProvince && (
        <div className="flex">
          <ProvinceMap province={selectedProvince} onDragEnd={handleDragEnd} />
          <MunicipalitiesList communes={communes} onDragEnd={handleDragEnd} />
        </div>
      )}
    </div>
  );
};

export default MapApp;
