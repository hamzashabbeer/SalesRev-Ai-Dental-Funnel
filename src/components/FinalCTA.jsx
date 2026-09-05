import React, { useEffect } from 'react';

export default function FinalCTA() {
  useEffect(() => {
    const scriptId = 'leadconnector-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.id = scriptId;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
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

                    <div style={{ width: '100%', background: '#fff', borderRadius: '16px', overflow: 'hidden', minHeight: '300px', paddingLeft: '5px', boxSizing: 'border-box' }}>
                      <iframe
                          src="https://api.leadconnectorhq.com/widget/booking/PLG00EEmlWlPN8cvz9zD"
                          allow="payment"
                          style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                          scrolling="no"
                          id="PLG00EEmlWlPN8cvz9zD_1788601376850"
                          title="SalesRev-Ai Dental Booking Calendar"
                      ></iframe>
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
