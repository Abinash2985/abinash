import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {  
  return (
    <div className="scroll-smooth font-sans">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="min-h-screen"><Home /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="projects" className="min-h-screen"><Projects /></section>
        <section id="skills" className="min-h-screen"><Skills /></section>
        <section id="contact" className="min-h-screen"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;