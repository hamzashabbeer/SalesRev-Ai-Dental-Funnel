import React, { useRef, useEffect, useState } from 'react';

export default function Testimonials() {
  const [playingId, setPlayingId] = useState(null);
  const trackRef = useRef(null);
  const scrollAmountRef = useRef(0);
  let autoScrollInterval = useRef(null);

  const testimonials = [
    {
      id: "S-FauDEIgdM",
      title: "Sebastian",
      role: "Founder of Canvas Freaks",
      quote: "Sebastian, Founder of Canvas Freaks, leveraged our partnership to <b>more than double his revenue in one year</b>, jumping from a stagnant <b>$1.5 million to $3.2 million.</b>",
      avatar: "https://wsrv.nl/?url=https://storage.googleapis.com/msgsndr/gShNfLlJxL4QxP5QFBhr/media/68d72665dd639f6767374447.jpeg&w=120&output=webp&q=70"
    },
    {
      id: "aEtCpiksYjg",
      title: "Linda",
      role: "Business Owner",
      quote: "Linda, a business owner, captured previously lost leads and <b>dramatically increased appointments</b> by using SaleRev-Ai for instant, automated follow-ups.",
      avatar: "https://wsrv.nl/?url=https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&w=120&output=webp&q=70"
    },
    {
      id: "cVNqJ_NttrQ",
      title: "Deborah Williamson",
      role: "CEO of Purity Wellness",
      quote: "Deborah Williamson, CEO & Founder of Purity Wellness, achieved outstanding results with our database reactivation strategy generating <b>$247,000 in just 2 months.</b>",
      avatar: "https://wsrv.nl/?url=https://storage.googleapis.com/msgsndr/gShNfLlJxL4QxP5QFBhr/media/68c20b1144a66350e626f0c3.jpeg&w=120&output=webp&q=70"
    },
    {
      id: "9F2XuPHVmxE",
      title: "Betti",
      role: "Business Owner",
      quote: "A business owner <b>increased their lead close rate by 43% in the first month</b> by using SaleRev-Ai to provide instant, 24/7 responses to customer inquiries.",
      avatar: "https://wsrv.nl/?url=https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&w=120&output=webp&q=70"
    }
  ];

  const updateScrollAmount = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.testi-card');
    if (!card) return;
    const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 0;
    scrollAmountRef.current = card.offsetWidth + gap;
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -scrollAmountRef.current, behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: scrollAmountRef.current, behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (!trackRef.current || playingId) return;
      if (trackRef.current.scrollLeft + trackRef.current.clientWidth >= trackRef.current.scrollWidth - 10) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: scrollAmountRef.current, behavior: 'smooth' });
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
    window.addEventListener('resize', updateScrollAmount);
    startAutoScroll();
    return () => {
      window.removeEventListener('resize', updateScrollAmount);
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [playingId]);

  return (
    <section className="section-testimonials">
        <div className="container">
            <div className="header-wrapper">
                <div className="eyebrow-red">Proven Results</div>
                <h2>Don't just <span className="highlight">take our word</span> for it</h2>
            </div>

            <div className="carousel-wrapper">
                {/* Desktop Navigation Left */}
                <button className="nav-btn prev" aria-label="Show previous testimonial" onClick={handlePrev}>
                    <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                {/* Scrollable Track */}
                <div 
                  className="carousel-track" 
                  ref={trackRef}
                  onMouseEnter={() => clearInterval(autoScrollInterval.current)}
                  onMouseLeave={startAutoScroll}
                >
                    {testimonials.map((testi, index) => (
                      <div className="testi-card" key={index}>
                          <div className="tc-video-wrapper">
                              {playingId === testi.id ? (
                                <iframe 
                                  src={`https://www.youtube.com/embed/${testi.id}?autoplay=1`} 
                                  title={`Client Testimonial for ${testi.title}`} 
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                  allowFullScreen
                                ></iframe>
                              ) : (
                                <div className="video-facade" onClick={() => { setPlayingId(testi.id); clearInterval(autoScrollInterval.current); }}>
                                    <img 
                                      src={`https://wsrv.nl/?url=https://img.youtube.com/vi/${testi.id}/maxresdefault.jpg&w=600&output=webp&q=70`} 
                                      alt={`${testi.title} Video Thumbnail`} 
                                      loading="lazy"
                                    />
                                    <div className="play-button-overlay">
                                        <svg viewBox="0 0 24 24" fill="white">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                              )}
                          </div>
                          <div className="tc-content">
                              <svg className="tc-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                              <p className="tc-quote-text" dangerouslySetInnerHTML={{ __html: testi.quote }}></p>
                              <div className="tc-author">
                                  <img 
                                      src={testi.avatar} 
                                      alt={testi.title} 
                                      width="60" 
                                      height="60" 
                                      className="tc-avatar" 
                                      loading="lazy" 
                                      decoding="async" 
                                  />
                                  <div className="tc-author-details">
                                      <span className="tc-name">{testi.title}</span>
                                      <span className="tc-role">{testi.role}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                    ))}
                </div>

                {/* Desktop Navigation Right */}
                <button className="nav-btn next" aria-label="Show next testimonial" onClick={handleNext}>
                    <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    </section>
  );
}
