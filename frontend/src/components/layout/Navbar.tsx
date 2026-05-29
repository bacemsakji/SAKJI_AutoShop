import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <img src={logoImg} alt="STE SAKJI AutoShop" className={styles.logoImg} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link to="/"        className={isActive('/')         ? styles.active : ''}>{t('nav_home')}</Link>
          <Link to="/parts"    className={isActive('/parts')    ? styles.active : ''}>{t('nav_parts')}</Link>
          <a href="#contact-footer">{t('nav_contact')}</a>
        </nav>

        <div className={styles.navActions}>
          <div className={styles.langSelector}>
            <button onClick={() => setLanguage('en')} className={`${styles.langBtn} ${language === 'en' ? styles.langActive : ''}`}>EN</button>
            <button onClick={() => setLanguage('fr')} className={`${styles.langBtn} ${language === 'fr' ? styles.langActive : ''}`}>FR</button>
            <button onClick={() => setLanguage('ar')} className={`${styles.langBtn} ${language === 'ar' ? styles.langActive : ''}`}>عربي</button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <nav>
          <Link to="/">{t('nav_home')}</Link>
          <Link to="/parts">{t('nav_parts')}</Link>
          <a href="#contact-footer">{t('nav_contact')}</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

