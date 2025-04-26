import { motion } from "framer-motion";

const features = [
  {
    icon: "fas fa-cut",
    title: "Master Craftsmanship",
    description: "Our master tailors bring over 40 years of experience in the fine art of bespoke tailoring.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: "fas fa-ruler",
    title: "Perfect Measurements",
    description: "We take over 30 precise measurements to ensure your garments fit perfectly every time.",
    image: "https://images.unsplash.com/photo-1495994458560-6f9d661cf8e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: "fas fa-tshirt",
    title: "Premium Fabrics",
    description: "We source only the finest fabrics from renowned mills in Italy, England, and Scotland.",
    image: "https://images.unsplash.com/photo-1561233835-f937539b95b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Personal Service",
    description: "Every client receives dedicated attention from initial consultation to final fitting.",
    image: "https://images.unsplash.com/photo-1580618864180-b4d27049a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Features = () => {
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

  return (
    <section id="why-us" className="py-20 bg-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12 section-heading">
          Why Our Shop is Unique
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-accent text-3xl mb-3">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
