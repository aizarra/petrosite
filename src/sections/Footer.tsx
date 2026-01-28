import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Twitter, Instagram, Facebook, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [showShareMessage, setShowShareMessage] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(headlineRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Button reveal
      gsap.fromTo(buttonRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Social icons reveal
      gsap.fromTo(socialsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleShare = () => {
    setShowShareMessage(true);
    setTimeout(() => setShowShareMessage(false), 3000);
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 z-50"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        {/* Main headline */}
        <h2 
          ref={headlineRef}
          className="section-heading text-white mb-12 will-change-transform"
        >
          DEFENDAMOS<br />
          <span className="text-protest-red">EL FUTURO</span>
        </h2>
        
        {/* CTA Button */}
        <button 
          ref={buttonRef}
          className="cta-button will-change-transform"
          onClick={() => alert('¡Gracias por tu apoyo! La petición estará disponible pronto.')}
        >
          FIRMA LA PETICION
        </button>
        
        {/* Share message */}
        {showShareMessage && (
          <div className="mt-4 text-protest-red font-body animate-pulse">
            ¡Enlace copiado! Comparte con tus contactos.
          </div>
        )}
        
        {/* Social icons */}
        <div 
          ref={socialsRef}
          className="mt-16 flex items-center justify-center gap-6 will-change-transform"
        >
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 flex items-center justify-center border-2 border-white/30 text-white/60 hover:border-protest-red hover:text-protest-red transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <button
            onClick={handleShare}
            aria-label="Compartir"
            className="w-12 h-12 flex items-center justify-center border-2 border-white/30 text-white/60 hover:border-protest-red hover:text-protest-red transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        
        {/* Footer text */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="font-body text-sm text-muted-grey">
            Movimiento por la Soberanía Hidrocarburífera
          </p>
          <p className="font-body text-xs text-muted-grey/60 mt-2">
            Venezuela {new Date().getFullYear()}
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-protest-red to-transparent opacity-50" />
    </section>
  );
};

export default Footer;