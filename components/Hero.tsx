import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroTechIcon from './HeroTechIcon';
import ElectronBackground from './ElectronBackground';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const placeholderProfile =
  "data:image/svg+xml,%3Csvg width='320' height='320' viewBox='0 0 320 320' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='160' cy='160' r='160' fill='%234ECCA3'/%3E%3C/svg%3E";

const TITLES = [
  { text: "Full Stack Developer", className: "text-tertiary font-bold" },
  { text: "Security Engineer", className: "text-red-500 font-bold" }
];

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = TITLES[titleIndex].text;

    if (typing) {
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40);
      } else {
        setTyping(true);
        setTitleIndex((titleIndex + 1) % TITLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typing, charIndex, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
      <ElectronBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">Aditya Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 min-h-[2.5rem]">
              <span className={TITLES[titleIndex].className}>{displayed}</span>
              <span className="border-r-2 border-secondary animate-pulse ml-1" />
            </h2>
            <p className="text-lg text-tertiary mb-8 max-w-2xl">
              I build innovative digital products that combine cutting-edge technology with
              intuitive user experiences. With expertise in both front-end and back-end
              development, as well as machine learning, I create solutions that make a real
              impact.
            </p>
            <div className="flex gap-6 mb-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-tertiary hover:text-secondary">
                <FaEnvelope size={24} />
              </a>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-full border-2 border-secondary text-secondary font-semibold bg-transparent hover:bg-secondary hover:text-primary transition-colors"
              >
                Get In Touch
              </button>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-full border-2 border-secondary text-secondary font-semibold bg-transparent hover:bg-secondary hover:text-primary transition-colors flex items-center gap-2"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <HeroTechIcon />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 