import React from 'react';

const Map = ({ onProvinceClick }) => {
  return (
    <div>
      <svg /* Utilisez le contenu SVG de la carte de Belgique */ onClick={onProvinceClick} className="cursor-pointer">
        {/* Votre contenu SVG ici */}
      </svg>
    </div>
  );
};

export default Map;