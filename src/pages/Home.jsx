import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Award, ShieldCheck, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import ParallaxCardamom from '../components/ParallaxCardamom';
import heroImg from '../assets/images/hero_plantation.png';
import wholeCardamom from '../assets/images/product_whole.png';
import powderCardamom from '../assets/images/product_powder.png';
import giftCardamom from '../assets/images/product_gift.png';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Finding single-origin Idukki cardamom of this grading has been nearly impossible in Dubai. The aroma of Cardapure is intense and instantly takes me back home. Truly premium quality.",
      author: "Farhaan Al-Mansoori",
      role: "Specialty Food Importer, Dubai",
      stars: 5
    },
    {
      quote: "We use Cardapure's whole pods in our artisanal pastry kitchen. The grading is impeccable—every pod is plump, bright green, and bursting with oils. Our customers notice the difference.",
      author: "Chef Anjali Nair",
      role: "Executive Pastry Chef, Mumbai",
      stars: 5
    },
    {
      quote: "The rigid gift box is absolutely gorgeous. I ordered 50 boxes for corporate gifting during Diwali, and the feedback was phenomenal. It's a luxury product at an honest price.",
      author: "Vikram R. Shah",
      role: "Managing Director, Tech Solutions",
      stars: 5
    }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal effect
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
    revealOnScroll(); // Run once initially
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
        <ParallaxCardamom />
        <div className="container hero-container">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-subtitle">Single-Origin Premium Spices</span>
            <h1 className="hero-title text-gradient-gold">The World's Finest.<br />From Where It Begins.</h1>
            <p className="hero-desc">
              Directly from the high-altitude, mist-covered hills of Idukki, Kerala. Farm-to-kitchen cardamom of matchless grade, aroma, and purity.
            </p>
            <div className="hero-ctas">
              <Link to="/products" className="btn btn-primary pulse-gold">
                Shop Collection
              </Link>
              <Link to="/export" className="btn btn-secondary">
                Export Enquiry <ArrowRight size={14} style={{ marginLeft: '6px' }} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span className="scroll-text">Discover Cardapure</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Brand Intro / Philosophy */}
      <section className="section intro-section luxury-bg-gradient">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text-block reveal">
              <span className="section-pretitle">The Cardapure Promise</span>
              <h2 className="section-title">Generations of Green, Delivered Pure.</h2>
              <p className="intro-p-large">
                We believe that premium quality shouldn't be a gatekept luxury. In the hills of Idukki, nature perfects every cardamom pod. We simply ensure it reaches you untouched, unsullied, and fresh.
              </p>
              <p className="font-script intro-script">
                "From our farm to your kitchen — nothing in between."
              </p>
              <Link to="/about" className="btn btn-secondary intro-btn">
                Our Sourcing Story
              </Link>
            </div>
            
            <div className="intro-info-card glass-card reveal">
              <h3 className="card-title text-gold">Why Idukki?</h3>
              <p className="card-text">
                Idukki is to cardamom what Champagne is to sparkling wine. Nestled 1,200 meters above sea level in the Western Ghats, the cool climate, rich forest soil, and persistent mountain mist provide the perfect cradle for cardamom containing the world's highest concentration of natural essential oils.
              </p>
              <ul className="card-features">
                <li><span>✦ High Essential Oil Content</span></li>
                <li><span>✦ Deep, Vibrant Green Pods</span></li>
                <li><span>✦ Hand-selected 8mm+ Jumbo Grade</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-pretitle">Our Collection</span>
            <h2 className="section-title text-center">Pure Cardamom Variants</h2>
            <div className="section-divider"></div>
          </div>

          <div className="products-grid">
            {/* Whole Cardamom */}
            <div className="product-card glass-card reveal">
              <div className="product-img-wrapper">
                <img src={wholeCardamom} alt="Whole Green Cardamom" className="product-img" />
              </div>
              <div className="product-info">
                <span className="product-tag">Best Seller</span>
                <h3 className="product-name">Whole Green Cardamom</h3>
                <p className="product-desc">
                  Meticulously sorted, jumbo-sized 8mm pods with high oil concentration and intense fresh aroma.
                </p>
                <div className="product-meta">
                  <span className="product-specs">Sizes: 50g, 100g, 250g, 1kg</span>
                </div>
                <Link to="/products" className="btn btn-secondary product-btn">
                  View Packaging
                </Link>
              </div>
            </div>

            {/* Ground Powder */}
            <div className="product-card glass-card reveal">
              <div className="product-img-wrapper">
                <img src={powderCardamom} alt="Cardamom Powder" className="product-img" />
              </div>
              <div className="product-info">
                <span className="product-tag">100% Pure</span>
                <h3 className="product-name">Fresh Ground Cardamom</h3>
                <p className="product-desc">
                  Freshly milled from seed-rich pods. Cold-processed to preserve the volatile oils and aromatic profile.
                </p>
                <div className="product-meta">
                  <span className="product-specs">Sizes: 50g, 100g, 250g</span>
                </div>
                <Link to="/products" className="btn btn-secondary product-btn">
                  View Details
                </Link>
              </div>
            </div>

            {/* Gift Packs */}
            <div className="product-card glass-card reveal">
              <div className="product-img-wrapper">
                <img src={giftCardamom} alt="Luxury Gift Box" className="product-img" />
              </div>
              <div className="product-info">
                <span className="product-tag">Gifting</span>
                <h3 className="product-name">The Heritage Rigid Gift Box</h3>
                <p className="product-desc">
                  A beautiful matte-finish gold foil rigid box, containing premium assortments. Perfect for celebrations and corporate gifting.
                </p>
                <div className="product-meta">
                  <span className="product-specs">Custom Engraving Available</span>
                </div>
                <Link to="/products" className="btn btn-secondary product-btn">
                  Explore Gifting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cardapure Pillars */}
      <section className="section pillars-section luxury-bg-gradient">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-pretitle">The Four Pillars</span>
            <h2 className="section-title">Built on Trust, Not Promises</h2>
            <div className="section-divider"></div>
          </div>

          <div className="pillars-grid">
            <div className="pillar-item reveal">
              <div className="pillar-icon-wrapper">
                <Leaf size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Idukki Origin</h3>
              <p className="pillar-desc">
                Not a commodity, but a single-origin geographical promise. Every single pod is tracked back to its estate.
              </p>
            </div>

            <div className="pillar-item reveal">
              <div className="pillar-icon-wrapper">
                <ShieldCheck size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Absolute Purity</h3>
              <p className="pillar-desc">
                No chemical colouring, artificial aroma enhancers, or moisture inflating. Certified organic and lab tested.
              </p>
            </div>

            <div className="pillar-item reveal">
              <div className="pillar-icon-wrapper">
                <Award size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Generational Craft</h3>
              <p className="pillar-desc">
                Our sorting, washing, and temperature-sensitive drying is a legacy skill passed down through the family.
              </p>
            </div>

            <div className="pillar-item reveal">
              <div className="pillar-icon-wrapper">
                <Truck size={24} className="pillar-icon" />
              </div>
              <h3 className="pillar-title">Direct Sourcing</h3>
              <p className="pillar-desc">
                From our own plantations and closely knitted fellow growers. Eliminating middlemen keeps pricing fair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-pretitle">Client Trust</span>
            <h2 className="section-title text-center">What Connoisseurs Say</h2>
            <div className="section-divider"></div>
          </div>

          <div className="testimonial-slider-container glass-card reveal">
            <div className="testimonial-slider">
              {testimonials.map((t, idx) => (
                <div key={idx} className={`testimonial-slide ${idx === activeTestimonial ? 'active' : ''}`}>
                  <div className="star-rating">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--matte-gold)" color="var(--matte-gold)" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <div className="testimonial-author">
                    <span className="author-name">{t.author}</span>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button onClick={handlePrevTestimonial} className="slider-btn" aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <div className="slider-dots">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveTestimonial(idx)} 
                    className={`slider-dot ${idx === activeTestimonial ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button onClick={handleNextTestimonial} className="slider-btn" aria-label="Next review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Export CTA Banner */}
      <section className="export-cta-banner">
        <div className="banner-overlay"></div>
        <div className="container banner-container reveal">
          <span className="banner-subtitle">B2B & Global Trade</span>
          <h2 className="banner-title font-brand">Supplying to Dubai, Bahrain & Europe</h2>
          <p className="banner-desc">
            We are fully certified for international exports. We offer customized bulk packaging, laboratory-verified quality sheets, and direct-from-origin logistics support.
          </p>
          <div className="banner-ctas">
            <Link to="/export" className="btn btn-primary">
              Send Export Enquiry
            </Link>
            <a href="https://wa.me/919400000000" target="_blank" rel="noreferrer" className="btn btn-secondary">
              WhatsApp Wholesale
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .hero-section {
          height: 100vh;
          width: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, 
            rgba(13, 13, 13, 0.6) 0%, 
            rgba(13, 13, 13, 0.8) 60%, 
            rgba(13, 13, 13, 1) 100%);
        }

        .hero-container {
          position: relative;
          z-index: 20;
        }

        .hero-content {
          max-width: 700px;
        }

        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--matte-gold);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: var(--font-6xl);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-4xl);
          }
        }

        .hero-desc {
          font-size: var(--font-lg);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero-desc {
            font-size: var(--font-base);
          }
        }

        .hero-ctas {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .hero-ctas {
            flex-direction: column;
            gap: 1rem;
          }
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.6;
        }

        .scroll-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--text-muted);
        }

        .scroll-line {
          height: 50px;
          width: 1px;
          background: linear-gradient(180deg, var(--matte-gold) 0%, rgba(201, 168, 76, 0) 100%);
        }

        /* Intro Section */
        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .section-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--matte-gold);
          display: block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: var(--font-4xl);
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .intro-p-large {
          font-size: var(--font-lg);
          color: var(--text-muted);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .intro-script {
          margin-bottom: 2.5rem;
        }

        .intro-info-card {
          padding: 3rem;
          border-left: 2px solid var(--matte-gold);
        }

        @media (max-width: 480px) {
          .intro-info-card {
            padding: 1.75rem;
          }
        }

        .card-title {
          font-size: var(--font-2xl);
          margin-bottom: 1.5rem;
        }

        .card-text {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .card-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-features li {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }

        .product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .product-img-wrapper {
          aspect-ratio: 4/3;
          width: 100%;
          overflow: hidden;
          position: relative;
          background-color: #121212;
          border-bottom: 1px solid rgba(201, 168, 76, 0.1);
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--matte-gold);
          margin-bottom: 0.75rem;
        }

        .product-name {
          font-size: var(--font-xl);
          margin-bottom: 1rem;
        }

        .product-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .product-meta {
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .product-specs {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.05em;
        }

        .product-btn {
          width: 100%;
        }

        /* Pillars Section */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 500px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-item {
          text-align: center;
          padding: 1.5rem;
        }

        .pillar-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(201, 168, 76, 0.05);
          border: 1px solid var(--border-color);
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .pillar-item:hover .pillar-icon-wrapper {
          background: var(--matte-gold);
          border-color: var(--matte-gold);
          transform: rotate(45deg);
        }

        .pillar-item:hover .pillar-icon {
          color: var(--warm-black);
          transform: rotate(-45deg);
        }

        .pillar-icon {
          color: var(--matte-gold);
          transition: all 0.3s ease;
        }

        .pillar-title {
          font-size: var(--font-lg);
          margin-bottom: 1rem;
        }

        .pillar-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonial-slider-container {
          max-width: 800px;
          margin: 4rem auto 0 auto;
          padding: 4rem 3rem;
          position: relative;
          text-align: center;
        }

        @media (max-width: 600px) {
          .testimonial-slider-container {
            padding: 3rem 1.5rem;
          }
        }

        .testimonial-slider {
          min-height: 250px;
          position: relative;
        }

        .testimonial-slide {
          opacity: 0;
          transform: scale(0.98);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .testimonial-slide.active {
          opacity: 1;
          transform: scale(1);
          position: relative;
          pointer-events: auto;
        }

        .star-rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 2rem;
        }

        .testimonial-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-2xl);
          color: var(--cream-white);
          line-height: 1.5;
          margin-bottom: 2rem;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .testimonial-quote {
            font-size: var(--font-lg);
          }
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--matte-gold);
        }

        .author-role {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: 'Montserrat', sans-serif;
        }

        .slider-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 3rem;
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 2rem;
        }

        .slider-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .slider-btn:hover {
          color: var(--matte-gold);
        }

        .slider-dots {
          display: flex;
          gap: 0.5rem;
        }

        .slider-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(250, 247, 240, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          background: var(--matte-gold);
          transform: scale(1.3);
        }

        /* Export CTA Banner */
        .export-cta-banner {
          position: relative;
          padding: 8rem 0;
          text-align: center;
          background-color: var(--deep-green);
          overflow: hidden;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(13, 13, 13, 0.2) 0%, rgba(13, 13, 13, 0.8) 100%);
        }

        .banner-container {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
        }

        .banner-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .banner-title {
          font-size: var(--font-5xl);
          margin-bottom: 2rem;
          color: var(--cream-white);
        }

        @media (max-width: 768px) {
          .banner-title {
            font-size: var(--font-3xl);
          }
        }

        .banner-desc {
          font-size: var(--font-lg);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .banner-ctas {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .banner-ctas {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .banner-ctas .btn {
            width: 100%;
            max-width: 280px;
          }
        }

        /* Section Layout Utilities */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-divider {
          width: 40px;
          height: 1px;
          background: var(--matte-gold);
          margin: 1.5rem auto 0 auto;
        }
      `}</style>
    </div>
  );
}
