import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  keyProject?: Project;
}

const experiences: Experience[] = [
  {
    title: 'Cloud Computing Training Program',
    company: 'CipherSchools - Lovely Professional University',
    period: 'Jan 2025 - Feb 2025',
    responsibilities: [
      'Successfully completed comprehensive training in Cloud Computing fundamentals and practices.',
      'Gained hands-on experience with cloud platforms, deployment models, and service architectures.',
      'Developed skills in cloud infrastructure setup, management, and optimization.',
      'Applied cloud computing concepts through practical projects and assignments.',
    ],
    keyProject: {
      title: 'CloudSentinel',
      description: 'A real-time threat monitoring and alerting system on AWS using CloudWatch, Lambda, and GuardDuty to detect, analyze, and respond to suspicious activities across cloud infrastructure.',
      technologies: ['AWS', 'CloudWatch', 'Lambda', 'GuardDuty', 'Security'],
    },
  },
  {
    title: 'Java and Data Structures & Algorithm Program',
    company: 'CipherSchools - Lovely Professional University',
    period: 'September 2024',
    responsibilities: [
      'Completed intensive training in Java programming language fundamentals and advanced concepts.',
      'Mastered essential data structures including arrays, linked lists, stacks, queues, trees, and graphs.',
      'Developed proficiency in algorithm design, analysis, and optimization techniques.',
      'Implemented various sorting, searching, and graph algorithms with time and space complexity analysis.',
    ],
    keyProject: {
      title: 'Amazon-like Order Management System',
      description: 'Track orders, delivery routes, warehouse stock using Graphs and Heaps for efficient logistics.',
      technologies: ['Java', 'Graph Algorithms', 'Heap', 'Queue', 'DSA'],
    },
  },
];

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative p-6 bg-dark rounded-lg shadow-lg mb-8"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-secondary">{experience.title}</h3>
        <p className="text-tertiary">{experience.company}</p>
      </div>
      <span className="text-sm text-secondary bg-primary px-3 py-1 rounded-full">
        {experience.period}
      </span>
    </div>

    <ul className="list-disc list-inside mb-6 space-y-2">
      {experience.responsibilities.map((responsibility, idx) => (
        <li key={idx} className="text-tertiary">
          {responsibility}
        </li>
      ))}
    </ul>

    {experience.keyProject && (
      <div className="mt-4 p-4 bg-primary rounded-lg">
        <h4 className="text-lg font-semibold text-secondary mb-2">Key Project: {experience.keyProject.title}</h4>
        <p className="text-tertiary mb-3">{experience.keyProject.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.keyProject.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark text-secondary text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

const Experience = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Professional <span className="text-secondary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 