
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 font-playfair">Tierra Fértil</h3>
            <p className="text-gray-300 mb-4 font-poppins">
              Transformamos espacios en paraísos naturales desde 2008. 
              Nuestro compromiso es crear jardines que reflejen la belleza y equilibrio 
              de la naturaleza.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 font-playfair">Contacto</h3>
            <ul className="space-y-3 font-poppins">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span>contacto@tierrafertil.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent" />
                <span>Cra. 27 #56-45, Bucaramanga, Colombia</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 font-playfair">Horario de Atención</h3>
            <p className="text-gray-300 mb-1 font-poppins">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-300 mb-4 font-poppins">Sábados: 9:00 AM - 1:00 PM</p>
            
            <p className="text-gray-300 font-poppins">
              Visitas a proyectos con cita previa.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 font-poppins text-sm">
          <p>© {new Date().getFullYear()} Tierra Fértil Paisajismo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
