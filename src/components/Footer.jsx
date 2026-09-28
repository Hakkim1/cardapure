import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Cardapure updates.');
  };

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Cardapure Logo" className="footer-logo" />
          </Link>
          <p className="footer-brand-desc">
            "The World's Finest. From Where It Begins."
          </p>
          <p className="footer-origin-text">
            Sourced directly from our family farm and fellow spice growers in the misty mountains of Idukki, Kerala. No middlemen, no compromise.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/export">B2B Export</Link></li>
            <li><Link to="/blog">Spice Journal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4 className="footer-col-title">Origin & Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>Idukki Hills, Kerala, 685602, India</span>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <a href="mailto:info@cardapure.com">info@cardapure.com</a>
            </li>
            <li>
              <Phone size={16} className="contact-icon" />
              <a href="https://wa.me/919400000000" target="_blank" rel="noreferrer">+91 94000 00000 (WhatsApp)</a>
            </li>
          </ul>

          <div className="footer-marketplaces">
            <h5 className="marketplace-title">Shop Online</h5>
            <div className="marketplace-links">
              <a href="https://amazon.in" target="_blank" rel="noreferrer" className="marketplace-link">
                Amazon India <ExternalLink size={12} />
              </a>
              <a href="https://flipkart.com" target="_blank" rel="noreferrer" className="marketplace-link">
                Flipkart <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-newsletter-col">
          <h4 className="footer-col-title">Newsletter</h4>
          <p className="newsletter-desc">Subscribe to receive origin stories, spice guides, and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input" 
              required 
            />
            <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Cardapure Spices. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="bullet-sep">&bull;</span>
            <a href="#terms">Terms of Export</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--warm-black);
          border-top: 1px solid rgba(201, 168, 76, 0.1);
          color: var(--text-primary);
          padding: 6rem 0 2rem 0;
          font-family: 'Inter', sans-serif;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .footer-logo-link {
          display: inline-block;
          height: 50px;
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          height: 100%;
          width: auto;
        }

        .footer-brand-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-lg);
          color: var(--matte-gold);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .footer-origin-text {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
        }

        .footer-col-title {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--matte-gold);
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 24px;
          height: 1px;
          background-color: var(--matte-gold);
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links-list a {
          font-size: var(--font-sm);
          color: var(--text-muted);
        }

        .footer-links-list a:hover {
          color: var(--matte-gold);
          padding-left: 4px;
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
        }

        .contact-icon {
          color: var(--matte-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-contact-list a:hover {
          color: var(--matte-gold);
        }

        .footer-marketplaces {
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 1.5rem;
        }

        .marketplace-title {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .marketplace-links {
          display: flex;
          gap: 1rem;
        }

        .marketplace-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          border: 1px solid rgba(250, 247, 240, 0.1);
          padding: 0.4rem 0.8rem;
          transition: all 0.3s ease;
        }

        .marketplace-link:hover {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
        }

        .newsletter-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          display: flex;
          border-bottom: 1px solid rgba(201, 168, 76, 0.3);
          padding-bottom: 0.5rem;
          transition: border-color 0.3s ease;
        }

        .newsletter-form:focus-within {
          border-color: var(--matte-gold);
        }

        .newsletter-input {
          background: transparent;
          border: none;
          color: var(--cream-white);
          flex-grow: 1;
          font-size: var(--font-sm);
          outline: none;
          padding: 0.5rem 0;
        }

        .newsletter-input::placeholder {
          color: rgba(250, 247, 240, 0.3);
        }

        .newsletter-submit-btn {
          background: transparent;
          border: none;
          color: var(--matte-gold);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .newsletter-submit-btn:hover {
          transform: translateX(4px);
        }

        .footer-bottom {
          margin-top: 5rem;
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 2rem;
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .footer-bottom-container {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }

        .footer-bottom-links a {
          color: var(--text-dim);
        }

        .footer-bottom-links a:hover {
          color: var(--matte-gold);
        }

        .bullet-sep {
          margin: 0 0.75rem;
        }
      `}</style>
    </footer>
  );
}
