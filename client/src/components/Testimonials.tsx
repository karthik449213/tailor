import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 section-heading">
          Client Testimonials
        </h2>
        
        <div className="testimonials-carousel relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 snap-center px-4"
              >
                <motion.div 
                  className="testimonial-card bg-primary-light p-8 rounded-lg shadow-md relative max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-cream opacity-80">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full bg-white focus:outline-none ${
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
