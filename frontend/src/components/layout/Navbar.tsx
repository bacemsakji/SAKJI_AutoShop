import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoPrimary}>SAKJI</span>
          <span className={styles.logoSecondary}>AutoShop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
          <Link to="/services" className={location.pathname === '/services' ? styles.active : ''}>Services</Link>
          <Link to="/appointments" className={location.pathname === '/appointments' ? styles.active : ''}>Book Appointment</Link>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.navActions}>
          <Link to="/appointments" className={styles.ctaWrapper}>
            <Button variant="primary">Book Now</Button>
          </Link>

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
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/appointments">Book Appointment</Link>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
