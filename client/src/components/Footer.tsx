const Footer = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a 
              href="#" 
              className="inline-block mb-4"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="font-playfair font-bold text-2xl text-white">
                KINGSMAN<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-gray-300 max-w-md mb-6">
              Crafting bespoke tailored garments of exceptional quality since 1923. 
              Our dedication to traditional craftsmanship and contemporary style sets us apart.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#why-us" 
                  className="text-gray-300 hover:text-accent transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("why-us");
                  }}
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-accent transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("services");
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-300 hover:text-accent transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("testimonials");
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-gray-300 hover:text-accent transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("gallery");
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-accent transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kingsman Bespoke Tailoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
