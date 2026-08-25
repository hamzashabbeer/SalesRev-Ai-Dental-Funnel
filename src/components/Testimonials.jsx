import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Testimonials({ onCtaClick }) {
  const trackRef = useRef(null);

  const handleCtaClick = (e) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };
  let autoScrollInterval = useRef(null);

  const scrollAmount = useRef(0);

  const updateScrollAmount = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.testi-card');
    if (!card) return;
    const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 0;
    scrollAmount.current = card.offsetWidth + gap;
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -scrollAmount.current, behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: scrollAmount.current, behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (!trackRef.current) return;
      if (trackRef.current.scrollLeft + trackRef.current.clientWidth >= trackRef.current.scrollWidth - 10) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: scrollAmount.current, behavior: 'smooth' });
      }
    }, 4000);
  };

  const resetAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    startAutoScroll();
  };

  useEffect(() => {
    updateScrollAmount();
    startAutoScroll();
    window.addEventListener('resize', updateScrollAmount);
    return () => {
      window.removeEventListener('resize', updateScrollAmount);
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  return (
    <section className="section-testimonials">
        <div className="container">
            <div className="header-wrapper">
                <div className="eyebrow-red">Proven Results</div>
                <h2>Don't just <span className="highlight">take our word</span> for it</h2>
            </div>

            <div className="carousel-wrapper">
                {/* Desktop Navigation Left */}
                <button className="nav-btn prev" aria-label="Previous testimonials" onClick={handlePrev}>
                    <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                {/* Scrollable Track */}
                <div 
                  className="carousel-track" 
                  ref={trackRef}
                  onMouseEnter={() => clearInterval(autoScrollInterval.current)}
                  onMouseLeave={startAutoScroll}
                >
                    {/* Card 1: Sebastian */}
                    <div className="testi-card">
                        <div className="tc-video-wrapper">
                            <iframe src="https://www.youtube.com/embed/5R5VoqlWS9c" title="Client Testimonial for Sebastian" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        </div>
                        <div className="tc-content">
                            <svg className="tc-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="tc-quote-text">
                                "Sebastian, Founder of Canvas Freaks, leveraged our partnership to <b>more than double his revenue in one year</b>, jumping from a stagnant <b>$1.5 million to $3.2 million.</b>"
                            </p>
                            <div className="tc-author">
                                <img src="https://storage.googleapis.com/msgsndr/gShNfLlJxL4QxP5QFBhr/media/68d72665dd639f6767374447.jpeg" alt="Sebastian" className="tc-avatar" loading="lazy" decoding="async" />
                                <div className="tc-author-details">
                                    <span className="tc-name">Sebastian</span>
                                    <span className="tc-role">Founder of Canvas Freaks</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Linda */}
                    <div className="testi-card">
                        <div className="tc-video-wrapper">
                            <iframe src="https://www.youtube.com/embed/K0iYAuDzSVA" title="Client Testimonial for Linda" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        </div>
                        <div className="tc-content">
                            <svg className="tc-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="tc-quote-text">
                                "Linda, a business owner, captured previously lost leads and <b>dramatically increased appointments</b> by using SaleRev-Ai for instant, automated follow-ups."
                            </p>
                            <div className="tc-author">
                                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Linda" className="tc-avatar" loading="lazy" decoding="async" />
                                <div className="tc-author-details">
                                    <span className="tc-name">Linda</span>
                                    <span className="tc-role">Business Owner</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Deborah */}
                    <div className="testi-card">
                        <div className="tc-video-wrapper">
                            <iframe src="https://www.youtube.com/embed/n2ClOdFNN4g" title="Client Testimonial for Deborah" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        </div>
                        <div className="tc-content">
                            <svg className="tc-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="tc-quote-text">
                                "Deborah Williamson, CEO & Founder of Purity Wellness, achieved outstanding results with our database reactivation strategy generating <b>$247,000 in just 2 months.</b>"
                            </p>
                            <div className="tc-author">
                                <img src="https://storage.googleapis.com/msgsndr/gShNfLlJxL4QxP5QFBhr/media/68c20b1144a66350e626f0c3.jpeg" alt="Deborah Williamson" className="tc-avatar" loading="lazy" decoding="async" />
                                <div className="tc-author-details">
                                    <span className="tc-name">Deborah Williamson</span>
                                    <span className="tc-role">CEO of Purity Wellness</span>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                {/* Desktop Navigation Right */}
                <button className="nav-btn next" aria-label="Next testimonials" onClick={handleNext}>
                    <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
                <Link to="/book-demo" className="btn-primary" onClick={handleCtaClick}>
                    Get Results Like These
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>

        </div>
    </section>
  );
}
