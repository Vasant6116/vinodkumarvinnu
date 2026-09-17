import { useEffect, useState } from 'react';
import { MusicPlayer } from '../components/MusicPlayer';
// Added Chevron icons for the accordion indication
import { X, Film, User, PenLine, Mic, Building2, Music2, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from "../../supabase/client";

const CATEGORIES = ["All", "Film Albums", "OST"];

interface StoryDetails {
  story?: string;
  director?: string;
  producer?: string;
  lyricist?: string;
  singers?: string;
  recordingStudio?: string;
  instruments?: string;
  trailerUrl?: string;
  credits?: string;
}

interface Release {
  id: number;
  title: string;
  year: string;
  type: string;
  categories: string[];
  platform?: string;
  description?: string;
  director?: string;
  songs?: { name: string; singer: string; lyrics: string; audioUrl: string; }[];
  image: string;
  storyDetails?: StoryDetails;
}

// ── Story Modal Components ──────────────────────────────────────────────────

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start py-3 border-b border-[#1e1e1e]">
      <span className="text-[#D4AF37] mt-[2px] shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-neutral-500 mb-[2px]">{label}</p>
        <p className="font-['Inter'] text-sm text-neutral-200 leading-snug">{value}</p>
      </div>
    </div>
  );
}

function StoryModal({ release, onClose }: { release: Release; onClose: () => void }) {
  const s = release.storyDetails ?? {};

  const infoRows = [
    { icon: <Film size={14} />, label: "Director", value: s.director },
    { icon: <User size={14} />, label: "Producer", value: s.producer },
    { icon: <PenLine size={14} />, label: "Lyricist", value: s.lyricist },
    { icon: <Mic size={14} />, label: "Singers", value: s.singers },
    { icon: <Building2 size={14} />, label: "Recording Studio", value: s.recordingStudio },
    { icon: <Music2 size={14} />, label: "Instruments Used", value: s.instruments },
  ];

  const hasProductionDetails = infoRows.some(row => !!row.value);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl flex flex-col"
        style={{ background: "#0e0e0e", border: "1px solid #222" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[200px] sm:h-[240px] shrink-0 overflow-hidden rounded-t-2xl">
          <img src={release.image as string} alt={release.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0e0e0e]" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
          >
            <X size={14} />
          </button>

          <div className="absolute bottom-5 left-6 right-14">
            <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-[#D4AF37] mb-1">{release.type} · {release.year}</p>
            <h2 className="font-['Jaro'] text-white text-[32px] sm:text-[40px] leading-[0.9]" style={{ fontVariationSettings: "'opsz' 6" }}>
              {release.title}
            </h2>
          </div>
        </div>

        <div className="px-6 pt-5 pb-8 flex flex-col gap-8">
          {s.story && (
            <section>
              <h3 className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3" style={{ fontVariationSettings: "'opsz' 6" }}>
                STORY BEHIND THE COMPOSITION
              </h3>
              <p className="font-['Inter'] text-neutral-300 text-sm leading-relaxed">{s.story}</p>
            </section>
          )}

          {hasProductionDetails && (
            <section>
              <h3 className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-1" style={{ fontVariationSettings: "'opsz' 6" }}>
                PRODUCTION DETAILS
              </h3>
              <div className="flex flex-col">
                {infoRows.map((row) => (
                  row.value ? <InfoRow key={row.label} icon={row.icon} label={row.label} value={row.value} /> : null
                ))}
              </div>
            </section>
          )}

          {s.trailerUrl && (
            <section>
              <h3 className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3" style={{ fontVariationSettings: "'opsz' 6" }}>
                TRAILER
              </h3>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={s.trailerUrl}
                  title={`${release.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {s.credits && (
            <section>
              <h3 className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3" style={{ fontVariationSettings: "'opsz' 6" }}>
                CREDITS
              </h3>
              <p className="font-['Inter'] text-neutral-400 text-sm leading-relaxed whitespace-pre-line">{s.credits}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Page Layout ────────────────────────────────────────

export default function Discography() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);
  const [storyModalRelease, setStoryModalRelease] = useState<Release | null>(null);
  const [releases, setReleases] = useState<Release[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReleases() {
      const { data, error } = await supabase
        .from('releases')
        .select(`*, songs (id, track_number, name, singer, lyrics, audio_url)`)
        .order('display_order', { ascending: true });

      if (!error && data) {
        const formattedData = data.map((release) => ({
          ...release,
          image: release.image_url,
          storyDetails: release.story_details,
          songs: release.songs
            ?.sort((a: any, b: any) => a.track_number - b.track_number)
            .map((song: any) => ({
              name: song.name,
              singer: song.singer,
              lyrics: song.lyrics,
              audioUrl: song.audio_url
            }))
        })) as Release[];
        
        setReleases(formattedData);
        if (formattedData.length > 0) {
          setSelectedRelease(formattedData[0]);
        }
      }
      setIsLoading(false);
    }
    fetchReleases();
  }, []);

  if (isLoading) {
    return <div className="text-white text-center pt-32 font-['Inter']">Loading your library...</div>;
  }

  const filteredReleases = activeCategory === "All"
    ? releases
    : releases.filter(r => r.categories?.includes(activeCategory));

  const handleAlbumClick = (release: Release) => {
    if (selectedRelease?.id === release.id) {
      setSelectedRelease(null);
    } else {
      setSelectedRelease(release);
    }
  };

  return (
    <div className="pt-[100px] md:pt-[140px] pb-24 px-3 md:px-[35px] min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ── Header & Filters ── */}
        <div className="mb-10">
          <h1 className="font-['Jaro'] text-white text-[40px] md:text-[64px] leading-[0.8] mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
            THE SOUND GRIMOIRE
          </h1>
          <p className="font-['Inter'] text-neutral-400 max-w-2xl leading-relaxed mb-8">
            Complete collection of music releases and soundtracks. Browse by category to explore different facets of Vinnu's compositions.
          </p>

          <div className="flex flex-nowrap overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-4 py-2 rounded-full font-['Inter'] text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-[#1a1a1a] text-neutral-400 hover:bg-[#2a2a2a] hover:text-white border border-[#3b3b3b]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ── Body Layout ── */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          
          {/* Left Column: Album List */}
          <div className="w-full md:w-[320px] shrink-0 md:sticky md:top-[100px] md:max-h-[calc(100vh-140px)] md:overflow-y-auto pr-0 md:pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="space-y-2 md:space-y-1">
              {filteredReleases.map((release) => {
                const isSelected = selectedRelease?.id === release.id;
                
                return (
                  // Unified Mobile Wrapper: When selected on mobile, the whole block becomes a styled box
                  <div 
                    key={release.id} 
                    className={`flex flex-col rounded-xl transition-colors ${isSelected ? 'bg-[#121212] border border-[#222] md:bg-transparent md:border-none' : 'border border-transparent'}`}
                  >
                    <button
                      onClick={() => handleAlbumClick(release)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-colors text-left ${
                        isSelected ? 'md:bg-[#1a1a1a]' : 'hover:bg-[#111]'
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        <img src={release.image as string} alt={release.title} className="w-[50px] h-[50px] rounded object-cover shrink-0 bg-[#222]" />
                        <div className="min-w-0 flex-1">
                          <p className={`truncate font-semibold text-[15px] font-['Inter'] ${isSelected ? 'text-white' : 'text-neutral-400'}`}>
                            {release.title}
                          </p>
                          <p className="truncate text-neutral-500 text-[13px] font-['Inter'] mt-0.5">
                            {release.type} • {release.year}
                          </p>
                        </div>
                      </div>
                      
                      {/* Chevron Indicator (Visible only on mobile) */}
                      <div className="md:hidden pr-2 text-neutral-500">
                        {isSelected ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </button>

                    {/* MOBILE ONLY: Inline Accordion Player */}
                    {isSelected && (
                      <div className="md:hidden px-2 pb-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <MusicPlayer
                          songs={release.songs || []}
                          albumTitle={release.title}
                          albumYear={release.year}
                          albumType={release.type}
                          albumArt={release.image}
                          storyDetails={release.storyDetails}
                          onStoryClick={() => setStoryModalRelease(release)}
                          isCompact={true} // Strips the redundant header
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              {filteredReleases.length === 0 && (
                <div className="text-neutral-500 py-6 text-center font-['Inter'] text-sm">No releases found.</div>
              )}
            </div>
          </div>

          {/* Right Column: Selected Album Player (DESKTOP ONLY) */}
          <div className="hidden md:block flex-1 w-full min-w-0">
            {selectedRelease ? (
              <MusicPlayer
                songs={selectedRelease.songs || []}
                albumTitle={selectedRelease.title}
                albumYear={selectedRelease.year}
                albumType={selectedRelease.type}
                albumArt={selectedRelease.image}
                storyDetails={selectedRelease.storyDetails}
                onStoryClick={() => setStoryModalRelease(selectedRelease)}
                isCompact={false}
              />
            ) : (
              <div className="border border-[#1a1a1a] bg-[#0a0a0a] rounded-[16px] h-[300px] flex items-center justify-center text-neutral-500 font-['Inter']">
                Select an album from the list to view tracks
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Story Modal Rendering */}
      {storyModalRelease && (
        <StoryModal
          release={storyModalRelease}
          onClose={() => setStoryModalRelease(null)}
        />
      )}
    </div>
  );
}