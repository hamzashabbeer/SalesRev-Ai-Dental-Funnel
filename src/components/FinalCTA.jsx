import React, { useState, useEffect } from 'react';

export default function FinalCTA() {
  const [iframeHeight, setIframeHeight] = useState(747);

  useEffect(() => {
    // 1. Load LeadConnector form embed script
    const scriptId = 'leadconnector-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.id = scriptId;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Intercept message events in capture phase:
    // When required field errors occur, GHL sends 'scrollTo' / 'scrollToOffset' which causes form_embed.js
    // to jump the parent window down to the error input, scrolling the heading & labels off-screen.
    // We block scrollTo events with stopImmediatePropagation while capturing height resize cleanly.
    const handleMessage = (e) => {
      try {
        const data = e.data;
        if (typeof data === 'string') {
          // iFrameSizer format: [iFrameSizer]iframeId:height:width:type
          if (data.startsWith('[iFrameSizer]')) {
            const parts = data.slice(13).split(':');
            const type = parts[3];

            // Block automatic scrolling so heading and labels stay locked in view
            if (type === 'scrollTo' || type === 'scrollToOffset') {
              e.stopImmediatePropagation();
              e.stopPropagation();
              return;
            }

            if (type !== 'close') {
              const h = parseInt(parts[1], 10);
              if (!isNaN(h) && h >= 400 && h < 3500) {
                setIframeHeight(Math.max(h, 747));
              }
            }
          } else {
            try {
              const parsed = JSON.parse(data);
              if (parsed.action === 'scrollTo' || parsed.type === 'scrollTo') {
                e.stopImmediatePropagation();
                e.stopPropagation();
                return;
              }
              const h = parsed.height || (parsed.data && parsed.data.height);
              if (typeof h === 'number' && h >= 400 && h < 3500) {
                setIframeHeight(Math.max(h, 747));
              }
            } catch (_) {}
          }
        } else if (data && typeof data === 'object') {
          if (data.action === 'scrollTo' || data.type === 'scrollTo') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            return;
          }
          const h = data.height || (data.data && data.data.height);
          if (typeof h === 'number' && h >= 400 && h < 3500) {
            setIframeHeight(Math.max(h, 747));
          }
        }
      } catch (_) {}
    };

    window.addEventListener('message', handleMessage, true);
    return () => window.removeEventListener('message', handleMessage, true);
  }, []);

  return (
    <section className="section-cta" id="final-cta">
      <div className="container">
        <div className="cta-billboard">
          <div className="cta-content" style={{ width: '100%' }}>
            <div className="cta-eyebrow">Ready To Start?</div>
            <h2 className="cta-heading">Book Your <span>Free Demo</span></h2>
            <p className="cta-description">
              Fill out the calendar below to schedule your appointment. <br />
              <b>See exactly how we can transform your practice.</b>
            </p>

            <div style={{
              width: '100%',
              background: '#fff',
              borderRadius: '16px',
              minHeight: `${iframeHeight}px`,
              boxSizing: 'border-box',
              overflow: 'hidden',
              transition: 'min-height 0.25s ease'
            }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/PLG00EEmlWlPN8cvz9zD"
                allow="payment"
                style={{
                  width: '100%',
                  height: `${iframeHeight}px`,
                  minHeight: '747px',
                  border: 'none',
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'height 0.25s ease'
                }}
                scrolling="no"
                id="PLG00EEmlWlPN8cvz9zD_1788601376850"
                title="SalesRev-Ai Dental Booking Calendar"
              />
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
