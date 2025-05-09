import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
const brands = [{
  id: 1,
  name: "Hotel Intercontinental",
  image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 2,
  name: "Centro Comercial Cacique",
  image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 3,
  name: "Restaurante La Puerta del Sol",
  image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 4,
  name: "Edificio Metropolitan",
  image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 5,
  name: "Clínica Foscal Internacional",
  image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}];
export const Brands = () => {
  const [activeSlides, setActiveSlides] = useState([0, 1, 2]);
  const slidesRef = useRef<HTMLDivElement>(null);

  // Rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides(current => {
        return current.map(index => (index + 1) % brands.length);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return;
};