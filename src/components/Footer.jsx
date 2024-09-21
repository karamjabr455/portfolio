// Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1b1c1d] text-white py-12 mt-0 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo Section */}
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] animate-gradient">karam jber</h2>
            <p className="text-center text-gray-400">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </motion.div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/karamsyr56?igsh=MTJxeGExa3l3dmd4dw==" className="hover:text-[#d2ac47] transition-colors duration-300" aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/karamjabr455" className="hover:text-[#d2ac47] transition-colors duration-300" aria-label="GitHub">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/karam-jabr-622674301/" className="hover:text-[#d2ac47] transition-colors duration-300" aria-label="LinkedIn">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>


        {/* Footer Navigation */}
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <a href="#home" className="hover:text-[#d2ac47] transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-[#d2ac47] transition-colors duration-300">About</a>
          <a href="#portfolio" className="hover:text-[#d2ac47] transition-colors duration-300">Portfolio</a>
          <a href="#contact" className="hover:text-[#d2ac47] transition-colors duration-300">Contact</a>
        </motion.div>

        {/* Footer Bottom */}
        <div className="absolute bottom-0 inset-x-0 flex justify-center">
          <p className="text-gray-500 text-sm">Built with 💙 using React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
