
import { Trees, TreeDeciduous, TreePalm, Leaf } from "lucide-react";

const services = [
  {
    icon: <TreeDeciduous className="h-10 w-10 text-primary" />,
    title: "Diseño y ejecución de jardines personalizados",
    description: "Creamos espacios verdes a medida, adaptados a tus necesidades y al entorno."
  },
  {
    icon: <TreePalm className="h-10 w-10 text-primary" />,
    title: "Venta de plantas nacionales e importadas",
    description: "Ofrecemos especies seleccionadas por su belleza y adaptabilidad al clima colombiano."
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Mantenimiento técnico y especializado",
    description: "Cuidamos tu inversión con mantenimiento regular que garantiza la salud de tu jardín."
  },
  {
    icon: <Trees className="h-10 w-10 text-primary" />,
    title: "Asesorías para hogares y proyectos comerciales",
    description: "Consultoría experta para optimizar espacios verdes residenciales y corporativos."
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-playfair text-gray-900">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-secondary/20 rounded-full group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center font-playfair text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center font-poppins">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-grow">
          <div className="inline-block bg-primary/10 text-primary font-medium py-3 px-6 rounded-lg font-poppins">
            Instalación en toda Colombia
          </div>
        </div>
      </div>
    </section>
  );
};
