import { useEffect, useState } from 'react';
import { supabase } from "../../supabase/client";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  "All", 
  "Studio photos", 
  "Recording sessions", 
  "My Photos",
  "Orchestra recordings", 
  "Live musicians", 
  "DAW/software screen captures", 
  "Behind-the-scenes videos"
];

interface MemoryItem {
  id: number;
  title: string;
  story: string;
  image_url: string;
  category: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [memories, setMemories] = useState<MemoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Carousel State
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMemories() {
      const { data, error } = await supabase
        .from('memory_vault')
        .select('*')
        .order('display_order', { ascending: true });

      if (!error && data) {
        setMemories(data);
      }
      setIsLoading(false);
    }
    fetchMemories();
  }, []);

  const filteredMemories = activeCategory === "All"
    ? memories
    : memories.filter(m => m.category === activeCategory);

  // Carousel Handlers
  const openCarousel = (index: number) => setSelectedIndex(index);
  const closeCarousel = () => setSelectedIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredMemories.length);
    }
  };
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredMemories.length) % filteredMemories.length);
    }
  };

  if (isLoading) {
    return <div className="text-white text-center pt-32 font-['Inter'] h-screen bg-[#0a0a0a]">Loading the vault...</div>;
  }

  return (
    <div className="pt-[100px] md:pt-[140px] pb-24 px-3 md:px-[35px] min-h-screen bg-[#0a0a0a]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ── Header & Filters ── */}
        <div className="mb-10 md:mb-14">
          <h1 className="font-['Jaro'] text-white text-[40px] md:text-[64px] leading-[0.8] mb-4" style={{ fontVariationSettings: "'opsz' 6" }}>
            MEMORY VAULT
          </h1>
          <p className="font-['Inter'] text-neutral-400 max-w-2xl leading-relaxed mb-8">
            Behind the scenes moments from studio sessions, live performances, and collaborations.
          </p>

          <div className="flex flex-nowrap overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null); // Reset carousel if open
                }}
                className={`shrink-0 px-4 py-2 rounded-full font-['Inter'] text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-[#121212] text-neutral-400 hover:bg-[#2a2a2a] hover:text-white border border-[#222]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ── Bento / Masonry Grid Layout ── */}
        {/* Reduced columns to make images bigger: 1 on mobile, 2 on tablet, 3 on desktop */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {filteredMemories.map((memory, index) => (
            <div 
              key={memory.id} 
              onClick={() => openCarousel(index)}
              className="relative break-inside-avoid mb-4 md:mb-6 rounded-[16px] overflow-hidden group bg-[#111] border border-[#222] cursor-pointer hover:border-[#444] transition-colors"
            >
              
              {/* Image Container */}
              <div className="relative w-full overflow-hidden">
                <img 
                  src={memory.image_url} 
                  alt={memory.title} 
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Smooth gradient melting the image into the solid background below */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
              </div>

              {/* Extended Card Text Area (Solid Background) */}
              <div className="relative bg-[#111] px-5 pb-6 pt-0">
                <h2 
                  className="font-['Jaro'] text-white text-[24px] md:text-[28px] leading-tight mb-2" 
                  style={{ fontVariationSettings: "'opsz' 6" }}
                >
                  {memory.title}
                </h2>
                <p className="font-['Inter'] text-neutral-400 text-[13px] md:text-[14px] leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors">
                  {memory.story}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        {filteredMemories.length === 0 && (
          <div className="text-neutral-500 py-12 text-center font-['Inter'] text-lg">
            No memories found for this category.
          </div>
        )}

      </div>

      {/* ── Fullscreen Carousel / Lightbox ── */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeCarousel}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[310]"
            onClick={closeCarousel}
          >
            <X size={24} />
          </button>

          {/* Navigation Controls */}
          {filteredMemories.length > 1 && (
            <>
              <button 
                className="absolute left-4 md:left-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[310]"
                onClick={showPrev}
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                className="absolute right-4 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[310]"
                onClick={showNext}
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Active Carousel Item */}
          <div 
            className="w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
          >
            <img 
              src={filteredMemories[selectedIndex].image_url} 
              alt={filteredMemories[selectedIndex].title}
              className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl mb-6 md:mb-8"
            />
            <div className="text-center max-w-3xl">
              <h2 
                className="font-['Jaro'] text-white text-[32px] md:text-[40px] leading-tight mb-3" 
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                {filteredMemories[selectedIndex].title}
              </h2>
              <p className="font-['Inter'] text-neutral-300 text-[15px] md:text-[16px] leading-relaxed">
                {filteredMemories[selectedIndex].story}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}