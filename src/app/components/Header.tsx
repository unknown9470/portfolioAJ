"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Alexis Jeandemans</h1>
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
          <li><a href="#about" className="text-primary hover:text-secondary block md:inline-block py-2 md:py-0">À propos</a></li>
          <li><a href="#projects" className="text-primary hover:text-secondary block md:inline-block py-2 md:py-0">Projets</a></li>
          <li><a href="#contact" className="text-primary hover:text-secondary block md:inline-block py-2 md:py-0">Contact</a></li>
        </ul>
        <button className="md:hidden text-secondary" onClick={toggleMenu}>
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Header;