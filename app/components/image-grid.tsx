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


export default ImageCard;