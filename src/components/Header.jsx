import React from 'react';

export default function Header() {
  return (
    <header>
      
        <div className="nav-container">
            <a href="#" className="logo">
                <img src="https://wsrv.nl/?url=https://res.cloudinary.com/dvikl5pda/image/upload/q_auto/f_auto/v1778099095/69d93b139a68c417bdfb394d_rpm37n.png&w=245&output=webp&q=75" alt="SaleRev-Ai Logo" width="245" height="70" fetchpriority="high" decoding="sync" />
            </a>

            {/* Navigation Links (Centered) */}
            <div className="nav-menu">
                <nav className="nav-links">
                    <a href="#how-it-works">The Problem</a>
                    <a href="#product">The Solution</a>
                    <a href="#results">Impact</a>
                    <a href="#why-us">Why Us</a>
                    <a href="#faq">FAQ</a>
                </nav>
            </div>

            {/* Actions (Right) */}
            <div className="nav-actions">
                <a href="#demo" className="btn-nav-cta">Book a Demo</a>
                {/* Mobile Menu Toggle */}
                <input type="checkbox" id="nav-toggle" />
                <label htmlFor="nav-toggle" className="hamburger">
                    <span></span><span></span><span></span>
                </label>
            </div>
        </div>
    
    </header>
  );
}
