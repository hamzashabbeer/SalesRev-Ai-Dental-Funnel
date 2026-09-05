import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Problem from './Problem';
import Product from './Product';
import BusinessImpact from './BusinessImpact';
import WhyUs from './WhyUs';
import BackToTop from './BackToTop';

// Lazy load below-the-fold sections to optimize initial JS bundle
const FAQ = lazy(() => import('./FAQ'));
const AudioDemo = lazy(() => import('./AudioDemo'));
const Testimonials = lazy(() => import('./Testimonials'));
const FinalCTA = lazy(() => import('./FinalCTA'));
const Footer = lazy(() => import('./Footer'));

export default function LandingPage() {
  const { hash } = useLocation();

  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('final-cta');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <Header onCtaClick={scrollToCalendar} />
      <main id="main-content">
        <Hero onCtaClick={scrollToCalendar} />
        <Problem onCtaClick={scrollToCalendar} />
        <Product onCtaClick={scrollToCalendar} />
        <BusinessImpact onCtaClick={scrollToCalendar} />
        <WhyUs onCtaClick={scrollToCalendar} />
        <Suspense fallback={<div style={{ height: '400px' }} />}>
          <FAQ onCtaClick={scrollToCalendar} />
          <AudioDemo onCtaClick={scrollToCalendar} />
          <Testimonials onCtaClick={scrollToCalendar} />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ height: '300px' }} />}>
        <Footer />
      </Suspense>
      <BackToTop />
    </div>
  );
}
