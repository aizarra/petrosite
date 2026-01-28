import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import RedWipe from './sections/RedWipe';
import VideoCards from './sections/VideoCards';
import Footer from './sections/Footer';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const loadingLineRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Custom cursor
  useEffect(() => {
    // Check if touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Cursor animation
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: cursorPosition.x,
        y: cursorPosition.y,
        duration: 0.1,
        ease: 'power2.out',
      });
    }
  }, [cursorPosition]);

  // Loading animation
  useEffect(() => {
    const tl = gsap.timeline();

    // Loading line draws across screen
    tl.to(loadingLineRef.current, {
      width: '100%',
      duration: 1,
      ease: 'power2.inOut',
    });

    // Line expands to fill screen (red wipe)
    tl.to(loadingLineRef.current, {
      height: '100vh',
      duration: 0.5,
      ease: 'power2.inOut',
    });

    // Fade out loading screen
    tl.to(loadingLineRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setIsLoading(false),
    });
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [isLoading]);

  // Hero exit animation on scroll
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // Hero scale/opacity on scroll
      gsap.to('.hero-section', {
        scale: 0.9,
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <>
      {/* Loading screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
          <div 
            ref={loadingLineRef}
            className="loading-line"
            style={{ width: 0, height: '4px' }}
          />
        </div>
      )}

      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{ 
          left: 0, 
          top: 0,
          opacity: isLoading ? 0 : 1,
        }}
      />

      {/* Main content */}
      <main 
        ref={mainRef}
        className="relative bg-black"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}
      >
        {/* Hero Section */}
        <div className="hero-section">
          <Hero />
        </div>

        {/* Red Wipe Transition */}
        <div className="relative h-[100vh]">
          <RedWipe />
        </div>

        {/* Manifesto Section */}
        <Manifesto />

        {/* Video Cards Section */}
        <VideoCards />

        {/* Footer/CTA Section */}
        <Footer />
      </main>
    </>
  );
}

export default App;