import React from 'react';

import styles from './Navigation.module.css';

const Navigation = ({ links }) => (
  <div className={styles['navigation']}>
    <ul className={styles['navigation-list']}>
      {links.map(link => (
        <li key={link.to} className={styles['navigation-list-item']}>
          <a
            className={styles['navigation-list-item-anchor']}
            href={link.to}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
