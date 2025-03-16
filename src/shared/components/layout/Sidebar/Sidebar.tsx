import React from 'react';
import styles from './Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export interface SponsorAd {
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
}

export interface SidebarProps {
  sponsors: SponsorAd[];
  title?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sponsors,
  title = 'Sponsors'
}) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.stickyContent}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.sponsorGrid}>
          {sponsors.map((sponsor, index) => (
            <Link 
              href={sponsor.link} 
              key={index}
              className={styles.sponsorCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.title}
                  width={200}
                  height={150}
                  objectFit="cover"
                />
              </div>
              <div className={styles.sponsorInfo}>
                <h3>{sponsor.title}</h3>
                {sponsor.description && (
                  <p>{sponsor.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.featuredSponsors}>
          <h3>Featured Sponsors</h3>
          <ul>
            <li>
              <Link href="/sponsors/warpath-coffee">
                Warpath Coffee - Premium Coffee for Patriots
              </Link>
            </li>
            <li>
              <Link href="/sponsors/my-pillow">
                My Pillow - Use Code WINTERS for 66% Off
              </Link>
            </li>
            <li>
              <Link href="/sponsors/sacred-human">
                Sacred Human Health - Natural Supplements
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.supportBanner}>
          <h3>Support Natalie's Work</h3>
          <p>No dark money or Soros-linked groups fund this work. Support independent journalism!</p>
          <Link href="/support" className={styles.supportButton}>
            Buy Natalie a Coffee
          </Link>
        </div>
      </div>
    </aside>
  );
}; 