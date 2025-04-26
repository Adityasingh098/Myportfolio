import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Course {
  name: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  coursework: string[];
}

interface Certification {
  name: string;
  organization: string;
  year: string;
  link?: string;
}

interface Achievement {
  description: string;
}

const education: Education = {
  degree: 'B.S. in Computer Science',
  institution: 'Stanford University',
  period: '2014 - 2018',
  description: 'Graduated with honors, GPA 3.85/4.0. Focused on artificial intelligence, web development, and distributed systems.',
  coursework: [
    'Algorithms',
    'Machine Learning',
    'Web Applications',
    'Databases',
    'Artificial Intelligence',
    'Human-Computer Interaction',
    'Distributed Systems',
    'Computer Networks'
  ]
};

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    year: '2023',
    link: '#'
  },
  {
    name: 'TensorFlow Developer Certificate',
    organization: 'Google',
    year: '2022',
    link: '#'
  },
  {
    name: 'React Advanced Concepts',
    organization: 'Frontend Masters',
    year: '2021',
    link: '#'
  }
];

const achievements: Achievement[] = [
  {
    description: 'Winner of the 2022 TechInnovate Hackathon - AI Category'
  },
  {
    description: 'Speaker at ReactConf 2023 - "Building Better UIs with React Hooks"'
  },
  {
    description: 'Published article in Medium\'s JavaScript publication - "Advanced State Management in React Applications"'
  },
  {
    description: 'Open source contributor to several popular JavaScript and Python libraries'
  }
];

// Example projects card data
const projects = [
  {
    title: 'AI Research Project',
    description: 'Developed a neural network for image recognition with 98% accuracy.',
    tags: ['AI', 'Neural Networks', 'Python']
  },
  {
    title: 'Web App for Students',
    description: 'Built a full-stack MERN application for student collaboration.',
    tags: ['React', 'Node.js', 'MongoDB']
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Education & <span className="text-secondary">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Education and Projects side by side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            {/* Education Card */}
            <div className="bg-dark p-6 rounded-lg h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <span className="bg-secondary text-primary px-2 py-1 rounded text-sm">ED</span>
                <h3 className="text-2xl text-secondary">Education</h3>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold">{education.degree}</h4>
                <span className="text-secondary bg-primary px-3 py-1 rounded-full text-sm">
                  {education.period}
                </span>
              </div>
              <p className="text-tertiary mb-4">{education.institution}</p>
              <p className="text-tertiary mb-6">{education.description}</p>
              <div className="mt-auto">
                <h5 className="text-secondary mb-4">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="bg-primary text-tertiary px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="bg-secondary text-primary px-2 py-1 rounded text-sm">CF</span>
              <h3 className="text-2xl text-secondary">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-dark p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{cert.name}</h4>
                    <span className="text-secondary bg-primary px-3 py-1 rounded-full text-sm">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-tertiary mb-4">{cert.organization}</p>
                  <Link 
                    href={cert.link || '#'} 
                    className="inline-block bg-primary text-secondary px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                  >
                    View
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-12"
        >
          <div className="bg-dark p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-tertiary flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  {achievement.description}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 