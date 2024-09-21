import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


import myPhoto from '../images/replicate-prediction-a10a7eeba1rgc0cgjvsv6yv75w.png';

const Home = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientColor = scrollY > 300 ? 'from-[#d2ac47] via-[#f7ef8a] to-[#ae8525]' : 'from-[#ae8625] via-[#f7ef8a] to-[#d2ac47]';

  return (
    <motion.div
      className="min-h-screen bg-[#1b1c1d] flex flex-col justify-center items-center transition-colors duration-500"
      animate={controls}
    >
      <motion.div 
        className={`w-40 h-40 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r ${gradientColor} p-1 mb-6`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={myPhoto} 
          alt="My Photo" 
          className="w-full h-full rounded-full object-cover"
        />
      </motion.div>

      <motion.h1
        className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradientColor} mb-4`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Front End مرحبًا! أنا مطور
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        React و Tailwind CSS. أنا متخصص في تطوير الويب وتصميم واجهات المستخدم باستخدام
      </motion.p>

      <motion.a
        href="#contact"
        className="inline-block bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] text-gray-800 font-bold py-2 px-4 rounded-full mb-8 transition-transform transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        تواصل معي
      </motion.a>

      {/* الروابط السريعة */}
      <motion.div
        className="flex space-x-4 justify-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Link 
          to="about" 
          smooth={true} 
          duration={1000}
          className="text-lg text-gray-300 hover:bg-gradient-to-r hover:from-[#d2ac47] hover:via-[#f7ef8a] hover:to-[#ae8625] p-2 rounded-md transition-colors cursor-pointer"
        >
          من أنا
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={1000}
          className="text-lg text-gray-300 hover:bg-gradient-to-r hover:from-[#d2ac47] hover:via-[#f7ef8a] hover:to-[#ae8625] p-2 rounded-md transition-colors cursor-pointer"
        >
          المشاريع
        </Link>
        <Link 
          to="Skills" 
          smooth={true} 
          duration={1000}
          className="text-lg text-gray-300 hover:bg-gradient-to-r hover:from-[#d2ac47] hover:via-[#f7ef8a] hover:to-[#ae8625] p-2 rounded-md transition-colors cursor-pointer"
        >
          المهارات 
        </Link>
        <a href="#contact" className="text-lg text-gray-300 hover:bg-gradient-to-r hover:from-[#d2ac47] hover:via-[#f7ef8a] hover:to-[#ae8625] p-2 rounded-md transition-colors">
          التواصل
        </a>
      </motion.div>

      {/* الرموز الاجتماعية */}
      <motion.div
        className="flex justify-center space-x-6 text-2xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <a href="https://www.linkedin.com/in/karam-jabr-622674301/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#d2ac47]" />
        </a>
        <a href="https://github.com/karamjabr455" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-[#d2ac47]" />
        </a>
        <a href="https://www.instagram.com/karamsyr56?igsh=MTJxeGExa3l3dmd4dw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-[#d2ac47]" />
        </a>
      </motion.div>

      {/* الأقسام الأخرى */}
      <About />
      <Projects />
      <Skills />
      <Contact />

   

    </motion.div>
  );
};

export default Home;
