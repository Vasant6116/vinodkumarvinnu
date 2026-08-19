import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const CATEGORIES = [
  "All",
  "Studio photos",
  "Recording sessions",
  "Orchestra recordings",
  "Live musicians",
  "DAW/software screen captures",
  "Behind-the-scenes videos"
];

// Slight mounting tilt per portrait — stays consistent by image id
const TILT: Record<number, number> = {
  1: -1.5, 2: 0.8, 3: -0.5,
  4: 1.2,  5: -0.8, 6: 0.4,
  7: -1.0, 8: 0.7,  9: -0.3,
};

// Atmospheric torch glow blobs — % positions within the section
const TORCHES = [
  { x: 10, y: 18, r: 480, a: 0.07, spd: 4.2 },
  { x: 90, y: 14, r: 400, a: 0.06, spd: 5.1 },
  { x: 5,  y: 58, r: 340, a: 0.05, spd: 3.8 },
  { x: 95, y: 54, r: 360, a: 0.05, spd: 4.7 },
  { x: 50, y: 5,  r: 560, a: 0.04, spd: 6.0 },
  { x: 50, y: 95, r: 420, a: 0.04, spd: 5.5 },
];

// ── Frame layers ──────────────────────────────────────────────────────────────

function PortraitFrame({
  image,
  isHovered,
}: {
  image: { id: number; title: string; description: string; image: string };
  isHovered: boolean;
}) {
  return (
    <>
      {/* Outer gilt frame */}
      <div
        style={{
          padding: "4px",
          background:
            "linear-gradient(135deg, #2e1d00 0%, #b8891a 18%, #d4af37 32%, #f0d060 50%, #d4af37 68%, #b8891a 82%, #2e1d00 100%)",
          boxShadow: isHovered
            ? [
                "inset 0 0 8px rgba(255,230,120,0.45)",
                "0 0 0 1px rgba(20,12,0,0.95)",
                "0 28px 90px rgba(0,0,0,0.98)",
                "0 0 55px rgba(212,175,55,0.18)",
                "0 0 110px rgba(255,160,30,0.09)",
              ].join(", ")
            : [
                "inset 0 0 4px rgba(255,200,80,0.2)",
                "0 0 0 1px rgba(20,12,0,0.95)",
                "0 14px 50px rgba(0,0,0,0.92)",
                "0 4px 16px rgba(0,0,0,0.75)",
              ].join(", "),
          transition: "box-shadow 0.45s ease",
        }}
      >
        {/* Dark mat */}
        <div
          style={{
            background: "#09060300",
            backgroundColor: "#090603",
            padding: "11px",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.95)",
          }}
        >
          {/* Inner decorative ring */}
          <div
            style={{
              border: "1px solid rgba(160,115,22,0.38)",
              boxShadow:
                "inset 0 0 6px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.4)",
              overflow: "hidden",
            }}
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover"
                style={{
                  transform: isHovered ? "scale(1.065)" : "scale(1)",
                  filter: isHovered
                    ? "brightness(1.0) saturate(1.08) contrast(1.02)"
                    : "brightness(0.78) saturate(0.85)",
                  transition:
                    "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.45s ease",
                }}
              />

              {/* Corner embellishments */}
              {(["tl", "tr", "bl", "br"] as const).map((corner) => (
                <div
                  key={corner}
                  style={{
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    top: corner.startsWith("t") ? 6 : "auto",
                    bottom: corner.startsWith("b") ? 6 : "auto",
                    left: corner.endsWith("l") ? 6 : "auto",
                    right: corner.endsWith("r") ? 6 : "auto",
                    border: "1px solid rgba(212,175,55,0.35)",
                    borderRight: corner.endsWith("r")
                      ? "1px solid rgba(212,175,55,0.35)"
                      : "none",
                    borderBottom: corner.startsWith("b")
                      ? "1px solid rgba(212,175,55,0.35)"
                      : "none",
                    borderLeft: corner.endsWith("l")
                      ? "1px solid rgba(212,175,55,0.35)"
                      : "none",
                    borderTop: corner.startsWith("t")
                      ? "1px solid rgba(212,175,55,0.35)"
                      : "none",
                    opacity: isHovered ? 0.8 : 0.3,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />
              ))}

              {/* Hover caption */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.38s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Jaro', sans-serif",
                    color: "white",
                    fontSize: "17px",
                    lineHeight: "0.9",
                    marginBottom: "5px",
                    fontVariationSettings: "'opsz' 6",
                    transform: isHovered ? "translateY(0)" : "translateY(10px)",
                    transition: "transform 0.38s ease",
                    letterSpacing: "0.04em",
                  }}
                >
                  {image.title.toUpperCase()}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "11px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brass nameplate */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "9px" }}>
        <div
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,105,20,0.35) 12%, rgba(201,162,39,0.75) 30%, rgba(220,180,50,0.85) 50%, rgba(201,162,39,0.75) 70%, rgba(139,105,20,0.35) 88%, transparent)",
            padding: "5px 22px",
            minWidth: "60%",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,240,150,0.2)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "7.5px",
              letterSpacing: "2.8px",
              textTransform: "uppercase",
              color: "#1a0f00",
              fontWeight: 700,
            }}
          >
            {image.title}
          </p>
        </div>
      </div>
    </>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const allImages = [
    { id: 1, title: "Studio Recording Session", category: "Recording sessions", description: "Composing the score for O Saathiya", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY0NzU2NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 2, title: "Live Performance", category: "Live musicians", description: "Concert at Hyderabad Music Festival", image: "https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 3, title: "Collaboration Session", category: "Studio photos", description: "Working with Ramana Gogula Garu", image: "https://images.unsplash.com/photo-1761652556225-1425a7c36247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbGxhYm9yYXRpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 4, title: "Composition Work", category: "DAW/software screen captures", description: "Creating the score for Naari", image: "https://images.unsplash.com/photo-1672847900994-3bf37a83357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG5vdGVzJTIwY29tcG9zaXRpb258ZW58MXx8fHwxNzY0NzU3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 5, title: "Film Score Recording", category: "Recording sessions", description: "Recording background score", image: "https://images.unsplash.com/photo-1701374929875-37125c54cb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHR1cm50YWJsZXxlbnwxfHx8fDE3NjQ3MzE0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 6, title: "Orchestra Session", category: "Orchestra recordings", description: "Working with live orchestra", image: "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjQ2NzUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 7, title: "Music Production", category: "DAW/software screen captures", description: "Mixing and mastering session", image: "https://images.unsplash.com/photo-1600443446566-c8a2e34c779b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBjb25kdWN0b3J8ZW58MXx8fHwxNzY0NzU2NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 8, title: "Behind the Scenes", category: "Behind-the-scenes videos", description: "On set during film scoring", image: "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjQ2ODIwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 9, title: "Award Ceremony", category: "Studio photos", description: "IFFI Goa Film Festival", image: "https://images.unsplash.com/photo-1709832279012-293766967250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2V0JTIwY2luZW1hfGVufDF8fHx8MTc2NDc1NzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  ];

  const images = activeCategory === "All"
    ? allImages
    : allImages.filter(img => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[previousIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[nextIndex].id);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape")     setSelectedImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, images]);

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#0d0a07" }}
    >
      {/* ── Stone wall texture (CSS-only, no images) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            // Horizontal stone joint lines
            "repeating-linear-gradient(0deg, transparent, transparent 118px, rgba(0,0,0,0.22) 118px, rgba(0,0,0,0.22) 120px)",
            // Vertical mortar lines (offset to feel like staggered stone)
            "repeating-linear-gradient(90deg, transparent, transparent 238px, rgba(0,0,0,0.1) 238px, rgba(0,0,0,0.1) 240px)",
            // Very subtle warm tint variation
            "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(80,50,10,0.015) 59px, rgba(80,50,10,0.015) 60px)",
          ].join(", "),
        }}
      />

      {/* ── Torch / candlelight glow blobs ── */}
      {TORCHES.map((t, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${t.x}%`,
            top: `${t.y}%`,
            width: `${t.r}px`,
            height: `${t.r}px`,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(255,145,28,${t.a}) 0%, rgba(255,110,10,${t.a * 0.4}) 35%, transparent 70%)`,
            animation: `torchWaver ${t.spd}s ${i * -1.3}s infinite ease-in-out`,
          }}
        />
      ))}

      {/* ── Page content ── */}
      <div className="relative pt-[140px] pb-24 px-[20px] md:px-[35px]">
        <div className="max-w-[1440px] mx-auto">

          {/* Header */}
          <div className="mb-14">
            <h1
              className="font-['Jaro'] text-white text-[40px] md:text-[64px] leading-[0.8] mb-4"
              style={{ fontVariationSettings: "'opsz' 6" }}
            >
              MOMENTS
            </h1>
            <p className="font-['Inter'] text-neutral-400 max-w-2xl leading-relaxed mb-8">
              Behind the scenes moments from studio sessions, live performances, and collaborations.
            </p>

            <div className="flex flex-nowrap overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 px-4 py-2 rounded-full font-['Inter'] text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "bg-[#1a1a1a] text-neutral-400 hover:bg-[#2a2a2a] hover:text-white border border-[#3b3b3b]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* ── Portrait corridor grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16">
            {images.map((image) => {
              const tilt = TILT[image.id] ?? 0;
              const isHovered = hoveredId === image.id;

              return (
                <div key={image.id} className="flex flex-col items-center">
                  {/* Mounting hook — decorative */}
                  <div
                    style={{
                      width: "2px",
                      height: "20px",
                      background:
                        "linear-gradient(to bottom, rgba(180,140,30,0.6), rgba(100,70,10,0.2))",
                      marginBottom: "4px",
                      opacity: 0.7,
                    }}
                  />
                  {/* Hanging wire */}
                  <div
                    style={{
                      width: "60%",
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(160,120,20,0.4) 20%, rgba(200,160,40,0.6) 50%, rgba(160,120,20,0.4) 80%, transparent)",
                      marginBottom: "6px",
                    }}
                  />

                  {/* Portrait wrapper — handles tilt + hover float */}
                  <div
                    style={{
                      width: "100%",
                      transform: isHovered
                        ? "translateY(-10px) rotate(0deg)"
                        : `translateY(0px) rotate(${tilt}deg)`,
                      transition:
                        "transform 0.52s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredId(image.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <PortraitFrame image={image} isHovered={isHovered} />
                  </div>
                </div>
              );
            })}
          </div>

          {images.length === 0 && (
            <div className="text-neutral-500 py-12 col-span-3 text-center">
              No moments found for this category.
            </div>
          )}
        </div>
      </div>

      {/* ── Lightbox (existing functionality preserved) ── */}
      {selectedImage !== null && selectedImageData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.97)" }}
        >
          {/* Lightbox ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)",
            }}
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl max-h-[85vh] mx-auto px-20 relative z-10">
            <div className="relative">
              {/* Lightbox portrait frame */}
              <div
                style={{
                  padding: "3px",
                  background:
                    "linear-gradient(135deg, #2e1d00 0%, #b8891a 18%, #d4af37 32%, #f0d060 50%, #d4af37 68%, #b8891a 82%, #2e1d00 100%)",
                  boxShadow:
                    "0 0 0 1px rgba(20,12,0,0.9), 0 40px 120px rgba(0,0,0,0.98), 0 0 80px rgba(212,175,55,0.12)",
                }}
              >
                <div style={{ background: "#090603", padding: "8px", boxShadow: "inset 0 0 20px rgba(0,0,0,0.95)" }}>
                  <img
                    src={selectedImageData.image}
                    alt={selectedImageData.title}
                    className="w-full h-auto max-h-[68vh] object-contain"
                  />
                </div>
              </div>

              {/* Caption / nameplate */}
              <div className="mt-5 flex flex-col items-center gap-2">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(139,105,20,0.35) 12%, rgba(201,162,39,0.75) 30%, rgba(220,180,50,0.85) 50%, rgba(201,162,39,0.75) 70%, rgba(139,105,20,0.35) 88%, transparent)",
                    padding: "5px 32px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "8px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#1a0f00",
                      fontWeight: 700,
                    }}
                  >
                    {selectedImageData.title}
                  </p>
                </div>
                <p className="font-['Inter'] text-neutral-400 text-sm">
                  {selectedImageData.description}
                </p>
                <p className="font-['Inter'] text-neutral-600 text-xs">
                  {images.findIndex(img => img.id === selectedImage) + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
