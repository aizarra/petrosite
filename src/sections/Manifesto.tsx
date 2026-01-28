import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const namesRef = useRef<HTMLDivElement>(null);
  const legacyRef = useRef<HTMLParagraphElement>(null);
  const unityRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Red accent line animation
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 100%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Quote animation
      gsap.fromTo(quoteRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Names animation
      if (namesRef.current) {
        const names = namesRef.current.querySelectorAll('.name');
        gsap.fromTo(names,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: namesRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Legacy text animation
      gsap.fromTo(legacyRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: legacyRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Unity quote animation
      if (unityRef.current) {
        const lines = unityRef.current.querySelectorAll('.unity-line');
        gsap.fromTo(lines,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: unityRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Closing lines animation
      if (closingRef.current) {
        const lines = closingRef.current.querySelectorAll('.closing-line');
        gsap.fromTo(lines,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: closingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Button animation
      gsap.fromTo(buttonRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex items-center py-32 z-20"
    >
      <div
        ref={contentRef}
        className="w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-20"
      >
        <div className="flex gap-8 md:gap-12">
          {/* Red accent line */}
          <div
            ref={lineRef}
            className="red-accent-line flex-shrink-0 origin-top will-change-transform"
            style={{ height: 'auto', minHeight: '200px' }}
          />

          {/* Manifesto content */}
          <div className="flex-1 space-y-12">
            {/* Title */}
            <div>
              <h2
                ref={titleRef}
                className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wider leading-tight will-change-transform"
              >
                Manifiesto por la Soberanía Petrolera de Venezuela
              </h2>
              <p
                ref={subtitleRef}
                className="mt-4 font-body text-xl md:text-2xl text-white/70 italic will-change-transform"
              >
                Un llamado a la nación en defensa de nuestro futuro
              </p>
            </div>

            {/* Separator */}
            <div className="w-16 h-px bg-protest-red" />

            {/* Main quote */}
            <p
              ref={quoteRef}
              className="font-body text-2xl md:text-3xl lg:text-4xl text-protest-red font-medium leading-relaxed will-change-transform"
            >
              "Nos están robando el futuro a puertas cerradas."
            </p>

            {/* Separator */}
            <div className="w-16 h-px bg-white/30" />

            {/* Historical names */}
            <div ref={namesRef} className="space-y-2">
              <p className="name font-heading text-xl md:text-2xl text-white/90 will-change-transform">
                Gumersindo Torres. Uslar Pietri. Pérez Alfonzo.
              </p>
              <p className="name font-heading text-xl md:text-2xl text-white/90 will-change-transform">
                Betancourt. Chávez.
              </p>
            </div>

            <p
              ref={legacyRef}
              className="font-body text-lg md:text-xl text-white/80 leading-relaxed will-change-transform"
            >
              Un siglo de soberanía petrolera construida por generaciones de venezolanos.
            </p>

            {/* Separator */}
            <div className="w-16 h-px bg-white/30" />

            {/* Unity quote */}
            <div ref={unityRef} className="space-y-3">
              <p className="unity-line font-body text-xl md:text-2xl text-white leading-relaxed will-change-transform">
                "Este manifiesto no es de izquierda ni de derecha.
              </p>
              <p className="unity-line font-body text-xl md:text-2xl text-white leading-relaxed will-change-transform">
                No es chavista ni antichavista.
              </p>
              <p className="unity-line font-body text-xl md:text-2xl text-white font-semibold leading-relaxed will-change-transform">
                Es venezolano."
              </p>
            </div>

            {/* Separator */}
            <div className="w-16 h-px bg-white/30" />

            {/* Closing */}
            <div ref={closingRef} className="space-y-2">
              <p className="closing-line font-heading text-xl md:text-2xl text-white uppercase tracking-wide will-change-transform">
                Por la soberanía petrolera.
              </p>
              <p className="closing-line font-heading text-xl md:text-2xl text-white uppercase tracking-wide will-change-transform">
                Por el futuro de nuestros hijos.
              </p>
              <p className="closing-line font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide font-bold will-change-transform">
                Por Venezuela.
              </p>
            </div>

            {/* CTA Button */}
            <div ref={buttonRef} className="pt-8 will-change-transform">
              <Link
                to="/manifiesto"
                className="group inline-flex items-center gap-3 bg-protest-red hover:bg-red-700 text-white font-heading text-lg md:text-xl uppercase tracking-wider px-8 py-4 transition-all duration-300"
              >
                <span>Leer el manifiesto completo</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
