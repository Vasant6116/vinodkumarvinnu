import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExternalLink, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import mayaImage from 'figma:asset/6ed5f41a4ba2dabb2588790ff0470c92e9b71d69.png';
import lifeStoriesImage from 'figma:asset/7f03bb12987f07d5f29b9db636f0db17c65b6326.png';
import oSaathiyaImage from 'figma:asset/e0fd4211f28831f5564ae5eaa59c3c2b2558410d.png';
import naariImage from 'figma:asset/f1d53dc151557ac9bac222e482c04161e9281a6e.png';
import gZombieImage from 'figma:asset/fc8acd558b8f791c27c2bfd490757eca9cb0b048.png';
import missionC1000Image from 'figma:asset/9ea955c97921b902a92aba0d4c7eaf7b3c07a05a.png';


import { MusicPlayer } from '../components/MusicPlayer';

function FilmDetailView({ film, onBack }: { film: any, onBack: () => void }) {
  return (
    <div className="animate-in fade-in duration-500">
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
        <span className="font-['Inter'] uppercase tracking-widest text-sm">Back to Films</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[2/3]">
            <ImageWithFallback src={film.image} alt={film.title} className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-['Jaro'] text-white text-[48px] md:text-[80px] leading-[0.8] mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
            {film.title.toUpperCase()}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 font-['Inter'] text-neutral-400 text-sm mb-8">
            {film.year && <span>{film.year}</span>}
            {film.year && film.genre && <span>•</span>}
            {film.genre && <span>{film.genre}</span>}
            {film.platform && <span>• {film.platform}</span>}
          </div>

          <div className="space-y-6 font-['Inter'] text-neutral-300">
            <p className="text-lg text-white font-medium">{film.role}</p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#3b3b3b]">
              {film.director && (
                <div>
                  <h4 className="text-[#D4AF37] font-['Jaro'] mb-1">DIRECTOR</h4>
                  <p>{film.director}</p>
                </div>
              )}
              {film.story && (
                <div>
                  <h4 className="text-[#D4AF37] font-['Jaro'] mb-1">STORY</h4>
                  <p>{film.story}</p>
                </div>
              )}
              {film.producer && (
                <div>
                  <h4 className="text-[#D4AF37] font-['Jaro'] mb-1">PRODUCER</h4>
                  <p>{film.producer}</p>
                </div>
              )}
            </div>

            {film.aboutComposition && (
              <div className="pt-6 border-t border-[#3b3b3b]">
                <h4 className="text-[#D4AF37] font-['Jaro'] text-xl mb-3">STORY BEHIND THE COMPOSITION</h4>
                <p className="leading-relaxed">{film.aboutComposition}</p>
              </div>
            )}
          </div>
          
          {film.songs && film.songs.length > 0 && (
            <div className="mt-12">
              <h4 className="text-[#D4AF37] font-['Jaro'] text-2xl mb-6">SOUNDTRACK</h4>
              <MusicPlayer
                songs={film.songs}
                albumTitle={film.title}
                albumYear={film.year}
                albumType={film.genre || "Film Score"}
                albumArt={film.image}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState<any>(null);
  const [currentUpcomingIndex, setCurrentUpcomingIndex] = useState(0);
  const [currentReleasedIndex, setCurrentReleasedIndex] = useState(0);
  const [isDraggingUpcoming, setIsDraggingUpcoming] = useState(false);
  const [isDraggingReleased, setIsDraggingReleased] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const upcomingCarouselRef = useRef<HTMLDivElement>(null);
  const releasedCarouselRef = useRef<HTMLDivElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll carousel every 5 seconds for upcoming films
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDraggingUpcoming) {
        setCurrentUpcomingIndex((prev) => (prev + 1) % upcomingFilms.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDraggingUpcoming]);

  // Auto-scroll carousel every 5 seconds for released films (offset by 2.5s)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDraggingReleased) {
        setCurrentReleasedIndex((prev) => (prev + 1) % releasedFilms.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDraggingReleased]);

  const handlePrevUpcoming = () => {
    setCurrentUpcomingIndex((prev) => (prev - 1 + upcomingFilms.length) % upcomingFilms.length);
  };

  const handleNextUpcoming = () => {
    setCurrentUpcomingIndex((prev) => (prev + 1) % upcomingFilms.length);
  };

  const handlePrevReleased = () => {
    setCurrentReleasedIndex((prev) => (prev - 1 + releasedFilms.length) % releasedFilms.length);
  };

  const handleNextReleased = () => {
    setCurrentReleasedIndex((prev) => (prev + 1) % releasedFilms.length);
  };

  // Drag handlers for upcoming carousel
  const handleUpcomingDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDraggingUpcoming(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleUpcomingDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingUpcoming) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleUpcomingDragEnd = () => {
    if (!isDraggingUpcoming) return;
    setIsDraggingUpcoming(false);
    
    if (dragOffset > 100) {
      handlePrevUpcoming();
    } else if (dragOffset < -100) {
      handleNextUpcoming();
    }
    
    setDragOffset(0);
  };

  // Drag handlers for released carousel
  const handleReleasedDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDraggingReleased(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleReleasedDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingReleased) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleReleasedDragEnd = () => {
    if (!isDraggingReleased) return;
    setIsDraggingReleased(false);
    
    if (dragOffset > 100) {
      handlePrevReleased();
    } else if (dragOffset < -100) {
      handleNextReleased();
    }
    
    setDragOffset(0);
  };

  const getVisibleUpcomingFilms = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentUpcomingIndex + i + upcomingFilms.length) % upcomingFilms.length;
      items.push({ ...upcomingFilms[index], position: i });
    }
    return items;
  };

  const getVisibleReleasedFilms = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentReleasedIndex + i + releasedFilms.length) % releasedFilms.length;
      items.push({ ...releasedFilms[index], position: i });
    }
    return items;
  };

  const upcomingFilms = [
    {
      id: 1,
      title: "Jaanu Forever",
      director: "Rehman",
      role: "Songs & Background Score",
      story: "Story by Aryan Gowra",
      image: "https://images.unsplash.com/photo-1709832279012-293766967250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2V0JTIwY2luZW1hfGVufDF8fHx8MTc2NDc1NzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Mission C 1000",
      director: "Tejeshwar (Directed & Produced)",
      role: "Background Score & One Song",
      genre: "Action Thriller",
      image: missionC1000Image
    },
    {
      id: 3,
      title: "Nawab",
      director: "Ravi Charan (Nallamala Fame)",
      role: "Background Score",
      genre: "Action Thriller",
      image: "https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Production No. 3",
      director: "Ravi Charan (Nallamala Fame)",
      role: "Background Score & Songs",
      genre: "Love, Action Thriller",
      image: "https://images.unsplash.com/photo-1672847900994-3bf37a83357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG5vdGVzJTIwY29tcG9zaXRpb258ZW58MXx8fHwxNzY0NzU3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Production No. 1",
      director: "Thandava Krishna",
      role: "Background Score & Songs",
      genre: "Romantic Love Story",
      image: "https://images.unsplash.com/photo-1701374929875-37125c54cb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHR1cm50YWJsZXxlbnwxfHx8fDE3NjQ3MzE0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Gangeya",
      director: "Srinivas",
      role: "Background Score",
      genre: "Action Thriller",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY0NzU2NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 7,
      title: "Ganga Entertainments – Production No. 2",
      director: "Sharrath Bobba",
      role: "Background Score & Songs",
      genre: "Action Thriller",
      image: "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjQ2NzUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  const releasedFilms = [
    {
      id: 1,
      title: "O Saathiya",
      year: "2023",
      platform: "Amazon Prime",
      platformType: "streaming",
      role: "Songs & Background Score",
      songs: [
        { name: "O Saathiya", lyrics: "Bhaskarabatla", singer: "Javed Ali", spotify: "#" },
        { name: "Vellipoye", lyrics: "Bhaskarabatla", singer: "Rahul Sipligunj", spotify: "#" },
        { name: "Nela Meedha Lene", lyrics: "Ananth SriRam", singer: "Yazin Nizar", spotify: "#" },
        { name: "E Kshanam", lyrics: "Ram Babu Gosala", singer: "Karthik", spotify: "#" },
        { name: "E Kshanam (Female Version)", lyrics: "Ram Babu Gosala", singer: "Pranathi", spotify: "#" },
      ],
      image: oSaathiyaImage
    },
    {
      id: 2,
      title: "Naari – The Women",
      year: "2024",
      platform: "IFFI Goa Official Selection",
      platformType: "festival",
      role: "Songs & Background Score",
      description: "Recently released in theaters – streaming soon",
      songs: [
        { name: "Gundelona", lyrics: "Vinod Kumar Vinnu & Prasad Saana", singer: "Ramana Gogula", spotify: "#" },
        { name: "Hawaii Hawaii", lyrics: "Bhaskarabatla", singer: "Sunitha", spotify: "#" },
        { name: "Pranam Kaalche", lyrics: "Prasad Saana", singer: "RP Patnaik", spotify: "#" },
        { name: "Nisilo Sasila", lyrics: "Prasad Saana", singer: "Chinmayi", spotify: "#" },
        { name: "Eedu Magadentra Bujji", lyrics: "C-Shore", singer: "C-Shore", spotify: "#" },
      ],
      image: naariImage
    },
    {
      id: 3,
      title: "G Zombie",
      year: "2021",
      platform: "Amazon Prime & Airtel Xtreme",
      platformType: "streaming",
      role: "Songs & Background Score",
      songs: [
        { name: "Avunani Kadantu", lyrics: "Ram Babu", singer: "Sai Charana", spotify: "#" },
        { name: "Bambela", lyrics: "Vinod Kumar Vinnu", singer: "Vinod Kumar Vinnu", spotify: "#" },
      ],
      image: gZombieImage
    },
    {
      id: 4,
      title: "#LifeStories",
      year: "2023",
      platform: "ETV Win",
      platformType: "streaming",
      role: "Background Score",
      description: "A collection of six shorts exploring human emotions",
      director: "Ujjwal Kashyap",
      image: lifeStoriesImage
    },
    {
      id: 5,
      title: "Maya",
      year: "2022",
      platform: "YouTube",
      platformType: "streaming",
      role: "Music & Background Score",
      description: "Independent Telugu Film",
      director: "Sharrth",
      image: mayaImage
    },
  ];

  // Helper function to render platform icons
  const renderPlatformIcons = (platform: string) => {
    const platforms = platform.split('&').map(p => p.trim());
    
    return (
      <div className="flex items-center gap-2">
        {platforms.map((p, idx) => {
          // Platform badge styles
          let bgColor = 'bg-gradient-to-r';
          let fromColor = 'from-blue-600';
          let toColor = 'to-blue-400';
          let text = p;
          
          if (p.includes('Amazon Prime')) {
            bgColor = 'bg-gradient-to-r from-[#00A8E1] to-[#0F79AF]';
            text = 'Prime';
          } else if (p.includes('Airtel')) {
            bgColor = 'bg-gradient-to-r from-red-600 to-red-500';
            text = 'Airtel';
          } else if (p.includes('ETV')) {
            bgColor = 'bg-gradient-to-r from-purple-600 to-purple-500';
            text = 'ETV Win';
          } else if (p.includes('YouTube')) {
            bgColor = 'bg-gradient-to-r from-red-600 to-red-500';
            text = 'YouTube';
          }
          
          return (
            <div 
              key={idx}
              className={`${bgColor} px-3 py-1.5 rounded-md text-white text-xs font-medium flex items-center gap-1.5`}
            >
              <Play className="w-3 h-3" fill="currentColor" />
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="pt-[100px] md:pt-[140px] pb-12 md:pb-20 px-[20px] md:px-[35px] min-h-screen overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        {selectedFilm ? (
          <FilmDetailView film={selectedFilm} onBack={() => setSelectedFilm(null)} />
        ) : (
          <>
        <div className="mb-8 md:mb-12">
          <h1 className="font-['Jaro'] text-white text-[40px] md:text-[64px] leading-[0.8] mb-4 md:mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
            FILMS
          </h1>
          <p className="font-['Inter'] text-neutral-400 max-w-2xl leading-relaxed text-sm md:text-base">
            Explore my work across upcoming projects and released films.
          </p>
        </div>

        {/* Released Films Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="font-['Jaro'] text-white text-[28px] md:text-[40px] leading-[0.8] mb-6 md:mb-8" style={{ fontVariationSettings: "'opsz' 6" }}>
            RELEASED FILMS
          </h2>
          
          {/* Carousel */}
          <div className="relative mb-8 overflow-hidden">
            <div
              className="flex items-center justify-center gap-4 h-[400px] md:h-[600px] perspective-1000"
              ref={releasedCarouselRef}
              onMouseDown={handleReleasedDragStart}
              onMouseMove={handleReleasedDragMove}
              onMouseUp={handleReleasedDragEnd}
              onMouseLeave={handleReleasedDragEnd}
              onTouchStart={handleReleasedDragStart}
              onTouchMove={handleReleasedDragMove}
              onTouchEnd={handleReleasedDragEnd}
            >
              {getVisibleReleasedFilms().map((film, index) => {
                const position = film.position;
                const isCenter = position === 0;
                const scale = isCenter ? 1 : 0.8;
                const opacity = isCenter ? 1 : 0.5;
                const translateZ = isCenter ? 0 : -80;
                const translateX = position * (isMobile ? 200 : 320) + (isDraggingReleased ? dragOffset * 0.5 : 0);
                const width = isCenter ? (isMobile ? '260px' : '400px') : (isMobile ? '220px' : '340px');
                
                return (
                  <div
                    key={`${film.id}-${index}`}
                    className="absolute rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale}) translateZ(${translateZ}px)`,
                      opacity: opacity,
                      width: width,
                      height: '100%',
                      zIndex: isCenter ? 10 : 5 - Math.abs(position),
                      transition: isDraggingReleased ? 'none' : 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      pointerEvents: isCenter ? 'auto' : 'none',
                    }}
                  >
                    <div onClick={() => isCenter && setSelectedFilm(film)} className="w-full h-full cursor-pointer">
                      <ImageWithFallback
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* IFFI Goa Badge for Naari */}
                    {film.id === 2 && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 py-2 px-4">
                        <p className="text-white text-center text-xs md:text-sm tracking-wider font-semibold font-['Inter']">
                          🏆 IFFI GOA OFFICIAL SELECTION
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevReleased}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full p-2 md:p-3 hover:bg-black/60 transition-all"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={handleNextReleased}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full p-2 md:p-3 hover:bg-black/60 transition-all"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Details Below Carousel */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-['Jaro'] text-white text-[24px] md:text-[32px] leading-[0.9] mb-4" style={{ fontVariationSettings: "'opsz' 6" }}>
                {releasedFilms[currentReleasedIndex].title.toUpperCase()}
              </h3>
              <div className="flex items-center justify-center gap-4 font-['Inter'] text-neutral-400 text-sm mb-4 flex-wrap">
                <span>{releasedFilms[currentReleasedIndex].year}</span>
                <span>•</span>
                {releasedFilms[currentReleasedIndex].platformType === 'streaming' ? (
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">Streaming on</span>
                    {renderPlatformIcons(releasedFilms[currentReleasedIndex].platform)}
                  </div>
                ) : (
                  <span>{releasedFilms[currentReleasedIndex].platform}</span>
                )}
              </div>
              <p className="font-['Inter'] text-white mb-2">
                {releasedFilms[currentReleasedIndex].role}
              </p>
              {releasedFilms[currentReleasedIndex].director && (
                <p className="font-['Inter'] text-neutral-400 text-sm">
                  Director: {releasedFilms[currentReleasedIndex].director}
                </p>
              )}
              {releasedFilms[currentReleasedIndex].description && (
                <p className="font-['Inter'] text-neutral-400 text-sm mt-2">
                  {releasedFilms[currentReleasedIndex].description}
                </p>
              )}
            </div>

            {/* YouTube Link */}
            {releasedFilms[currentReleasedIndex].youtube && (
              <a 
                href={releasedFilms[currentReleasedIndex].youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white/5 hover:bg-white/10 rounded border border-white/20 transition-colors mx-auto"
              >
                <ExternalLink className="w-4 h-4 text-white" />
                <span className="font-['Inter'] text-white">Watch on YouTube</span>
              </a>
            )}
          </div>
        </div>

        {/* Upcoming Films Section */}
        <div>
          <h2 className="font-['Jaro'] text-white text-[28px] md:text-[40px] leading-[0.8] mb-6 md:mb-8" style={{ fontVariationSettings: "'opsz' 6" }}>
            UPCOMING FILMS
          </h2>
          
          {/* Carousel */}
          <div className="relative mb-8 overflow-hidden">
            <div
              className="flex items-center justify-center gap-4 h-[400px] md:h-[600px] perspective-1000"
              ref={upcomingCarouselRef}
              onMouseDown={handleUpcomingDragStart}
              onMouseMove={handleUpcomingDragMove}
              onMouseUp={handleUpcomingDragEnd}
              onMouseLeave={handleUpcomingDragEnd}
              onTouchStart={handleUpcomingDragStart}
              onTouchMove={handleUpcomingDragMove}
              onTouchEnd={handleUpcomingDragEnd}
            >
              {getVisibleUpcomingFilms().map((film, index) => {
                const position = film.position;
                const isCenter = position === 0;
                const scale = isCenter ? 1 : 0.8;
                const opacity = isCenter ? 1 : 0.5;
                const translateZ = isCenter ? 0 : -80;
                const translateX = position * (isMobile ? 200 : 320) + (isDraggingUpcoming ? dragOffset * 0.5 : 0);
                const width = isCenter ? (isMobile ? '260px' : '400px') : (isMobile ? '220px' : '340px');
                
                return (
                  <div
                    key={`${film.id}-${index}`}
                    className="absolute rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale}) translateZ(${translateZ}px)`,
                      opacity: opacity,
                      width: width,
                      height: '100%',
                      zIndex: isCenter ? 10 : 5 - Math.abs(position),
                      transition: isDraggingUpcoming ? 'none' : 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      pointerEvents: isCenter ? 'auto' : 'none',
                    }}
                  >
                    <div onClick={() => isCenter && setSelectedFilm(film)} className="w-full h-full cursor-pointer">
                      <ImageWithFallback
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevUpcoming}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full p-2 md:p-3 hover:bg-black/60 transition-all"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={handleNextUpcoming}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full p-2 md:p-3 hover:bg-black/60 transition-all"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Details Below Carousel */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-['Jaro'] text-white text-[24px] md:text-[32px] leading-[0.9] mb-4" style={{ fontVariationSettings: "'opsz' 6" }}>
              {upcomingFilms[currentUpcomingIndex].title.toUpperCase()}
            </h3>
            <p className="font-['Inter'] text-white mb-2 text-sm md:text-base">
              Director: {upcomingFilms[currentUpcomingIndex].director}
            </p>
            <p className="font-['Inter'] text-neutral-400 mb-2 text-sm md:text-base">
              {upcomingFilms[currentUpcomingIndex].role}
            </p>
            {upcomingFilms[currentUpcomingIndex].genre && (
              <p className="font-['Inter'] text-neutral-500 text-xs md:text-sm">
                Genre: {upcomingFilms[currentUpcomingIndex].genre}
              </p>
            )}
            {upcomingFilms[currentUpcomingIndex].story && (
              <p className="font-['Inter'] text-neutral-500 text-xs md:text-sm">
                {upcomingFilms[currentUpcomingIndex].story}
              </p>
            )}
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
}