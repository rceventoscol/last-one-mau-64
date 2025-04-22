
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensaje enviado correctamente", {
        description: "Nos pondremos en contacto contigo pronto",
      });
      setFormData({
        name: "",
        phone: "",
        city: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-playfair text-gray-900">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center font-poppins">
            Déjanos tus datos y nuestro equipo te contactará para llevar naturaleza a tu vida.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                Nombre
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
                className="font-poppins"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                Teléfono / WhatsApp
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Tu número de contacto"
                required
                className="font-poppins"
              />
            </div>
            
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                Ciudad
              </label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="¿Dónde te encuentras?"
                required
                className="font-poppins"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                rows={4}
                required
                className="resize-none font-poppins"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
