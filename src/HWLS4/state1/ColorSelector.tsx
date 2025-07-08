import React, { useState } from 'react';
import '../css/colorSelector.css'; 
const ColorSelector = ({ colors = [], label = "Màu:", defaultColor, onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor || colors[0]);

  const handleSelect = (color) => {
    setSelectedColor(color);
    if (onColorChange) {
      onColorChange(color); 
    }
  };

  return (
    <div className="color-selector">
      <span className="label">{label}</span>
      {colors.map(color => (
        <button
          key={color}
          className={`color-btn ${selectedColor === color ? 'active' : ''}`}
          onClick={() => handleSelect(color)}
        >
          {color}
          {selectedColor === color && <span className="check">✔</span>}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
