import React, { useEffect, Suspense, lazy, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Problem from './Problem';
import Product from './Product';
import BusinessImpact from './BusinessImpact';
import WhyUs from './WhyUs';

// Lazy load below-the-fold sections to optimize initial JS bundle
const FAQ = lazy(() => import('./FAQ'));
const AudioDemo = lazy(() => import('./AudioDemo'));
const Testimonials = lazy(() => import('./Testimonials'));
const FinalCTA = lazy(() => import('./FinalCTA'));
const Footer = lazy(() => import('./Footer'));

export default function LandingPage() {
  const { hash } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  // Handle body scroll locking
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Load LeadConnector form embed script on mount so it's ready in advance
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <Header onCtaClick={openModal} />
      <main id="main-content">
        <Hero onCtaClick={openModal} />
        <Problem onCtaClick={openModal} />
        <Product onCtaClick={openModal} />
        <BusinessImpact onCtaClick={openModal} />
        <WhyUs onCtaClick={openModal} />
        <Suspense fallback={<div style={{ height: '400px' }} />}>
          <FAQ onCtaClick={openModal} />
          <AudioDemo onCtaClick={openModal} />
          <Testimonials onCtaClick={openModal} />
          <FinalCTA onCtaClick={openModal} />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ height: '300px' }} />}>
        <Footer />
      </Suspense>

      {/* LeadConnector Form Popup Modal - Pre-loaded in background */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="modal-body">
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/9MaemJ17mh0DVobt7jPQ"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                id="inline-9MaemJ17mh0DVobt7jPQ" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="SalesRev-Ai Dental Landing Page form "
                data-height="undefined"
                data-layout-iframe-id="inline-9MaemJ17mh0DVobt7jPQ"
                data-form-id="9MaemJ17mh0DVobt7jPQ"
                title="SalesRev-Ai Dental Landing Page form "
                scrolling="yes"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
