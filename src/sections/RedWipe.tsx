import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RedWipe = () => {
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wipeRef.current,
          start: 'top top',
          end: '+=80%',
          pin: true,
          scrub: 0.3,
        }
      });

      // Entrance: Red expands from left
      tl.fromTo(wipeRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: 'none', transformOrigin: 'left center' }
      );

      // Hold the red screen
      tl.to(wipeRef.current,
        { duration: 0.2 }
      );

      // Exit: Red contracts to right
      tl.to(wipeRef.current,
        { scaleX: 0, duration: 0.4, ease: 'none', transformOrigin: 'right center' }
      );
    }, wipeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={wipeRef}
      className="red-wipe will-change-transform"
      style={{ transform: 'scaleX(0)' }}
    />
  );
};

export default RedWipe;