import { motion } from "framer-motion";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-primary h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534030347209-467a5b0ad0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Crafting Your Perfect Fit: Bespoke Gents' Tailoring
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-cream mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience unparalleled quality and personalized service in London's finest tailoring establishment since 1923.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={handleContactClick}
              className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
