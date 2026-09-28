import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ArrowRight, Clock, Calendar } from 'lucide-react';

export default function Blog() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const blogCategories = [
    { id: 'all', name: 'All Articles' },
    { id: 'guides', name: 'Spice Guides' },
    { id: 'recipes', name: 'Recipes' },
    { id: 'origin', name: 'Origin Stories' }
  ];

  const blogPosts = [
    {
      id: 'identify-idukki',
      category: 'guides',
      title: 'How to Identify Real Idukki Cardamom',
      desc: 'With counterfeits flooding the market, learn the scientific visual indicators, oil checks, and color parameters that define true Idukki origin.',
      readTime: '5 min read',
      date: 'June 18, 2026'
    },
    {
      id: 'grades-explained',
      category: 'guides',
      title: 'Cardamom Grades Explained: 7mm to 8mm Bold',
      desc: 'Understand what bold grading metrics mean for culinary yields. Why the physical pod diameter affects the volatile essential oil volume.',
      readTime: '4 min read',
      date: 'May 24, 2026'
    },
    {
      id: 'chai-the-right-way',
      category: 'recipes',
      title: 'Traditional Cardamom Chai — The Right Way',
      desc: 'Ditch the artificial syrups. Discover the authentic recipe for home-brewed ginger-cardamom black tea, using crushed, oil-rich whole pods.',
      readTime: '6 min read',
      date: 'May 02, 2026'
    },
    {
      id: 'why-idukki-best',
      category: 'origin',
      title: "Why Idukki Produces the World's Best Cardamom",
      desc: 'An in-depth look at the Western Ghats geology, the heavy monsoon cycles, and the unique forest loam soil that cradles our plantations.',
      readTime: '8 min read',
      date: 'April 14, 2026'
    },
    {
      id: 'proper-storage',
      category: 'guides',
      title: 'How to Store Cardamom Properly to Lock in Aromatic Oils',
      desc: 'Volatile essential oils evaporate easily under high temperatures. Learn how heat-sealed pouches and jar storage preserve freshness.',
      readTime: '3 min read',
      date: 'March 29, 2026'
    },
    {
      id: 'day-on-spice-farm',
      category: 'origin',
      title: 'A Day in the Life of a Kerala Spice Farmer',
      desc: 'Harvesting, flue drying, and sieve sorting. Follow our farmers through a full daylight cycle in Nedumkandam hills.',
      readTime: '7 min read',
      date: 'March 08, 2026'
    }
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedFilter === 'all' || post.category === selectedFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      {/* Page Header */}
      <section className="blog-banner">
        <div className="banner-overlay"></div>
        <div className="container banner-content animate-fade-in-up">
          <span className="banner-pretitle">The Spice Journal</span>
          <h1 className="banner-title text-gradient-gold">Cardamom Chronicle</h1>
          <p className="banner-subtitle">
            Exploring the culinary arts, agricultural sciences, and rich history behind the world's most luxurious aromatic pod.
          </p>
        </div>
      </section>

      {/* Blog Catalog */}
      <section className="section blog-section-grid luxury-bg-gradient">
        <div className="container">
          
          {/* Controls Bar */}
          <div className="blog-controls-bar reveal">
            {/* Search */}
            <div className="search-wrapper">
              <Search className="search-icon" size={16} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Tabs */}
            <div className="blog-tabs">
              {blogCategories.map((c) => (
                <button 
                  key={c.id} 
                  onClick={() => setSelectedFilter(c.id)} 
                  className={`blog-tab-btn ${selectedFilter === c.id ? 'active' : ''}`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-card glass-card reveal">
                  <div className="blog-card-meta">
                    <span className="blog-date">
                      <Calendar size={12} style={{ marginRight: '4px' }} />
                      {post.date}
                    </span>
                    <span className="blog-read-time">
                      <Clock size={12} style={{ marginRight: '4px' }} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-desc">{post.desc}</p>
                  
                  <a href="#read-more" onClick={(e) => { e.preventDefault(); alert(`Full reading page for "${post.title}" is a stub in this version.`); }} className="blog-read-link">
                    Read Article <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-articles-message glass-card reveal">
              <BookOpen size={48} className="no-articles-icon" />
              <h3 className="no-articles-title">No Articles Found</h3>
              <p className="no-articles-desc">Try modifying your search query or switching categories.</p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        /* Banner */
        .blog-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .blog-banner .banner-overlay {
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

        /* Controls */
        .blog-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .blog-controls-bar {
            flex-direction: column;
            align-items: stretch;
          }
        }

        .search-wrapper {
          display: flex;
          align-items: center;
          background: rgba(250, 247, 240, 0.02);
          border: 1px solid rgba(250, 247, 240, 0.1);
          padding: 0.75rem 1.25rem;
          width: 320px;
          transition: all 0.3s ease;
        }

        @media (max-width: 900px) {
          .search-wrapper {
            width: 100%;
          }
        }

        .search-wrapper:focus-within {
          border-color: var(--matte-gold);
          background: rgba(27, 67, 50, 0.1);
        }

        .search-icon {
          color: var(--text-dim);
          margin-right: 0.75rem;
        }

        .search-input {
          background: transparent;
          border: none;
          color: var(--cream-white);
          outline: none;
          font-size: 0.85rem;
          width: 100%;
        }

        .search-input::placeholder {
          color: rgba(250, 247, 240, 0.3);
        }

        .blog-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .blog-tab-btn {
          background: transparent;
          border: 1px solid rgba(201, 168, 76, 0.15);
          color: rgba(250, 247, 240, 0.7);
          padding: 0.6rem 1.25rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-tab-btn:hover, .blog-tab-btn.active {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
          background: rgba(201, 168, 76, 0.05);
        }

        /* Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }

        .blog-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .blog-card-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          color: var(--text-dim);
        }

        .blog-date, .blog-read-time {
          display: inline-flex;
          align-items: center;
        }

        .blog-post-title {
          font-size: var(--font-xl);
          margin-bottom: 1.25rem;
          line-height: 1.4;
          color: var(--cream-white);
        }

        .blog-post-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .blog-read-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          margin-top: auto;
          transition: transform 0.3s ease;
        }

        .blog-read-link:hover {
          color: var(--cream-white);
        }

        /* No articles message */
        .no-articles-message {
          padding: 5rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .no-articles-icon {
          color: var(--border-color);
          margin-bottom: 1.5rem;
        }

        .no-articles-title {
          font-size: var(--font-2xl);
          margin-bottom: 0.75rem;
        }

        .no-articles-desc {
          font-size: var(--font-base);
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
