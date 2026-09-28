import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Retail Sourcing',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('General contact submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-banner">
        <div className="banner-overlay"></div>
        <div className="container banner-content animate-fade-in-up">
          <span className="banner-pretitle">Connect With Us</span>
          <h1 className="banner-title text-gradient-gold">Contact Cardapure</h1>
          <p className="banner-subtitle">
            Whether you are an home cook, an artisanal baker, or a bulk distributor, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Sourcing Contact Grid */}
      <section className="section contact-section-grid luxury-bg-gradient">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info-block reveal">
              <span className="section-pretitle">Get In Touch</span>
              <h2 className="section-title">We welcome your inquiry</h2>
              <p className="contact-desc-text">
                For wholesale quotes, export compliance documents, or retail partnership requests, choose your preferred method of contact below.
              </p>

              <div className="info-detail-cards">
                <div className="info-detail-card glass-card">
                  <MapPin className="info-icon" size={20} />
                  <div className="info-text">
                    <span className="info-label">Our Farm Land</span>
                    <span className="info-value">Nedumkandam, Idukki District, Kerala, 685553, India</span>
                  </div>
                </div>

                <div className="info-detail-card glass-card">
                  <Mail className="info-icon" size={20} />
                  <div className="info-text">
                    <span className="info-label">Email Sourcing Desk</span>
                    <a href="mailto:info@cardapure.com" className="info-value info-link">info@cardapure.com</a>
                  </div>
                </div>

                <div className="info-detail-card glass-card">
                  <Phone className="info-icon" size={20} />
                  <div className="info-text">
                    <span className="info-label">Direct & WhatsApp Support</span>
                    <a href="https://wa.me/919400000000" target="_blank" rel="noreferrer" className="info-value info-link">+91 94000 00000</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="whatsapp-quick-connect glass-card">
                <div className="wa-text-block">
                  <h3 className="wa-title text-gold">Chat Directly</h3>
                  <p className="wa-desc">Connect with our sourcing manager directly via WhatsApp for rapid answers.</p>
                </div>
                <a href="https://wa.me/919400000000?text=Hi%20Cardapure,%20I'm%20visiting%20your%20website%20and..." target="_blank" rel="noreferrer" className="btn btn-primary wa-btn">
                  Start Chat <MessageSquare size={14} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* General Inquiry Form */}
            <div className="contact-form-block glass-card reveal">
              <h3 className="form-title text-gold">Send A Message</h3>
              <p className="form-subtitle-form">For general feedback, retail requests, or recipe questions.</p>

              {submitted ? (
                <div className="form-success-message">
                  <h4 className="success-title text-gold">Message Sent</h4>
                  <p className="success-desc">
                    Thank you for reaching out. We appreciate your interest in Cardapure and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Your name" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="email@domain.com" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="text" 
                      id="phone"
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="Your phone number" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type</label>
                    <select 
                      id="inquiryType"
                      name="inquiryType" 
                      value={formData.inquiryType} 
                      onChange={handleInputChange}
                    >
                      <option>General Sourcing</option>
                      <option>Retail / Home Kitchen</option>
                      <option>Festive Gifting Packs</option>
                      <option>Other / Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="map-wrapper glass-card reveal">
            <div className="map-header">
              <h3 className="map-title text-gold">Location & Plantation Coordinate</h3>
              <p className="map-subtitle-map">Nedumkandam Hills, Idukki District, Kerala, India</p>
            </div>
            <div className="google-map-iframe-mock">
              {/* Mock dark luxury maps visual */}
              <div className="map-overlay-coordinates">
                <span className="coord-label font-brand">9.8213° N, 77.1689° E</span>
                <span className="coord-elevation">Elevation: 1,180m AMSL</span>
              </div>
              <div className="mock-grid-lines"></div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Banner */
        .contact-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .contact-banner .banner-overlay {
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

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: flex-start;
          margin-bottom: 6rem;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .contact-desc-text {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .info-detail-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-detail-card {
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }

        .info-icon {
          color: var(--matte-gold);
          flex-shrink: 0;
        }

        .info-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
        }

        .info-value {
          font-size: 0.85rem;
          color: var(--cream-white);
          line-height: 1.4;
        }

        .info-link:hover {
          color: var(--matte-gold);
        }

        /* WhatsApp Connect Box */
        .whatsapp-quick-connect {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-left: 2px solid var(--matte-gold);
          gap: 2rem;
        }

        @media (max-width: 600px) {
          .whatsapp-quick-connect {
            flex-direction: column;
            align-items: flex-start;
          }
          .whatsapp-quick-connect .wa-btn {
            width: 100%;
          }
        }

        .wa-title {
          font-size: var(--font-xl);
          margin-bottom: 0.5rem;
        }

        .wa-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* General Form */
        .contact-form-block {
          padding: 3rem;
          background: rgba(13, 13, 13, 0.95);
        }

        @media (max-width: 480px) {
          .contact-form-block {
            padding: 1.75rem;
          }
        }

        .form-title {
          font-size: var(--font-2xl);
          margin-bottom: 0.5rem;
        }

        .form-subtitle-form {
          font-size: var(--font-sm);
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .contact-form input, .contact-form select, .contact-form textarea {
          background: rgba(250, 247, 240, 0.02);
          border: 1px solid rgba(250, 247, 240, 0.1);
          color: var(--cream-white);
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
          border-color: var(--matte-gold);
          background: rgba(27, 67, 50, 0.1);
        }

        .contact-form select {
          cursor: pointer;
        }

        .contact-form select option {
          background: var(--warm-black);
          color: var(--cream-white);
        }

        .submit-btn {
          width: 100%;
        }

        /* Map Card */
        .map-wrapper {
          padding: 2.5rem;
          margin-top: 4rem;
        }

        .map-title {
          font-size: var(--font-xl);
          margin-bottom: 0.5rem;
        }

        .map-subtitle-map {
          font-size: var(--font-sm);
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .google-map-iframe-mock {
          height: 350px;
          background: #0f1a14;
          border: 1px solid rgba(201, 168, 76, 0.1);
          position: relative;
          overflow: hidden;
        }

        .mock-grid-lines {
          width: 100%;
          height: 100%;
          opacity: 0.07;
          background-image: 
            linear-gradient(rgba(201, 168, 76, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.5) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .map-overlay-coordinates {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: var(--warm-black);
          border: 1px solid var(--border-color);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 10;
        }

        .coord-label {
          font-size: 1.5rem;
          color: var(--matte-gold);
        }

        .coord-elevation {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        /* Success Message */
        .form-success-message {
          text-align: center;
          padding: 3rem 0;
        }

        .success-title {
          font-size: var(--font-2xl);
          margin-bottom: 1rem;
        }

        .success-desc {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
