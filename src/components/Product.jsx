import React from 'react';

export default function Product() {
  return (
    <section className="section-product" id="product">
      
        <div className="container">
            
            {/* Product Header */}
            <div className="product-header">
                <div className="eyebrow-red">The Product</div>
                <h2>What Is the <img src="https://wsrv.nl/?url=https://res.cloudinary.com/dvikl5pda/image/upload/v1777923479/Pink-White-Modern-Artificial-Intelligence-Logo-1_1_k2nhbu.webp&w=196&output=webp&q=60" alt="SaleRev-Ai" className="product-logo-inline" width="196" height="56" loading="lazy" decoding="async" /> ?</h2>
                <p className="product-intro">
                    It’s a simple system designed specifically for dental practices. Its job is to make sure every patient inquiry is handled properly, from the first contact to the confirmed appointment.
                </p>
            </div>

            {/* Steps Grid */}
            <div className="step-grid">
                
                {/* Step 1: Capture */}
                <div className="step-card">
                    <div className="step-badge">1</div>
                    <div className="step-title">Capture</div>
                    <div className="step-subtitle">Never miss a lead</div>
                    <ul className="step-features">
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Answers every inbound call
                        </li>
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Responds instantly to new leads
                        </li>
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Works even after business hours
                        </li>
                    </ul>
                </div>

                {/* Step 2: Qualify */}
                <div className="step-card">
                    <div className="step-badge">2</div>
                    <div className="step-title">Qualify</div>
                    <div className="step-subtitle">Only send qualified patients</div>
                    <ul className="step-features">
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Identifies treatment interest (Implants, Invisalign, General)
                        </li>
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Checks appointment urgency dynamically
                        </li>
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Filters out spam or out-of-network requests
                        </li>
                    </ul>
                </div>

                {/* Step 3: Convert */}
                <div className="step-card">
                    <div className="step-badge">3</div>
                    <div className="step-title">Convert</div>
                    <div className="step-subtitle">Turn inquiries into confirmed appointments</div>
                    <ul className="step-features">
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Integrates directly with your practice software/calendar
                        </li>
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Sends confirmations & reminders
                        </li>
                        <li className="step-feature-item">
                            <svg className="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Follows up automatically if needed
                        </li>
                    </ul>
                </div>

            </div>

            {/* Simple Flow Banner */}
            <div className="flow-banner">
                <div className="flow-title">The Simple Flow</div>
                <div className="flow-diagram">
                    
                    <div className="flow-step">
                        <div className="flow-step-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        Patient inquiry comes in
                    </div>

                    <div className="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    <div className="flow-step">
                        <div className="flow-step-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                            </svg>
                        </div>
                        System responds
                    </div>

                    <div className="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    <div className="flow-step">
                        <div className="flow-step-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                        </div>
                        Qualifies
                    </div>

                    <div className="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    <div className="flow-step">
                        <div className="flow-step-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        Books
                    </div>

                    <div className="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    {/* Highlighted Final Step */}
                    <div className="flow-step final-step">
                        <div className="flow-step-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        Your team treats them
                    </div>

                </div>
            </div>

        </div>
    
    </section>
  );
}
