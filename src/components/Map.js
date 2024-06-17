import React from 'react';
import { ReactSVG } from 'react-svg';
import '../styles/Map.css';

const Map = ({ onProvinceClick }) => {
  const handleMouseEnter = (event) => {
    const target = event.target;
    if (target.tagName === 'path') {
      target.parentNode.appendChild(target);
    }
  };

  return (
    <div className="map-container">
      <ReactSVG
        src="/assets/countries/be.svg"
        beforeInjection={(svg) => {
          svg.classList.add('belgium-map');
          Array.from(svg.querySelectorAll('path')).forEach((path) => {
            path.addEventListener('mouseenter', handleMouseEnter);
            path.addEventListener('click', onProvinceClick);
          });
        }}
        onError={(error) => {
          console.error('Error loading SVG:', error);
        }}
      />
    </div>
  );
};

export default Map;