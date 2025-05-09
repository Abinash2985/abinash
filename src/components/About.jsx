import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-700 text-base md:text-lg leading-relaxed bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am a passionate web developer with experience in building responsive web applications using the MERN stack. I love solving complex problems and creating user-friendly interfaces that provide a seamless experience.
      </motion.p>
    </div>
  );
}

export default About;