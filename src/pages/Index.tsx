
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Clients } from "@/components/Clients";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <ProjectGallery />
      <Clients />
      <Brands />
      <Services />
      <ContactForm />
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
