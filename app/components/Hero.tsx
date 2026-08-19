import heroImage from 'figma:asset/da97cc02cb800ff0a796632c823e9734ab5bc2c2.png';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Concert stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#000407]" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 gap-8 md:gap-12">
        <div className="text-center">
          <h2 className="font-['Rubik_80s_Fade'] text-[40px] sm:text-[60px] md:text-[80px] leading-[0.8] text-white tracking-[0.05em] mb-2 md:mb-4">
            VINOD KUMAR
          </h2>
          <h1 className="font-['Rubik_80s_Fade'] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] leading-[0.8] text-white tracking-[0.05em]">
            VINNU
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/discography" 
            className="relative px-6 sm:px-8 py-3 sm:py-4 font-['Jaro'] text-white hover:bg-white/10 transition-colors text-xs sm:text-sm text-center"
            style={{ fontVariationSettings: "'opsz' 6" }}
          >
            EXPLORE MY WORK
            <div className="absolute inset-0 border-2 border-white rounded-sm pointer-events-none" />
          </Link>
          <Link 
            to="/about" 
            className="relative px-6 sm:px-8 py-3 sm:py-4 font-['Jaro'] text-white hover:bg-white/10 transition-colors text-xs sm:text-sm text-center"
            style={{ fontVariationSettings: "'opsz' 6" }}
          >
            ABOUT ME
            <div className="absolute inset-0 border border-white rounded-sm pointer-events-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}