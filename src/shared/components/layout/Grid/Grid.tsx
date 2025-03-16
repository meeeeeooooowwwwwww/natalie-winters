import React from 'react';
import styles from './Grid.module.css';

export interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = 'medium'
}) => {
  return (
    <div 
      className={`${styles.grid} ${styles[`columns${columns}`]} ${styles[`gap${gap}`]}`}
    >
      {children}
    </div>
  );
}; 