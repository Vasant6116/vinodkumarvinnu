const fs = require('fs');

const newDiscography = `import { useState } from 'react';
import { MusicPlayer } from '../components/MusicPlayer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import mayaImage from 'figma:asset/6ed5f41a4ba2dabb2588790ff0470c92e9b71d69.png';
import lifeStoriesImage from 'figma:asset/7f03bb12987f07d5f29b9db636f0db17c65b6326.png';
import oSaathiyaImage from 'figma:asset/e0fd4211f28831f5564ae5eaa59c3c2b2558410d.png';
import naariImage from 'figma:asset/f1d53dc151557ac9bac222e482c04161e9281a6e.png';
import gZombieImage from 'figma:asset/fc8acd558b8f791c27c2bfd490757eca9cb0b048.png';

const CATEGORIES = [
  "All",
  "Albums",
  "Singles",
  "Background Score",
  "Melody Songs",
  "Action Themes",
  "Folk Music",
  "Classical Fusion",
  "Electronic Music",
  "Orchestral Composition",
  "Advertisements",
  "Devotional",
  "Independent Music"
];

export default function Discography() {
  const [activeCategory, setActiveCategory] = useState("All");

  const releases = [
    {
      id: 1,
      title: "O Saathiya",
      year: "2023",
      type: "Telugu Film",
      categories: ["Albums", "Melody Songs"],
      platform: "Amazon Prime",
      songs: [
        { name: "O Saathiya", lyrics: "Bhaskarabatla", singer: "Javed Ali", driveId: "1c0hLFMSgCb1DVBGAfPWp_IWsLuP3h4bo" },
        { name: "Vellipoye", lyrics: "Bhaskarabatla", singer: "Rahul Sipligunj", driveId: "1vTN77E8i07CmmFkthXLXQshuFbePyVwV" },
        { name: "Nela Meedha Lene", lyrics: "Ananth SriRam", singer: "Yazin Nizar" },
        { name: "E Kshanam", lyrics: "Ram Babu Gosala", singer: "Karthik" },
        { name: "E Kshanam (Female Version)", lyrics: "Ram Babu Gosala", singer: "Pranathi" },
      ],
      image: oSaathiyaImage
    },
    {
      id: 2,
      title: "Naari – The Women",
      year: "2024",
      type: "Telugu Film",
      categories: ["Albums", "Background Score"],
      platform: "IFFI Goa Official Selection",
      description: "Recently released in theaters – streaming soon",
      songs: [
        { name: "Gundelona", lyrics: "Vinod Kumar Vinnu & Prasad Saana", singer: "Ramana Gogula" },
        { name: "Hawaii Hawaii", lyrics: "Bhaskarabatla", singer: "Sunitha" },
        { name: "Pranam Kaalche", lyrics: "Prasad Saana", singer: "RP Patnaik" },
        { name: "Nisilo Sasila", lyrics: "Prasad Saana", singer: "Chinmayi" },
        { name: "Eedu Magadentra Bujji", lyrics: "C-Shore", singer: "C-Shore" },
      ],
      image: naariImage
    },
    {
      id: 3,
      title: "G Zombie",
      year: "2021",
      type: "Telugu Film",
      categories: ["Albums", "Action Themes"],
      platform: "Amazon Prime & Airtel Xtreme",
      songs: [
        { name: "Avunani Kadantu", lyrics: "Ram Babu", singer: "Sai Charana" },
        { name: "Bambela", lyrics: "Vinod Kumar Vinnu", singer: "Vinod Kumar Vinnu" },
      ],
      image: gZombieImage
    },
    {
      id: 4,
      title: "#LifeStories",
      year: "2023",
      type: "Web Series",
      categories: ["Background Score", "Electronic Music"],
      platform: "ETV Win",
      description: "A collection of six shorts exploring human emotions. Background Score.",
      director: "Ujjwal Kashyap",
      image: lifeStoriesImage
    },
    {
      id: 5,
      title: "Maya",
      year: "2022",
      type: "Independent Film",
      categories: ["Independent Music", "Background Score"],
      platform: "YouTube",
      description: "Independent Telugu Film. Music & Background Score.",
      director: "Sharrth",
      image: mayaImage
    },
    {
      id: 6,
      title: "Classical Journey",
      year: "2024",
      type: "Single",
      categories: ["Singles", "Classical Fusion", "Independent Music"],
      description: "An exploration of Carnatic roots.",
      songs: [{ name: "Classical Journey (Single)" }],
      image: oSaathiyaImage
    },
    {
      id: 7,
      title: "Commercial Anthem",
      year: "2023",
      type: "Advertisement",
      categories: ["Advertisements", "Electronic Music"],
      description: "Brand campaign for major client.",
      songs: [{ name: "The Anthem" }],
      image: mayaImage
    },
    {
      id: 8,
      title: "Devotional Chants",
      year: "2022",
      type: "Album",
      categories: ["Albums", "Devotional"],
      description: "A spiritual journey.",
      songs: [{ name: "Morning Chant" }, { name: "Evening Prayer" }],
      image: lifeStoriesImage
    }
  ];

  const filteredReleases = activeCategory === "All" 
    ? releases 
    : releases.filter(r => r.categories?.includes(activeCategory));

  return (
    <div className="pt-[140px] pb-20 px-[35px] min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12">
          <h1 className="font-['Jaro'] text-white text-[64px] leading-[0.8] mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
            DISCOGRAPHY
          </h1>
          <p className="font-['Inter'] text-neutral-400 max-w-2xl leading-relaxed mb-8">
            Complete collection of music releases and soundtracks. Browse by category to explore different facets of Vinnu's compositions.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={\`px-4 py-2 rounded-full font-['Inter'] text-sm transition-colors \${
                  activeCategory === category 
                    ? 'bg-white text-black' 
                    : 'bg-[#1a1a1a] text-neutral-400 hover:bg-[#2a2a2a] hover:text-white border border-[#3b3b3b]'
                }\`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredReleases.map((release) => (
            <div key={release.id} className="relative rounded-lg overflow-hidden">
              {release.songs && release.songs.length > 0 ? (
                <MusicPlayer
                  songs={release.songs}
                  albumTitle={release.title}
                  albumYear={release.year}
                  albumType={release.type}
                  albumArt={release.image}
                />
              ) : (
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 flex-shrink-0 bg-[#1a1a1a] rounded">
                    <img src={release.image} alt={release.title} className="w-full h-full object-cover rounded opacity-80" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-bold text-xl mb-1">{release.title}</h3>
                    <p className="text-neutral-400 text-sm mb-2">{release.year} • {release.type}</p>
                    {release.description && <p className="text-neutral-500 text-sm">{release.description}</p>}
                  </div>
                </div>
              )}
            </div>
          ))}
          {filteredReleases.length === 0 && (
             <div className="text-neutral-500 py-12 text-center">No releases found for this category.</div>
          )}
        </div>
      </div>
    </div>
  );
}`;

fs.writeFileSync('src/app/pages/Discography.tsx', newDiscography);
