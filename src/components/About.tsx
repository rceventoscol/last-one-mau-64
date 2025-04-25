export const About = () => {
  return <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <img alt="Mauricio, fundador de Tierra Fértil" className="w-full h-full object-cover" src="/lovable-uploads/a9f23d85-67b5-41ff-a389-777fded64528.jpg" />
              </div>
              {/* Accent element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/80 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/80 rounded-full z-0"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-playfair">
              Mauricio: Pasión, técnica y raíces cubanas.
            </h2>
            <p className="text-gray-700 mb-6 font-poppins leading-relaxed">
              Formado en Cuba en botánica y paisajismo, Mauricio es el corazón creativo de Tierra Fértil. 
              Su visión única y amor por las plantas lo han llevado a construir jardines excepcionales en todo el país. 
              Cada proyecto es una obra viva, hecha con técnica y alma.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 mb-6 italic text-gray-800 font-playfair text-xl">
              "Cada jardín es una historia contada con hojas, luz y tierra."
            </blockquote>
            <p className="text-gray-700 font-poppins">
              Su enfoque combina la precisión técnica con un profundo respeto por la naturaleza local, 
              creando espacios que armonizan con el entorno y resisten el paso del tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>;
};