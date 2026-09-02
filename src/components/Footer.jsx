import React, { useState } from 'react';
import LegalModal from './LegalModal';
import ServiceModal from './ServiceModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTitle, setLegalModalTitle] = useState('');
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [activeService, setActiveService] = useState('');

  const openServiceModal = (e, serviceName) => {
    e.preventDefault();
    setActiveService(serviceName);
    setIsServiceModalOpen(true);
  };

  const openLegalModal = (e, title) => {
    e.preventDefault();
    setLegalModalTitle(title);
    setIsLegalModalOpen(true);
  };

  return (
    <>
      <style>{`
        #salesrev-footer {
            font-family: 'Inter', sans-serif;
            background-color: #0A0F1C;
            color: #F8FAFC;
            position: relative;
            width: 100%;
            padding: 5rem 0 2rem;
            overflow: hidden;
            z-index: 20;
        }
        #salesrev-footer .bg-grid-dark {
            position: absolute;
            inset: 0;
            background-size: 30px 30px;
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
            pointer-events: none;
            z-index: 0;
            mix-blend-mode: overlay;
            opacity: 0.5;
        }
        .footer-glow {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 400px;
            background: rgba(220, 38, 38, 0.1);
            filter: blur(150px);
            pointer-events: none;
            z-index: 0;
            border-radius: 50%;
        }
        .footer-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 1.5rem;
            position: relative;
            z-index: 10;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2rem;
            margin-bottom: 4rem;
        }
        .footer-col-main { grid-column: span 12; }
        .footer-col-contact { grid-column: span 12; }
        .footer-col-services { grid-column: span 12; }

        @media (min-width: 640px) {
            .footer-col-contact { grid-column: span 6; }
            .footer-col-services { grid-column: span 6; }
        }
        @media (min-width: 1024px) {
            .footer-col-main { grid-column: span 5; padding-right: 4rem; }
            .footer-col-contact { grid-column: span 4; }
            .footer-col-services { grid-column: span 3; }
        }

        .footer-logo { height: 2.5rem; object-fit: contain; margin-bottom: 1.5rem; }
        .footer-desc { color: #94a3b8; font-size: 0.875rem; line-height: 1.625; margin-bottom: 1.5rem; }
        .footer-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.875rem;
            border-radius: 0.5rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.75rem;
            font-weight: 600;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .footer-badge strong { color: white; }
        .footer-badge span { color: #ef4444; }

        .footer-title { color: white; font-weight: 700; font-size: 1.125rem; margin-bottom: 1.5rem; }
        .footer-list { list-style: none; padding: 0; margin: 0; }
        .footer-list.space-y-5 li { margin-bottom: 1.25rem; }
        .footer-list.space-y-3 li { margin-bottom: 0.875rem; }
        .footer-contact-item { display: flex; align-items: center; gap: 0.75rem; }
        .footer-contact-link { color: #94a3b8; font-size: 0.875rem; transition: color 0.3s; }
        .footer-contact-link:hover { color: white; }

        .footer-link { 
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            font-weight: 500;
            color: #94a3b8;
            transition: all 0.3s ease;
        }
        .footer-link-icon {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            transform: translateX(-10px);
            color: #DC2626;
            font-size: 0.75rem;
            margin-right: 0.5rem;
        }
        .footer-link:hover { color: #FFFFFF; transform: translateX(4px); }
        .footer-link:hover .footer-link-icon { opacity: 1; transform: translateX(0); }

        .footer-bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            gap: 1.5rem;
        }
        @media (min-width: 768px) { .footer-bottom { flex-direction: row; } }
        .copyright { color: #64748b; font-size: 0.875rem; text-align: center; }
        @media (min-width: 768px) { .copyright { text-align: left; } }
        .copyright strong { color: white; }
        .footer-legal { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; font-size: 0.875rem; font-weight: 500; }
        .footer-legal a { color: #64748b; transition: color 0.3s; }
        .footer-legal a:hover { color: white; }

        .side-text-email {
            position: absolute;
            left: 2.5rem;
            top: 50%;
            transform: translateY(-50%) rotate(-90deg);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.4em;
            color: #334155;
            z-index: 10;
            pointer-events: none;
            white-space: nowrap;
        }
        @media (max-width: 1535px) { .side-text-email { display: none; } }
        .side-text-email span { color: #dc2626; margin-right: 0.5rem; }
      `}</style>
      
      <footer id="salesrev-footer">
          <div className="bg-grid-dark"></div>
          <div className="footer-glow"></div>

          <div className="side-text-email">
              <span>///</span> connect@salerevai.com
          </div>

          <div className="footer-container">
              <div className="footer-grid">
                  
                  <div className="footer-col-main">
                      <div className="mb-6">
                          <img src="https://res.cloudinary.com/dvikl5pda/image/upload/c_scale,w_500,f_auto,q_auto/v1784148593/logo-without-bg-white_rhu62f.png" alt="SaleRev Logo" className="footer-logo" loading="lazy" decoding="async" />
                      </div>
                      <p className="footer-desc">
                          SaleRev AI helps ambitious businesses and brands with AI-driven, advanced digital marketing services. Start building visibility, growth, and success with us today.
                      </p>
                      <div className="footer-badge">
                          <strong>SaleRev AI</strong> <span>|</span> A Product by TWS
                      </div>
                  </div>

                  <div className="footer-col-contact">
                      <h4 className="footer-title">Contact Us</h4>
                      <ul className="footer-list space-y-5">
                          <li className="footer-contact-item">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                              <a href="tel:+13079200931" className="footer-contact-link">+1 307 920 0931</a>
                          </li>
                          <li className="footer-contact-item">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                              <a href="mailto:connect@salerevai.com" className="footer-contact-link">connect@salerevai.com</a>
                          </li>
                      </ul>
                  </div>

                  <div className="footer-col-services">
                      <h4 className="footer-title">Our Services</h4>
                      <ul className="footer-list space-y-3">
                          {['SEO','Paid Media (SEM)','Branding','Web Development','Custom Software','AI Automation'].map(s => (
                              <li key={s}>
                                  <a href="#" className="footer-link" onClick={(e) => openServiceModal(e, s)}>
                                      <span className="footer-link-icon">▶</span> {s}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>

              </div>

              <div className="footer-bottom">
                  <div className="copyright">
                      © Copyright <span id="current-year">{currentYear}</span> by <strong>SaleRev</strong>. All rights reserved.
                  </div>
                  <div className="footer-socials" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                      <a href="https://www.instagram.com/salerevai/" target="_blank" rel="noopener noreferrer" className="footer-contact-link" aria-label="Instagram">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                      <a href="https://www.youtube.com/@SaleRevAi" target="_blank" rel="noopener noreferrer" className="footer-contact-link" aria-label="YouTube">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61589899736789" target="_blank" rel="noopener noreferrer" className="footer-contact-link" aria-label="Facebook">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                  </div>
                  <div className="footer-legal">
                      <a href="#" onClick={(e) => openLegalModal(e, 'Privacy Policy')}>Privacy Policy</a>
                      <a href="#" onClick={(e) => openLegalModal(e, 'Terms of Service')}>Terms of Service</a>
                      <a href="#" onClick={(e) => openLegalModal(e, 'Cookie Policy')}>Cookie Policy</a>
                  </div>
              </div>
          </div>
      </footer>
      <LegalModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)} 
        title={legalModalTitle} 
      />
      <ServiceModal 
        isOpen={isServiceModalOpen} 
        onClose={() => setIsServiceModalOpen(false)} 
        serviceName={activeService} 
      />
    </>
  );
}
