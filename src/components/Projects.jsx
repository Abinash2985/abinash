import React from 'react';
import { motion } from 'framer-motion';

// Import images from the assets folder
import shakariMarketImage from '../assets/Shakari_Market.png';
import foodDeliveryImage from '../assets/Food_website.png';
import abinashGptImage from '../assets/Abinash_GPT.png';
import weatherAppImage from '../assets/Weather_app.png';

export function Projects() {
  const projects = [
    {
      title: 'Shakari Market',
      image: shakariMarketImage,
      description: 'An e-commerce platform for local markets, enabling seamless online shopping.',
      github: 'https://github.com/Abinash2985/Shakari-Market',
      demo: 'https://shakari-market.vercel.app/',
    },
    {
      title: 'Food Delivery App',
      image: foodDeliveryImage,
      description: 'A modern food delivery app with real-time tracking and user-friendly design.',
      github: 'https://github.com/Abinash2985/Food_Shop',
      demo: 'https://abinash-food-shop.vercel.app/',
    },
    {
      title: 'Abinash GPT',
      image: abinashGptImage,
      description: 'An AI-powered chatbot application built using GPT technology.',
      github: 'https://github.com/Abinash2985/Abinash_GPT',
      demo: 'https://abinash-gpt.vercel.app/',
    },
    {
      title: 'Weather App',
      image: weatherAppImage,
      description: 'A weather forecasting app providing accurate and real-time weather updates.',
      github: 'https://github.com/Abinash2985/Weather_app',
      demo: 'https://abinash-weather-app.vercel.app/',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;