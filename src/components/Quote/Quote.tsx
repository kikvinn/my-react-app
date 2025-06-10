import React from 'react';
import styles from './Quote.module.css';
import maskImage from '/images/mask.png';
import avatarImage from '/images/avatar.png';

const Quote: React.FC = () => (
  <section className={styles.quote}>
    <div className={styles.content}>
      <img src={maskImage} alt="Quote Icon" className={styles.icon} />
      <div className={styles.author}>
        <img src={avatarImage} alt="Zhao Cui" className={styles.photo} />
        <blockquote className={styles.text}>
          <p>Creating an Online Presence is Hard.</p>
          <p>Jobly Makes it Easy for Recruiters to See You.</p>
        </blockquote>
        <p className={styles.name}>Zhao Cui</p>
        <span className={styles.title}>Founder at Jobly.co</span>
      </div>
    </div>
  </section>
);

export default Quote;
