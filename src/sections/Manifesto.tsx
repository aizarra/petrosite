import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal animation
      gsap.fromTo(contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Red accent line animation
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Text word-by-word reveal
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.word');
        gsap.fromTo(words,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.03,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const manifestoText = "La reforma de la ley de hidrocarburos es un ataque directo a la soberanía nacional. No permitiremos que nuestros recursos sean entregados a intereses extranjeros. El petróleo es la sangre de Venezuela, y su control debe permanecer en manos venezolanas.";
  
  const words = manifestoText.split(' ');

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex items-center py-20 z-20"
    >
      <div 
        ref={contentRef}
        className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 will-change-transform"
      >
        <div className="flex gap-8 md:gap-12">
          {/* Red accent line */}
          <div 
            ref={lineRef}
            className="red-accent-line flex-shrink-0 origin-top will-change-transform"
            style={{ height: 'auto', minHeight: '200px' }}
          />
          
          {/* Manifesto text */}
          <div className="flex-1">
            <p 
              ref={textRef}
              className="manifesto-text text-white leading-relaxed"
            >
              {words.map((word, index) => (
                <span key={index} className="word inline-block mr-[0.3em] will-change-transform">
                  {word}
                </span>
              ))}
            </p>
            
            {/* Additional manifesto points */}
            <div className="mt-16 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-protest-red flex-shrink-0 mt-2" />
                <p className="font-body text-lg md:text-xl text-white/90">
                  Defenderemos el derecho del pueblo venezolano a controlar sus recursos naturales.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-protest-red flex-shrink-0 mt-2" />
                <p className="font-body text-lg md:text-xl text-white/90">
                  Rechazamos cualquier intento de privatización de nuestra industria petrolera.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-protest-red flex-shrink-0 mt-2" />
                <p className="font-body text-lg md:text-xl text-white/90">
                  La historia nos enseña: el petróleo es de la nación, no de corporaciones extranjeras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;