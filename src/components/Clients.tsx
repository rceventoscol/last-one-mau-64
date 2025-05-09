import { useState, useEffect } from "react";
import { GalleryHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
const clients = [{
  id: 1,
  name: "Carolina Sánchez",
  title: "Presentadora de TV",
  image: "/lovable-uploads/b5746583-9efb-4d7f-a71e-33c922584104.png"
}, {
  id: 2,
  name: "Fernando Restrepo",
  title: "Arquitecto Renombrado",
  image: "/lovable-uploads/44596661-0c32-4663-890b-e1590adf0798.png"
}, {
  id: 3,
  name: "Hotel Santamaría",
  title: "Jardines del Lobby",
  image: "/lovable-uploads/be60b41b-5158-4777-ae06-1add48ecb9bb.png"
}];
export const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  return <section id="clientes" className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2 text-primary">
            <GalleryHorizontal size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-gray-900">Hemos sembrado naturaleza en...</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-poppins">
            Celebridades, presentadores, diseñadores y figuras públicas han confiado en 
            nosotros para transformar sus espacios.
          </p>
        </div>
        
        {/* Clients Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[480px] rounded-xl overflow-hidden shadow-lg">
            {clients.map((client, index) => <div key={client.id} className={cn("absolute inset-0 flex flex-col md:flex-row transition-all duration-700", index === activeIndex ? "opacity-100 translate-x-0 z-10" : index < activeIndex ? "opacity-0 -translate-x-full z-0" : "opacity-0 translate-x-full z-0")}>
                <div className="md:w-1/2 h-60 md:h-full">
                  <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">
                    {client.name}
                  </h3>
                  <p className="text-accent font-medium mb-4 font-poppins">
                    {client.title}
                  </p>
                  <blockquote className="text-gray-700 italic mb-6 font-poppins">D</blockquote>
                  <div className="mt-auto">
                    <span className="inline-block text-primary font-medium font-poppins">
                      Cliente desde 2019
                    </span>
                  </div>
                </div>
              </div>)}
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
              {clients.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={cn("w-2.5 h-2.5 rounded-full transition-all", index === activeIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400")} aria-label={`Go to slide ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};