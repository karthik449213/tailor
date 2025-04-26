import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Tailor fitting a customer",
    title: "Personal Fitting Sessions",
    description: "Our master tailors ensure every suit fits perfectly with detailed measurements and adjustments."
  },
  {
    src: "https://images.unsplash.com/photo-1590401566083-cf714302b086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Fabric selection",
    title: "Premium Fabric Selection",
    description: "Choose from our extensive collection of high-quality fabrics sourced from the finest mills worldwide."
  },
  {
    src: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Custom suit details",
    title: "Exquisite Craftsmanship",
    description: "Every stitch is placed with precision and care, creating garments of exceptional quality."
  },
  {
    src: "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Suit showcase",
    title: "Finished Masterpieces",
    description: "The completed suits represent the perfect balance of classic style and modern elegance."
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
