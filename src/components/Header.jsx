import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      
        <div className="nav-container">
            <Link to="/" className="logo">
                <img src="https://res.cloudinary.com/dvikl5pda/image/upload/v1784148593/logo-without-bg-white_rhu62f.png" alt="SaleRev-Ai Logo" width="245" height="70" fetchpriority="high" decoding="sync" />
            </Link>

            {/* Mobile Menu Toggle (Must be sibling of .nav-menu) */}
            <input type="checkbox" id="nav-toggle" />

            {/* Navigation Links (Centered) */}
            <div className="nav-menu">
                <nav className="nav-links">
                    <Link to="/#how-it-works">The Problem</Link>
                    <Link to="/#product">The Solution</Link>
                    <Link to="/#results">Impact</Link>
                    <Link to="/#why-us">Why Us</Link>
                    <Link to="/#faq">FAQ</Link>
                </nav>
            </div>

            {/* Actions (Right) */}
            <div className="nav-actions">
                <Link to="/book-demo" className="btn-nav-cta">Book a Demo</Link>
                {/* Mobile Menu Toggle */}
                <label htmlFor="nav-toggle" className="hamburger">
                    <span></span><span></span><span></span>
                </label>
            </div>
        </div>
    
    </header>
  );
}
