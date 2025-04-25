import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5")}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/ba988d69-e258-4541-b72e-0bb61a95dfa0.png" alt="Tierra Fértil Logo" className="h-16 md:h-20" />
            <span className={cn("text-2xl font-bold font-playfair transition-colors ml-4", isScrolled ? "text-primary" : "text-white")}>
          </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[{
            name: "Inicio",
            id: "inicio"
          }, {
            name: "Sobre Nosotros",
            id: "about"
          }, {
            name: "Proyectos",
            id: "proyectos"
          }, {
            name: "Servicios",
            id: "servicios"
          }, {
            name: "Contacto",
            id: "contacto"
          }].map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={cn("font-poppins text-sm font-medium transition-colors relative", isScrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white", "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left")}>
                {item.name}
              </button>)}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1.5 p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span className={cn("block w-6 h-0.5 transition-all duration-300", isScrolled ? "bg-gray-800" : "bg-white", isMobileMenuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-6 h-0.5 transition-all duration-300", isScrolled ? "bg-gray-800" : "bg-white", isMobileMenuOpen && "opacity-0")} />
            <span className={cn("block w-6 h-0.5 transition-all duration-300", isScrolled ? "bg-gray-800" : "bg-white", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 bg-white shadow-lg", isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="px-4 py-4 space-y-2">
          {[{
          name: "Inicio",
          id: "inicio"
        }, {
          name: "Sobre Nosotros",
          id: "about"
        }, {
          name: "Proyectos",
          id: "proyectos"
        }, {
          name: "Servicios",
          id: "servicios"
        }, {
          name: "Contacto",
          id: "contacto"
        }].map(item => <div key={item.id} className="border-b border-gray-100 last:border-0">
              <button onClick={() => scrollToSection(item.id)} className="w-full text-left py-3 px-2 font-poppins text-gray-700 hover:text-primary transition-colors">
                {item.name}
              </button>
            </div>)}
        </div>
      </div>
    </header>;
};