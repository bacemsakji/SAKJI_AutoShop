import React from 'react';
import styles from './Parts.module.css';

const Parts: React.FC = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.comingSoonContainer}>
        <div className={styles.comingSoonIcon}>🔧</div>
        <h1 className={styles.comingSoonTitle}>Coming Soon</h1>
        <p className={styles.comingSoonText}>Our parts catalogue is currently being updated. Check back soon!</p>
      </div>
    </div>
  );
};

export default Parts;
