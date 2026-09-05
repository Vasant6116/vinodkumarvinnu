import { useEffect, useRef, useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import WaveSurfer from "wavesurfer.js";

export function GlobalPlayer() {
  const { nowPlaying, setNowPlaying } = usePlayer();
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1); // Remembers volume before muting

  useEffect(() => {
    if (!nowPlaying?.audioUrl || !containerRef.current) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "rgba(255, 255, 255, 0.2)", 
      progressColor: "#e16f05",              
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      height: 40,                            
      url: nowPlaying.audioUrl,
      cursorWidth: 0,                        
    });

    wavesurferRef.current = ws;
    
    // Apply initial volume
    ws.setVolume(volume);

    ws.on("ready", () => {
      ws.play();
    });

    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("finish", () => setIsPlaying(false));

    return () => {
      ws.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying?.audioUrl]);

  const togglePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (wavesurferRef.current) {
      wavesurferRef.current.setVolume(newVol);
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
      wavesurferRef.current?.setVolume(0);
    } else {
      const volToRestore = prevVolume > 0 ? prevVolume : 1;
      setVolume(volToRestore);
      wavesurferRef.current?.setVolume(volToRestore);
    }
  };

  if (!nowPlaying) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100]"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="flex items-center justify-between bg-[#121212] px-2 md:px-0" style={{ height: "72px" }}>

        {/* Left: album art + song info */}
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

        {/* Center: Custom Wavesurfer Player */}
        <div className="flex-1 min-w-0 flex items-center gap-4 px-1 md:px-4" style={{ height: "72px" }}>
          
          {/* Custom Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "2px" }}>
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            )}
          </button>
          
          {/* Interactive Waveform Trackline */}
          <div ref={containerRef} className="flex-1 cursor-pointer" />
          
        </div>

        {/* Right: Volume & Close button */}
        <div className="flex items-center shrink-0 pl-1 pr-1 md:px-4 gap-2 md:gap-4">
          
          {/* Volume Control (Hidden on very small mobile screens to save space) */}
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={toggleMute} 
              className="text-[#888] hover:text-white transition-colors p-1"
              aria-label={volume === 0 ? "Unmute" : "Mute"}
            >
              {volume === 0 ? (
                // Mute Icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                // Volume Icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 md:w-20 cursor-pointer accent-[#e16f05] bg-[#333] h-1 rounded-lg appearance-none"
              style={{ outline: "none" }}
            />
          </div>

          <div className="w-[1px] h-6 bg-white/10 hidden sm:block mx-1"></div>

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