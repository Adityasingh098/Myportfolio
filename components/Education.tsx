import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAward, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Education = () => {
  const education = [
    {
      icon: FaGraduationCap,
      title: 'Bachelor of Technology',
      institution: 'Lovely Professional University',
      year: '2022 - 2026',
      description: 'Computer Science with Specialization in Cyber Security',
      achievements: [
        'Participated in multiple hackathons and coding competitions',
        'Active member of the university Cyber Security Club'
      ]
    },
    {
      icon: FaGraduationCap,
      title: 'Higher Secondary Education',
      institution: 'Madhuban Central School',
      year: '2020 - 2022',
      description: 'Science Stream',
      achievements: [
        'Percentage: 82%'
      ]
    }
  ];

  const certifications = [
    {
      icon: FaCertificate,
      title: 'Microsoft Power Platform Fundamentals',
      issuer: 'Coursera',
      year: '2024',
      description: 'Fundamentals of Power Apps, Power Automate, and Power BI for business process automation',
      link: 'https://coursera.org/share/51c785aedf958cb59d438b2b714ee70a',
      image: '/certifications/power-platform.png'
    },
    {
      icon: FaCertificate,
      title: 'Cloud Computing',
      issuer: 'CipherSchools',
      year: '2024',
      description: 'Comprehensive training in cloud computing concepts and technologies',
      link: 'https://www.cipherschools.com/certificate/preview?id=67dc55c5c68dc3ae19f3e96e',
      image: '/certifications/cloud-computing.png'
    },
    {
      icon: FaCertificate,
      title: 'CompTIA Linux+ XKO-005',
      issuer: 'Cybrary',
      year: '2024',
      description: 'Linux system administration and security certification',
      link: 'https://app.cybrary.it/courses/api/certificate/CC-95c94236-4b8d-4e28-950a-e67421fc6caf/view',
      image: '/certifications/linux-plus.png'
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 bg-white">
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-education bg-clip-text text-transparent animate-text-gradient"
            >
              Education
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-24 mx-auto bg-gradient-education rounded-full"
            />
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-xl border border-accent/10 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
              >
                <motion.div
                  className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white border border-accent/10 group-hover:bg-accent/5 group-hover:border-accent/30 transition-colors">
                      <edu.icon className="text-2xl text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{edu.title}</h3>
                      <p className="text-text-secondary">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-text-secondary mb-4">
                    <FaCalendar className="text-accent" />
                    <span>{edu.year}</span>
                  </div>
                  
                  <p className="text-text-secondary mb-4">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white border border-accent/10 text-text-secondary text-sm group-hover:border-accent/30 transition-colors"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-2">
              <FaCertificate className="text-accent" />
              <span>Certifications</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
                >
                  <motion.div
                    className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <div className="relative z-10">
                    {/* Certificate Image */}
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-50">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white border border-accent/10 group-hover:bg-accent/5 group-hover:border-accent/30 transition-colors">
                        <cert.icon className="text-2xl text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{cert.title}</h4>
                        <p className="text-accent">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary mb-4">{cert.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">{cert.year}</span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                      >
                        View Certificate
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 