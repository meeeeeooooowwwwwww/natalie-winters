import React from 'react';
import styles from './PlaceholderImage.module.css';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width,
  height,
  text = 'Placeholder',
  backgroundColor = '#1a1a1a',
  textColor = '#ffffff'
}) => {
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="16" 
        fill="${textColor}" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `;

  const base64Image = Buffer.from(svgContent).toString('base64');
  const dataUrl = `data:image/svg+xml;base64,${base64Image}`;

  return (
    <div 
      className={styles.placeholder}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${dataUrl})`,
        backgroundSize: 'cover'
      }}
    />
  );
}; 