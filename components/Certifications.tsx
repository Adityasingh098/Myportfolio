import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaUniversity } from 'react-icons/fa';
import Image from 'next/image';

const Certifications = () => {
  const certifications = [
    {
      title: 'C++ with DSA',
      issuer: 'Coding Ninjas',
      date: '2023',
      description: 'Comprehensive certification covering C++ programming fundamentals and advanced Data Structures & Algorithms, including implementation of complex data structures and algorithm optimization techniques.',
      image: '/certifications/cpp.png',
      skills: ['C++ Programming', 'Data Structures', 'Algorithms', 'Problem Solving']
    },
    {
      title: 'Machine Learning',
      issuer: 'Stanford University',
      date: '2022',
      description: 'Advanced machine learning techniques and applications.',
      image: '/certifications/ml.png',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks']
    },
    {
      title: 'Data Science',
      issuer: 'IBM',
      date: '2022',
      description: 'Data analysis and visualization techniques.',
      image: '/certifications/ds.png',
      skills: ['Data Analysis', 'Data Visualization', 'Statistical Modeling']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={certification.image}
                  alt={certification.title}
                  fill
                  className="object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaCertificate className="text-accent" />
                  <h3 className="text-xl font-bold">{certification.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <FaUniversity />
                  <span>{certification.issuer}</span>
                  <span className="text-sm text-gray-400">• {certification.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{certification.description}</p>
                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 