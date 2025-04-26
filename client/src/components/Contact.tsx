import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // In a real application, this would send the form data to the server
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12 section-heading">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-primary section-heading-left">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              Schedule an appointment or visit our shop to experience our bespoke tailoring services. 
              Our team is ready to assist you in creating the perfect garments for any occasion.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-accent text-xl mt-1 mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Visit Our Shop</h4>
                  <p className="text-gray-600">123 Savile Row, Mayfair, London, W1S 2XD</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent text-xl mt-1 mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Call Us</h4>
                  <p className="text-gray-600">+44 20 7123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent text-xl mt-1 mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Email Us</h4>
                  <p className="text-gray-600">appointments@kingsmantaliors.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent text-xl mt-1 mr-4">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Opening Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0892362546397!2d-0.14334394834255307!3d51.51173207953699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052f699cfa11%3A0x57f751e11fa0ebb4!2sSavile%20Row%2C%20Mayfair%2C%20London!5e0!3m2!1sen!2suk!4v1622023396314!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Kingsman Tailors Map Location"
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-primary section-heading-left">
              Book an Appointment
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your email address"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your phone number"
                  {...register("phone")}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Tell us about your requirements"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium transition duration-300 rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
