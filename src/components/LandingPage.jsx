import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Problem from './Problem';
import Product from './Product';
import BusinessImpact from './BusinessImpact';
import WhyUs from './WhyUs';
import FAQ from './FAQ';
import AudioDemo from './AudioDemo';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Small delay to ensure the component is fully mounted and rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);
  return (
    <div className="app-container">
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <Product />
        <BusinessImpact />
        <WhyUs />
        <FAQ />
        <AudioDemo />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
