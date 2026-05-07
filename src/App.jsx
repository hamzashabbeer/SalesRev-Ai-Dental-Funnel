import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Product from './components/Product';
import BusinessImpact from './components/BusinessImpact';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import AudioDemo from './components/AudioDemo';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main id="main-content" aria-label="Main content">
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
