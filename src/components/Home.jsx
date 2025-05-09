import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; 
import resumeFile from '../assets/resume.pdf'; 

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4">
    
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-yellow-300">My Portfolio</span>
      </motion.h1>

     
      <motion.img
        src={profileImage} 
        alt="Profile"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

     
      <motion.h2
        className="text-lg md:text-2xl font-medium text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Crafting beautiful and functional web experiences.
      </motion.h2>

     
      <motion.div
        className="bg-gradient-to-r from-white to-gray-200 text-black p-6 rounded-lg shadow-lg max-w-md text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Resume
        </h2>
        <p className="text-sm md:text-base mb-4 text-gray-600">
          I am a passionate developer with experience in building modern web applications. Check out my resume for more details.
        </p>
        <a
          href={resumeFile} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          download
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
}

export default Home;