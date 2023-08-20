// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./ColorChanger.css"; // Import the CSS file for styling

export default function ColorChanger() {
  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "orange",
    "pink",
    "cyan",
    "magenta",
    "yellow",
    "brown",
  ];

  const [selectedColor, setSelectedColor] = useState("black"); // Default color

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-changer">
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <div className="colored-text" style={{ color: selectedColor }}>
        {selectedColor} Text
      </div>
    </div>
  );
}
