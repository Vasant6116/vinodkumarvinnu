import { useEffect, useState } from 'react';
import { MusicPlayer } from '../components/MusicPlayer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X, Film, User, PenLine, Mic, Building2, Music2, Award } from 'lucide-react';
import { supabase } from "../../supabase/client";

const CATEGORIES = [
  "All",
  "Released",
  "Unreleased"
];

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
  // Removed the '?' from singer, lyrics, and audioUrl to satisfy MusicPlayer
  songs?: { name: string; singer: string; lyrics: string; audioUrl: string; }[];
  image: string;
  storyDetails?: StoryDetails;
}

// ── Story Modal ────────────────────────────────────────────────────────────────

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
        {/* ── Header band ─────────────────────────────────── */}
        <div className="relative h-[200px] sm:h-[240px] shrink-0 overflow-hidden rounded-t-2xl">
          <img
            src={release.image as string}
            alt={release.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0e0e0e]" />

          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
          >
            <X size={14} />
          </button>

          {/* Title over image */}
          <div className="absolute bottom-5 left-6 right-14">
            <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-[#D4AF37] mb-1">{release.type} · {release.year}</p>
            <h2
              className="font-['Jaro'] text-white text-[32px] sm:text-[40px] leading-[0.9]"
              style={{ fontVariationSettings: "'opsz' 6" }}
            >
              {release.title}
            </h2>
          </div>
        </div>

        {/* ── Scrollable body ──────────────────────────────── */}
        <div className="px-6 pt-5 pb-8 flex flex-col gap-8">

          {/* Story Behind the Composition */}
          {s.story && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                STORY BEHIND THE COMPOSITION
              </h3>
              <p className="font-['Inter'] text-neutral-300 text-sm leading-relaxed">{s.story}</p>
            </section>
          )}

          {/* Production details grid */}
          {hasProductionDetails && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-1"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                PRODUCTION DETAILS
              </h3>
              <div className="flex flex-col">
                {infoRows.map((row) => (
                  row.value ? <InfoRow key={row.label} icon={row.icon} label={row.label} value={row.value} /> : null
                ))}
              </div>
            </section>
          )}

          {/* Trailer / embedded video */}
          {s.trailerUrl && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
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

          {/* Credits */}
          {s.credits && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                CREDITS
              </h3>
              <p className="font-['Inter'] text-neutral-400 text-sm leading-relaxed whitespace-pre-line">{s.credits}</p>
            </section>
          )}

          {/* Platform badge */}
          {release.platform && (
            <div className="flex items-center gap-2 pt-1">
              <Award size={13} className="text-neutral-500 shrink-0" />
              <p className="font-['Inter'] text-[11px] text-neutral-500">{release.platform}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function Discography() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);

  const [releases, setReleases] = useState<Release[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReleases() {
      // The magic is in the select statement: '*, songs(*)' 
      // This tells Supabase to grab the album AND all songs linked to it automatically.
      const { data, error } = await supabase
        .from('releases')
        .select(`
          *,
          songs (
            id,
            track_number,
            name,
            singer,
            lyrics,
            audio_url
          )
        `)
        .order('display_order', { ascending: true });

      if (error) {
        console.error("Error fetching releases:", error);
      } else if (data) {
        const formattedData = data.map((release) => ({
          ...release,
          image: release.image_url,
          storyDetails: release.story_details,
          // Sort the songs by track number and map the database audio_url to the React audioUrl
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
      }
      setIsLoading(false);
    }

    fetchReleases();
  }, []);

  if (isLoading) {
    return <div className="text-white text-center pt-20" style={{ fontFamily: "Inter, sans-serif" }}>Loading tracks...</div>;
  }

  const filteredReleases = activeCategory === "All"
    ? releases
    : releases.filter(r => r.categories?.includes(activeCategory));

  return (
    <div className="pt-[100px] md:pt-[140px] pb-12 md:pb-20 px-3 md:px-[35px] min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12">
          <h1 className="font-['Jaro'] text-white text-[40px] md:text-[64px] leading-[0.8] mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
          THE SOUND GRIMOIRE
          </h1>
          <p className="font-['Inter'] text-neutral-400 max-w-2xl leading-relaxed mb-8">
            Complete collection of music releases and soundtracks. Browse by category to explore different facets of Vinnu's compositions.
          </p>

          <div className="flex flex-nowrap overflow-x-auto gap-3 mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

        <div className="space-y-6">
          {filteredReleases.map((release) => (
            <div key={release.id} className="relative rounded-lg overflow-hidden">
              {release.songs && release.songs.length > 0 ? (
                <MusicPlayer
                  songs={release.songs}
                  albumTitle={release.title}
                  albumYear={release.year}
                  albumType={release.type}
                  albumArt={release.image}
                  onStoryClick={() => setSelectedRelease(release)}
                />
              ) : (
                <div className="relative bg-[#0a0a0a] border border-[#1a1a1a] p-6 flex flex-col md:flex-row items-center gap-6">
                  {/* Know the Story – plain card */}
                  <button
                    onClick={() => setSelectedRelease(release)}
                    className="absolute top-4 right-4 font-['Jaro'] text-[10px] tracking-[1.2px] uppercase border px-3 py-[5px] transition-all duration-200 hover:bg-[#D4AF37]/10"
                    style={{
                      fontVariationSettings: "'opsz' 6",
                      color: "#D4AF37",
                      borderColor: "rgba(212,175,55,0.45)",
                    }}
                  >
                    Know the Story ↗
                  </button>

                  <div className="w-32 h-32 flex-shrink-0 bg-[#1a1a1a] rounded">
                    <img src={release.image as string} alt={release.title} className="w-full h-full object-cover rounded opacity-80" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-bold text-xl mb-1">{release.title}</h3>
                    <p className="text-neutral-400 text-sm mb-2">{release.year} • {release.type}</p>
                    {release.description && <p className="text-neutral-500 text-sm">{release.description}</p>}
                  </div>
                </div>
              )}
            </div>
          ))}
          {filteredReleases.length === 0 && (
            <div className="text-neutral-500 py-12 text-center">No releases found for this category.</div>
          )}
        </div>
      </div>

      {/* Story Modal */}
      {selectedRelease && (
        <StoryModal
          release={selectedRelease}
          onClose={() => setSelectedRelease(null)}
        />
      )}
    </div>
  );
}