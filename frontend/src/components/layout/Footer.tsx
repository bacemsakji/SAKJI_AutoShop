import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} id="contact-footer">
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <img src={logoImg} alt="STE SAKJI AutoShop" className={styles.logoImg} />
          </div>
          <p className={styles.tagline}>
            {t('footer_tagline')}
          </p>
        </div>

        <div className={styles.linksCol}>
          <h3>{t('footer_quick_links')}</h3>
          <ul>
            <li><Link to="/">{t('nav_home')}</Link></li>
            <li><Link to="/parts">{t('nav_parts')}</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h3>{t('footer_contact_hours')}</h3>
          <p>{t('footer_address')}</p>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>+216 98 228 469</p>
          <table className={styles.hoursTable}>
            <tbody>
              <tr>
                <td>{t('hours_mon_fri')}</td>
                <td>08:00 – 18:00</td>
              </tr>
              <tr>
                <td>{t('hours_sat')}</td>
                <td>08:00 – 14:00</td>
              </tr>
              <tr>
                <td>{t('hours_sun')}</td>
                <td>{t('hours_closed')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

