import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const CONTACT_LINKS = [
  { icon: Phone,         href: "tel:+919666485736",                          label: "Call" },
  { icon: MessageCircle, href: "https://wa.me/919666485736",                  label: "WhatsApp" },
  { icon: Mail,          href: "mailto:",                                     label: "Email" },
  { icon: MapPin,        href: "https://maps.app.goo.gl/nY57etsQ2NUS9pBq8",  label: "Location" },
];

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'The Story' },
    { path: '/films', label: 'Films' },
    { path: '/discography', label: 'Discography' },
    { path: '/gallery', label: 'Moments' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-[20px] md:px-[35px] py-[20px] md:py-[35px]">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-['Jaro'] text-[14px] transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
                style={{ fontVariationSettings: "'opsz' 6" }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo/Title for mobile */}
          <div className="lg:hidden font-['Jaro'] text-white text-[14px]" style={{ fontVariationSettings: "'opsz' 6" }}>
            VINOD KUMAR VINNU
          </div>
          
          {/* Desktop Contact Icons */}
          <div className="hidden lg:flex items-center gap-2">
            {CONTACT_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="group relative w-[44px] h-[44px] flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <Icon size={16} strokeWidth={1.5} />
                <div className="absolute inset-0 border border-white rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-[20px] bg-black/95 backdrop-blur-md border border-[#3b3b3b] rounded-lg overflow-hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-['Jaro'] text-[14px] px-6 py-4 transition-colors border-b border-[#3b3b3b] last:border-0 ${
                    location.pathname === link.path
                      ? 'text-white bg-white/5'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ fontVariationSettings: "'opsz' 6" }}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
              {/* Mobile contact icon row */}
              <div className="flex items-center justify-center gap-3 px-6 py-4">
                {CONTACT_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative w-[44px] h-[44px] flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                    <div className="absolute inset-0 border border-white rounded-sm pointer-events-none" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}