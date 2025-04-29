import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNextdotjs, SiPython, SiAmazon, SiDocker, SiJavascript, SiNodedotjs, SiMongodb } from 'react-icons/si';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'CipherSchool',
      period: '2023 (Training)',
      description: 'Led the development of scalable web applications using modern technologies.',
      icon: FaCode,
      color: 'accent',
      achievements: [
        'Developed and maintained full-stack applications',
        'Implemented cloud-based solutions',
        'Led a team of 5 developers'
      ],
      technologies: [
        { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        { icon: SiReact, name: 'React', color: '#61DAFB' },
        { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
        { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
        { icon: SiMongodb, name: 'MongoDB', color: '#47A248' }
      ]
    },
    {
      title: 'Cloud Engineer',
      company: 'CipherSchool',
      period: '2025',
      description: 'Designed and implemented cloud infrastructure solutions.',
      icon: FaCloud,
      color: 'accent',
      achievements: [
        'Architected cloud-native applications',
        'Optimized cloud resources',
        'Implemented security best practices'
      ],
      technologies: [
        { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
        { icon: SiDocker, name: 'Docker', color: '#2496ED' },
        { icon: SiPython, name: 'Python', color: '#3776AB' }
      ]
    },
    {
      title: 'Security Specialist',
      company: 'Secure Systems',
      period: '2024',
      description: 'Specialized in cybersecurity and threat detection.',
      icon: FaShieldAlt,
      color: 'accent',
      achievements: [
        'Developed security protocols',
        'Conducted penetration testing',
        'Implemented security measures'
      ],
      technologies: [
        { icon: SiPython, name: 'Python', color: '#3776AB' },
        { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' }
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-[#FF1675] mb-4"
            >
              Professional Experience
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="h-1 w-32 mx-auto bg-gradient-to-r from-[#FF1675] to-[#FF8E1C]"
            />
          </div>

          {/* Experience Timeline */}
          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[#7000FF] opacity-20" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-8 items-start mb-12 relative"
              >
                {/* Timeline Dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-[#7000FF] rounded-full" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#F8F9FC] p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start gap-8">
                    {/* Left side - Main content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                          <exp.icon className="text-2xl text-[#7000FF]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                          <p className="text-[#7000FF]">{exp.company} <span className="text-gray-500 ml-4">{exp.period}</span></p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#7000FF] mb-4">Key Achievements</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7000FF]"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Tech Stack */}
                    <div className="w-52 shrink-0">
                      <h4 className="text-sm font-semibold text-[#7000FF] mb-4">Tech Stack</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {exp.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center gap-2 p-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <tech.icon 
                              className="text-2xl" 
                              style={{ color: tech.color }}
                            />
                            <span className="text-xs font-medium text-gray-600">{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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

export default Experience; 