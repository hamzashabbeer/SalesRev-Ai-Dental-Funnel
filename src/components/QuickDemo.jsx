import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function QuickDemo() {
  useEffect(() => {
    // Load the LeadConnector embed script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="quick-demo-page">
      <Header />
      
      <style>{`
        /* --- CSS Variables & Base Styles --- */
        :root {
            --primary: #ed3231;
            --primary-hover: #b91c1b;
            --navy: #0D1F3C;
            --bg-light: #F8FAFC;
            --bg-white: #FFFFFF;
            --text-main: #1E293B;
            --text-body: #475569;
            --border-light: #E2E8F0;
        }

        .quick-demo-page {
            font-family: 'Manrope', sans-serif;
            background-color: var(--bg-light);
            color: var(--text-body);
            -webkit-font-smoothing: antialiased;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow-x: hidden;
        }

        .quick-demo-page a { text-decoration: none; }
        .quick-demo-page ul { list-style: none; }

        /* --- HEADER OVERRIDE (Pixel Consistency) --- */
        .quick-demo-page header {
            background: var(--navy) !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            max-width: none !important;
            transform: none !important;
            border-radius: 0 !important;
            border: none !important;
            z-index: 1000 !important;
        }

        /* --- BACKGROUND ACCENTS --- */
        .ambient-glow {
            position: absolute;
            top: 10%;
            right: 10%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(237, 50, 49, 0.08) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
        }

        .bg-pattern {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: url('https://res.cloudinary.com/dvikl5pda/image/upload/q_auto/f_auto/v1777921028/geometric_perspective_line_pattern_background-Photoroom_pkdgzd.webp');
            background-size: cover;
            background-position: center;
            opacity: 0.03;
            z-index: 0;
            pointer-events: none;
        }

        /* --- MAIN CONTENT AREA --- */
        .quick-demo-page main {
            flex: 1;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 1;
            padding: 8.5rem 0 6rem 0;
        }

        .booking-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 5rem;
            align-items: center;
        }

        /* --- LEFT CONTENT COLUMN --- */
        .content-col {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .booking-logo-wrapper {
            margin-bottom: 2rem;
        }

        .booking-logo-wrapper img {
            height: 52px;
            width: auto;
        }

        .eyebrow-red {
            display: inline-flex;
            align-items: center;
            background: var(--primary);
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            padding: 8px 20px;
            border-radius: 8px;
            margin-bottom: 1.5rem;
        }

        .booking-headline {
            font-size: 3rem; 
            font-weight: 800;
            color: var(--navy);
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 1.5rem;
            max-width: 580px;
        }

        .booking-headline span {
            background: linear-gradient(135deg, var(--primary) 0%, #b91c1b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }

        .booking-subhead {
            font-size: 1.15rem;
            color: var(--text-body);
            line-height: 1.6;
            margin-bottom: 2.5rem;
            max-width: 540px;
        }

        /* --- BENEFIT CARDS --- */
        .benefit-list {
            display: grid;
            gap: 1rem;
        }

        .benefit-item {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            padding: 1.25rem 1.5rem;
            background: #ffffff;
            border: 1px solid var(--border-light);
            border-radius: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(13, 31, 60, 0.02);
        }

        .benefit-item:hover {
            transform: translateX(8px);
            border-color: rgba(237, 50, 49, 0.3);
            box-shadow: 0 12px 24px rgba(13, 31, 60, 0.06);
        }

        .benefit-icon {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            background: rgba(237, 50, 49, 0.08);
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .benefit-item:hover .benefit-icon {
            background: var(--primary);
            color: #ffffff;
            transform: rotate(-5deg) scale(1.1);
        }

        .benefit-text h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--navy);
            margin-bottom: 0;
            letter-spacing: -0.01em;
        }

        /* --- CALENDAR EMBED CARD --- */
        .calendar-card {
            background: var(--bg-white);
            border-radius: 32px;
            border: 1px solid var(--border-light);
            box-shadow: 0 40px 80px -20px rgba(13, 31, 60, 0.15);
            overflow: hidden;
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .calendar-header {
            padding: 1.5rem 2rem;
            border-bottom: 1px solid var(--border-light);
            background: #ffffff;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .pulse-dot {
            width: 8px;
            height: 8px;
            background-color: #10B981;
            border-radius: 50%;
            position: relative;
        }

        .pulse-dot::after {
            content: '';
            position: absolute;
            inset: -4px;
            background-color: #10B981;
            border-radius: 50%;
            opacity: 0.3;
            animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        @keyframes pulse-ring {
            0% { transform: scale(0.5); opacity: 0.5; }
            80%, 100% { transform: scale(2.5); opacity: 0; }
        }

        .calendar-header-text {
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--navy);
        }

        .calendar-embed-wrapper {
            padding: 0;
            width: 100%;
            height: 600px;
            background: #ffffff;
        }

        .calendar-embed-wrapper iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }

        /* --- RESPONSIVE DESIGN --- */
        @media (max-width: 768px) {
            .booking-container { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
            .content-col { align-items: center; }
            .booking-subhead { margin-inline: auto; }
            .benefit-list { width: 100%; max-width: 480px; text-align: left; }
            .quick-demo-page main { padding: 4.5rem 0 4rem; }
            .booking-headline { font-size: 2.8rem; }
            .calendar-embed-wrapper { height: 550px; }
        }
      `}</style>

      <div className="ambient-glow"></div>
      <div className="bg-pattern"></div>

      <main>
          <div className="booking-container">
              
              <div className="content-col">
                  <div className="booking-logo-wrapper">
                      <img src="https://res.cloudinary.com/dvikl5pda/image/upload/q_auto/f_auto/v1777923479/Pink-White-Modern-Artificial-Intelligence-Logo-1_1_k2nhbu.webp" alt="SaleRev-Ai Logo" />
                  </div>
                  
                  <div className="eyebrow-red">Book Your Demo</div>
                  <h1 className="booking-headline">Let's automate your <span>solar lead conversion.</span></h1>
                  <p className="booking-subhead">
                      Select a time on the calendar to schedule a brief, 15-minute walkthrough. We’ll show you exactly how the system works and answer any questions you have.
                  </p>

                  <div className="benefit-list">
                      <div className="benefit-item">
                          <div className="benefit-icon">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                          </div>
                          <div className="benefit-text"><h3>See the AI in Action</h3></div>
                      </div>
                      <div className="benefit-item">
                          <div className="benefit-icon">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                          </div>
                          <div className="benefit-text"><h3>Discuss Your Workflow</h3></div>
                      </div>
                      <div className="benefit-item">
                          <div className="benefit-icon">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
                          </div>
                          <div className="benefit-text"><h3>No High-Pressure Pitch</h3></div>
                      </div>
                  </div>
              </div>

              <div className="calendar-col">
                  <div className="calendar-card">
                      <div className="calendar-header">
                          <div className="pulse-dot"></div>
                          <span className="calendar-header-text">Book free demo</span>
                      </div>
                      
                      <div className="calendar-embed-wrapper">
                          <iframe 
                            src="https://api.leadconnectorhq.com/widget/booking/PLG00EEmlWlPN8cvz9zD" 
                            style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
                            scrolling="no" 
                            id="PLG00EEmlWlPN8cvz9zD_1778407755038"
                            title="Quick Demo Booking Calendar"
                          ></iframe>
                      </div>
                  </div>
              </div>

          </div>
      </main>
      <Footer />
    </div>
  );
}
