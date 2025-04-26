import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
}

const skillCategories = {
  Frontend: [
    { name: 'JavaScript', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'React', percentage: 92 },
    { name: 'Next.js', percentage: 88 },
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'Tailwind CSS', percentage: 90 },
  ],
  Backend: [
    { name: 'Node.js', percentage: 85 },
    { name: 'Express', percentage: 88 },
    { name: 'Python', percentage: 80 },
    { name: 'Django', percentage: 75 },
    { name: 'GraphQL', percentage: 82 },
    { name: 'RESTful APIs', percentage: 90 },
  ],
  'Tools & Technologies': [
    { name: 'Git & GitHub', percentage: 92 },
    { name: 'Docker', percentage: 85 },
    { name: 'AWS', percentage: 80 },
    { name: 'MongoDB', percentage: 88 },
    { name: 'PostgreSQL', percentage: 85 },
    { name: 'TensorFlow', percentage: 78 },
  ],
};

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{skill.name}</span>
      <span className="text-sm text-secondary">{skill.percentage}%</span>
    </div>
    <div className="h-2 bg-dark rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percentage}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="h-full bg-secondary rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
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
            My <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-6">{category}</h3>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 