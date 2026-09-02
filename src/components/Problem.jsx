import React from 'react';
import { Link } from 'react-router-dom';

export default function Problem({ onCtaClick }) {
  const handleCtaClick = (e) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <section className="section-problem" id="how-it-works">
      
        <div className="container">
            
            <div className="problem-grid">
                {/* Left: Content */}
                <div className="problem-content">
                    <div className="eyebrow-red">The Problem</div>
                    <h2>You’re Already Paying for Leads, But <span className="highlight">Losing Them in the First 5 Minutes</span></h2>
                    
                    <div className="problem-intro">Leads come in. <span className="emphasis-but">BUT:</span></div>
                    
                    <ul className="problem-list">
                        <li className="problem-item">
                            <div className="problem-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                            Calls get missed
                        </li>
                        <li className="problem-item">
                            <div className="problem-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                            Follow-up is delayed
                        </li>
                        <li className="problem-item">
                            <div className="problem-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                            Prospects lose interest
                        </li>
                        <li className="problem-item">
                            <div className="problem-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                            Competitors respond faster
                        </li>
                    </ul>

                    <div className="lost-deals-alert">
                        And in dentistry, that means empty chairs and lost patient value.
                    </div>

                    <div style={{ marginTop: '2.5rem' }}>
                        <Link to="/book-demo" className="btn-primary" onClick={handleCtaClick}>
                            Fix My Booking Process
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right: Visual */}
                <div className="problem-visual">
                    <div className="problem-image-wrapper">
                        <img src="https://wsrv.nl/?url=https://res.cloudinary.com/dvikl5pda/image/upload/q_auto/f_auto/v1783710128/third_section_image_eveqmp.webp&w=700&output=webp&q=80" alt="Practice operations" width="520" height="691" loading="lazy" decoding="async" />
                    </div>
                    
                    {/* New Professional Impact Graphic */}
                    <div className="problem-impact-widget">
                        <div className="piw-header">
                            <span className="piw-title">Conversion Drop</span>
                            <span className="piw-badge">Industry Data</span>
                        </div>
                        <div className="piw-chart">
                            <div className="piw-bar-group">
                                <div className="piw-bar primary" style={{ height: '100%' }}></div>
                                <span className="piw-label">1m</span>
                            </div>
                            <div className="piw-bar-group">
                                <div className="piw-bar" style={{ height: '40%' }}></div>
                                <span className="piw-label">5m</span>
                            </div>
                            <div className="piw-bar-group">
                                <div className="piw-bar" style={{ height: '15%' }}></div>
                                <span className="piw-label">10m</span>
                            </div>
                            <div className="piw-bar-group">
                                <div className="piw-bar" style={{ height: '5%' }}></div>
                                <span className="piw-label">30m</span>
                            </div>
                        </div>
                        <div className="piw-footer">
                            <svg className="piw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                            <div className="piw-stat-text">
                                <strong>391% higher</strong> booking rate when new patient leads are called within the first minute.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Reality Banner */}
            <div className="reality-card">
                <span className="reality-label">The Reality</span>
                <p className="reality-text">
                    The company that responds first usually wins.<br /> 
                    If your process isn’t fast and consistent, you’re <span>losing revenue every day</span> — without realizing it.
                </p>
            </div>

        </div>
    
    </section>
  );
}
