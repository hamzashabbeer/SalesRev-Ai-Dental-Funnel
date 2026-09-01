import React, { useState, useEffect } from 'react';
import LegalModal from './LegalModal';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .cookie-consent-overlay {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: calc(100% - 48px);
          max-width: 800px;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px 24px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          font-family: 'Inter', sans-serif;
        }

        .cookie-content {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          flex: 1;
        }

        .cookie-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          background: rgba(220, 38, 38, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #EF4444;
          margin-top: 2px;
        }

        .cookie-text {
          color: #E2E8F0;
          font-size: 13px;
          line-height: 1.4;
          margin: 0;
        }

        .cookie-actions {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 140px;
        }

        .cookie-btn-accept {
          background: #DC2626;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: center;
        }
        
        .cookie-btn-accept:hover {
          background: #B91C1C;
          transform: translateY(-1px);
        }

        .cookie-btn-secondary {
          background: transparent;
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: center;
        }

        .cookie-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .cookie-link {
          color: #3b82f6;
          text-decoration: underline;
          cursor: pointer;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @media (max-width: 768px) {
          .cookie-consent-overlay {
            flex-direction: column;
            border-radius: 12px;
            padding: 20px;
          }
          .cookie-actions {
            width: 100%;
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
      <div className="cookie-consent-overlay">
        <div className="cookie-content">
          <div className="cookie-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
              <path d="M8.5 8.5v.01"></path>
              <path d="M16 12.5v.01"></path>
              <path d="M12 16v.01"></path>
              <path d="M11 11v.01"></path>
              <path d="M15 8.5v.01"></path>
            </svg>
          </div>
          <p className="cookie-text">
            We use cookies to run this site, remember your preferences, and understand how visitors use our booking demo. By clicking "Accept," you agree to our use of cookies as described in our <span className="cookie-link" onClick={() => setIsPolicyOpen(true)}>Cookie Policy</span>. You can manage your choices anytime.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-accept" onClick={handleAccept}>
            Accept All
          </button>
          <button className="cookie-btn-secondary" onClick={handleReject}>
            Reject Non-Essential
          </button>
        </div>
      </div>
      <LegalModal 
        isOpen={isPolicyOpen} 
        onClose={() => setIsPolicyOpen(false)} 
        title="Cookie Policy" 
      />
    </>
  );
}
