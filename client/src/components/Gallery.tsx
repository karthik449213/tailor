import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Tailor fitting a customer"
  },
  {
    src: "https://images.unsplash.com/photo-1590401566083-cf714302b086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Fabric selection"
  },
  {
    src: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Custom suit details"
  }
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = activeIndex * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12 section-heading">
          Our Gallery
        </h2>
        
        <div className="gallery-carousel relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden snap-x snap-mandatory"
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 snap-center px-4"
              >
                <motion.div 
                  className="h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {galleryImages.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full bg-primary focus:outline-none ${
                  activeIndex === index ? "opacity-100" : "opacity-50"
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
