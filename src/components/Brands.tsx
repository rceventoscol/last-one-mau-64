
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const brands = [
  {
    id: 1,
    name: "Hotel Intercontinental",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Centro Comercial Cacique",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Restaurante La Puerta del Sol",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Edificio Metropolitan",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Clínica Foscal Internacional",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

export const Brands = () => {
  const [activeSlides, setActiveSlides] = useState([0, 1, 2]);
  const slidesRef = useRef<HTMLDivElement>(null);

  // Rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides(current => {
        return current.map(index => (index + 1) % brands.length);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="marcas" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair text-gray-900">
          Hemos sembrado naturaleza en...
        </h2>
        
        {/* Brands carousel */}
        <div 
          className="relative overflow-hidden max-w-6xl mx-auto"
          ref={slidesRef}
        >
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, index) => (
              <div 
                key={brand.id}
                className={cn(
                  "transition-all duration-700 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)]",
                  activeSlides.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
                )}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-playfair">
                      {brand.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-poppins">
                      Proyecto realizado en 2022
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
