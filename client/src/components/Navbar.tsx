import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      id="top" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-md"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-playfair font-bold text-xl sm:text-2xl text-primary">
              KINGSMAN<span className="text-accent">.</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#why-us" 
              className="text-primary hover:text-accent transition duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("why-us");
              }}
            >
              Why Choose Us
            </a>
            <a 
              href="#services" 
              className="text-primary hover:text-accent transition duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("services");
              }}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-primary hover:text-accent transition duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("testimonials");
              }}
            >
              Testimonials
            </a>
            <a 
              href="#gallery" 
              className="text-primary hover:text-accent transition duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("gallery");
              }}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-primary hover:text-accent transition duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className="text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-3 border-t border-gray-200">
                <a 
                  href="#why-us" 
                  className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("why-us");
                  }}
                >
                  Why Choose Us
                </a>
                <a 
                  href="#services" 
                  className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("services");
                  }}
                >
                  Services
                </a>
                <a 
                  href="#testimonials" 
                  className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("testimonials");
                  }}
                >
                  Testimonials
                </a>
                <a 
                  href="#gallery" 
                  className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("gallery");
                  }}
                >
                  Gallery
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
