import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Our Story', path: '/story' },
    { name: 'Export', path: '/export' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Cardapure Logo" className="header-logo" />
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link to="/export" className="btn btn-secondary btn-header-cta">
              Export Enquiry <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
            </Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <nav className="mobile-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/export" className="btn btn-primary mobile-cta">
              Export Enquiry <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
            </Link>
          </nav>
          
          <div className="mobile-drawer-footer">
            <p className="footer-copyright">Cardapure Spices © 2026</p>
            <p className="footer-location">Idukki, Kerala, India</p>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1.5rem 0;
          border-bottom: 1px solid transparent;
        }

        .header.scrolled {
          padding: 0.75rem 0;
          background: rgba(13, 13, 13, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201, 168, 76, 0.1);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          display: flex;
          align-items: center;
          height: 50px;
        }

        .header-logo {
          height: 100%;
          width: auto;
          object-fit: contain;
          transition: all 0.4s ease;
        }

        .header.scrolled .header-logo {
          height: 42px;
        }

        .desktop-nav {
          display: flex;
          gap: 2.25rem;
        }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(250, 247, 240, 0.7);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--matte-gold);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--matte-gold);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .btn-header-cta {
          padding: 0.6rem 1.25rem;
          font-size: 0.7rem;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--cream-white);
          cursor: pointer;
        }

        /* Mobile nav drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: var(--warm-black);
          z-index: 999;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding-top: 8rem;
          border-left: 1px solid rgba(201, 168, 76, 0.15);
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 2rem;
          max-width: 500px;
          margin-left: auto;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.25rem;
          color: rgba(250, 247, 240, 0.8);
          border-bottom: 1px solid rgba(250, 247, 240, 0.05);
          padding-bottom: 0.5rem;
        }

        .mobile-link.active, .mobile-link:hover {
          color: var(--matte-gold);
          padding-left: 0.5rem;
        }

        .mobile-cta {
          margin-top: 1rem;
          width: 100%;
        }

        .mobile-drawer-footer {
          border-top: 1px solid rgba(201, 168, 76, 0.1);
          padding-top: 2rem;
          margin-bottom: 4rem;
        }

        .mobile-drawer-footer p {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .desktop-nav, .header-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
