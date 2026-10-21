import React, { useState, useEffect, useRef } from 'react';

export default function FinalCTA() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      const scriptId = 'leadconnector-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.src = 'https://link.msgsndr.com/js/form_embed.js';
        script.id = scriptId;
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
      }
      return;
    }

    const handleCtaTrigger = () => {
      setIsLoaded(true);
    };
    window.addEventListener('load-booking-calendar', handleCtaTrigger, { once: true });

    let observer;
    if ('IntersectionObserver' in window && containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsLoaded(true);
            if (observer) observer.disconnect();
          }
        },
        { rootMargin: '600px 0px' }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('load-booking-calendar', handleCtaTrigger);
      if (observer) observer.disconnect();
    };
  }, [isLoaded]);

  return (
    <section className="section-cta" id="final-cta" ref={containerRef}>
      <div className="container">
        <div className="cta-billboard">
          <div className="cta-content" style={{ width: '100%' }}>
            <div className="cta-eyebrow">Ready To Start?</div>
            <h2 className="cta-heading">Book Your <span>Free Demo</span></h2>
            <p className="cta-description">
              Fill out the calendar below to schedule your appointment. <br />
              <b>See exactly how we can transform your practice.</b>
            </p>

            <div style={{ width: '100%', background: '#fff', borderRadius: '16px', overflow: 'hidden', minHeight: '600px', paddingLeft: '5px', boxSizing: 'border-box' }}>
              {isLoaded ? (
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/PLG00EEmlWlPN8cvz9zD"
                  allow="payment"
                  style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                  scrolling="no"
                  id="PLG00EEmlWlPN8cvz9zD_1788601376850"
                  title="SalesRev-Ai Dental Booking Calendar"
                />
              ) : (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '600px',
                  color: '#64748b',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    border: '3px solid #e2e8f0',
                    borderTopColor: '#b91c1c',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    marginBottom: '1rem'
                  }} />
                  <p style={{ margin: '0 0 1rem 0', fontWeight: 500, color: '#334155' }}>Loading booking calendar...</p>
                  <button
                    onClick={() => setIsLoaded(true)}
                    className="btn-primary"
                    style={{ fontSize: '0.875rem', padding: '8px 18px' }}
                  >
                    Click to Open Calendar Now
                  </button>
                </div>
              )}
            </div>

            <div className="cta-guarantee" style={{ marginTop: '2rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Zero obligation. Just a 15-minute system walkthrough.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
