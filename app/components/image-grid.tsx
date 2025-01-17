"use client"
import React, { useState } from 'react';

// Standalone Image Card component
const ImageCard = ({ 
  src, 
  alt, 
  text, 
  width,
  className = "" 
}) => {
  const [isActive, setIsActive] = useState(false);
  
  const style = width ? { width: typeof width === 'number' ? `${width}px` : width } : {};

  return (
    <div 
      className={`relative rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-102 group ${className}`}
      onClick={() => setIsActive(!isActive)}
      style={style}
    >
      <div className="w-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
        />
      </div>
      {/* Desktop hover overlay */}
      <div className="absolute inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-95 transition-opacity duration-200 hidden sm:flex">
        <p className="text-gray-800 text-center">{text}</p>
      </div>
      {/* Mobile click overlay */}
      <div className={`absolute inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center p-4 transition-opacity duration-200 sm:hidden
        ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-gray-800 text-center">{text}</p>
      </div>
    </div>
  );
};

// Grid component using ImageCard
const ImageCardGrid = ({ 
  cards = [], 
  cardsPerRow = 3,
  width,
  className = ""
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const safeCards = Array.isArray(cards) ? cards : [];
  
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  };

  const handleCardClick = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  const gridClassName = gridCols[cardsPerRow] || gridCols[3];
  const style = width ? { width: typeof width === 'number' ? `${width}px` : width } : {};

  if (safeCards.length === 0) {
    return null;
  }

  return (
    <div 
      className={`grid ${gridClassName} gap-8 ${className}`}
      style={style}
    >
      {safeCards.map((card, index) => (
        <ImageCard
          key={index}
          {...card}
          isActive={activeCardIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export { ImageCard, ImageCardGrid };
export default ImageCardGrid;