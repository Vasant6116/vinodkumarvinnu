const fs = require('fs');

const galleryContent = `import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = [
  "All",
  "Studio photos",
  "Recording sessions",
  "Orchestra recordings",
  "Live musicians",
  "DAW/software screen captures",
  "Behind-the-scenes videos"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const allImages = [
    {
      id: 1,
      title: "Studio Recording Session",
      category: "Recording sessions",
      description: "Composing the score for O Saathiya",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY0NzU2NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Live Performance",
      category: "Live musicians",
      description: "Concert at Hyderabad Music Festival",
      image: "https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Collaboration Session",
      category: "Studio photos",
      description: "Working with Ramana Gogula Garu",
      image: "https://images.unsplash.com/photo-1761652556225-1425a7c36247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbGxhYm9yYXRpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Composition Work",
      category: "DAW/software screen captures",
      description: "Creating the score for Naari",
      image: "https://images.unsplash.com/photo-1672847900994-3bf37a83357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG5vdGVzJTIwY29tcG9zaXRpb258ZW58MXx8fHwxNzY0NzU3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Film Score Recording",
      category: "Recording sessions",
      description: "Recording background score",
      image: "https://images.unsplash.com/photo-1701374929875-37125c54cb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHR1cm50YWJsZXxlbnwxfHx8fDE3NjQ3MzE0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Orchestra Session",
      category: "Orchestra recordings",
      description: "Working with live orchestra",
      image: "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjQ2NzUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 7,
      title: "Music Production",
      category: "DAW/software screen captures",
      description: "Mixing and mastering session",
      image: "https://images.unsplash.com/photo-1600443446566-c8a2e34c779b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBjb25kdWN0b3J8ZW58MXx8fHwxNzY0NzU2NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 8,
      title: "Behind the Scenes",
      category: "Behind-the-scenes videos",
      description: "On set during film scoring",
      image: "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjQ2ODIwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 9,
      title: "Award Ceremony",
      category: "Studio photos",
      description: "IFFI Goa Film Festival",
      image: "https://images.unsplash.com/photo-1709832279012-293766967250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2V0JTIwY2luZW1hfGVufDF8fHx8MTc2NDc1NzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
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

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <div className="pt-[140px] pb-20 px-[35px] min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12">
          <h1 className="font-['Jaro'] text-white text-[64px] leading-[0.8] mb-6" style={{ fontVariationSettings: "'opsz' 6" }}>
            MOMENTS
          </h1>
          <p className="font-['Inter'] text-neutral-400 max-w-2xl leading-relaxed mb-8">
            Behind the scenes moments from studio sessions, live performances, and collaborations.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
            >
              <ImageWithFallback
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <p className="font-['Jaro'] text-white text-[24px] leading-[0.8] mb-2" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {image.title.toUpperCase()}
                </p>
                <p className="font-['Inter'] text-white/80 text-sm">
                  {image.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-[#3b3b3b] rounded-lg pointer-events-none" />
            </div>
          ))}
          {images.length === 0 && (
             <div className="text-neutral-500 py-12 col-span-3 text-center">No moments found for this category.</div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && selectedImageData && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl max-h-[85vh] mx-auto px-20">
            <div className="relative">
              <img
                src={selectedImageData.image}
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <p className="font-['Jaro'] text-white text-[28px] leading-[0.8] mb-2" style={{ fontVariationSettings: "'opsz' 6" }}>
                  {selectedImageData.title.toUpperCase()}
                </p>
                <p className="font-['Inter'] text-neutral-400">
                  {selectedImageData.description}
                </p>
                <p className="font-['Inter'] text-neutral-500 text-sm mt-2">
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
`;

fs.writeFileSync('src/app/pages/Gallery.tsx', galleryContent);
