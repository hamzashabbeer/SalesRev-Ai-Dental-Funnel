import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Problem from './Problem';
import Product from './Product';
import BusinessImpact from './BusinessImpact';
import WhyUs from './WhyUs';

// Lazy load below-the-fold sections to optimize initial JS bundle
const FAQ = lazy(() => import('./FAQ'));
const AudioDemo = lazy(() => import('./AudioDemo'));
const Testimonials = lazy(() => import('./Testimonials'));
const FinalCTA = lazy(() => import('./FinalCTA'));
const Footer = lazy(() => import('./Footer'));

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
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
        <Suspense fallback={<div style={{ height: '400px' }} />}>
          <FAQ />
          <AudioDemo />
          <Testimonials />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ height: '300px' }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
