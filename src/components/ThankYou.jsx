import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <Header />
      
      <style>{`
        /* --- CSS Variables --- */
        :root {
            --primary: #ed3231;
            --primary-dark: #b91c1b;
            --navy: #0D1F3C;
            --bg-light: #F8FAFC;
            --text-body: #475569;
            --border-light: #E2E8F0;
        }

        .thank-you-page {
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

        /* --- HEADER CONSISTENCY --- */
        .thank-you-page header {
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

        /* --- BACKGROUND DECORATION --- */
        .ty-glow {
            position: absolute;
            top: -5%; right: -5%;
            width: 700px; height: 700px;
            background: radial-gradient(circle, rgba(237, 50, 49, 0.07) 0%, transparent 65%);
            z-index: 0;
            pointer-events: none;
        }
        .ty-glow-2 {
            position: absolute;
            bottom: 10%; left: -10%;
            width: 500px; height: 500px;
            background: radial-gradient(circle, rgba(237, 50, 49, 0.05) 0%, transparent 65%);
            z-index: 0;
            pointer-events: none;
        }
        .bg-pattern {
            position: absolute;
            inset: 0;
            background-image: url('https://res.cloudinary.com/dvikl5pda/image/upload/q_auto/f_auto/v1777921028/geometric_perspective_line_pattern_background-Photoroom_pkdgzd.webp');
            background-size: cover;
            opacity: 0.025;
            z-index: 0;
            pointer-events: none;
        }

        /* --- MAIN CONTENT --- */
        .thank-you-page main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 1;
            padding: 11rem 24px 8rem;
            text-align: center;
        }

        /* --- ANIMATED ELEMENTS --- */
        .ty-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(237, 50, 49, 0.1);
            border: 1px solid rgba(237, 50, 49, 0.25);
            color: var(--primary);
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            padding: 8px 18px;
            border-radius: 8px;
            margin-bottom: 2rem;
            animation: fadeInDown 0.5s ease;
        }

        .ty-check {
            width: 72px;
            height: 72px;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            box-shadow: 0 12px 32px rgba(237, 50, 49, 0.3);
            animation: popIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .ty-headline {
            font-size: 3.8rem;
            font-weight: 800;
            color: var(--navy);
            letter-spacing: -0.03em;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            max-width: 860px;
            animation: fadeInUp 0.6s ease 0.1s both;
        }

        .ty-headline span { 
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }

        .ty-subhead {
            font-size: 1.2rem;
            color: var(--text-body);
            line-height: 1.65;
            margin-bottom: 4.5rem;
            max-width: 620px;
            animation: fadeInUp 0.6s ease 0.2s both;
        }

        /* --- VIDEO CARD --- */
        .ty-video-wrapper {
            width: 100%;
            max-width: 680px;
            margin-bottom: 5rem;
            animation: fadeInUp 0.7s ease 0.3s both;
        }

        .ty-video-card {
            border-radius: 32px;
            overflow: hidden;
            border: 1px solid var(--border-light);
            box-shadow: 0 40px 80px rgba(13,31,60,0.12);
            position: relative;
            background: #000;
        }

        .ty-video-card iframe {
            display: block;
            width: 100%;
            aspect-ratio: 16/9;
            border: none;
        }

        /* --- NEXT STEPS GRID --- */
        .ty-steps-section {
            width: 100%;
            max-width: 920px;
            margin-bottom: 5rem;
            animation: fadeInUp 0.7s ease 0.4s both;
        }

        .ty-steps-label {
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--primary);
            margin-bottom: 1.5rem;
        }

        .ty-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            text-align: left;
        }

        .ty-step-card {
            background: #fff;
            border: 1px solid var(--border-light);
            border-radius: 24px;
            padding: 2rem;
            transition: all 0.25s ease;
        }

        .ty-step-card:hover {
            transform: translateY(-6px);
            border-color: rgba(237, 50, 49, 0.25);
            box-shadow: 0 16px 40px rgba(13, 31, 60, 0.07);
        }

        .ty-step-num {
            width: 34px; height: 34px;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: #fff;
            border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            font-weight: 800;
            margin-bottom: 1.25rem;
        }

        /* --- CTA BUTTON --- */
        .ty-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: #fff;
            padding: 18px 38px;
            border-radius: 14px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.25s ease;
            animation: fadeInUp 0.7s ease 0.5s both;
        }

        .ty-cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 32px rgba(237, 50, 49, 0.35);
        }

        /* --- KEYFRAMES --- */
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes popIn { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        /* --- RESPONSIVE --- */
        @media (max-width: 900px) { .ty-steps-grid { grid-template-columns: 1fr; max-width: 440px; margin-inline: auto; } }
        @media (max-width: 768px) { .ty-headline { font-size: 2.6rem; } .thank-you-page main { padding: 9rem 20px 6rem; } }
      `}</style>

      <div className="ty-glow"></div>
      <div className="ty-glow-2"></div>
      <div className="bg-pattern"></div>

      <main>
          <div className="ty-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
              Booking Confirmed
          </div>

          <div className="ty-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '36px', height: '36px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>

          <h1 className="ty-headline">You're all set! <span>We'll see you soon.</span></h1>
          <p className="ty-subhead">
              Your demo is booked. Check your inbox for the calendar invite and meeting link. In the meantime, watch the quick intro below to see exactly what we'll be walking you through.
          </p>

          <div className="ty-video-wrapper">
              <div className="ty-video-card">
                  <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Product Intro"
                      allowFullScreen
                  ></iframe>
              </div>
          </div>

          <div className="ty-steps-section">
              <div className="ty-steps-label">What Happens Next</div>
              <div className="ty-steps-grid">
                  <div className="ty-step-card">
                      <div className="ty-step-num">1</div>
                      <h4>Check Your Email</h4>
                      <p>A calendar invite with your meeting link is on its way. Add it to your calendar so you don't miss it.</p>
                  </div>
                  <div className="ty-step-card">
                      <div className="ty-step-num">2</div>
                      <h4>Confirm Your Time</h4>
                      <p>A member of our team will contact you 30 minutes before the call to confirm and answer any quick questions.</p>
                  </div>
                  <div className="ty-step-card">
                      <div className="ty-step-num">3</div>
                      <h4>Live Walkthrough</h4>
                      <p>We'll show you the full AI system live — from answering calls to booking appointments, end to end.</p>
                  </div>
              </div>
          </div>

          <Link to="/" className="ty-cta-btn">Return to Home Page</Link>
      </main>

      <Footer />
    </div>
  );
}
