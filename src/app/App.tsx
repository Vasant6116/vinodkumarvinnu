import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { MagicalAtmosphere } from "./components/MagicalAtmosphere";
import { Hero } from "./components/Hero";
import { FilmsPreview } from "./components/FilmsPreview";
import { DiscographyPreview } from "./components/DiscographyPreview";
import { GalleryPreview } from "./components/GalleryPreview";
import Films from "./pages/Films";
import Discography from "./pages/Discography";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import { PlayerProvider } from "./context/PlayerContext";
import { GlobalPlayer } from "./components/GlobalPlayer";

function HomePage() {
  return (
    <div>
      <Hero />
      <FilmsPreview />
      <DiscographyPreview />
      <GalleryPreview />
    </div>
  );
}

export default function App() {
  return (
    <PlayerProvider>
    <Router>
      <div className="min-h-screen bg-[#000407] overflow-x-hidden">
        <MagicalAtmosphere />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/films" element={<Films />} />
          <Route
            path="/discography"
            element={<Discography />}
          />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <footer className="bg-[#000407] text-neutral-500 py-8 md:py-12 border-t border-[#3b3b3b]">
          <div className="max-w-[1440px] mx-auto px-[20px] md:px-[35px] text-center">
            <p className="font-['Inter'] text-xs md:text-sm">
              &copy; 2025 Vinod Kumar Vinnu. All rights
              reserved.
            </p>
          </div>
        </footer>
        <GlobalPlayer />
      </div>
    </Router>
    </PlayerProvider>
  );
}