import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SocialProof from './components/SocialProof';

// Lazy load secondary routes to reduce initial JS bundle size
const QuickDemo = lazy(() => import('./components/QuickDemo'));
const ThankYou = lazy(() => import('./components/ThankYou'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div style={{ background: '#0D1F3C', height: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/book-demo" element={<QuickDemo />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>
      <SocialProof />
    </>
  );
}
