import React, { useRef, useEffect } from 'react';

export default function Testimonials() {
  const trackRef = useRef(null);
  let autoScrollInterval = useRef(null);

  const getScrollAmount = () => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.querySelector('.testi-card');
    if (!card) return 0;
    const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 0;
    return card.offsetWidth + gap;
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (!trackRef.current) return;
      if (trackRef.current.scrollLeft + trackRef.current.clientWidth >= trackRef.current.scrollWidth - 10) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
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
    startAutoScroll();
    return () => {
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
                            <iframe src="https://www.youtube.com/embed/S-FauDEIgdM" title="Client Testimonial for Sebastian" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                            <iframe src="https://www.youtube.com/embed/aEtCpiksYjg" title="Client Testimonial for Linda" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                            <iframe src="https://www.youtube.com/embed/cVNqJ_NttrQ" title="Client Testimonial for Deborah" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

                    {/* Card 4: Betti */}
                    <div className="testi-card">
                        <div className="tc-video-wrapper">
                            <iframe src="https://www.youtube.com/embed/9F2XuPHVmxE" title="Client Testimonial for Betti" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="tc-content">
                            <svg className="tc-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="tc-quote-text">
                                "A business owner <b>increased their lead close rate by 43% in the first month</b> by using SaleRev-Ai to provide instant, 24/7 responses to customer inquiries."
                            </p>
                            <div className="tc-author">
                                <img src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Betti" className="tc-avatar" loading="lazy" decoding="async" />
                                <div className="tc-author-details">
                                    <span className="tc-name">Betti</span>
                                    <span className="tc-role">Business Owner</span>
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

        </div>
    </section>
  );
}
