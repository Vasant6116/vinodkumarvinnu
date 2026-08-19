import sirPhoto from '../../imports/sir_photo.jpg';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[75vh] w-full overflow-hidden">
        <img
          src={sirPhoto}
          alt="Vinod Kumar Vinnu playing veena"
          className="w-full h-full object-cover object-center"
        />
        {/* Fade to black overlay — mirrors the main hero gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />

        {/* Title pinned to bottom of hero */}
        <div className="absolute bottom-10 md:bottom-14 left-[20px] md:left-[35px] right-[20px] md:right-[35px] max-w-[1440px] mx-auto">
          <h1
            className="font-['Jaro'] text-white text-[52px] md:text-[80px] leading-[0.85]"
            style={{ fontVariationSettings: "'opsz' 6" }}
          >
            THE STORY
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="pb-12 md:pb-20 px-[20px] md:px-[35px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10 md:mb-16" />

        <div>
          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
                Vinod Kumar, known in the creative realm as Vinnu, is a composer and producer whose musical path began in the late 2000s, shaped not by comfort or convention, but by instinct, persistence, and an unspoken call toward the deeper, more mysterious forces of sound. From the earliest days, he approached music as an arcane discipline — something to be studied, mastered, and ultimately wielded with intent.
              </p>
              <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
                His compositions span an extraordinary range: film scores, independent music, Carnatic fusion, rock, pop, EDM, metal, heavy metal, and orchestral works. This diversity is no accident; it reflects a creator drawn to the full spectrum of sonic power — from the quiet pulse of emotion to the thunder of large-scale cinematic arrangements.
              </p>
              <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
                Vinnu has shaped scores for Telugu, Hindi, Kannada, and English projects, contributing to feature films, short films, independent albums, commercial advertisements, corporate productions, and documentaries. Each project reveals his signature: music that feels alive, deliberate, and charged with an underlying force.
              </p>
              <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base">
                There is a depth to his sound — a kind of shadowed brilliance. Melodies that whisper like hidden incantations, harmonies that rise with restrained intensity, and textures that shift like moving shadows. His work often carries the sensation of entering an ancient chamber, where every note has weight and every silence holds meaning.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 mb-10 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-['Jaro'] text-[#D4AF37] text-[24px] md:text-[32px] leading-[0.8] mb-4 md:mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
              HIS LINEAGE & MENTORSHIP
            </h2>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
              Vinnu's artistic evolution was profoundly shaped by the guidance of his revered guru, <span className="text-[rgb(213,184,46)]">Sri Sashi Preetam</span> — an Indian rock visionary known for his electrifying musical identity. A composer, singer, and writer of remarkable force, Sashi Preetam created the evergreen Telugu classic <em>Gulabi</em> and helped redefine the rock soundscape in South Indian cinema. Under his mentorship, Vinnu absorbed not only technique, but a sense of sonic fearlessness.
            </p>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base">
              His journey also brought him into creative circles connected with legendary Indian composers:<br/>
              – <span className="text-[rgb(213,184,46)]">Ramana Gogula</span>, South India's reggae icon and pioneering musical force<br/>
              – <span className="text-[rgb(213,184,46)]">RP Patnaik</span>, renowned Telugu music director and filmmaker
            </p>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mt-4">
              These associations deepened his understanding of composition, storytelling, and artistic identity.
            </p>
          </div>
        </div>

        <div className="mb-10 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-['Jaro'] text-[#D4AF37] text-[24px] md:text-[32px] leading-[0.8] mb-4 md:mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
              CRAFT OF COLLABORATION
            </h2>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
              Across his career, Vinnu has worked with some of the finest sound engineers, musicians, and instrumentalists throughout South and North India. His music has been enriched through collaboration with legendary Telugu writers, whose words anchor his compositions with emotional depth.
            </p>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base">
              Many great Indian playback singers have rendered his music under his direction, giving voice to his sonic visions with precision and artistry.
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-['Jaro'] text-[#D4AF37] text-[24px] md:text-[32px] leading-[0.8] mb-4 md:mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
              THE ARCANE APPROACH
            </h2>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
              At the heart of Vinnu's craft lies a disciplined, ritualistic devotion to storytelling. He builds each score like a sequence of ancient runes — layered with purpose, shaped with tension, and guided by a deep sensitivity to the unseen emotional currents within a narrative.
            </p>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
              His music does not simply support a scene; it conjures atmosphere, binding imagery and emotion into a unified cinematic experience.
            </p>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base">
              Professional, commanding, and continually evolving, Vinnu stands as a composer who shapes immersive sonic worlds with precision — drawing from shadow, emotion, and cinematic vision to create work that resonates with lasting power.
            </p>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 mb-10 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-['Jaro'] text-[#D4AF37] text-[24px] md:text-[32px] leading-[0.8] mb-4 md:mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
              STORY BEHIND THE COMPOSITIONS
            </h2>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
              Every piece of music carries its own narrative. For Vinnu, the process of creating a score or a song is deeply intertwined with the story it seeks to tell. Whether it is an independent track echoing a personal revelation or a film score designed to elevate an on-screen moment, the journey from silence to sound is filled with intentionality.
            </p>
            <p className="font-['Inter'] text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
              The "Story behind the composition" is an editorial lens into this creative process—revealing the inspirations, challenges, and serendipitous moments that shape the final audio experience. Discover these stories interwoven across his films and independent projects.
            </p>
          </div>
        </div>

        <div id="contact" className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#3b3b3b]">
          <div className="space-y-8 md:space-y-10">
            <h2 className="font-['Jaro'] text-white text-[32px] md:text-[48px] leading-[0.8]" style={{ fontVariationSettings: "'opsz' 6" }}>
              CONTACT & CONNECT
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Call */}
              <a
                href="tel:+919666485736"
                className="group flex flex-col items-center gap-4 px-6 py-8 border border-[#2a2a2a] hover:border-[#D4AF37]/60 bg-[#0a0a0a] hover:bg-[#D4AF37]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-[#2a2a2a] group-hover:border-[#D4AF37]/50 flex items-center justify-center transition-colors duration-300">
                  <Phone size={20} className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <p className="font-['Jaro'] text-white text-[13px] tracking-[1.5px] mb-1" style={{ fontVariationSettings: "'opsz' 6" }}>CALL</p>
                  <p className="font-['Inter'] text-neutral-500 text-[11px] group-hover:text-neutral-400 transition-colors">+91 96664 85736</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919666485736"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-4 px-6 py-8 border border-[#2a2a2a] hover:border-[#D4AF37]/60 bg-[#0a0a0a] hover:bg-[#D4AF37]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-[#2a2a2a] group-hover:border-[#D4AF37]/50 flex items-center justify-center transition-colors duration-300">
                  <MessageCircle size={20} className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <p className="font-['Jaro'] text-white text-[13px] tracking-[1.5px] mb-1" style={{ fontVariationSettings: "'opsz' 6" }}>WHATSAPP</p>
                  <p className="font-['Inter'] text-neutral-500 text-[11px] group-hover:text-neutral-400 transition-colors">+91 96664 85736</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:"
                className="group flex flex-col items-center gap-4 px-6 py-8 border border-[#2a2a2a] hover:border-[#D4AF37]/60 bg-[#0a0a0a] hover:bg-[#D4AF37]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-[#2a2a2a] group-hover:border-[#D4AF37]/50 flex items-center justify-center transition-colors duration-300">
                  <Mail size={20} className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <p className="font-['Jaro'] text-white text-[13px] tracking-[1.5px] mb-1" style={{ fontVariationSettings: "'opsz' 6" }}>EMAIL</p>
                  <p className="font-['Inter'] text-neutral-500 text-[11px] group-hover:text-neutral-400 transition-colors">Link coming soon</p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/nY57etsQ2NUS9pBq8"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-4 px-6 py-8 border border-[#2a2a2a] hover:border-[#D4AF37]/60 bg-[#0a0a0a] hover:bg-[#D4AF37]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-[#2a2a2a] group-hover:border-[#D4AF37]/50 flex items-center justify-center transition-colors duration-300">
                  <MapPin size={20} className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <p className="font-['Jaro'] text-white text-[13px] tracking-[1.5px] mb-1" style={{ fontVariationSettings: "'opsz' 6" }}>LOCATION</p>
                  <p className="font-['Inter'] text-neutral-500 text-[11px] group-hover:text-neutral-400 transition-colors">Find on Maps</p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}