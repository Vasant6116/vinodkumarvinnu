import { useState } from 'react';
import { MusicPlayer } from '../components/MusicPlayer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X, Film, User, PenLine, Mic, Building2, Music2, Users, Award } from 'lucide-react';
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

interface StoryDetails {
  story?: string;
  director?: string;
  producer?: string;
  lyricist?: string;
  singers?: string;
  recordingStudio?: string;
  instruments?: string;
  trailerUrl?: string;
  credits?: string;
}

interface Release {
  id: number;
  title: string;
  year: string;
  type: string;
  categories: string[];
  platform?: string;
  description?: string;
  director?: string;
  songs?: { name: string; singer?: string; lyrics?: string; driveId?: string }[];
  image: string;
  storyDetails?: StoryDetails;
}

// ── Story Modal ────────────────────────────────────────────────────────────────

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start py-3 border-b border-[#1e1e1e]">
      <span className="text-[#D4AF37] mt-[2px] shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-neutral-500 mb-[2px]">{label}</p>
        <p className="font-['Inter'] text-sm text-neutral-200 leading-snug">{value}</p>
      </div>
    </div>
  );
}

function StoryModal({ release, onClose }: { release: Release; onClose: () => void }) {
  const s = release.storyDetails ?? {};

  const infoRows = [
    { icon: <Film size={14} />, label: "Director", value: s.director },
    { icon: <User size={14} />, label: "Producer", value: s.producer },
    { icon: <PenLine size={14} />, label: "Lyricist", value: s.lyricist },
    { icon: <Mic size={14} />, label: "Singers", value: s.singers },
    { icon: <Building2 size={14} />, label: "Recording Studio", value: s.recordingStudio },
    { icon: <Music2 size={14} />, label: "Instruments Used", value: s.instruments },
  ].filter((r): r is { icon: React.ReactNode; label: string; value: string } => !!r.value);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl flex flex-col"
        style={{ background: "#0e0e0e", border: "1px solid #222" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header band ─────────────────────────────────── */}
        <div className="relative h-[200px] sm:h-[240px] shrink-0 overflow-hidden rounded-t-2xl">
          <img
            src={release.image as string}
            alt={release.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0e0e0e]" />

          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
          >
            <X size={14} />
          </button>

          {/* Title over image */}
          <div className="absolute bottom-5 left-6 right-14">
            <p className="font-['Inter'] text-[10px] uppercase tracking-[1.4px] text-[#D4AF37] mb-1">{release.type} · {release.year}</p>
            <h2
              className="font-['Jaro'] text-white text-[32px] sm:text-[40px] leading-[0.9]"
              style={{ fontVariationSettings: "'opsz' 6" }}
            >
              {release.title}
            </h2>
          </div>
        </div>

        {/* ── Scrollable body ──────────────────────────────── */}
        <div className="px-6 pt-5 pb-8 flex flex-col gap-8">

          {/* Story Behind the Composition */}
          {s.story && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                STORY BEHIND THE COMPOSITION
              </h3>
              <p className="font-['Inter'] text-neutral-300 text-sm leading-relaxed">{s.story}</p>
            </section>
          )}

          {/* Production details grid */}
          {infoRows.length > 0 && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-1"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                PRODUCTION DETAILS
              </h3>
              <div className="flex flex-col">
                {infoRows.map((row) => (
                  <InfoRow key={row.label} icon={row.icon} label={row.label} value={row.value} />
                ))}
              </div>
            </section>
          )}

          {/* Trailer / embedded video */}
          {s.trailerUrl && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                TRAILER
              </h3>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={s.trailerUrl}
                  title={`${release.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {/* Credits */}
          {s.credits && (
            <section>
              <h3
                className="font-['Jaro'] text-[#D4AF37] text-[18px] mb-3"
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                CREDITS
              </h3>
              <p className="font-['Inter'] text-neutral-400 text-sm leading-relaxed whitespace-pre-line">{s.credits}</p>
            </section>
          )}

          {/* Platform badge */}
          {release.platform && (
            <div className="flex items-center gap-2 pt-1">
              <Award size={13} className="text-neutral-500 shrink-0" />
              <p className="font-['Inter'] text-[11px] text-neutral-500">{release.platform}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function Discography() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);

  const releases: Release[] = [
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
      image: oSaathiyaImage,
      storyDetails: {
        story: "O Saathiya was born from a desire to capture the bittersweet ache of love in its most tender form. The title track sought a melody that could exist between joy and longing — something Javed Ali's voice could elevate into something timeless. Each song in the album was crafted to serve the film's emotional arc, layering melody over a backdrop of orchestral warmth and Carnatic undertones.",
        director: "To be updated",
        producer: "To be updated",
        lyricist: "Bhaskarabatla · Ananth SriRam · Ram Babu Gosala",
        singers: "Javed Ali · Rahul Sipligunj · Yazin Nizar · Karthik · Pranathi",
        recordingStudio: "To be updated",
        instruments: "Piano, String Orchestra, Flute, Mridangam, Acoustic Guitar",
        trailerUrl: "",
        credits: "Music & Background Score: Vinod Kumar Vinnu\nLyrics: Bhaskarabatla, Ananth SriRam, Ram Babu Gosala\nVoices: Javed Ali, Rahul Sipligunj, Yazin Nizar, Karthik, Pranathi",
      },
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
      image: naariImage,
      storyDetails: {
        story: "Naari – The Women is one of the most emotionally demanding scores Vinnu has composed. The film is a tribute to the strength and resilience of women, and the music had to carry that weight without overwhelming the narrative. Folk textures were woven alongside symphonic passages to create a sound that felt both rooted and expansive. The IFFI Goa selection was a recognition of how deeply the music connected with the film's vision.",
        director: "To be updated",
        producer: "To be updated",
        lyricist: "Vinod Kumar Vinnu · Prasad Saana · Bhaskarabatla · C-Shore",
        singers: "Ramana Gogula · Sunitha · RP Patnaik · Chinmayi · C-Shore",
        recordingStudio: "To be updated",
        instruments: "Folk Percussion, Violin Section, Veena, Synth Pads, Acoustic Guitar, Dholak",
        trailerUrl: "",
        credits: "Music & Background Score: Vinod Kumar Vinnu\nLyrics: Vinod Kumar Vinnu, Prasad Saana, Bhaskarabatla, C-Shore\nVoices: Ramana Gogula, Sunitha, RP Patnaik, Chinmayi, C-Shore",
      },
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
      image: gZombieImage,
      storyDetails: {
        story: "G Zombie was an unconventional project that demanded a genre-defying score — somewhere between heavy rock energy and dark orchestral atmosphere. The challenge was composing music for a film that blended horror and action in a uniquely Telugu context. Bambela, written and sung by Vinnu himself, became an unexpected standout — a raw, energetic track that captured the spirit of the story.",
        director: "To be updated",
        producer: "To be updated",
        lyricist: "Ram Babu · Vinod Kumar Vinnu",
        singers: "Sai Charana · Vinod Kumar Vinnu",
        recordingStudio: "To be updated",
        instruments: "Electric Guitar, Bass Guitar, Drum Kit, Synthesizer, Distortion Effects, Strings",
        trailerUrl: "",
        credits: "Music & Background Score: Vinod Kumar Vinnu\nLyrics: Ram Babu, Vinod Kumar Vinnu\nVoices: Sai Charana, Vinod Kumar Vinnu",
      },
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
      image: lifeStoriesImage,
      storyDetails: {
        story: "Scoring #LifeStories was an exercise in restraint and precision. Each of the six short films explored a different emotional register — grief, joy, longing, anger, hope, and acceptance — and the music had to shift register sharply between episodes while still feeling like a unified body of work. Electronic textures were layered with minimal acoustic elements to create intimacy at scale.",
        director: "Ujjwal Kashyap",
        producer: "To be updated",
        lyricist: "N/A – Background Score",
        singers: "N/A – Instrumental",
        recordingStudio: "To be updated",
        instruments: "Synthesizers, Electronic Drums, Piano, Ambient Pads, Cello",
        trailerUrl: "",
        credits: "Background Score: Vinod Kumar Vinnu\nDirector: Ujjwal Kashyap\nPlatform: ETV Win",
      },
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
      image: mayaImage,
      storyDetails: {
        story: "Maya was a deeply personal project — an independent Telugu film that gave Vinnu full creative freedom to compose without the constraints of commercial expectation. The score draws heavily from classical Carnatic scales, morphed through contemporary production techniques to create a sound that feels both ancient and modern. Director Sharrth's vision pushed the music toward a meditative, almost hypnotic quality.",
        director: "Sharrth",
        producer: "To be updated",
        lyricist: "To be updated",
        singers: "To be updated",
        recordingStudio: "To be updated",
        instruments: "Veena, Violin, Tabla, Synth Drones, Flute, Ambient Textures",
        trailerUrl: "",
        credits: "Music & Background Score: Vinod Kumar Vinnu\nDirector: Sharrth\nPlatform: YouTube",
      },
    },
    {
      id: 6,
      title: "Classical Journey",
      year: "2024",
      type: "Single",
      categories: ["Singles", "Classical Fusion", "Independent Music"],
      description: "An exploration of Carnatic roots.",
      songs: [{ name: "Classical Journey (Single)", singer: "Vinod Kumar Vinnu" }],
      image: oSaathiyaImage,
      storyDetails: {
        story: "Classical Journey is a solo exploration — Vinnu's meditation on the Carnatic tradition that formed his early musical foundation. The piece moves through three ragas, each representing a different time of day: dawn, noon, and dusk. It is both a tribute and a statement of artistic identity.",
        director: "N/A – Independent Release",
        producer: "Vinod Kumar Vinnu",
        lyricist: "N/A – Instrumental",
        singers: "Vinod Kumar Vinnu",
        recordingStudio: "To be updated",
        instruments: "Veena, Mridangam, Violin, Tanpura, Ghatam",
        trailerUrl: "",
        credits: "Composed, Produced & Performed by: Vinod Kumar Vinnu",
      },
    },
    {
      id: 7,
      title: "Commercial Anthem",
      year: "2023",
      type: "Advertisement",
      categories: ["Advertisements", "Electronic Music"],
      description: "Brand campaign for major client.",
      songs: [{ name: "The Anthem", singer: "To be updated" }],
      image: mayaImage,
      storyDetails: {
        story: "Composing for advertising requires an entirely different discipline — communicating a brand's essence in under sixty seconds while leaving a melody that lingers. This anthem was crafted around the emotional core of the campaign brief, using uplifting orchestral swells under a driving electronic rhythm.",
        director: "To be updated",
        producer: "To be updated",
        lyricist: "To be updated",
        singers: "To be updated",
        recordingStudio: "To be updated",
        instruments: "Full Orchestra Samples, Electronic Drums, Bass Synth, Brass Section",
        trailerUrl: "",
        credits: "Music: Vinod Kumar Vinnu",
      },
    },
    {
      id: 8,
      title: "Devotional Chants",
      year: "2022",
      type: "Album",
      categories: ["Albums", "Devotional"],
      description: "A spiritual journey.",
      songs: [{ name: "Morning Chant", singer: "To be updated" }, { name: "Evening Prayer", singer: "To be updated" }],
      image: lifeStoriesImage,
      storyDetails: {
        story: "Devotional Chants was composed as an offering — music made not for an audience but for a higher purpose. Rooted in ancient Vedic structure yet arranged with modern production sensibility, the album bridges tradition and accessibility, inviting listeners into a space of stillness and reverence.",
        director: "N/A",
        producer: "Vinod Kumar Vinnu",
        lyricist: "Traditional / Ancient Texts",
        singers: "To be updated",
        recordingStudio: "To be updated",
        instruments: "Veena, Harmonium, Tabla, Temple Bells, Choral Voices, Tanpura",
        trailerUrl: "",
        credits: "Composed & Arranged by: Vinod Kumar Vinnu",
      },
    },
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
                className={`px-4 py-2 rounded-full font-['Inter'] text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-[#1a1a1a] text-neutral-400 hover:bg-[#2a2a2a] hover:text-white border border-[#3b3b3b]'
                }`}
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
                  onStoryClick={() => setSelectedRelease(release)}
                />
              ) : (
                <div className="relative bg-[#0a0a0a] border border-[#1a1a1a] p-6 flex flex-col md:flex-row items-center gap-6">
                  {/* Know the Story – plain card */}
                  <button
                    onClick={() => setSelectedRelease(release)}
                    className="absolute top-4 right-4 font-['Jaro'] text-[10px] tracking-[1.2px] uppercase border px-3 py-[5px] transition-all duration-200 hover:bg-[#D4AF37]/10"
                    style={{
                      fontVariationSettings: "'opsz' 6",
                      color: "#D4AF37",
                      borderColor: "rgba(212,175,55,0.45)",
                    }}
                  >
                    Know the Story ↗
                  </button>

                  <div className="w-32 h-32 flex-shrink-0 bg-[#1a1a1a] rounded">
                    <img src={release.image as string} alt={release.title} className="w-full h-full object-cover rounded opacity-80" />
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

      {/* Story Modal */}
      {selectedRelease && (
        <StoryModal
          release={selectedRelease}
          onClose={() => setSelectedRelease(null)}
        />
      )}
    </div>
  );
}
