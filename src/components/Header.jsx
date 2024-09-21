// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-[#1b1c1d] text-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] animate-gradient">
          <a href="/">KARAM JABR</a>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-white focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {isNavOpen && (
            <div className="absolute top-16 right-0 bg-[#1b1c1d] text-white rounded-lg shadow-lg p-4">
              <nav>
                <a href="#home" className="block py-2 text-gradient hover:text-gray-400">Home</a>
                <a href="#about" className="block py-2 text-gradient hover:text-gray-400">About</a>
                <Link  to="#projects" className="block py-2 text-gradient hover:text-gray-400">Projects</Link>
                <a href="#contact" className="block py-2 text-gradient hover:text-gray-400">Contact</a>
              </nav>
            </div>
          )}
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-gradient hover:text-gray-400">Home</a>
          <a href="#about" className="text-gradient hover:text-gray-400">About</a>
          <a href="#projects" className="text-gradient hover:text-gray-400">Projects</a>
          <a href="#contact" className="text-gradient hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
