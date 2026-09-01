import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const servicesData = {
  'SEO': {
    title: 'SEO',
    headline: 'Show Up When Patients Are Searching for a Dentist Near Them',
    body1: 'Most new patients start their search on Google — "dentist near me," "emergency dentist," "teeth whitening [city]." If your practice isn\'t ranking, you\'re sending free traffic to the practice down the street. We optimize your site structure, local listings, and content so your practice shows up first, for the searches that actually turn into booked appointments — not just traffic for traffic\'s sake.',
    body2: 'What\'s included: local SEO & Google Business Profile optimization, on-page content, technical site health, and ongoing keyword tracking.'
  },
  'Paid Media (SEM)': {
    title: 'Paid Media (SEM)',
    headline: 'Turn Ad Spend Into Booked Consultations, Not Just Clicks',
    body1: 'Running ads without a booking system behind them just means you\'re paying to lose leads faster. We build and manage Google and Meta ad campaigns specifically for dental practices, then connect them directly into SaleRev-Ai so every click gets followed up on automatically — no lead left to go cold in an inbox.',
    body2: 'What\'s included: campaign strategy, ad creative, audience targeting, conversion tracking, and continuous budget optimization to lower your cost per booked patient.'
  },
  'Branding': {
    title: 'Branding',
    headline: 'Look Like the Practice Patients Trust Before They Even Call',
    body1: 'Patients judge a practice\'s credibility in seconds — your logo, your site, your messaging. We build a consistent brand identity across your website, ads, and patient communications so every touchpoint builds trust instead of raising doubts.',
    body2: 'What\'s included: logo & visual identity, messaging and tone guidelines, and brand consistency across your website and marketing materials.'
  },
  'Web Development': {
    title: 'Web Development',
    headline: 'A Website Built to Book Appointments, Not Just Look Nice',
    body1: 'A slow, cluttered, or outdated website is one of the biggest reasons dental leads never convert. We design and build fast, mobile-friendly websites with booking built into the experience — so visitors can go from "just looking" to "appointment confirmed" without ever picking up the phone.',
    body2: 'What\'s included: custom design, mobile optimization, integrated booking/contact forms, and performance-focused builds that load fast and convert.'
  },
  'Custom Software': {
    title: 'Custom Software',
    headline: 'When Off-the-Shelf Tools Don\'t Fit How Your Practice Runs',
    body1: 'Every dental practice runs a little differently — multiple locations, unique scheduling rules, specific intake requirements. When standard tools create more workarounds than they solve, we build custom software and integrations that fit your actual workflow instead of forcing you to fit theirs.',
    body2: 'What\'s included: custom internal tools, API integrations between your existing systems (CRM, scheduling, billing), and workflow automation built around how your practice actually operates.'
  },
  'AI Automation': {
    title: 'AI Automation',
    headline: 'Never Miss Another Patient Inquiry, Day or Night',
    body1: 'This is the core of SaleRev-Ai: an AI system that instantly answers, qualifies, and books patient leads around the clock — then follows up automatically with anyone who doesn\'t book right away, so no inquiry goes cold. It plugs directly into your CRM and calendar, so nothing falls through the cracks between "someone reached out" and "appointment confirmed."',
    body2: 'What\'s included: 24/7 AI lead response, automatic appointment booking, CRM/calendar sync, and ongoing SMS/email follow-up for leads that don\'t convert immediately.'
  }
};

export default function ServiceModal({ isOpen, onClose, serviceName }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const data = servicesData[serviceName];
  if (!data) return null;

  const handleBookDemo = () => {
    onClose();
    navigate(`/book-demo?calendar_notes=I need ${encodeURIComponent(serviceName)}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{`
        .service-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 28, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 1.5rem;
          animation: modalFadeIn 0.3s ease;
        }

        .service-modal-container {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          width: 100%;
          max-width: 650px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-modal-title {
          margin: 0;
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.01em;
        }

        .service-modal-close {
          background: rgba(255, 255, 255, 0.05);
          border: none;
          color: #94a3b8;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .service-modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .service-modal-content {
          padding: 2rem;
          overflow-y: auto;
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.7;
          font-family: 'Inter', sans-serif;
        }

        .service-headline {
          color: #ef4444;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        .service-modal-content p {
          margin-bottom: 1.25rem;
        }
        
        .service-modal-content p:last-child {
          margin-bottom: 0;
          background: rgba(255,255,255,0.03);
          padding: 1rem;
          border-radius: 8px;
          border-left: 3px solid #ef4444;
        }

        .service-modal-footer {
          padding: 1.5rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .service-modal-btn-secondary {
          background: transparent;
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.625rem 1.25rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .service-modal-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .service-modal-btn-primary {
          background: #DC2626;
          color: white;
          border: none;
          padding: 0.625rem 1.5rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
        }

        .service-modal-btn-primary:hover {
          background: #B91C1C;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(220, 38, 38, 0.3);
        }

        /* Scrollbar styles for the content */
        .service-modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .service-modal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .service-modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .service-modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <div className="service-modal-overlay" onClick={onClose}>
        <div className="service-modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="service-modal-header">
            <h3 className="service-modal-title">{data.title}</h3>
            <button className="service-modal-close" onClick={onClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="service-modal-content">
            <h4 className="service-headline">{data.headline}</h4>
            <p>{data.body1}</p>
            <p><strong>What's included:</strong> {data.body2.replace("What's included: ", "")}</p>
          </div>
          <div className="service-modal-footer">
            <button className="service-modal-btn-secondary" onClick={onClose}>
              Close
            </button>
            <button className="service-modal-btn-primary" onClick={handleBookDemo}>
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
