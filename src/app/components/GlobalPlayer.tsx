import { usePlayer } from "../context/PlayerContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GlobalPlayer() {
  const { nowPlaying, setNowPlaying } = usePlayer();

  if (!nowPlaying) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* Single row: thumbnail + info LEFT | iframe spectrum CENTER | close RIGHT */}
      <div className="flex items-center bg-[#282a2c]" style={{ height: "72px" }}>

        {/* Left: album art + song info */}
        <div className="flex items-center gap-3 px-4 shrink-0" style={{ width: "260px" }}>
          {nowPlaying.albumArt && (
            <div className="shrink-0 rounded overflow-hidden" style={{ width: "44px", height: "44px" }}>
              <ImageWithFallback
                src={nowPlaying.albumArt}
                alt={nowPlaying.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="min-w-0">
            <p
              className="text-[13px] font-semibold text-white truncate leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {nowPlaying.name}
            </p>
            <p
              className="text-[11px] truncate leading-tight mt-[2px]"
              style={{ fontFamily: "Inter, sans-serif", color: "#737373" }}
            >
              {nowPlaying.singer}
            </p>
          </div>
        </div>

        {/* Center: iframe cropped — hide title bar (top) and volume (bottom) */}
        <div
          className="flex-1 overflow-hidden"
          style={{ background: "#282A2C", height: "72px" }}
          
        >
          <iframe
            key={nowPlaying.driveId}
            src={`https://drive.google.com/file/d/${nowPlaying.driveId}/preview`}
            width="100%"
            height="300"
            allow="autoplay"
            style={{
              border: "none",
              display: "block",
              margin: 0,
              marginTop: "-85px",
              background: "#000000",
              colorScheme: "dark",
            } as React.CSSProperties}
            title={nowPlaying.name}
          />
        </div>

        {/* Right: close button */}
        <div className="shrink-0 px-4">
          <button
            onClick={() => setNowPlaying(null)}
            className="text-[#555] hover:text-white transition-colors"
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
