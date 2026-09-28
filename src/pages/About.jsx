import React, { useEffect } from 'react';
import { ShieldCheck, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import farmerPortrait from '../assets/images/founder_story.png';

export default function About() {
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

  const certs = [
    { name: 'Organic India Certified', code: 'NPOP/NAB/001' },
    { name: 'FSSAI License', code: 'Reg No: 11324007000214' },
    { name: 'Spices Board India Registration', code: 'CRE-2026-F890' },
    { name: 'ISO 22000:2018 (Food Safety)', code: 'FSMS-90812' },
    { name: 'APEDA Export Certification', code: 'AP-ID-99214' }
  ];

  return (
    <div className="about-page">
      {/* Subpage Banner */}
      <section className="about-banner">
        <div className="banner-overlay"></div>
        <div className="container banner-content animate-fade-in-up">
          <span className="banner-pretitle">The Origin Story</span>
          <h1 className="banner-title text-gradient-gold">Rooted in Idukki</h1>
          <p className="banner-subtitle">
            How a life spent in cardamom fields inspired a mission to change the global spice landscape.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section founder-section luxury-bg-gradient">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-img-block reveal">
              <div className="image-frame-gold">
                <img src={farmerPortrait} alt="Cardapure Founder in Sourcing estate" className="founder-img" />
              </div>
              <div className="founder-badge">
                <span className="badge-title">Directly Sourced</span>
                <span className="badge-subtitle">Since Generations</span>
              </div>
            </div>

            <div className="founder-text-block reveal">
              <span className="section-pretitle">The Founder's Legacy</span>
              <h2 className="section-title">"Low quality is everywhere. We want to change that."</h2>
              
              <p className="founder-p">
                Growing up in Idukki, the world's premier cardamom region, the founder of Cardapure did not learn the spice trade from spreadsheets, but from the soil. As a boy, he watched the morning mist roll over the plantations, helped in the harvests, and learned the intricate, generational secrets of sorting, drying, and curing pods.
              </p>
              
              <p className="founder-p">
                However, looking at the wider market, he saw a troubling trend: the cardamom reaching kitchens globally was dry, grey, low in essential oils, and heavily diluted by middlemen. The real, potent, oil-rich green cardamom of Idukki never made it out of the local auctions intact.
              </p>

              <p className="founder-p">
                Cardapure was founded as a direct challenge to this status quo. By leveraging close personal relationships with fellow farmers and cultivating our own estate, we bypassed the auctions and middlemen entirely. We promised to bring the authentic, full-aroma cardamom of Idukki directly to premium households and B2B buyers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Geography */}
      <section className="section geography-section">
        <div className="container">
          <div className="geography-grid">
            <div className="geography-text reveal">
              <span className="section-pretitle">Terroir & Science</span>
              <h2 className="section-title">The Altitude Advantage</h2>
              <p className="geo-p">
                Cardapure cardamom is grown exclusively in the misty highlands of Idukki, situated 900m to 1,400m above sea level in the Western Ghats. This high altitude ensures a cool, humid microclimate where temperatures range between 15°C and 25°C year-round.
              </p>
              <p className="geo-p">
                These unique environmental pressures slow the ripening of the cardamom pods, giving them time to concentrate dense, aromatic essential oils (up to 8% content, compared to the market average of 3-4%). 
              </p>
              <div className="geo-stats-grid">
                <div className="geo-stat-card glass-card">
                  <span className="stat-num text-gold">1,200m</span>
                  <span className="stat-label">Average Elevation</span>
                </div>
                <div className="geo-stat-card glass-card">
                  <span className="stat-num text-gold">8.5%</span>
                  <span className="stat-label">Essential Oil Content</span>
                </div>
                <div className="geo-stat-card glass-card">
                  <span className="stat-num text-gold">100%</span>
                  <span className="stat-label">Traceability to Farm</span>
                </div>
              </div>
            </div>

            <div className="geography-visual reveal">
              <div className="glass-card map-visual-card">
                <h3 className="visual-card-title text-gold">Plantation Origin</h3>
                <p className="visual-card-desc">Our estate and fellow farming communities lie clustered around the high rainfall forests of Nedumkandam, Vandanmedu, and Munnar.</p>
                <div className="mock-map">
                  <div className="map-point pulse-gold">
                    <span className="map-point-label">Cardapure Farm</span>
                  </div>
                  <div className="map-contour-line line-1"></div>
                  <div className="map-contour-line line-2"></div>
                  <div className="map-contour-line line-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section certifications-section luxury-bg-gradient">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-pretitle">Quality Verification</span>
            <h2 className="section-title">Laboratory Tested & Certified</h2>
            <p className="section-subtitle-large">We back our purity claims with world-recognized credentials.</p>
            <div className="section-divider"></div>
          </div>

          <div className="certs-grid">
            {certs.map((c, i) => (
              <div key={i} className="cert-card glass-card reveal">
                <div className="cert-header">
                  <ShieldCheck className="cert-icon" size={24} />
                  <span className="cert-verify">Verified</span>
                </div>
                <h3 className="cert-name">{c.name}</h3>
                <span className="cert-code">{c.code}</span>
                <a href="#download-cert" className="cert-download-link" onClick={(e) => { e.preventDefault(); alert(`Downloading PDF certificate for ${c.name}`); }}>
                  Download PDF <FileText size={14} style={{ marginLeft: '4px' }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Banner */
        .about-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .about-banner .banner-overlay {
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

        /* Founder Section */
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .founder-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .founder-img-block {
          position: relative;
        }

        .image-frame-gold {
          border: 1px solid var(--border-color);
          padding: 1rem;
          background: rgba(13, 13, 13, 0.5);
          position: relative;
        }

        .image-frame-gold::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 1px solid rgba(201, 168, 76, 0.05);
          pointer-events: none;
        }

        .founder-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4/5;
          object-fit: cover;
          display: block;
        }

        .founder-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--matte-gold);
          color: var(--warm-black);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 480px) {
          .founder-badge {
            padding: 1rem;
            bottom: -10px;
            right: -10px;
          }
        }

        .badge-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .badge-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
        }

        .founder-text-block .section-title {
          font-size: var(--font-3xl);
          line-height: 1.3;
          margin-bottom: 2.5rem;
        }

        .founder-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        /* Sourcing / Geography */
        .geography-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .geography-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .geo-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .geo-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .geo-stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .geo-stat-card {
          padding: 1.5rem;
          text-align: center;
        }

        .stat-num {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-3xl);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Map Visual Card */
        .map-visual-card {
          padding: 2.5rem;
          height: 400px;
          display: flex;
          flex-direction: column;
        }

        .visual-card-title {
          font-size: var(--font-xl);
          margin-bottom: 1rem;
        }

        .visual-card-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .mock-map {
          flex-grow: 1;
          background: rgba(13, 13, 13, 0.4);
          border: 1px solid rgba(201, 168, 76, 0.1);
          position: relative;
          overflow: hidden;
          background-image: radial-gradient(rgba(201, 168, 76, 0.05) 1px, transparent 0);
          background-size: 20px 20px;
        }

        .map-point {
          position: absolute;
          top: 45%;
          left: 55%;
          width: 12px;
          height: 12px;
          background-color: var(--matte-gold);
          border-radius: 50%;
        }

        .map-point-label {
          position: absolute;
          top: -24px;
          left: -40px;
          width: 100px;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--matte-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .map-contour-line {
          position: absolute;
          border: 1px solid rgba(201, 168, 76, 0.05);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .map-contour-line.line-1 {
          width: 250px;
          height: 180px;
          top: 50%;
          left: 50%;
        }

        .map-contour-line.line-2 {
          width: 380px;
          height: 280px;
          top: 48%;
          left: 52%;
        }

        .map-contour-line.line-3 {
          width: 550px;
          height: 400px;
          top: 53%;
          left: 47%;
        }

        /* Certs Grid */
        .section-subtitle-large {
          font-size: var(--font-lg);
          color: var(--text-muted);
          font-weight: 300;
          margin-top: 1rem;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 1100px) {
          .certs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }

        .cert-card {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cert-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .cert-icon {
          color: var(--matte-gold);
        }

        .cert-verify {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #2e7d32;
          background: rgba(46, 125, 50, 0.1);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
        }

        .cert-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          line-height: 1.4;
          margin-bottom: 0.75rem;
          color: var(--cream-white);
        }

        .cert-code {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 1.5rem;
          font-family: monospace;
          flex-grow: 1;
        }

        .cert-download-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          margin-top: auto;
        }

        .cert-download-link:hover {
          color: var(--cream-white);
        }
      `}</style>
    </div>
  );
}
