const fs = require('fs');
let content = fs.readFileSync('src/app/pages/About.tsx', 'utf8');

const contactSection = `
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
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-['Jaro'] text-white text-[32px] md:text-[48px] leading-[0.8]" style={{ fontVariationSettings: "'opsz' 6" }}>
              CONTACT & CONNECT
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">WhatsApp</span>
              </a>
              <a href="mailto:contact@vinnu.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">Email</span>
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">Instagram</span>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">Google Location</span>
              </a>
            </div>
          </div>
        </div>
`;

content = content.replace("</div>\n      </div>\n    </div>", contactSection + "      </div>\n    </div>");
fs.writeFileSync('src/app/pages/About.tsx', content);
