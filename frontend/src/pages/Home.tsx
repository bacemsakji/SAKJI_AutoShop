import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>{t('hero_badge')}</div>
          <h1 className={styles.heroTitle}>
            {t('hero_title_prefix')} <span>{t('hero_title_parts')}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {t('hero_subtitle')}
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><span>100+</span><p>{t('hero_stat_parts')}</p></div>
            <div className={styles.heroStat}><span>8</span><p>{t('hero_stat_models')}</p></div>
            <div className={styles.heroStat}><span>100%</span><p>{t('hero_stat_quality')}</p></div>
          </div>
          <div className={styles.heroActions}>
            <Link to="/parts">
              <Button variant="primary">{t('hero_btn_browse')}</Button>
            </Link>
            <a href="#contact-footer">
              <Button variant="outline">{t('hero_btn_contact')}</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Brand Selection Showcase ── */}
      <section className={`${styles.brandsSection} container`}>
        <div className={styles.sectionTitle}>
          <h2>{t('brand_section_title')}</h2>
          <p>{t('brand_section_subtitle')}</p>
        </div>
        <div className={styles.brandsGrid}>
          <Link to="/parts?brand=Opel" className={`${styles.brandCard} ${styles.opelCard}`}>
            <div className={styles.brandLogoText}>OPEL</div>
            <h3>Opel Parts</h3>
            <p>{t('brand_opel_desc')}</p>
            <span className={styles.exploreLink}>{t('brand_explore_opel')}</span>
          </Link>
          <Link to="/parts?brand=Ford" className={`${styles.brandCard} ${styles.fordCard}`}>
            <div className={styles.brandLogoText}>FORD</div>
            <h3>Ford Parts</h3>
            <p>{t('brand_ford_desc')}</p>
            <span className={styles.exploreLink}>{t('brand_explore_ford')}</span>
          </Link>
        </div>
      </section>

      {/* ── Location / Contact Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBannerInner}>
            <div>
              <h2>{t('cta_title')}</h2>
              <p>{t('cta_subtitle')}</p>
            </div>
            <div className={styles.ctaBannerActions}>
              <a href="https://www.google.com/maps/place/RJCR%2BM9G,+Rue+de+l'Abreuvoir,+Sousse/@35.8214893,10.6411668,97m/data=!3m1!1e3!4m6!3m5!1s0x1302756d4170e21f:0xf8a4cffecb154492!8m2!3d35.8216288!4d10.64097!16s%2Fg%2F11jr6sq516?entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">{t('cta_btn_contact')}</Button>
              </a>
              <Link to="/parts">
                <Button variant="outline">{t('cta_btn_browse')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
