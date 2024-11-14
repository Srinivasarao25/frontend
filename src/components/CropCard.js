// src/components/CropCard.js
import React from 'react';
import '../CropCard.css';

const CropCard = ({ cropName, image, description, area, production, yieldPerHectare, onClick }) => {
  return (
    <div className="crop-card" onClick={onClick}>
      <img src={image} alt={cropName} className="crop-card-image" />
      <div className="crop-card-content">
        <h3 className="crop-card-title">{cropName}</h3>
        <p className="crop-card-description">{description}</p>
        <div className="crop-card-stats">
          <p><strong>Area: </strong>{area} Hectares</p>
          <p><strong>Production: </strong>{production} Tonnes</p>
          <p><strong>Yield: </strong>{yieldPerHectare} Tonnes/Hectare</p>
        </div>
      </div>
    </div>
  );
};

export default CropCard;
