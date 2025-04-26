import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string[];
}

const projects: Project[] = [
  {
    title: 'SmartShop - E-commerce Platform',
    description: 'A fully-featured e-commerce platform with product recommendations powered by machine learning. Includes user authentication, product management, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Stripe API'],
    category: ['Full Stack', 'AI'],
  },
  {
    title: 'NeuralChat - AI Conversation Assistant',
    description: 'An intelligent chat application leveraging the latest NLP models to provide context-aware responses. Features include conversation memory, sentiment analysis, and topic classification.',
    technologies: ['React', 'Python', 'Flask', 'Hugging Face', 'WebSockets'],
    category: ['AI'],
  },
  {
    title: 'TaskMaster - Project Management Dashboard',
    description: 'A comprehensive project management tool with real-time updates, task assignment, progress tracking, and automated reporting. Includes data visualization for project metrics.',
    technologies: ['TypeScript', 'Next.js', 'Prisma', 'PostgreSQL', 'Chart.js'],
    category: ['Full Stack'],
  },
  {
    title: 'ImageSense - Content Analysis Tool',
    description: 'A computer vision application that analyzes images for content moderation, object recognition, and visual search capabilities. Uses state-of-the-art models for accurate results.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Redis'],
    category: ['AI'],
  },
  {
    title: 'CloudScale - Serverless Microservices Architecture',
    description: 'A cloud-native application built using AWS serverless technologies. Features auto-scaling, high availability, and distributed data processing capabilities.',
    technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'SNS', 'CloudFormation'],
    category: ['Cloud'],
  },
  {
    title: 'SecureNet - Intrusion Detection System',
    description: 'A network security solution that monitors traffic for suspicious activities and potential breaches. Features include real-time alerts, traffic analysis, and comprehensive logging for forensic investigation.',
    technologies: ['Python', 'Elasticsearch', 'Kibana', 'Snort', 'Docker'],
    category: ['Security'],
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="bg-dark rounded-lg p-6 hover:shadow-lg transition-shadow"
  >
    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
    <p className="text-tertiary mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-primary rounded text-sm text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-4">
      <button className="w-full bg-dark border border-secondary text-secondary py-2 rounded hover:bg-secondary hover:text-primary transition-colors">
        Code
      </button>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Full Stack', 'AI', 'Cloud', 'Security'];

  const filteredProjects = projects.filter((project) =>
    activeFilter === 'All' ? true : project.category.includes(activeFilter)
  );

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
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter
                    ? 'bg-secondary text-primary'
                    : 'bg-dark text-tertiary hover:text-secondary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 