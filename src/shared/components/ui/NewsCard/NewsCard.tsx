import React from 'react';
import styles from './NewsCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceholderImage } from '../PlaceholderImage/PlaceholderImage';

export interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl?: string;
  category: string;
  date: string;
  author: string;
  slug: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  imageUrl,
  category,
  date,
  author,
  slug
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={225}
            layout="responsive"
            objectFit="cover"
          />
        ) : (
          <PlaceholderImage
            width={400}
            height={225}
            text={category}
            backgroundColor="#1a1a1a"
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <h2 className={styles.title}>
          <Link href={`/news/${slug}`}>
            {title}
          </Link>
        </h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.author}>By {author}</span>
          <Link href={`/news/${slug}`} className={styles.readMore}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}; 