import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The attention to detail at Kingsman is unparalleled. My suit fits perfectly and the fabric quality is exceptional. The whole experience from measurement to fitting was professional and enjoyable.",
    name: "James Wilson",
    position: "CEO, Wilson Enterprises",
    image: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    quote: "I've been a client for over 5 years and wouldn't trust anyone else with my wardrobe. Their master craftsmanship and personalized service make every visit special. My suits always garner compliments.",
    name: "Robert Thompson",
    position: "Finance Director",
    image: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    quote: "For my wedding day, I needed something truly special. The team at Kingsman created a suit that made me feel confident and sophisticated. The craftsmanship is simply outstanding.",
    name: "Michael Anderson",
    position: "Architect",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0);
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
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
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 section-heading">
          Client Testimonials
        </h2>
        
        <div className="testimonials-carousel relative max-w-4xl mx-auto">
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4 z-10">
            <button 
              onClick={prevSlide}
              className="bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition duration-300"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition duration-300"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex overflow-hidden"
          >
            <AnimatePresence initial={false} custom={direction}>
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="testimonial-card bg-primary-light p-6 md:p-8 rounded-lg shadow-md relative max-w-3xl mx-auto">
                      <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-lg mb-6 italic text-center">{testimonial.quote}</p>
                      <div className="text-center">
                        <h4 className="font-medium text-lg">{testimonial.name}</h4>
                        <p className="text-cream opacity-80">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full bg-white focus:outline-none transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
