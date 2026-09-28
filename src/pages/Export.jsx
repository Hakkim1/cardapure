import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, FileSpreadsheet, Globe, FileDown, ArrowUpRight } from 'lucide-react';

export default function Export() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    grade: 'Jumbo 8mm+ (Bold)',
    quantity: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    // Simulate sending email/WhatsApp routing
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="export-page">
      {/* Page Header */}
      <section className="export-banner">
        <div className="banner-overlay"></div>
        <div className="container banner-content animate-fade-in-up">
          <span className="banner-pretitle">B2B Trade & Global Sourcing</span>
          <h1 className="banner-title text-gradient-gold">Global Spice Export</h1>
          <p className="banner-subtitle">
            Reliable, high-volume supply chains supplying premium Idukki cardamom directly to importers in Dubai, Bahrain, Europe, and beyond.
          </p>
        </div>
      </section>

      {/* Sourcing Advantages Grid */}
      <section className="section b2b-features-section luxury-bg-gradient">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-pretitle">Direct Importer Sourcing</span>
            <h2 className="section-title">The Cardapure B2B Advantage</h2>
            <div className="section-divider"></div>
          </div>

          <div className="b2b-features-grid">
            <div className="b2b-feature-card glass-card reveal">
              <Globe className="b2b-icon" size={24} />
              <h3 className="b2b-title">Compliant Logistics</h3>
              <p className="b2b-desc">
                We handle complete export clearance, customs documentation, and phytosanitary certificates for GCC and European ports.
              </p>
            </div>

            <div className="b2b-feature-card glass-card reveal">
              <ShieldCheck className="b2b-icon" size={24} />
              <h3 className="b2b-title">Custom Packaging</h3>
              <p className="b2b-desc">
                Importers can specify bulk packaging formats: 20kg double-layered jute bags, 10kg vacuum packs, or custom-labelled retail boxes.
              </p>
            </div>

            <div className="b2b-feature-card glass-card reveal">
              <FileSpreadsheet className="b2b-icon" size={24} />
              <h3 className="b2b-title">Lab Batch Reports</h3>
              <p className="b2b-desc">
                Every consignment includes accredited laboratory reports confirming moisture levels, pesticide clearances, and essential oil contents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing MOQs & Tiers */}
      <section className="section moq-section">
        <div className="container">
          <div className="moq-grid">
            <div className="moq-info-text reveal">
              <span className="section-pretitle">Specifications & Shipping</span>
              <h2 className="section-title">Supply Tiers & MOQ</h2>
              <p className="moq-p">
                We accommodate both specialty boutique spice houses and high-volume grocery chains. By maintaining our own warehouse and sourcing network, we offer year-round price stability.
              </p>
              
              <div className="moq-table-wrapper glass-card">
                <table className="moq-table">
                  <thead>
                    <tr>
                      <th>Shipment Tier</th>
                      <th>Quantity (KG)</th>
                      <th>Packaging Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LCL Air Freight</td>
                      <td>100 kg – 500 kg</td>
                      <td>Vacuum Sealed Pouches in Cartons</td>
                    </tr>
                    <tr>
                      <td>LCL Sea Cargo</td>
                      <td>500 kg – 5,000 kg</td>
                      <td>High-density Jute Sacks / PP Sacks</td>
                    </tr>
                    <tr>
                      <td>FCL Sea Cargo (20ft)</td>
                      <td>5,000 kg +</td>
                      <td>Customized Palletized Containers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="catalog-download-card glass-card">
                <div className="download-text-block">
                  <h3 className="download-title text-gold">Download Export Catalog</h3>
                  <p className="download-desc">Includes detailed grade dimensions, chemical profiles, moisture specifications, and pricing metrics.</p>
                </div>
                <button 
                  onClick={() => alert('Downloading Cardapure Export Catalog PDF...')} 
                  className="btn btn-secondary download-btn"
                >
                  Download PDF <FileDown size={14} style={{ marginLeft: '6px' }} />
                </button>
              </div>
            </div>

            {/* B2B Inquiry Form */}
            <div className="b2b-form-card glass-card reveal">
              <h3 className="form-title text-gold">Export Sourcing Inquiry</h3>
              <p className="form-subtitle-form">Complete the form below to receive an export quotation sheets within 24 hours.</p>

              {formSubmitted ? (
                <div className="form-success-message">
                  <h4 className="success-title text-gold">Inquiry Submitted</h4>
                  <p className="success-desc">
                    Thank you for contacting Cardapure Spices. Our export manager will email you a catalog sheet and quotation matching your volume request.
                  </p>
                  <p className="success-cta-msg">
                    Need immediate quotes? Connect directly on WhatsApp:
                  </p>
                  <a href="https://wa.me/919400000000?text=Hello%20Cardapure,%20I'm%20interested%20in%20an%20export%20inquiry." target="_blank" rel="noreferrer" className="btn btn-primary whatsapp-btn">
                    WhatsApp Export Desk <ArrowUpRight size={14} />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="b2b-form">
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                      type="text" 
                      id="companyName"
                      name="companyName" 
                      value={formData.companyName} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Al-Taj Food Importers" 
                      required 
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactName">Contact Person</label>
                      <input 
                        type="text" 
                        id="contactName"
                        name="contactName" 
                        value={formData.contactName} 
                        onChange={handleInputChange} 
                        placeholder="Your full name" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="email@company.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input 
                        type="text" 
                        id="phone"
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="+971 50 000 0000" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Target Country</label>
                      <input 
                        type="text" 
                        id="country"
                        name="country" 
                        value={formData.country} 
                        onChange={handleInputChange} 
                        placeholder="e.g. Dubai, UAE" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="grade">Required Grade</label>
                      <select 
                        id="grade"
                        name="grade" 
                        value={formData.grade} 
                        onChange={handleInputChange}
                      >
                        <option>Jumbo 8mm+ (Bold)</option>
                        <option>Medium 7.5mm (Medium Bold)</option>
                        <option>Ground Cardamom Powder</option>
                        <option>Mixed Assortment / Gift Boxes</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="quantity">Target Quantity</label>
                      <input 
                        type="text" 
                        id="quantity"
                        name="quantity" 
                        value={formData.quantity} 
                        onChange={handleInputChange} 
                        placeholder="e.g. 500 kg / 5 Tons" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message & Specifications</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="4" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Specify your certifications, packaging requests, or ports of delivery..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Submit Inquiry Sheet
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Banner */
        .export-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .export-banner .banner-overlay {
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

        /* Features */
        .b2b-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 900px) {
          .b2b-features-grid {
            grid-template-columns: 1fr;
          }
        }

        .b2b-feature-card {
          padding: 3rem 2rem;
          text-align: center;
        }

        .b2b-icon {
          color: var(--matte-gold);
          margin-bottom: 1.5rem;
        }

        .b2b-title {
          font-size: var(--font-xl);
          margin-bottom: 1rem;
        }

        .b2b-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* MOQ Grid */
        .moq-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .moq-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .moq-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .moq-table-wrapper {
          overflow-x: auto;
          margin-bottom: 2.5rem;
        }

        .moq-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.85rem;
        }

        .moq-table th {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--matte-gold);
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(201, 168, 76, 0.2);
        }

        .moq-table td {
          padding: 1.25rem 1.5rem;
          color: var(--text-muted);
          border-bottom: 1px solid rgba(250, 247, 240, 0.05);
        }

        .moq-table tr:last-child td {
          border-bottom: none;
        }

        .catalog-download-card {
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          border-left: 2px solid var(--matte-gold);
        }

        @media (max-width: 600px) {
          .catalog-download-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .catalog-download-card .download-btn {
            width: 100%;
          }
        }

        .download-title {
          font-size: var(--font-xl);
          margin-bottom: 0.5rem;
        }

        .download-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* B2B Form Card */
        .b2b-form-card {
          padding: 3rem;
          background: rgba(13, 13, 13, 0.95);
        }

        @media (max-width: 480px) {
          .b2b-form-card {
            padding: 1.75rem;
          }
        }

        .form-title {
          font-size: var(--font-2xl);
          margin-bottom: 0.75rem;
        }

        .form-subtitle-form {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 2.5rem;
        }

        .b2b-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .b2b-form label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .b2b-form input, .b2b-form select, .b2b-form textarea {
          background: rgba(250, 247, 240, 0.02);
          border: 1px solid rgba(250, 247, 240, 0.1);
          color: var(--cream-white);
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .b2b-form input:focus, .b2b-form select:focus, .b2b-form textarea:focus {
          border-color: var(--matte-gold);
          background: rgba(27, 67, 50, 0.1);
        }

        .b2b-form select {
          cursor: pointer;
        }

        .b2b-form select option {
          background: var(--warm-black);
          color: var(--cream-white);
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
        }

        /* Success Message */
        .form-success-message {
          text-align: center;
          padding: 2rem 0;
        }

        .success-title {
          font-size: var(--font-2xl);
          margin-bottom: 1rem;
        }

        .success-desc {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .success-cta-msg {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .whatsapp-btn {
          width: 100%;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
