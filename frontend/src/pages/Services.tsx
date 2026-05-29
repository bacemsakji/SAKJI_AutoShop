import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import { getServices, Service } from '../api/services';
import Button from '../components/ui/Button';

const CATEGORIES = ['All', 'Diagnostics', 'Engine', 'Brakes', 'Maintenance', 'AC'];

const ICONS: Record<string, string> = {
  engine: '🔧',
  brakes: '🛑',
  oil: '🛢️',
  ac: '❄️',
  diagnostic: '💻',
};

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const data = await getServices(activeCategory === 'All' ? undefined : activeCategory);
        setServices(data);
      } catch (err) {
        console.error('Failed to load services', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, [activeCategory]);

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.header}>
        <h1>Our Services</h1>
        <p>Expert automotive care tailored for your Opel and Ford vehicles. We use certified parts and advanced diagnostic tools.</p>
      </div>

      <div className={styles.filters}>
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--color-text-muted)' }}>
          Loading services...
        </div>
      ) : (
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{service.name}</h3>
                <div className={styles.icon}>
                  {service.iconName && ICONS[service.iconName] ? ICONS[service.iconName] : '⚙️'}
                </div>
              </div>
              <p className={styles.desc}>{service.description}</p>
              
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Price Range</span>
                  <span className={styles.metaValue}>
                    {service.priceMin} TND - {service.priceMax} TND
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Est. Time</span>
                  <span className={styles.metaValue}>
                    {service.estimatedHours} {service.estimatedHours === 1 ? 'hour' : 'hours'}
                  </span>
                </div>
              </div>

              <Link to={`/appointments?serviceId=${service.id}`} style={{ width: '100%' }}>
                <Button variant="outline" fullWidth>Book Now</Button>
              </Link>
            </div>
          ))}
          {services.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--color-text-muted)', padding: '48px 0' }}>
              No services found for this category.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
