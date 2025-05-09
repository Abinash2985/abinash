import React, { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">
            Abinash Shaw
        </h1>

       
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>

       
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-y-4 md:space-y-0 md:space-x-4 absolute md:static top-12 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          <a
            href="#home"
            className="block md:inline hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block md:inline hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="block md:inline hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block md:inline hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block md:inline hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;