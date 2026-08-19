import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import oSaathiyaImage from 'figma:asset/e0fd4211f28831f5564ae5eaa59c3c2b2558410d.png';
import naariImage from 'figma:asset/f1d53dc151557ac9bac222e482c04161e9281a6e.png';
import missionC1000Image from 'figma:asset/9ea955c97921b902a92aba0d4c7eaf7b3c07a05a.png';

export function FilmsPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const films = [
    {
      id: 1,
      title: "Mission C 1000",
      director: "Tejeshwar",
      role: "Background Score & One Song",
      status: "Upcoming",
      image: missionC1000Image
    },
    {
      id: 2,
      title: "O Saathiya",
      year: "2023",
      platform: "Amazon Prime",
      role: "Songs & Background Score",
      status: "Released",
      image: oSaathiyaImage
    },
    {
      id: 3,
      title: "Naari – The Women",
      year: "2024",
      platform: "IFFI Goa",
      role: "Songs & Background Score",
      status: "Released",
      image: naariImage
    },
  ];

  return (
    <section className="py-12 md:py-20 px-[20px] md:px-[35px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="font-['Jaro'] text-white text-[32px] md:text-[48px] leading-[0.8]" style={{ fontVariationSettings: "'opsz' 6" }}>
            FILMS
          </h2>
          <Link 
            to="/films" 
            className="font-['Inter'] text-neutral-400 hover:text-white transition-colors text-xs md:text-sm flex items-center gap-2"
          >
            View All
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path fill="currentColor" d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.536 10.354-3 3a.5.5 0 0 1-.707-.708L12.293 10 9.83 7.854a.5.5 0 0 1 .707-.708l3 3a.5.5 0 0 1 0 .708z"/>
            </svg>
          </Link>
        </div>
        
        {/* Mobile: Stack layout */}
        <div className="flex flex-col md:hidden gap-4">
          {films.map((film) => (
            <Link 
              key={film.id} 
              to="/films"
              className="relative rounded-lg overflow-hidden h-[300px]"
            >
              <ImageWithFallback
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-['Jaro'] ${
                  film.status === 'Upcoming' 
                    ? 'bg-blue-500/80 text-white' 
                    : 'bg-green-500/80 text-white'
                }`}>
                  {film.status}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-['Jaro'] text-white text-[28px] leading-[0.8] mb-3" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {film.title.toUpperCase()}
                </p>
                <p className="font-['Inter'] text-white leading-[1.5] mb-2 text-sm">
                  {film.director ? `Director: ${film.director}` : film.platform}
                </p>
                <p className="font-['Inter'] text-white/80 text-xs leading-[1.5]">
                  {film.role}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-[#3b3b3b] rounded-lg pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Desktop: Bento layout */}
        <div className="hidden md:flex gap-6 h-[479px]">
          {films.map((film) => (
            <Link 
              key={film.id} 
              to="/films"
              onMouseEnter={() => setHoveredId(film.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out"
              style={{
                flex: hoveredId === film.id ? '2' : hoveredId === null ? '1' : '0.6'
              }}
            >
              <ImageWithFallback
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-xs font-['Jaro'] ${
                  film.status === 'Upcoming' 
                    ? 'bg-blue-500/80 text-white' 
                    : 'bg-green-500/80 text-white'
                }`}>
                  {film.status}
                </span>
              </div>
              
              <div 
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                  hoveredId === film.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="font-['Jaro'] text-white text-[40px] leading-[0.8] mb-4" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {film.title.toUpperCase()}
                </p>
                <p className="font-['Inter'] text-white leading-[1.5] mb-2">
                  {film.director ? `Director: ${film.director}` : film.platform}
                </p>
                <p className="font-['Inter'] text-white/80 text-sm leading-[1.5]">
                  {film.role}
                </p>
              </div>
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === film.id ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="text-center px-4">
                  <p className="font-['Jaro'] text-white text-[28px] leading-[0.9]" style={{ fontVariationSettings: "'opsz' 6" }}>
                    {film.title.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-[#3b3b3b] rounded-lg pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}