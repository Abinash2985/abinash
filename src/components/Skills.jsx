import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm shadow-md text-center"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;