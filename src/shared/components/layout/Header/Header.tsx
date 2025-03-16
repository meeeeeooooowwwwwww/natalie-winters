import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface HeaderProps {
  siteTitle: string;
}

const mainMenu: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Videos',
    href: '/videos',
    children: [
      { label: 'Natalie Winters Videos', href: '/videos/natalie-winters' },
      { label: 'Bannon Warroom Videos', href: '/videos/warroom' }
    ]
  },
  {
    label: 'News',
    href: '/news',
    children: [
      {
        label: 'White House News',
        href: '/news/white-house',
        children: [
          { label: 'Fact Sheets', href: '/news/white-house/fact-sheets' },
          { label: 'Justice', href: '/news/white-house/justice' },
          { label: 'Presidential Actions', href: '/news/white-house/actions' },
          { label: 'DOGE Savings', href: '/news/white-house/doge' },
          { label: 'Articles', href: '/news/white-house/articles' }
        ]
      },
      {
        label: 'Warroom News',
        href: '/news/warroom',
        children: [
          { label: 'Shows & Broadcasts', href: '/news/warroom/shows' },
          { label: 'Transhumanism', href: '/news/warroom/transhumanism' },
          { label: 'MAGA Nation', href: '/news/warroom/maga' },
          { label: 'Economy', href: '/news/warroom/economy' },
          { label: 'Politics', href: '/news/warroom/politics' }
        ]
      }
    ]
  },
  {
    label: 'Latest Posts',
    href: '/posts',
    children: [
      { label: 'President Trump', href: '/posts/trump' },
      { label: 'Steve Bannon', href: '/posts/bannon' },
      { label: 'Natalie Winters', href: '/posts/winters' },
      { label: 'Elon Musk', href: '/posts/musk' }
    ]
  },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: '9/11 Files', href: '/911-files' }
];

const SubMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => (
  <ul className={styles.submenu}>
    {items.map((item) => (
      <li key={item.href}>
        <Link href={item.href}>
          {item.label}
        </Link>
        {item.children && <SubMenu items={item.children} />}
      </li>
    ))}
  </ul>
);

export const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>{siteTitle}</h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.mainMenu}>
          {mainMenu.map((item) => (
            <li key={item.href} className={styles.menuItem}>
              <Link href={item.href}>
                {item.label}
              </Link>
              {item.children && <SubMenu items={item.children} />}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}; 