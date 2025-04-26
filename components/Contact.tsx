import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

const contactInfo: ContactInfo = {
  email: 'adityasingh917632@gmail.com',
  phone: '+1 (415) 555-8901',
  location: 'San Francisco, California'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-tertiary mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? I'm always
            open to new ideas and challenges. Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-secondary mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-dark p-3 rounded-full">
                  <FaEnvelope className="text-secondary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-tertiary">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-secondary">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark p-3 rounded-full">
                  <FaPhone className="text-secondary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-tertiary">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-secondary">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark p-3 rounded-full">
                  <FaMapMarkerAlt className="text-secondary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-tertiary">Location</p>
                  <p className="text-white">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-tertiary mb-4">Connect with me:</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark p-3 rounded-full hover:bg-opacity-80 transition-colors"
                >
                  <FaGithub className="text-secondary text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark p-3 rounded-full hover:bg-opacity-80 transition-colors"
                >
                  <FaLinkedin className="text-secondary text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-dark rounded-lg p-8"
          >
            <h3 className="text-2xl mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-tertiary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-primary text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-tertiary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-primary text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-tertiary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-primary text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-primary py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 