import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(line1Ref.current, 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.8, ease: 'expo.out' }
      )
      .fromTo(line2Ref.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.8, ease: 'expo.out' },
        '-=0.6'
      )
      .fromTo(line3Ref.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.8, ease: 'expo.out' },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden z-10"
    >
      <div className="w-full px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center">
          {/* Line 1: EL PETROLEO */}
          <div className="overflow-hidden">
            <div
              ref={line1Ref}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white will-change-transform"
            >
              EL PETROLEO
            </div>
          </div>

          {/* Line 2: ES DE LOS */}
          <div className="overflow-hidden">
            <div
              ref={line2Ref}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white will-change-transform"
            >
              ES DE LOS
            </div>
          </div>

          {/* Line 3: VENEZOLANOS (Red) */}
          <div className="overflow-hidden">
            <div
              ref={line3Ref}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-protest-red will-change-transform"
            >
              VENEZOLANOS
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle grain overlay for texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
};

export default Hero;