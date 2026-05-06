import React from 'react';

export default function Header() {
  return (
    <header>
      
        <div className="nav-container">
            <a href="#" className="logo">
                <img src="https://res.cloudinary.com/dvikl5pda/image/upload/v1777923479/Pink-White-Modern-Artificial-Intelligence-Logo-1_1_k2nhbu.webp" alt="SaleRev-Ai Logo" />
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
