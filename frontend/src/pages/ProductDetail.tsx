import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './Parts.module.css';
import { getParts, Part } from '../data/parts';
import { useLanguage } from '../context/LanguageContext';
import partPlaceholder from '../assets/part_placeholder.png';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const part = getParts().find(p => p.id === id);

  if (!part) {
    return (
      <div className={`container ${styles.container}`}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🔍</div>
          <h3>{t('parts_empty_title')}</h3>
          <p>{t('parts_empty_desc')}</p>
          <button 
            className={styles.emptyResetBtn}
            onClick={() => navigate('/parts')}
          >
            {t('parts_empty_btn')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.productDetailContainer}>
        <button onClick={() => navigate('/parts')} className={styles.backBtn}>
          {t('detail_back')}
        </button>

        <div className={styles.productDetailLayout}>
          {/* Product Image Panel */}
          <div className={styles.imagePanel}>
            <img src={partPlaceholder} alt={part.name} className={styles.productImg} />
          </div>

          {/* Product Info Panel */}
          <div className={styles.infoPanel}>
            <span className={styles.detailCategory}>{part.category}</span>
            <h1 className={styles.detailTitle}>{part.name}</h1>
            
            <div className={styles.priceContainer}>
              <span className={styles.detailPriceLabel}>{t('detail_unit_price')}</span>
              <span className={styles.detailPriceValue}>{part.price} TND</span>
            </div>

            <div className={styles.specsWrapper}>
              <h3>{t('detail_specifications')}</h3>
              <div className={styles.specsGrid}>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>{t('detail_part_number')}</span>
                  <span className={styles.specValue}><code>{part.oemNumber}</code></span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>{t('detail_brand')}</span>
                  <span className={styles.specValue}>{part.brand}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>{t('detail_manufacturer')}</span>
                  <span className={styles.specValue}>{part.manufacturer}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>{t('detail_condition')}</span>
                  <span className={`${styles.specValue} ${styles.newCondition}`}>{t('parts_condition_new')}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>{t('detail_category')}</span>
                  <span className={styles.specValue}>{part.category}</span>
                </div>
                {part.yearRange !== 'Universal' && (
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>{t('detail_year_range')}</span>
                    <span className={styles.specValue}>{part.yearRange}</span>
                  </div>
                )}
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>{t('detail_stock_qty')}</span>
                  <span className={styles.specValue}>{part.stock}</span>
                </div>
              </div>
            </div>

            {/* Order Info Panel */}
            <div className={styles.orderInstructionsBox}>
              <h4>{t('detail_order_instructions')}</h4>
              <p>{t('detail_order_desc')}</p>
              <div className={styles.orderCtas}>
                <a 
                  href="https://www.google.com/maps/place/RJCR%2BM9G,+Rue+de+l'Abreuvoir,+Sousse/@35.8214893,10.6411668,97m/data=!3m1!1e3!4m6!3m5!1s0x1302756d4170e21f:0xf8a4cffecb154492!8m2!3d35.8216288!4d10.64097!16s%2Fg%2F11jr6sq516?entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.visitCtaBtn}
                >
                  {t('detail_visit_shop')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
