import React from 'react';
import styles from './VideoCard.module.css';
import Image from 'next/image';
import { PlaceholderImage } from '../PlaceholderImage/PlaceholderImage';

export interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl?: string;
  videoUrl: string;
  date: string;
  duration?: string;
  views?: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  date,
  duration,
  views
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            width={320}
            height={180}
            layout="responsive"
          />
        ) : (
          <PlaceholderImage
            width={320}
            height={180}
            text={title}
            backgroundColor="#1a1a1a"
          />
        )}
        {duration && <span className={styles.duration}>{duration}</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <a href={videoUrl}>{title}</a>
        </h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <span className={styles.date}>{date}</span>
          {views && <span className={styles.views}>{views.toLocaleString()} views</span>}
        </div>
      </div>
    </div>
  );
}; 