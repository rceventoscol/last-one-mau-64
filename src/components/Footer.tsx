
import { Phone, Mail, MapPin } from "lucide-react";
export const Footer = () => {
  return <footer className="relative bg-white text-gray-900 py-12 overflow-hidden">
      {/* Background Image */}
      <div style={{
      backgroundImage: "url('/lovable-uploads/c88bf281-061d-4a0f-8bf6-e67b2bfaa0ae.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.08 // Reduced opacity for better contrast with light background
    }} className="absolute inset-0 z-0" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <img src="/lovable-uploads/ba988d69-e258-4541-b72e-0bb61a95dfa0.png" alt="Tierra Fértil Logo" className="h-20 mb-4" />
            <p className="mb-4 font-poppins text-zinc-800">
              Transformamos espacios en paraísos naturales desde 2008. 
              Nuestro compromiso es crear jardines que reflejen la belleza y equilibrio 
              de la naturaleza.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 font-playfair text-zinc-800">Contacto</h3>
            <ul className="space-y-3 font-poppins">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="text-zinc-800">+57 319 562 3951</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span className="text-zinc-800">contacto@tierrafertil.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent" />
                <span className="text-zinc-800">Cra. 27 #56-45, Bucaramanga, Colombia</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 font-playfair text-zinc-800">Horario de Atención</h3>
            <p className="mb-1 font-poppins text-zinc-800">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            <p className="mb-4 font-poppins text-zinc-800">Sábados: 9:00 AM - 1:00 PM</p>
            
            <p className="font-poppins text-zinc-800">
              Visitas a proyectos con cita previa.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600 font-poppins text-sm">
          <p>© {new Date().getFullYear()} Tierra Fértil Paisajismo - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
