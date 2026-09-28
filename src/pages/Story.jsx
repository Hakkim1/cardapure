import React, { useEffect } from 'react';
import { Calendar, Sun, Heart, Award, ArrowDown } from 'lucide-react';
import farmLifeImg from '../assets/images/farm_life.png';

export default function Story() {
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

  const storySteps = [
    {
      number: '01',
      title: 'Misty Germination',
      subtitle: 'The Altitude Sleep',
      desc: 'Our cardamom plants germinate under the high canopy of native forest trees in Idukki. They spend their first years in partial shade, surrounded by evergreen flora, developing deep roots in loose, organic forest mulch rich in natural nitrogen.',
      icon: <Calendar size={20} />
    },
    {
      number: '02',
      title: 'The Hand Harvest',
      subtitle: 'Plucking the Mature Pods',
      desc: 'Cardamom does not ripen all at once. Harvesting is a labor of pure love and patience. Our farmers walk the estate rows every 15-20 days, carefully touching and selecting only the fully plump, mature pods. Unripe pods are left untouched to mature for the next cycle.',
      icon: <Sun size={20} />
    },
    {
      number: '03',
      title: 'Tradition Curing',
      subtitle: 'Slow Flue Drying',
      desc: 'Within 24 hours of harvest, the pods are washed and dried. We use traditional heat-flue rooms where dry hot air circulates gently over the pods for 18 to 24 hours. We never use artificial dye, sulphur fumes, or chemicals to color the pods; their deep green is the natural result of high chlorophyll preserved by exact heat curation.',
      icon: <Heart size={20} />
    },
    {
      number: '04',
      title: 'Strict Grading',
      subtitle: 'Sorting by Diameter',
      desc: 'Cured cardamom is mechanically sieved to separate pods by diameter. Cardapure selections are strictly 8mm or larger—known in international trade as Bold or Super Bold. Any pods showing cracks, discolouration, or lower density are separated and set aside for secondary processing (like our ground powder).',
      icon: <Award size={20} />
    }
  ];

  return (
    <div className="story-page">
      {/* Page Banner */}
      <section className="story-banner">
        <div className="banner-overlay"></div>
        <div className="container banner-content animate-fade-in-up">
          <span className="banner-pretitle">The Journey</span>
          <h1 className="banner-title text-gradient-gold">Farm to Kitchen</h1>
          <p className="banner-subtitle">
            How we grow, harvest, dry, and grade our cardamom to ensure that every pod is a work of natural art.
          </p>
        </div>
      </section>

      {/* Origin Narrative */}
      <section className="section story-intro-section luxury-bg-gradient">
        <div className="container">
          <div className="story-intro-grid">
            <div className="story-intro-text reveal">
              <span className="section-pretitle">The Philosophy</span>
              <h2 className="section-title">An Unhurried Journey</h2>
              <p className="story-intro-p">
                We believe that modern food systems have traded flavor for speed. Industrial farming pushes crops to grow faster, inflating them with fertilizers and sacrificing natural essential oils. 
              </p>
              <p className="story-intro-p">
                At Cardapure, we let the Idukki hills dictate the pace. Cardamom is a delicate perennial plant that demands shaded shelter, constant humidity, and soft highland wind. Curing is done slowly over hours, ensuring the volatile oils remain sealed inside.
              </p>
            </div>
            <div className="story-intro-image reveal">
              <div className="image-frame-gold">
                <img src={farmLifeImg} alt="Harvesting green cardamom" className="story-intro-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Timeline */}
      <section className="section story-timeline-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-pretitle">Chronology of Quality</span>
            <h2 className="section-title">Curing the Perfect Pod</h2>
            <div className="section-divider"></div>
          </div>

          <div className="timeline-steps">
            {storySteps.map((step, idx) => (
              <div key={idx} className={`timeline-step-row reveal ${idx % 2 === 0 ? 'row-normal' : 'row-reverse'}`}>
                <div className="timeline-number-col">
                  <span className="step-num-large text-gold">{step.number}</span>
                  <div className="step-decor-line"></div>
                </div>
                
                <div className="timeline-content-card glass-card">
                  <div className="step-header">
                    <div className="step-icon-wrapper">{step.icon}</div>
                    <div className="step-titles">
                      <h3 className="step-title">{step.title}</h3>
                      <span className="step-subtitle text-gold">{step.subtitle}</span>
                    </div>
                  </div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Banner */
        .story-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .story-banner .banner-overlay {
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

        /* Intro Grid */
        .story-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .story-intro-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .story-intro-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .story-intro-img {
          width: 100%;
          height: auto;
          aspect-ratio: 16/10;
          object-fit: cover;
          display: block;
        }

        /* Timeline */
        .timeline-steps {
          position: relative;
          max-width: 900px;
          margin: 5rem auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .timeline-step-row {
          display: flex;
          align-items: flex-start;
          gap: 4rem;
        }

        .timeline-step-row.row-reverse {
          flex-direction: row-reverse;
        }

        @media (max-width: 768px) {
          .timeline-step-row, .timeline-step-row.row-reverse {
            flex-direction: column;
            gap: 2rem;
          }
        }

        .timeline-number-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-number-col {
            flex-direction: row;
            width: 100%;
            gap: 1.5rem;
          }
        }

        .step-num-large {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          line-height: 1;
        }

        .step-decor-line {
          width: 1px;
          height: 120px;
          background: linear-gradient(180deg, var(--matte-gold) 0%, rgba(201, 168, 76, 0.05) 100%);
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .step-decor-line {
            width: 100%;
            height: 1px;
            margin-top: 0;
            background: linear-gradient(90deg, var(--matte-gold) 0%, rgba(201, 168, 76, 0.05) 100%);
          }
        }

        .timeline-content-card {
          padding: 2.5rem;
          flex-grow: 1;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .step-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(201, 168, 76, 0.05);
          border: 1px solid var(--border-color);
          color: var(--matte-gold);
        }

        .step-titles {
          display: flex;
          flex-direction: column;
        }

        .step-title {
          font-size: var(--font-xl);
        }

        .step-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .step-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}
