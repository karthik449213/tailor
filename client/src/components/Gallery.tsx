import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Bespoke suit measurement",
    title: "Precision Measurements",
    description: "Our master tailors take over 30 detailed measurements to ensure the perfect fit for every gentleman."
  },
  {
    src: "https://images.unsplash.com/photo-1561209309-e2d356bde010?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Gentleman in tailored suit",
    title: "Elegant Three-Piece Suits",
    description: "Handcrafted three-piece suits that blend timeless sophistication with contemporary style."
  },
  {
    src: "https://images.unsplash.com/photo-1609318604244-a264cfbe0e9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Suit fabric selection",
    title: "Premium Fabric Selection",
    description: "Choose from our exclusive range of Italian and British wools, cashmeres, and silk blends."
  },
  {
    src: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Suit details",
    title: "Exquisite Details",
    description: "Each suit is finished with meticulous attention to detail - from hand-stitched buttonholes to personalized linings."
  },
  {
    src: "https://images.unsplash.com/photo-1608228088998-57828365d486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Formal wedding attire",
    title: "Special Occasion Formalwear",
    description: "Bespoke morning suits, tuxedos, and formal attire for life's most important celebrations."
  }
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0);
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12 section-heading">
          Our Gallery
        </h2>
        
        <div className="gallery-carousel relative max-w-6xl mx-auto">
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full z-10">
            <button 
              onClick={prevSlide}
              className="bg-white bg-opacity-50 hover:bg-opacity-70 text-primary rounded-full w-12 h-12 flex items-center justify-center focus:outline-none transition duration-300 shadow-md ml-2"
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white bg-opacity-50 hover:bg-opacity-70 text-primary rounded-full w-12 h-12 flex items-center justify-center focus:outline-none transition duration-300 shadow-md mr-2"
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>
          </div>
          
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <AnimatePresence initial={false} custom={direction}>
              {galleryImages.map((image, index) => (
                index === activeIndex && (
                  <motion.div 
                    key={index}
                    className="w-full"
                    initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="h-96 md:h-[500px] overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 text-center bg-white">
                        <h3 className="font-playfair text-2xl font-semibold mb-3 text-primary">{image.title}</h3>
                        <p className="text-gray-600">{image.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button 
                key={index}
                className={`w-4 h-4 rounded-full focus:outline-none transition-all duration-300 border border-primary ${
                  activeIndex === index ? "bg-primary" : "bg-white"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`View gallery image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
