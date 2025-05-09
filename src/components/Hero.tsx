import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
export const Hero = () => {
  const phoneNumber = "+573195623951";
  const message = "Hola, estoy interesado en sus servicios de paisajismo.";
  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  return <section id="inicio" className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Image with direct application */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: "url('/lovable-uploads/5255cdda-0d9a-4169-a826-6430c01fbf0c.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} />
      
      {/* Dark overlay with reduced opacity to ensure content visibility without hiding the image */}
      <div className="absolute inset-0 z-0 opacity-30 bg-stone-700"></div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
            Transformamos espacios en paraísos naturales.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-poppins">Donde otros ven tierra, nosotros vemos vida. Tierra Fértil transforma espacios desde hace más de 15 años.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium px-8 py-6 text-lg group transition-all duration-300" onClick={handleContactClick}>
            Contáctanos 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>;
};