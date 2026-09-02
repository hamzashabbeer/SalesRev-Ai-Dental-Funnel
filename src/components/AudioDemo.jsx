import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AudioDemo({ onCtaClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCtaClick = (e) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };
  const [seconds, setSeconds] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setSeconds(audioRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setSeconds(0);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const playIcon = (
    <svg className="icon-play" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
  const pauseIcon = (
    <svg className="icon-pause" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 0 }}>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
    </svg>
  );

  return (
    <section className="section-audio">
        <div className="container">
            <div className="audio-layout-grid">
                
                {/* Left Side: Headings & Text */}
                <div className="audio-content">
                    <div className="eyebrow-red">Hear It In Action</div>
                    <h2>Afraid it will sound like a<br /><span className="highlight">robotic voicemail?</span></h2>
                    <p>Most dental practice owners fear that AI will sound "fake" or mess up during a call. Our agents are built differently. They are so natural, empathetic, and dental-aware that your patients might never even realize they're talking to an AI.</p>
                    <div style={{ marginTop: '2.5rem' }}>
                        <Link to="/book-demo" className="btn-primary" onClick={handleCtaClick}>
                            Test My Own Inbound Flow
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Side: Professional Card UI */}
                <div className="audio-visual">
                    
                    <div className="demo-card">
                        
                        {/* Card Image Top */}
                        <div className="dc-image">
                            <img src="https://res.cloudinary.com/dvikl5pda/image/upload/q_auto/f_auto/v1783710130/forth_section_image_u3os1d.webp" alt="Staff smiling" loading="lazy" decoding="async" />
                            <div className="dc-duration-tag">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                1:42
                            </div>
                        </div>

                        {/* Card Player Content Bottom */}
                        <div className="dc-content">
                            
                            <div className="dc-header">
                                <div className="dc-title-group">
                                    <div className="dc-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
                                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                            <line x1="12" y1="19" x2="12" y2="22"></line>
                                        </svg>
                                    </div>
                                    <div className="dc-text">
                                        <h4>New Patient Booking Call</h4>
                                        <p>Unedited AI Recording</p>
                                    </div>
                                </div>
                                <div className="dc-badge">Live Demo</div>
                            </div>

                            <div className="dc-player-ui">
                                <audio 
                                    ref={audioRef}
                                    src="https://storage.googleapis.com/synthflow-website-assets/Dental%20(Healthcare).mp3"
                                    preload="none"
                                    onTimeUpdate={handleTimeUpdate}
                                    onEnded={handleEnded}
                                />
                                {/* Circular Play Button */}
                                <button 
                                  className="play-btn" 
                                  onClick={togglePlay}
                                  aria-label="Play Audio"
                                >
                                    {isPlaying ? pauseIcon : playIcon}
                                </button>

                                <div className="waveform-wrapper">
                                    {/* Ultra-thin waveform bars */}
                                    <div className={`fine-waveform ${isPlaying ? 'is-playing' : ''}`}>
                                        <div className="wave-line played" style={{ height: '20%' }}></div>
                                        <div className="wave-line played" style={{ height: '40%' }}></div>
                                        <div className="wave-line played" style={{ height: '70%' }}></div>
                                        <div className="wave-line played" style={{ height: '30%' }}></div>
                                        <div className="wave-line played" style={{ height: '90%' }}></div>
                                        <div className="wave-line played" style={{ height: '50%' }}></div>
                                        <div className="wave-line played" style={{ height: '20%' }}></div>
                                        <div className="wave-line played" style={{ height: '60%' }}></div>
                                        <div className="wave-line" style={{ height: '80%' }}></div>
                                        <div className="wave-line" style={{ height: '40%' }}></div>
                                        <div className="wave-line" style={{ height: '20%' }}></div>
                                        <div className="wave-line" style={{ height: '50%' }}></div>
                                        <div className="wave-line" style={{ height: '90%' }}></div>
                                        <div className="wave-line" style={{ height: '70%' }}></div>
                                        <div className="wave-line" style={{ height: '30%' }}></div>
                                        <div className="wave-line" style={{ height: '60%' }}></div>
                                        <div className="wave-line" style={{ height: '100%' }}></div>
                                        <div className="wave-line" style={{ height: '80%' }}></div>
                                        <div className="wave-line" style={{ height: '40%' }}></div>
                                        <div className="wave-line" style={{ height: '20%' }}></div>
                                        <div className="wave-line" style={{ height: '50%' }}></div>
                                        <div className="wave-line" style={{ height: '90%' }}></div>
                                        <div className="wave-line" style={{ height: '60%' }}></div>
                                        <div className="wave-line" style={{ height: '30%' }}></div>
                                        <div className="wave-line" style={{ height: '10%' }}></div>
                                        <div className="wave-line" style={{ height: '40%' }}></div>
                                        <div className="wave-line" style={{ height: '70%' }}></div>
                                        <div className="wave-line" style={{ height: '100%' }}></div>
                                        <div className="wave-line" style={{ height: '80%' }}></div>
                                        <div className="wave-line" style={{ height: '50%' }}></div>
                                        <div className="wave-line" style={{ height: '20%' }}></div>
                                        <div className="wave-line" style={{ height: '60%' }}></div>
                                        <div className="wave-line" style={{ height: '90%' }}></div>
                                        <div className="wave-line" style={{ height: '40%' }}></div>
                                        <div className="wave-line" style={{ height: '20%' }}></div>
                                        <div className="wave-line" style={{ height: '50%' }}></div>
                                        <div className="wave-line" style={{ height: '80%' }}></div>
                                        <div className="wave-line" style={{ height: '60%' }}></div>
                                        <div className="wave-line" style={{ height: '30%' }}></div>
                                        <div className="wave-line" style={{ height: '50%' }}></div>
                                    </div>
                                    <div className="player-time">
                                        <span>{formatTime(seconds)}</span>
                                        <span>1:42</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  );
}
