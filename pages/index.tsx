import { motion } from 'framer-motion';
import React from 'react';
import Layout from '../components/Layout';
import FloatingIcons from '../components/FloatingIcons';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  // Placeholder profile image
  const placeholderProfile = "data:image/svg+xml,%3Csvg width='320' height='320' viewBox='0 0 320 320' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='160' cy='160' r='160' fill='%234ECCA3'/%3E%3C/svg%3E";

  return (
    <Layout>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
} 