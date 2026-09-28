import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Check, ShoppingBag, Info, ShieldAlert } from 'lucide-react';
import wholeImg from '../assets/images/product_whole.png';
import powderImg from '../assets/images/product_powder.png';
import giftImg from '../assets/images/product_gift.png';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [productStates, setProductStates] = useState({
    whole: { size: '250g', price: '₹450' },
    powder: { size: '100g', price: '₹220' }
  });

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleSizeChange = (product, size, price) => {
    setProductStates((prev) => ({
      ...prev,
      [product]: { size, price }
    }));
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'whole', name: 'Whole Pods' },
    { id: 'powder', name: 'Powder' },
    { id: 'gifting', name: 'Gifting Packs' },
    { id: 'bulk', name: 'Bulk / Export' }
  ];

  const productsData = [
    {
      id: 'whole-pods',
      category: 'whole',
      image: wholeImg,
      name: 'Whole Green Cardamom (Jumbo 8mm+)',
      tag: 'Best Seller',
      desc: 'Selected hand-picked green pods containing rich natural volatile oils. Intact pod skin locks in full aroma and flavour.',
      grades: '8mm+ Bold Grading, Moisture < 12%',
      sizes: [
        { label: '50g', price: '₹120' },
        { label: '100g', price: '₹210' },
        { label: '250g', price: '₹450' },
        { label: '1kg', price: '₹1,750' }
      ],
      type: 'retail',
      amazonLink: 'https://amazon.in',
      flipkartLink: 'https://flipkart.com'
    },
    {
      id: 'powder',
      category: 'powder',
      image: powderImg,
      name: 'Fresh Ground Cardamom Powder',
      tag: '100% Pure',
      desc: 'Cold-processed grinding ensures that delicate volatile flavor compounds are preserved. No fillers, coloring, or starch added.',
      grades: 'Fine Mesh, Pure Decorticated Seeds',
      sizes: [
        { label: '50g', price: '₹130' },
        { label: '100g', price: '₹220' },
        { label: '250g', price: '₹490' }
      ],
      type: 'retail',
      amazonLink: 'https://amazon.in',
      flipkartLink: 'https://flipkart.com'
    },
    {
      id: 'gifting',
      category: 'gifting',
      image: giftImg,
      name: 'The Heritage Luxury Gift Box',
      tag: 'Festive & Corporate',
      desc: 'A premium rigid cardboard box containing a selection of our finest whole pods and premium ground cardamom. Perfect for gifting.',
      grades: 'Matte Black / Gold Foil Finish',
      customizable: true,
      price: '₹1,200',
      type: 'gifting',
      amazonLink: 'https://amazon.in',
      flipkartLink: 'https://flipkart.com'
    },
    {
      id: 'bulk-sacks',
      category: 'bulk',
      image: wholeImg, // re-use whole cardamom image
      name: 'Bulk Cardamom Export Sacks',
      tag: 'B2B Wholesale',
      desc: 'High-grade cardamom packed in jute bags or customized food-grade vacuum pouches. Ideal for international importers and distributors.',
      grades: 'Export Quality (AGB/AGEB Graded)',
      moq: 'Minimum Order: 100 kg',
      type: 'bulk'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="products-banner">
        <div className="banner-overlay"></div>
        <div className="container banner-content animate-fade-in-up">
          <span className="banner-pretitle">Premium Collection</span>
          <h1 className="banner-title text-gradient-gold">Choose Your Grade</h1>
          <p className="banner-subtitle">
            Grown in the highlands of Kerala, sorted by size and color, and packaged to preserve pure volatile oil content.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="section catalog-section luxury-bg-gradient">
        <div className="container">
          {/* Category Tabs */}
          <div className="tabs-container reveal">
            {categories.map((c) => (
              <button 
                key={c.id} 
                onClick={() => setSelectedCategory(c.id)} 
                className={`tab-btn ${selectedCategory === c.id ? 'active' : ''}`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="catalog-grid">
            {filteredProducts.map((p) => {
              const isRetail = p.type === 'retail';
              const isGifting = p.type === 'gifting';
              const currentState = productStates[p.id === 'whole-pods' ? 'whole' : 'powder'];

              return (
                <div key={p.id} className="catalog-item glass-card reveal">
                  <div className="item-img-wrapper">
                    <img src={p.image} alt={p.name} className="item-img" />
                    <span className="item-tag">{p.tag}</span>
                  </div>

                  <div className="item-details">
                    <h3 className="item-name">{p.name}</h3>
                    <p className="item-desc">{p.desc}</p>
                    
                    <div className="item-specs-box">
                      <span className="specs-title">Specifications:</span>
                      <span className="specs-value">{p.grades}</span>
                      {p.moq && <span className="specs-moq text-gold" style={{ display: 'block', marginTop: '0.25rem' }}>{p.moq}</span>}
                    </div>

                    {isRetail && (
                      <div className="size-selector-block">
                        <span className="selector-title">Select Pack Weight:</span>
                        <div className="size-btns">
                          {p.sizes.map((s) => (
                            <button
                              key={s.label}
                              onClick={() => handleSizeChange(p.id === 'whole-pods' ? 'whole' : 'powder', s.label, s.price)}
                              className={`size-btn ${currentState.size === s.label ? 'active' : ''}`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="item-price-row">
                      <span className="price-label">Estimated Pricing:</span>
                      <span className="price-value text-gold">
                        {isRetail ? currentState.price : isGifting ? p.price : 'Custom Quote'}
                      </span>
                    </div>

                    {/* Purchase CTAs */}
                    {p.type !== 'bulk' ? (
                      <div className="purchase-buttons">
                        <a 
                          href={p.amazonLink} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn btn-primary buy-btn"
                        >
                          Buy on Amazon <ExternalLink size={14} style={{ marginLeft: '6px' }} />
                        </a>
                        <a 
                          href={p.flipkartLink} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn btn-secondary buy-btn"
                        >
                          Buy on Flipkart <ExternalLink size={14} style={{ marginLeft: '6px' }} />
                        </a>
                      </div>
                    ) : (
                      <div className="purchase-buttons">
                        <Link to="/export" className="btn btn-primary buy-btn" style={{ width: '100%' }}>
                          Request Export Inquiry
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guarantee Seals */}
          <div className="guarantees-bar glass-card reveal">
            <div className="guarantee-item">
              <Check size={18} className="g-icon" />
              <span>Organic Certified (NPOP Standards)</span>
            </div>
            <div className="guarantee-item">
              <Check size={18} className="g-icon" />
              <span>Lab Verified Pure (No Colouring)</span>
            </div>
            <div className="guarantee-item">
              <Check size={18} className="g-icon" />
              <span>Moisture Lock Heat-Sealed Pouches</span>
            </div>
            <div className="guarantee-item">
              <Check size={18} className="g-icon" />
              <span>Generational Farm Traceability</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Banner */
        .products-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .products-banner .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 860px;
        }

        .banner-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .banner-pretitle::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--matte-gold);
        }

        .banner-title {
          font-family: 'Cormorant Garamond', Garamond, serif;
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .banner-subtitle {
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
          max-width: 760px;
        }

        /* Tabs */
        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: transparent;
          border: 1px solid rgba(201, 168, 76, 0.15);
          color: rgba(250, 247, 240, 0.7);
          padding: 0.75rem 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover, .tab-btn.active {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
          background: rgba(201, 168, 76, 0.05);
        }

        /* Catalog Grid */
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-bottom: 6rem;
        }

        @media (max-width: 900px) {
          .catalog-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .catalog-item {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .item-img-wrapper {
          aspect-ratio: 16/10;
          overflow: hidden;
          position: relative;
          background-color: #121212;
          border-bottom: 1px solid rgba(201, 168, 76, 0.1);
        }

        .item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-tag {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: var(--matte-gold);
          color: var(--warm-black);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.3rem 0.75rem;
        }

        .item-details {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .item-name {
          font-size: var(--font-2xl);
          margin-bottom: 1rem;
        }

        .item-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .item-specs-box {
          background: rgba(27, 67, 50, 0.15);
          border: 1px solid rgba(201, 168, 76, 0.1);
          padding: 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.8rem;
        }

        .specs-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: var(--text-muted);
          margin-right: 0.5rem;
        }

        .specs-value {
          color: var(--cream-white);
        }

        /* Size Selectors */
        .size-selector-block {
          margin-bottom: 1.5rem;
        }

        .selector-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
        }

        .size-btns {
          display: flex;
          gap: 0.5rem;
        }

        .size-btn {
          background: transparent;
          border: 1px solid rgba(250, 247, 240, 0.1);
          color: var(--text-muted);
          width: 50px;
          height: 35px;
          font-size: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .size-btn:hover, .size-btn.active {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
          background: rgba(201, 168, 76, 0.05);
        }

        .item-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 1.5rem;
          margin-bottom: 2rem;
        }

        .price-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .price-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-3xl);
        }

        .purchase-buttons {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .buy-btn {
          flex: 1;
          font-size: 0.65rem;
          padding: 0.75rem 1rem;
        }

        /* Guarantees Bar */
        .guarantees-bar {
          display: flex;
          justify-content: space-around;
          padding: 2.5rem;
          margin-top: 4rem;
          flex-wrap: wrap;
          gap: 2rem;
          border-left: 2px solid var(--matte-gold);
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .g-icon {
          color: var(--matte-gold);
        }
      `}</style>
    </div>
  );
}
