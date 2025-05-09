
import { MessageCircle } from "lucide-react";

export const FloatingWhatsAppButton = () => {
  const phoneNumber = "+573195623951"; // Updated phone number
  const message = "Hola, estoy interesado en sus servicios de paisajismo.";
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full p-4 shadow-lg z-50 transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};
