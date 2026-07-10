import React from 'react';

export default function WhyUs() {
  return (
    <section className="section-why" id="why-us">
      
        <div className="container">
            <div className="why-grid">
                
                {/* Left: Visual */}
                <div className="why-visual">
                    <div className="why-image-wrapper">
                        <img src="https://res.cloudinary.com/dvikl5pda/image/upload/q_auto/f_auto/v1783710129/Secnd_section_image_lvd5nt.webp" alt="Dental practice staff" loading="lazy" decoding="async" />
                    </div>
                    
                    {/* Upgraded Premium Badge */}
                    <div className="why-badge">
                        <div className="why-badge-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                                <rect x="2" y="4" width="20" height="12" rx="2" ry="2"></rect>
                                <path d="M2 10h20"></path>
                                <path d="M8 4v12"></path>
                                <path d="M16 4v12"></path>
                                <path d="M12 16v6"></path>
                                <path d="M8 22h8"></path>
                            </svg>
                        </div>
                        <div className="why-badge-content">
                            <span className="why-badge-label">100% Tailored</span>
                            <div className="why-badge-text">Built for <span>Dental</span></div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="why-content">
                    <div className="eyebrow-red">Why SaleRevAi</div>
                    <h2><span className="highlight">Built for Dental</span>, Not Generic Software</h2>
                    
                    <p className="why-intro">
                        This isn’t a tool you have to figure out.<br />
                        It’s a system built around how busy dental clinics actually operate.
                    </p>

                    <ul className="why-list">
                        <li className="why-item">
                            <div className="why-item-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="why-item-text">Designed for dental patient booking</span>
                        </li>
                        <li className="why-item">
                            <div className="why-item-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="why-item-text">Works with your current setup</span>
                        </li>
                        <li className="why-item">
                            <div className="why-item-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="why-item-text">Simple for your team</span>
                        </li>
                        <li className="why-item">
                            <div className="why-item-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="why-item-text">Built to fill empty chairs, not add complexity</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    
    </section>
  );
}
