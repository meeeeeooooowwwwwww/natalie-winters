import React from 'react';
import styles from './Layout.module.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Sidebar } from '../Sidebar/Sidebar';

export interface LayoutProps {
  children: React.ReactNode;
  siteTitle: string;
  sponsors: Array<{
    title: string;
    imageUrl: string;
    link: string;
    description?: string;
  }>;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
  };
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  siteTitle,
  sponsors,
  socialLinks
}) => {
  return (
    <div className={styles.layout}>
      <Header siteTitle={siteTitle} />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
        <Sidebar sponsors={sponsors} />
      </div>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}; 