import { motion } from "framer-motion";

const services = [
  {
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Bespoke Suit Making",
    description: "Fully handcrafted suits tailored to your exact measurements and style preferences. Choose from over 3,000 fabrics."
  },
  {
    image: "https://images.unsplash.com/photo-1585412013060-6e3969748a12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Custom Shirts",
    description: "Exquisitely tailored shirts made from the finest Egyptian and Sea Island cotton. Perfect fit guaranteed."
  },
  {
    image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Alterations & Repairs",
    description: "Expert alterations and repairs for your cherished garments. Revive and perfect your existing wardrobe."
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12 section-heading">
          Our Services
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-md transition duration-300 hover:shadow-xl bg-white"
              variants={itemVariants}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={handleContactClick}
                  className="inline-block text-accent hover:text-accent-light font-medium transition duration-300"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
