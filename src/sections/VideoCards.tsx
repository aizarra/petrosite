import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface VideoCardProps {
  title: string;
  image: string;
  borderColor: 'red' | 'white';
  index: number;
}

const VideoCard = ({ title, image, borderColor, index }: VideoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`video-card relative overflow-hidden cursor-pointer will-change-transform ${
        borderColor === 'red' ? 'border-protest-red' : 'border-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Dark overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isHovered ? 'opacity-60' : 'opacity-40'
        }`} />
        
        {/* Play button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            borderColor === 'red' 
              ? 'bg-protest-red' 
              : 'bg-white'
          }`}>
            <Play 
              className={`w-6 h-6 md:w-8 md:h-8 ml-1 ${
                borderColor === 'red' ? 'text-white' : 'text-black'
              }`} 
              fill="currentColor"
            />
          </div>
        </div>
      </div>
      
      {/* Title */}
      <div className="p-4 md:p-6 bg-black">
        <h3 className={`card-title ${
          borderColor === 'red' ? 'text-protest-red' : 'text-white'
        }`}>
          {title}
        </h3>
      </div>
    </div>
  );
};

const VideoCards = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      title: 'LA VERDAD',
      image: '/thumb_verdad.jpg',
      borderColor: 'red' as const,
    },
    {
      title: 'LAS MENTIRAS',
      image: '/thumb_mentiras.jpg',
      borderColor: 'white' as const,
    },
    {
      title: 'LA LUCHA',
      image: '/thumb_lucha.jpg',
      borderColor: 'red' as const,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      className="relative min-h-screen w-full bg-black py-20 z-40"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section header */}
        <div ref={headerRef} className="mb-12 md:mb-16 will-change-transform">
          <h2 className="section-heading text-white">
            DOCUMENTALES
          </h2>
          <p className="font-body text-muted-grey mt-4 text-lg">
            Conoce la verdad detrás de la reforma
          </p>
        </div>
        
        {/* Video cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.title}
              title={video.title}
              image={video.image}
              borderColor={video.borderColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCards;