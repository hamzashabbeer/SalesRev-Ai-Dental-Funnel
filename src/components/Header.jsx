import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ onCtaClick }) {
  const location = useLocation();

  const handleCtaClick = (e) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      
        <div className="nav-container">
            <Link to="/" className="logo" onClick={handleLogoClick}>
                <img src="https://res.cloudinary.com/dvikl5pda/image/upload/c_scale,w_500,f_auto,q_auto/v1784148593/logo-without-bg-white_rhu62f.png" alt="SaleRev-Ai Logo" width="245" height="70" fetchPriority="high" decoding="sync" />
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
                    <a href="https://app.salerevai.com/" target="_blank" rel="noopener noreferrer" className="mobile-login-link">Login</a>
                </nav>
            </div>
 
            {/* Actions (Right) */}
            <div className="nav-actions">
                <a href="https://app.salerevai.com/" target="_blank" rel="noopener noreferrer" className="btn-nav-login">Login</a>
                <Link to="/book-demo" className="btn-nav-cta" onClick={handleCtaClick}>Book a Demo</Link>
                {/* Mobile Menu Toggle */}
                <label htmlFor="nav-toggle" className="hamburger">
                    <span></span><span></span><span></span>
                </label>
            </div>
        </div>
    
    </header>
  );
}
