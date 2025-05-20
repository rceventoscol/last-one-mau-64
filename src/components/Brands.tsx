
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const brands = [{
  id: 1,
  name: "Hotel Intercontinental",
  image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 2,
  name: "Centro Comercial Cacique",
  image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 3,
  name: "Restaurante La Puerta del Sol",
  image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 4,
  name: "Edificio Metropolitan",
  image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 5,
  name: "Clínica Foscal Internacional",
  image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}];

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
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-playfair text-gray-900">Nuestros Clientes</h2>
        <div ref={slidesRef} className="flex flex-wrap justify-center gap-8 md:gap-12">
          {activeSlides.map(slideIndex => {
            const brand = brands[slideIndex];
            return (
              <div key={brand.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transition-all duration-500">
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
                  <div className="w-full max-w-[180px]">
                    <AspectRatio ratio={16/9} className="bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={brand.image} 
                        alt={brand.name}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-center font-poppins">{brand.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
