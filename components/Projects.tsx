import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNextdotjs, SiPython, SiAmazon, SiDocker, SiJavascript, SiNodedotjs, SiMongodb } from 'react-icons/si';
import Image from 'next/image';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Cloud-Based File Storage App',
      description: 'A serverless file storage platform using AWS S3 and Lambda, enabling users to securely upload, manage, and retrieve their files in the cloud.',
      technologies: [SiTypescript, SiReact, SiAmazon, SiDocker],
      category: 'cloud',
      github: 'https://github.com/Adityasingh098/cloud-vault-web-space',
      live: 'https://cloud-vault-web-space.vercel.app/',
      image: '/projects/cloud-storage.png'
    },
    {
      title: 'QuickMart E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced search, payment integration, and inventory management.',
      technologies: [SiNextdotjs, SiNodedotjs, SiMongodb],
      category: 'web',
      github: 'https://github.com/Adityasingh098/quickmart-commerce-hub',
      live: 'https://quickmart-commerce-hub.vercel.app/',
      image: '/projects/quickmart.png'
    },
    {
      title: 'Intrusion Detection System',
      description: 'Advanced network security monitoring tool with intrusion detection and real-time threat analysis.',
      technologies: [SiPython, SiReact, SiDocker],
      category: 'security',
      github: 'https://github.com/Adityasingh098/web-eye-alert',
      live: 'https://web-eye-alert.vercel.app/',
      image: '/projects/ids.png'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-projects bg-clip-text text-transparent animate-text-gradient"
            >
              Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-24 mx-auto bg-gradient-projects rounded-full"
            />
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'web', 'cloud', 'security'].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden ${
                  activeFilter === filter
                    ? 'bg-accent text-white'
                    : 'bg-white text-text-secondary border border-accent/20'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ display: activeFilter === filter ? 'none' : 'block' }}
                />
                <span className="relative z-10">
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden border border-accent/10 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-accent/5 to-accent/10">
                      <FaCode className="text-4xl text-accent/40" />
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((TechIcon, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-lg bg-white border border-accent/10 group-hover:border-accent/30 transition-colors"
                      >
                        <TechIcon className="text-xl text-accent" />
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                    >
                      <FaGithub />
                      <span className="text-sm">GitHub</span>
                      <span className="w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live Demo</span>
                      <span className="w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 