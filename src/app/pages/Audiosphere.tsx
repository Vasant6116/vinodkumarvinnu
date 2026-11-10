import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client';
import { Film, User, Users, SlidersHorizontal } from 'lucide-react';

interface AudioProject {
  id: number;
  title: string;
  poster_url: string;
  director: string;
  producer: string;
  cast_members: string;
  mixed_by: string;
}

// Mimics the exact styling from your Discography Story Modal
function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-3 items-start py-3 border-b border-[#1e1e1e] last:border-0">
      <span className="text-[#D4AF37] mt-[2px] shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-neutral-500 mb-[2px]">{label}</p>
        <p className="font-['Inter'] text-sm text-neutral-200 leading-snug">{value}</p>
      </div>
    </div>
  );
}

export default function Audiosphere() {
  const [projects, setProjects] = useState<AudioProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('audiosphere_projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (!error && data) {
        setProjects(data);
      }
      setIsLoading(false);
    }
    fetchProjects();
  }, []);

  return (
    <div className="pt-[100px] md:pt-[140px] pb-24 px-3 md:px-[35px] min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="heading-xl text-white mb-6 uppercase">AUDIOSPHERE</h1>
          <div className="space-y-4 max-w-full">
            <p className="font-['Inter'] text-neutral-400 leading-relaxed text-sm md:text-base">
              Vinod Kumar Vinnu is more than a music composer and producer; he is a sound creator who brings music to life through both artistic vision and technical precision. From composing original scores and crafting musical arrangements to shaping the final sonic experience, his approach combines creativity, emotion, and attention to detail. Every project is an opportunity to create a distinctive sound that complements the story, enhances the atmosphere, and connects with the listener.
            </p>
            <p className="font-['Inter'] text-neutral-400 leading-relaxed text-sm md:text-base">
              Beyond composition and production, Vinod Kumar Vinnu specialises in audio mixing across multiple formats, including Stereo, 5.1 Surround, 7.1 Surround, and Ambisonics. With a focus on clarity, depth, spatial positioning, and sonic balance, he shapes each mix to suit its intended listening environment. Whether it is a stereo music production, an immersive multichannel experience, or a cinematic soundtrack, his goal is to deliver sound with precision, dimension, and impact—where every element finds its place and every detail contributes to the bigger picture.
            </p>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-white text-center py-20 font-['Inter']">Loading projects...</div>
        )}

        {/* Projects Grid */}
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#0e0e0e] border border-[#222] rounded-xl overflow-hidden flex flex-row hover:border-[#333] transition-colors">
              
              {/* Left Side: Poster Image */}
              <div className="w-[35%] sm:w-[220px] shrink-0 border-r border-[#222] bg-[#121212]">
                {project.poster_url && (
                  <img 
                    src={project.poster_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                )}
              </div>

              {/* Right Side: Details */}
              <div className="p-5 md:p-6 flex flex-col flex-1 min-w-0">
                {/* Title Section */}
                <div className="mb-2 pb-2 border-b border-[#222]">
                  <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-[#D4AF37] mb-1">Project</p>
                  <h2 className="card-title truncate">{project.title}</h2>
                </div>

                {/* Info Rows (Production Details header removed) */}
                <div className="flex flex-col">
                  <InfoRow icon={<Film size={14} />} label="Director" value={project.director} />
                  <InfoRow icon={<User size={14} />} label="Producer" value={project.producer} />
                  <InfoRow icon={<Users size={14} />} label="Cast" value={project.cast_members} />
                  <InfoRow icon={<SlidersHorizontal size={14} />} label="Mixed By" value={project.mixed_by} />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}