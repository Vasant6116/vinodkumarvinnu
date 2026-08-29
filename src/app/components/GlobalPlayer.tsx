import { usePlayer } from "../context/PlayerContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GlobalPlayer() {
  const { nowPlaying, setNowPlaying } = usePlayer();

  if (!nowPlaying) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100]"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="flex items-center justify-between bg-[#121212] px-2 md:px-0" style={{ height: "72px" }}>

        {/* Left: album art + song info (Tightened mobile width to prevent audio player collapse) */}
        <div className="flex items-center gap-2 md:gap-3 md:px-4 shrink-0 w-[115px] sm:w-[180px] md:w-[260px]">
          {nowPlaying.albumArt && (
            <div className="shrink-0 rounded overflow-hidden size-9 md:size-11 hidden sm:block">
              <ImageWithFallback
                src={nowPlaying.albumArt}
                alt={nowPlaying.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="min-w-0">
            <p
              className="text-[12px] md:text-[13px] font-semibold text-white truncate leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {nowPlaying.name}
            </p>
            <p
              className="text-[10px] md:text-[11px] truncate leading-tight mt-[2px]"
              style={{ fontFamily: "Inter, sans-serif", color: "#737373" }}
            >
              {nowPlaying.singer}
            </p>
          </div>
        </div>

        {/* Center: Native HTML5 Audio Player (Added min-w-0 to fix flex squeeze) */}
        <div className="flex-1 min-w-0 flex items-center px-1 md:px-4" style={{ height: "72px" }}>
          <audio
            key={nowPlaying.audioUrl}
            src={nowPlaying.audioUrl}
            autoPlay
            controls
            controlsList="nodownload"
            style={{
              width: "100%",
              height: "40px",
              outline: "none",
              colorScheme: "dark",
              backgroundColor: "transparent" 
            }}
            title={nowPlaying.name}
          />
        </div>

        {/* Right: close button */}
        <div className="shrink-0 pl-1 pr-1 md:px-4">
          <button
            onClick={() => setNowPlaying(null)}
            className="text-[#555] hover:text-white transition-colors p-2"
            style={{ fontSize: "18px", lineHeight: 1 }}
            aria-label="Close player"
            title="Close player"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
}