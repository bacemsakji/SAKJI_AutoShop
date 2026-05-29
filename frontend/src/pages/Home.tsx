import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../components/ui/Button';
import { getTestimonials, Testimonial } from '../api/testimonials';
import { getServices, Service } from '../api/services';

const Home: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [topServices, setTopServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tests, servs] = await Promise.all([
          getTestimonials(),
          getServices()
        ]);
        setTestimonials(tests.slice(0, 3)); // Only show top 3
        setTopServices(servs.slice(0, 4)); // Only show top 4 services
      } catch (err) {
        console.error('Failed to load home data', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            PRECISION ENGINEERING FOR YOUR <span>OPEL & FORD</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Specialized automotive repair and maintenance by certified experts. 
            We use advanced diagnostic tools to get you back on the road safely and quickly.
          </p>
          <div className={styles.heroActions}>
            <Link to="/appointments">
              <Button variant="primary">Book Appointment</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">View Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container">
        <div className={styles.sectionTitle}>
          <h2>Expert Services</h2>
          <p>From routine maintenance to complex engine repairs, we handle it all with industrial precision.</p>
        </div>
        <div className={styles.servicesGrid}>
          {topServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>{service.name}</h3>
              <p>{service.shortDescription}</p>
              <Link to={`/appointments?serviceId=${service.id}`}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: 'var(--text-sm)' }}>Book Now →</span>
              </Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/services">
            <Button variant="ghost">View All Services</Button>
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whyUsSection}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>Why Choose SAKJI</h2>
            <p>We are committed to excellence, transparency, and the highest standards of automotive care.</p>
          </div>
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsCard}>
              <h3><span>01</span> Certified Experts</h3>
              <p>Our mechanics are specialized in Opel and Ford architectures, ensuring accurate diagnostics and flawless repairs.</p>
            </div>
            <div className={styles.whyUsCard}>
              <h3><span>02</span> Original Parts</h3>
              <p>We use only OEM or highest-grade aftermarket parts to guarantee the longevity and performance of your vehicle.</p>
            </div>
            <div className={styles.whyUsCard}>
              <h3><span>03</span> Transparent Pricing</h3>
              <p>No hidden fees. You get a clear, detailed breakdown of all costs before any work begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.sectionTitle}>
              <h2>Client Testimonials</h2>
              <p>Don't just take our word for it. Here's what our customers have to say.</p>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map(test => (
                <div key={test.id} className={styles.testimonialCard}>
                  <div className={styles.stars}>
                    {'★'.repeat(test.rating)}{'☆'.repeat(5 - test.rating)}
                  </div>
                  <p className={styles.comment}>"{test.comment}"</p>
                  <div className={styles.client}>
                    <div className={styles.clientAvatar}>
                      {test.clientName.charAt(0)}
                    </div>
                    <div className={styles.clientInfo}>
                      <h4>{test.clientName}</h4>
                      <p>{test.carModel || 'Customer'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
