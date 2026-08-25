import React from 'react';
import { Link } from 'react-router-dom';

export default function BusinessImpact({ onCtaClick }) {
  const handleCtaClick = (e) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <section className="section-impact" id="results">
      
        <div className="container">
            
            <div className="impact-header">
                <div className="eyebrow-red">Business Impact</div>
                <h2>What This Changes for Your <span className="highlight">Dental Practice</span></h2>
            </div>

            <div className="impact-grid">
                {/* Card 1 (Calendar - Bookings) */}
                <div className="impact-card">
                    <div className="ic-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div className="ic-content">
                        <h3 className="ic-title">More booked consultations</h3>
                        <p className="ic-desc">from the exact same leads</p>
                    </div>
                </div>

                {/* Card 2 (Lightning - Speed) */}
                <div className="impact-card">
                    <div className="ic-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                    </div>
                    <div className="ic-content">
                        <h3 className="ic-title">Faster response</h3>
                        <p className="ic-desc">without hiring more staff</p>
                    </div>
                </div>

                {/* Card 3 (Filter - Qualification) */}
                <div className="impact-card">
                    <div className="ic-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                        </svg>
                    </div>
                    <div className="ic-content">
                        <h3 className="ic-title">Less time wasted</h3>
                        <p className="ic-desc">on unqualified prospects</p>
                    </div>
                </div>

                {/* Card 4 (Chart - Predictability) */}
                <div className="impact-card">
                    <div className="ic-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                    </div>
                    <div className="ic-content">
                        <h3 className="ic-title">A predictable pipeline</h3>
                        <p className="ic-desc">with consistent and reliable growth</p>
                    </div>
                </div>
            </div>

            {/* ROI Example Banner */}
            <div className="roi-banner">
                <div className="roi-content">
                    <span className="roi-eyebrow">Simple Example</span>
                    <div className="roi-text">
                        A few extra booked appointments each week can turn into <span>additional production every month.</span>
                    </div>
                </div>
                <div className="roi-highlight">
                    <div className="roi-highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '44px', height: '44px' }}>
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <div className="roi-highlight-text">
                        And in dentistry, just <strong>one high-value patient</strong> (like implants or aligners) can easily cover the cost of the system.
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
                <Link to="/book-demo" className="btn-primary" onClick={handleCtaClick}>
                    Calculate My ROI Potential
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>

        </div>
    
    </section>
  );
}
