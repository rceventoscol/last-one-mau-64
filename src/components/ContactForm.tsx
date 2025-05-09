
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
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensaje enviado correctamente", {
        description: "Nos pondremos en contacto contigo pronto"
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
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">Contáctanos</h2>
          <p className="text-center mb-10 text-gray-600 font-poppins">
            Déjanos tus datos y nos pondremos en contacto contigo a la brevedad.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                name="name"
                placeholder="Nombre completo" 
                value={formData.name} 
                onChange={handleChange}
                required
                className="font-poppins"
              />
            </div>
            
            <div>
              <Input 
                name="phone"
                placeholder="Teléfono" 
                type="tel"
                value={formData.phone} 
                onChange={handleChange}
                required
                className="font-poppins"
              />
            </div>
            
            <div>
              <Input 
                name="city"
                placeholder="Ciudad" 
                value={formData.city} 
                onChange={handleChange}
                required
                className="font-poppins"
              />
            </div>
            
            <div>
              <Textarea 
                name="message"
                placeholder="¿En qué podemos ayudarte?" 
                value={formData.message} 
                onChange={handleChange}
                rows={4}
                required
                className="font-poppins"
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-md font-poppins transition-all"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
