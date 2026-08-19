import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import oSaathiyaImage from 'figma:asset/e0fd4211f28831f5564ae5eaa59c3c2b2558410d.png';
import naariImage from 'figma:asset/f1d53dc151557ac9bac222e482c04161e9281a6e.png';
import gZombieImage from 'figma:asset/fc8acd558b8f791c27c2bfd490757eca9cb0b048.png';
import lifeStoriesImage from 'figma:asset/7f03bb12987f07d5f29b9db636f0db17c65b6326.png';

export function DiscographyPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const releases = [
    {
      id: 1,
      title: "O Saathiya",
      info: "5 Songs",
      year: "2023",
      description: "Telugu Film on Amazon Prime",
      image: oSaathiyaImage
    },
    {
      id: 2,
      title: "Naari – The Women",
      info: "5 Songs",
      year: "2024",
      description: "IFFI Goa Official Selection",
      image: naariImage
    },
    {
      id: 3,
      title: "G Zombie",
      info: "2 Songs",
      year: "2021",
      description: "Amazon Prime & Airtel Xtreme",
      image: gZombieImage
    },
    {
      id: 4,
      title: "#LifeStories",
      info: "Background Score",
      year: "2023",
      description: "Six Shorts on ETV Win",
      image: lifeStoriesImage
    },
  ];

  return (
    <section className="py-12 md:py-20 px-[20px] md:px-[35px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="font-['Jaro'] text-white text-[32px] md:text-[48px] leading-[0.8]" style={{ fontVariationSettings: "'opsz' 6" }}>
            DISCOGRAPHY
          </h2>
          <Link 
            to="/discography" 
            className="font-['Inter'] text-neutral-400 hover:text-white transition-colors text-xs md:text-sm flex items-center gap-2"
          >
            View All
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path fill="currentColor" d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.536 10.354-3 3a.5.5 0 0 1-.707-.708L12.293 10 9.83 7.854a.5.5 0 0 1 .707-.708l3 3a.5.5 0 0 1 0 .708z"/>
            </svg>
          </Link>
        </div>
        
        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 md:hidden gap-3">
          {releases.map((release) => (
            <Link 
              key={release.id} 
              to="/discography"
              className="relative rounded-lg overflow-hidden h-[180px]"
            >
              <ImageWithFallback
                src={release.image}
                alt={release.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col justify-center px-3">
                <p className="font-['Jaro'] text-white text-[16px] leading-[0.9] mb-2" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {release.title.toUpperCase()}
                </p>
                <p className="font-['Inter'] text-white/90 text-[10px] mb-1">
                  {release.info} • {release.year}
                </p>
                <p className="font-['Inter'] text-white/80 text-[9px] line-clamp-2">
                  {release.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-[#3b3b3b] rounded-lg pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Desktop: Bento layout */}
        <div className="hidden md:flex gap-6 h-[230px]">
          {releases.map((release) => (
            <Link 
              key={release.id} 
              to="/discography"
              onMouseEnter={() => setHoveredId(release.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out"
              style={{
                flex: hoveredId === release.id ? '2' : hoveredId === null ? '1' : '0.7'
              }}
            >
              <ImageWithFallback
                src={release.image}
                alt={release.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div 
                className={`absolute inset-0 flex flex-col justify-center px-6 transition-all duration-500 ${
                  hoveredId === release.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-['Jaro'] text-white text-[32px] leading-[0.8] mb-3" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {release.title.toUpperCase()}
                </p>
                <p className="font-['Inter'] text-white/90 text-sm mb-1">
                  {release.info} • {release.year}
                </p>
                <p className="font-['Inter'] text-white/80 text-sm">
                  {release.description}
                </p>
              </div>
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === release.id ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <p className="font-['Jaro'] text-white text-[20px]" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {release.title.toUpperCase()}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-[#3b3b3b] rounded-lg pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}