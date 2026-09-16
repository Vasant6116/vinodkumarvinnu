import { ImageWithFallback } from "./figma/ImageWithFallback";
import { usePlayer } from "../context/PlayerContext";
import { Film, User, PenLine, Mic, Building2, Music2 } from 'lucide-react';

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

interface Song {
  name: string;
  singer: string;
  lyrics?: string;
  audioUrl?: string;
}

interface MusicPlayerProps {
  songs: Song[];
  albumTitle?: string;
  albumYear?: string;
  albumType?: string;
  albumArt?: string;
  storyDetails?: StoryDetails;
  onStoryClick?: () => void;
  isCompact?: boolean; // <-- New prop to strip redundant UI for mobile accordion
}

const DURATIONS = ["4:48", "3:54", "3:54", "4:12", "3:38", "4:20", "3:55", "5:02", "3:47"];

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start py-3 border-b border-[#222]">
      <span className="text-[#e16f05] mt-[2px] shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-neutral-500 mb-[2px]">{label}</p>
        <p className="font-['Inter'] text-sm text-neutral-200 leading-snug">{value}</p>
      </div>
    </div>
  );
}

export function MusicPlayer({ songs, albumTitle, albumYear, albumType, albumArt, storyDetails, onStoryClick, isCompact = false }: MusicPlayerProps) {
  const { setNowPlaying, nowPlaying } = usePlayer();
  const s = storyDetails ?? {};
  const uniqueSingers = [...new Set(songs.map((s) => s.singer))];

  const infoRows = [
    { icon: <Film size={14} />, label: "Director", value: s.director },
    { icon: <User size={14} />, label: "Producer", value: s.producer },
    { icon: <PenLine size={14} />, label: "Lyricist", value: s.lyricist },
    { icon: <Mic size={14} />, label: "Singers", value: s.singers },
    { icon: <Building2 size={14} />, label: "Recording Studio", value: s.recordingStudio },
    { icon: <Music2 size={14} />, label: "Instruments Used", value: s.instruments },
  ];
  const hasProductionDetails = infoRows.some(row => !!row.value);
  const hasAnyStoryData = s.story || hasProductionDetails || s.credits || s.trailerUrl;

  const handleSongClick = (i: number) => {
    const song = songs[i];
    if (!song.audioUrl || song.audioUrl.trim() === '') return;
    
    setNowPlaying({
      name: song.name,
      singer: song.singer,
      audioUrl: song.audioUrl,
      albumArt,
    });
  };

  return (
    <div className={`relative flex flex-col md:flex-row items-stretch ${isCompact ? '' : 'rounded-[16px] overflow-hidden bg-[#121212] border border-[#2a2a2a]'}`}>
      
      {/* ── Left Column: Album Info & Story ── */}
      <div className={`w-full md:w-1/2 lg:w-[45%] ${isCompact ? 'pb-2' : 'p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#2a2a2a] bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e]'}`}>
        
        {/* Album Header (Hidden in compact mobile view) */}
        {!isCompact && (
          <div className="flex gap-4 items-start mb-4 md:mb-8">
            {albumArt && (
              <div className="relative rounded-[8px] shadow-lg shrink-0 size-[80px] md:size-[120px]">
                <ImageWithFallback src={albumArt} alt={albumTitle ?? "Album art"} className="absolute inset-0 size-full object-cover rounded-[8px]" />
              </div>
            )}
            <div className="flex flex-col min-w-0 flex-1">
              {albumType && (
                <p className="font-bold text-[10px] md:text-[11px] text-white uppercase tracking-[1.1px] opacity-70 mb-1 font-['Inter']">
                  {albumType}
                </p>
              )}
              {albumTitle && (
                <p className="font-black text-[18px] md:text-[24px] text-white mb-1 md:mb-2 leading-tight font-['Inter']">
                  {albumTitle}
                </p>
              )}
              <p className="text-[11px] md:text-[12px] leading-[1.4] font-['Inter'] text-neutral-400">
                {uniqueSingers.join(" • ")}
                {albumYear && <span> • {albumYear}</span>}
                <span> • {songs.length} songs</span>
              </p>
            </div>
          </div>
        )}

        {/* MOBILE ONLY: "Know the Story" Button */}
        {hasAnyStoryData && onStoryClick && (
          <button
            onClick={onStoryClick}
            className="md:hidden w-full mb-2 py-[10px] rounded border border-[#333] text-[11px] font-semibold font-['Inter'] text-white uppercase tracking-widest hover:bg-[#222] transition-colors"
          >
            Know the Story ↗
          </button>
        )}

        {/* DESKTOP ONLY: Inline Story Details Section */}
        <div className="hidden md:flex flex-col gap-8">
          {s.story && (
            <section>
              <h3 className="font-['Inter'] text-white font-bold text-[12px] uppercase tracking-widest mb-2">
                Story Behind the Composition
              </h3>
              <p className="font-['Inter'] text-neutral-300 text-[13px] leading-relaxed">{s.story}</p>
            </section>
          )}

          {hasProductionDetails && (
            <section>
              <h3 className="font-['Inter'] text-white font-bold text-[12px] uppercase tracking-widest mb-1">
                Production Details
              </h3>
              <div className="flex flex-col">
                {infoRows.map((row) => (
                  row.value ? <InfoRow key={row.label} icon={row.icon} label={row.label} value={row.value as string} /> : null
                ))}
              </div>
            </section>
          )}

          {s.trailerUrl && (
            <section>
              <h3 className="font-['Inter'] text-white font-bold text-[12px] uppercase tracking-widest mb-3">
                Trailer
              </h3>
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={s.trailerUrl}
                  title={`${albumTitle} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {s.credits && (
            <section>
              <h3 className="font-['Inter'] text-white font-bold text-[12px] uppercase tracking-widest mb-2">
                Credits
              </h3>
              <p className="font-['Inter'] text-neutral-400 text-[12px] leading-relaxed whitespace-pre-line">{s.credits}</p>
            </section>
          )}
        </div>
      </div>

      {/* ── Right Column: Tracklist ── */}
      <div className={`w-full md:w-1/2 lg:w-[55%] flex flex-col ${isCompact ? 'p-0' : 'p-2 md:p-4'}`}>
        
        {/* Track list header (Hidden in compact view to save space) */}
        {!isCompact && (
          <>
            <div className="grid px-3 pt-2 pb-2" style={{ gridTemplateColumns: "28px minmax(0, 1fr) auto" }}>
              <span className="text-center text-[11px] text-[#737373] font-['Inter']">#</span>
              <span className="text-[10px] uppercase tracking-[0.55px] text-[#737373] font-['Inter']">Title</span>
              <span className="text-[11px] text-[#737373] font-['Inter']">⏱</span>
            </div>
            <div className="mx-3 mb-2 h-[1px] bg-white/5" />
          </>
        )}

        {/* Track rows */}
        <div className="px-1 pb-2">
          {songs.map((song, i) => {
            const hasAudio = !!song.audioUrl && song.audioUrl.trim() !== '';
            const isActive = nowPlaying?.audioUrl === song.audioUrl && hasAudio;
            
            return (
              <button
                key={i}
                onClick={() => handleSongClick(i)}
                className="w-full grid gap-x-3 px-2 rounded-[8px] text-left transition-colors py-2.5"
                style={{
                  gridTemplateColumns: "28px minmax(0, 1fr) auto",
                  background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                  cursor: hasAudio ? "pointer" : "default",
                }}
                onMouseEnter={(e) => { if (!isActive && hasAudio) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = isActive ? "rgba(255,255,255,0.06)" : "transparent"; }}
              >
                <span className="text-[13px] text-center self-center font-['Inter']" style={{ color: isActive ? "#e16f05" : "#777" }}>
                  {isActive ? "▶" : i + 1}
                </span>

                <div className="min-w-0">
                  <p className="text-[14px] font-semibold truncate font-['Inter'] leading-tight mb-0.5" style={{ color: isActive ? "#e16f05" : (hasAudio ? "white" : "#999") }}>
                    {song.name}
                  </p>
                  <p className="text-[12px] truncate font-['Inter'] text-[#737373]">
                    {song.singer}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-center shrink-0">
                  {!hasAudio && (
                    <span className="text-[9px] uppercase tracking-[1px] rounded-[3px] px-[5px] py-[2px] border border-[#333] text-[#777] font-['Inter']">
                      SOON
                    </span>
                  )}
                  <span className="text-[12px] tabular-nums font-['Inter'] text-[#737373]">
                    {hasAudio ? DURATIONS[i % DURATIONS.length] : "--:--"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}