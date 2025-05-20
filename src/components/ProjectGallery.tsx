
import { useState, useEffect, useRef } from "react";
import { GalleryHorizontal, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Casa en Ruitoque Alto",
    description: "Diseño xerófito con cactus y suculentas que resalta la belleza natural del desierto.",
    image: "/lovable-uploads/a89e08d6-669d-40cb-950a-0d0cda395358.png"
  },
  {
    id: 2,
    title: "Necio Gastro Bar",
    description: "Composición de cactus y rocas que crea un paisaje desértico elegante y sostenible.",
    image: "/lovable-uploads/228ccc2f-de70-4a9e-a335-14ae754f5d8c.png"
  },
  {
    id: 3,
    title: "Zantorini Boutique",
    description: "Jardín de cactus y suculentas entre rocas monumentales para un ambiente sereno y natural.",
    image: "/lovable-uploads/62af103e-8aa6-4f57-933d-62f52f060779.png"
  },
  {
    id: 4,
    title: "Jardin en La Mesa de los Santos",
    description: "Jardín sostenible con especies de bajo consumo hídrico y gran impacto visual.",
    image: "/lovable-uploads/54a6f812-ec17-4e9e-966c-f5d89c076813.png"
  },
  {
    id: 5,
    title: "Oficinas Direct English",
    description: "Creación de microclimas con abundante vegetación de hojas anchas.",
    image: "/lovable-uploads/f4a5043c-0f0a-4f8c-9855-5eb39ebe7bd9.png"
  },
  {
    id: 6,
    title: "Jardín Zen Residencial",
    description: "Espacio de serenidad con elementos naturales y vegetación cuidadosamente seleccionada.",
    image: "/lovable-uploads/0655d6ee-a5e8-4faf-a8a2-be131c2c3e2a.png"
  },
];

export const ProjectGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Automatic rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2 text-primary">
            <GalleryHorizontal size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-gray-900">
            Galería de Jardines
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-poppins">
            Explora nuestros diseños: desde jardines zen hasta paisajes tropicales y verticales. 
            Cada espacio refleja nuestro compromiso con la belleza y el equilibrio natural.
          </p>
        </div>
        
        {/* Carousel */}
        <div 
          className="relative max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl" 
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            {/* Images */}
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 bg-black",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 font-playfair">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base max-w-xl font-poppins">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            >
              <ArrowRight size={24} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 absolute bottom-4 left-0 right-0 z-20">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === activeIndex ? "bg-white scale-125" : "bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
