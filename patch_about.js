const fs = require('fs');
let content = fs.readFileSync('src/app/pages/About.tsx', 'utf8');

const contactSection = `
        <div id="contact" className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#3b3b3b]">
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-['Jaro'] text-white text-[32px] md:text-[48px] leading-[0.8]" style={{ fontVariationSettings: "'opsz' 6" }}>
              CONTACT & CONNECT
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors w-fit">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">WhatsApp</span>
              </a>
              <a href="mailto:contact@vinnu.com" className="inline-flex items-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors w-fit">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">Email</span>
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors w-fit">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">Instagram</span>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#3b3b3b] text-neutral-300 hover:text-white hover:border-white transition-colors w-fit">
                <span className="font-['Inter'] text-sm uppercase tracking-widest">Google Location</span>
              </a>
            </div>
          </div>
        </div>
`;

content = content.replace("</div>\n      </div>\n    </div>", contactSection + "      </div>\n    </div>");
fs.writeFileSync('src/app/pages/About.tsx', content);
