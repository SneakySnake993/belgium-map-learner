// src/MapApp.js
import React, { useState } from 'react';
import Map from './components/Map';
import ProvinceMap from './components/ProvinceMap.js';
import MunicipalitiesList from './components/MunicipalitiesList';
import 'tailwindcss/tailwind.css';

const MapApp = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleProvinceClick = (e) => {
    const provinceName = e.target.getAttribute('name');
    if (provinceName) {
      console.log(`Province ${provinceName} clicked`);
      setSelectedProvince(provinceName);
    }
  };

  // const handleDragEnd = (result) => {
  //   // Logique pour réordonner les communes après le drag-and-drop
  //   if (!result.destination) return;

  //   const items = Array.from(communes);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setCommunes(items);
  // };

  return (
    <div className="min-h-screen p-4">
      <Map onProvinceClick={handleProvinceClick} />
      {/* {selectedProvince && (
        <div className="flex">
          <ProvinceMap province={selectedProvince} />
          <MunicipalitiesList />
        </div>
      )} */}
    </div>
  );
};

export default MapApp;
