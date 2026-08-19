import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { usePlayer } from "../context/PlayerContext";

interface Song {
  name: string;
  singer: string;
  lyrics?: string;
  driveId?: string;
}

interface MusicPlayerProps {
  songs: Song[];
  albumTitle?: string;
  albumYear?: string;
  albumType?: string;
  albumArt?: string;
  onStoryClick?: () => void;
}

const DURATIONS = ["4:48", "3:54", "3:54", "4:12", "3:38", "4:20", "3:55", "5:02", "3:47"];

export function MusicPlayer({ songs, albumTitle, albumYear, albumType, albumArt, onStoryClick }: MusicPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setNowPlaying, nowPlaying } = usePlayer();

  const uniqueSingers = [...new Set(songs.map((s) => s.singer))];

  const handleSongClick = (i: number) => {
    const song = songs[i];
    if (!song.driveId) return;
    setCurrentIndex(i);
    setNowPlaying({
      name: song.name,
      singer: song.singer,
      driveId: song.driveId,
      albumArt,
    });
  };

  return (
    <div
      className="relative rounded-[16px] overflow-hidden"
      style={{ background: "#121212", border: "1px solid #575757" }}
    >
      {/* ── Album header ─────────────────────────────────── */}
      <div
        className="flex flex-col px-3 md:px-6 pt-4 md:pt-6 pb-4 md:pb-5"
        style={{ background: "linear-gradient(to bottom, #000000, #0d0d0d)" }}
      >
        <div className="flex gap-3 md:gap-5 items-start">
          {albumArt && (
            <div className="relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[144px]">
              <div aria-hidden className="absolute inset-0 rounded-[10px] pointer-events-none border-0">
                <img
                  alt={albumTitle ?? "Album art"}
                  className="absolute inset-0 size-full object-cover rounded-[10px] max-w-none"
                />
              </div>
              <ImageWithFallback
                src={albumArt}
                alt={albumTitle ?? "Album art"}
                className="absolute inset-0 size-full object-cover rounded-[10px] max-w-none"
              />
            </div>
          )}

          <div className="flex flex-col min-w-0 flex-1 md:h-[144px]">
            {/* Top-right: Know the Story button */}
            <div className="flex justify-end md:flex-1">
              {onStoryClick && (
                <button
                  onClick={onStoryClick}
                  className="self-start font-['Jaro'] text-[10px] tracking-[1.2px] uppercase border px-2 md:px-3 py-[5px] transition-all duration-200 hover:bg-[#D4AF37]/10"
                  style={{
                    fontVariationSettings: "'opsz' 6",
                    color: "#D4AF37",
                    borderColor: "rgba(212,175,55,0.45)",
                  }}
                >
                  Know the Story ↗
                </button>
              )}
            </div>

            {/* Album type + title (artists sit in their own block below) */}
            <div className="mt-2 md:mt-0">
              {albumType && (
                <p
                  className="font-bold text-[11px] text-white uppercase tracking-[1.1px] opacity-70 mb-[4px]"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "16.5px" }}
                >
                  {albumType}
                </p>
              )}
              {albumTitle && (
                <p
                  className="font-black text-[18px] md:text-[22px] text-white md:mb-3 leading-[24px] md:leading-[30px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {albumTitle}
                </p>
              )}
              <p
                className="hidden md:block text-[12px] leading-[19.5px]"
                style={{ fontFamily: "'Inter', sans-serif", color: "#a1a1a1" }}
              >
                {uniqueSingers.join(" • ")}
                {albumYear && <span style={{ color: "#737373" }}> • {albumYear}</span>}
                <span style={{ color: "#737373" }}> • {songs.length} songs</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-only metadata: own block so it cannot overlap the tracklist header */}
        <p
          className="md:hidden mt-3 text-[12px] leading-[19.5px]"
          style={{ fontFamily: "'Inter', sans-serif", color: "#a1a1a1" }}
        >
          {uniqueSingers.join(" • ")}
          {albumYear && <span style={{ color: "#737373" }}> • {albumYear}</span>}
          <span style={{ color: "#737373" }}> • {songs.length} songs</span>
        </p>
      </div>

      {/* ── Track list header ─────────────────────────────── */}
      <div
        className="grid px-3 md:px-6 pt-4 pb-[4px]"
        style={{ gridTemplateColumns: "28px minmax(0, 1fr) auto" }}
      >
        <span className="text-center text-[12px]" style={{ color: "#737373", fontFamily: "'Inter', sans-serif", lineHeight: "16px" }}>#</span>
        <span className="text-[11px] uppercase tracking-[0.55px]" style={{ color: "#737373", fontFamily: "'Inter', sans-serif", lineHeight: "16.5px" }}>Title</span>
        <span className="text-[12px]" style={{ color: "#737373", fontFamily: "'Inter', sans-serif", lineHeight: "16px" }}>⏱</span>
      </div>

      {/* Divider */}
      <div className="mx-4 mb-[4px]" style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

      {/* ── Track rows ───────────────────────────────────── */}
      <div className="px-1 md:px-3 pb-4">
        {songs.map((song, i) => {
          const isActive = nowPlaying?.driveId === song.driveId && !!song.driveId;
          const hasAudio = !!song.driveId;
          return (
            <button
              key={i}
              onClick={() => handleSongClick(i)}
              className="w-full grid gap-x-2 md:gap-x-3 px-2 md:px-3 rounded-[10px] text-left transition-colors"
              style={{
                gridTemplateColumns: "28px minmax(0, 1fr) auto",
                background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                paddingTop: "10px",
                paddingBottom: "10px",
                cursor: hasAudio ? "pointer" : "default",
              }}
              onMouseEnter={(e) => { if (!isActive && hasAudio) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = isActive ? "rgba(255,255,255,0.08)" : "transparent"; }}
            >
              <span
                className="text-[14px] text-center self-center leading-[20px]"
                style={{ fontFamily: "'Inter', sans-serif", color: isActive ? "#e16f05" : "#888" }}
              >
                {isActive ? "▶" : i + 1}
              </span>

              <div className="min-w-0">
                <p
                  className="text-[14px] font-semibold truncate leading-[19.25px]"
                  style={{ fontFamily: "'Inter', sans-serif", color: isActive ? "#e16f05" : "white" }}
                >
                  {song.name}
                </p>
                <p
                  className="text-[12px] truncate leading-[18px]"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#737373" }}
                >
                  {song.singer}
                </p>
              </div>

              <div className="flex items-center gap-1.5 md:gap-2 self-center shrink-0">
                {!hasAudio && (
                  <span
                    className="text-[10px] rounded-[4px] px-[6px] py-[2px] leading-[15px]"
                    style={{ background: "#2a2a2a", color: "#555", fontFamily: "'Inter', sans-serif" }}
                  >
                    soon
                  </span>
                )}
                <span
                  className="text-[12px] leading-[18px] tabular-nums"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#737373" }}
                >
                  {DURATIONS[i % DURATIONS.length]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
