import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth <= 768) return;

    const cellSize = 60;
    let cols, rows;

    function initGrid() {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      const newCols = Math.ceil(width / cellSize);
      const newRows = Math.ceil(height / cellSize);
      
      // Update DOM after calculations to avoid layout thrashing
      canvas.innerHTML = '';
      cols = newCols;
      rows = newRows;
      
      canvas.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
      canvas.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
      
      const totalCells = cols * rows;
      
      for (let i = 0; i < totalCells; i++) {
          const cell = document.createElement('div');
          cell.className = 'grid-cell';
          canvas.appendChild(cell);
      }
    }

    initGrid();
    window.addEventListener('resize', initGrid);

    return () => {
        window.removeEventListener('resize', initGrid);
    };
  }, []);

  return (
    <section className="hero">
        
        {/* Background Image Layer */}
        <div className="hero-img-layer"></div>
        
        {/* Dark Glass Mosaic Grid Layer */}
        <div className="hero-grid-layer" id="grid-canvas" ref={canvasRef}>
            {/* Grid tiles injected by JS to maintain clean HTML structure */}
        </div>

        {/* Floating Graphics (Premium Dark Style) */}
        <div className="float-card fc-1">
            <div className="fc-icon fc-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            </div>
            <div className="fc-text">
                <div className="fc-title">Added Revenue</div>
                <div className="fc-value">+$14,200/mo</div>
            </div>
        </div>

        <div className="float-card fc-2">
            <div className="fc-icon fc-red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
            <div className="fc-text">
                <div className="fc-title">Shop Schedule</div>
                <div className="fc-value">12 Jobs Booked</div>
            </div>
        </div>

        {/* Center Content Card */}
        <article className="hero-content">

            <h1>SaleRev-Ai Is Your <span>Solar Lead Conversion System.</span></h1>
            
            <h2 className="hero-subtitle">
                Turn More of Your Solar Leads Into Booked Consultations, Automatically
            </h2>
            
            <p className="hero-description">
                Most solar companies don’t have a lead problem. They have a response and <span style={{ whiteSpace: 'nowrap' }}>conversion problem.</span><br/>
                This system makes sure every lead you pay for gets answered, qualified, and booked.
            </p>

            <div className="features-card">
                <div className="features-card-title">What it does:</div>
                <ul className="features-list">
                    <li className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        Answers every inbound call instantly
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                        </div>
                        Contacts new leads within seconds
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                        </div>
                        Qualifies prospects before your team speaks to them
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        Books appointments directly into your calendar
                    </li>
                </ul>
            </div>

            <div className="cta-group">
                <Link to="/book-demo" className="btn-primary">
                    See How It Works (Quick Demo)
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>
        </article>
        
    </section>
  );
}
