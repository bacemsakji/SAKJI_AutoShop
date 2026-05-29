import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoPrimary}>SAKJI</span>
            <span className={styles.logoSecondary}>AutoShop</span>
          </div>
          <p className={styles.tagline}>
            Professional automotive repair and maintenance. Your car, our expertise.
          </p>
        </div>
        
        <div className={styles.linksCol}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/appointments">Book Appointment</a></li>
          </ul>
        </div>
        
        <div className={styles.contactCol}>
          <h3>Contact & Hours</h3>
          <p>123 Auto Avenue, Industrial Zone</p>
          <p>+216 70 123 456</p>
          <table className={styles.hoursTable}>
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>08:00 - 18:00</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>08:00 - 14:00</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SAKJI AutoShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
