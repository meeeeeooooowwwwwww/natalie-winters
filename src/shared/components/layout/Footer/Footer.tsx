import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export interface FooterProps {
  socialLinks?: {
    twitter?: string;
    instagram?: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.section}>
          <h3>Info</h3>
          <ul>
            <li><Link href="/revolver-news">Revolver News - Darren J. Beattie</Link></li>
            <li><Link href="/joe-bot">Joe Bot XYZ - Joe Allen</Link></li>
            <li><Link href="/article-three">The Article III Project - Mike Davis</Link></li>
            <li><Link href="/natalie-winters">Natalie Gee Winters - OMGEE</Link></li>
          </ul>
        </div>
        
        <div className={styles.section}>
          <h3>Sponsors</h3>
          <ul>
            <li><Link href="/sponsors/warpath-coffee">Warpath Coffee</Link></li>
            <li><Link href="/sponsors/my-pillow">My Pillow</Link></li>
            <li><Link href="/sponsors/sacred-human">Sacred Human Health</Link></li>
            <li><Link href="/sponsors/meriwether">Meriwether Farms</Link></li>
            <li><Link href="/sponsors/she-so-right">She So Right</Link></li>
            <li><Link href="/sponsors/stand-with-bannon">Stand With Bannon</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/advertise">Advertising Options</Link></li>
            <li><Link href="/warroom-shows">Warroom Shows</Link></li>
            <li><Link href="/warroom-news">Warroom News</Link></li>
            <li><Link href="/images">Natalie Winters Images</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Follow Natalie Winters</h3>
          <div className={styles.social}>
            {socialLinks?.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
            {socialLinks?.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
            <p>Follow @NatalieGWinters on all platforms & buy her a coffee.</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© America First New Zealand</p>
        <p>Web Design: meeeeeooooowwwwwww</p>
        <Link href="/sitemap">Natalie Winters Sitemap</Link>
      </div>
    </footer>
  );
}; 