import { createContext, useContext, useState, type ReactNode } from "react";

export interface NowPlaying {
  name: string;
  singer: string;
  driveId: string;
  albumArt?: string;
}

interface PlayerContextValue {
  nowPlaying: NowPlaying | null;
  setNowPlaying: (song: NowPlaying | null) => void;
}

const PlayerContext = createContext<PlayerContextValue>({
  nowPlaying: null,
  setNowPlaying: () => {},
});

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  return (
    <PlayerContext.Provider value={{ nowPlaying, setNowPlaying }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
