import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function GalleryPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      title: "Studio Session",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY0NzU2NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Live Performance",
      image: "https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Collaboration",
      image: "https://images.unsplash.com/photo-1761652556225-1425a7c36247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbGxhYm9yYXRpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Composition",
      image: "https://images.unsplash.com/photo-1672847900994-3bf37a83357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG5vdGVzJTIwY29tcG9zaXRpb258ZW58MXx8fHwxNzY0NzU3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <section className="py-12 md:py-20 px-[20px] md:px-[35px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="font-['Jaro'] text-white text-[32px] md:text-[48px] leading-[0.8]" style={{ fontVariationSettings: "'opsz' 6" }}>
            GALLERY
          </h2>
          <Link 
            to="/gallery" 
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
          {images.map((image) => (
            <Link 
              key={image.id} 
              to="/gallery"
              className="relative rounded-lg overflow-hidden h-[150px]"
            >
              <ImageWithFallback
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-['Jaro'] text-white text-[14px] text-center px-2" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {image.title.toUpperCase()}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-[#3b3b3b] rounded-lg pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Desktop: Bento layout */}
        <div className="hidden md:flex gap-6 h-[230px]">
          {images.map((image) => (
            <Link 
              key={image.id} 
              to="/gallery"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out"
              style={{
                flex: hoveredId === image.id ? '2' : hoveredId === null ? '1' : '0.7'
              }}
            >
              <ImageWithFallback
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div 
                className={`absolute inset-0 flex flex-col justify-center px-6 transition-all duration-500 ${
                  hoveredId === image.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-['Jaro'] text-white text-[32px] leading-[0.8]" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {image.title.toUpperCase()}
                </p>
              </div>
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === image.id ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <p className="font-['Jaro'] text-white text-[20px]" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {image.title.toUpperCase()}
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