const fs = require('fs');

let content = fs.readFileSync('src/app/pages/Films.tsx', 'utf8');

const detailComponent = `
import { MusicPlayer } from '../components/MusicPlayer';
import { Play } from 'lucide-react';

function FilmDetailView({ film, onBack }) {
  return (
    <div className="animate-in fade-in duration-500">
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
        <span className="font-['Inter'] uppercase tracking-widest text-sm">Back to Films</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[2/3]">
            <ImageWithFallback src={film.image} alt={film.title} className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-['Jaro'] text-white text-[48px] md:text-[80px] leading-[0.8] mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
            {film.title.toUpperCase()}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 font-['Inter'] text-neutral-400 text-sm mb-8">
            {film.year && <span>{film.year}</span>}
            {film.year && film.genre && <span>•</span>}
            {film.genre && <span>{film.genre}</span>}
            {film.platform && <span>• {film.platform}</span>}
          </div>

          <div className="space-y-6 font-['Inter'] text-neutral-300">
            <p className="text-lg text-white font-medium">{film.role}</p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#3b3b3b]">
              {film.director && (
                <div>
                  <h4 className="text-[#D4AF37] font-['Jaro'] mb-1">DIRECTOR</h4>
                  <p>{film.director}</p>
                </div>
              )}
              {film.story && (
                <div>
                  <h4 className="text-[#D4AF37] font-['Jaro'] mb-1">STORY</h4>
                  <p>{film.story}</p>
                </div>
              )}
              {film.producer && (
                <div>
                  <h4 className="text-[#D4AF37] font-['Jaro'] mb-1">PRODUCER</h4>
                  <p>{film.producer}</p>
                </div>
              )}
            </div>

            {film.aboutComposition && (
              <div className="pt-6 border-t border-[#3b3b3b]">
                <h4 className="text-[#D4AF37] font-['Jaro'] text-xl mb-3">STORY BEHIND THE COMPOSITION</h4>
                <p className="leading-relaxed">{film.aboutComposition}</p>
              </div>
            )}
          </div>
          
          {film.songs && film.songs.length > 0 && (
            <div className="mt-12">
              <h4 className="text-[#D4AF37] font-['Jaro'] text-2xl mb-6">SOUNDTRACK</h4>
              <MusicPlayer
                songs={film.songs}
                albumTitle={film.title}
                albumYear={film.year}
                albumType={film.genre || "Film Score"}
                albumArt={film.image}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
`;

// Insert the component
content = content.replace("export default function Films() {", detailComponent + "\nexport default function Films() {\n  const [selectedFilm, setSelectedFilm] = useState<any>(null);");

// Modify the return statement
const currentReturn = `  return (
    <div className="pt-[100px] md:pt-[140px] pb-12 md:pb-20 px-[20px] md:px-[35px] min-h-screen overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">`;

const newReturn = `  return (
    <div className="pt-[100px] md:pt-[140px] pb-12 md:pb-20 px-[20px] md:px-[35px] min-h-screen overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        {selectedFilm ? (
          <FilmDetailView film={selectedFilm} onBack={() => setSelectedFilm(null)} />
        ) : (
          <>`;

content = content.replace(currentReturn, newReturn);
content = content.replace("</div>\n    </div>\n  );\n}", "          </>\n        )}\n      </div>\n    </div>\n  );\n}");

// Add click handlers to the carousel center images
// For Released films
content = content.replace(
  `                    <ImageWithFallback
                      src={film.image}
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />`,
  `                    <div onClick={() => isCenter && setSelectedFilm(film)} className="w-full h-full cursor-pointer">
                      <ImageWithFallback
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                    </div>`
);

content = content.replace(
  `                    <ImageWithFallback
                      src={film.image}
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />`,
  `                    <div onClick={() => isCenter && setSelectedFilm(film)} className="w-full h-full cursor-pointer">
                      <ImageWithFallback
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                    </div>`
);

fs.writeFileSync('src/app/pages/Films.tsx', content);
