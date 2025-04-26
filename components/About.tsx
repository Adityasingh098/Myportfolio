import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
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
            About <span className="text-secondary">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Cloud Engineer & Security Specialist
          </h3>
          <div className="space-y-4 text-tertiary mb-10">
            <p>
              I'm an enthusiastic software developer and aspiring cloud architect with a strong
              foundation in web development, cloud computing, and AI. My journey began with a
              passion for technology and a drive to understand how digital systems work — and today, I
              channel that curiosity into building real-world solutions that are smart, scalable, and
              impactful.
            </p>
            <p>
              With hands-on experience in front-end and back-end development, cloud services
              (especially AWS), and data science, I aim to create seamless user experiences backed by
              powerful technology. I love crafting applications that not only solve problems but also
              empower users through clean design and efficient performance.
            </p>
            <p>
              Currently, I'm focused on developing cloud-based AI solutions that help organizations
              harness data, automate processes, and scale intelligently.
            </p>
          </div>

          {/* Cards Row */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-dark rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaProjectDiagram className="text-secondary text-2xl" />
                <h3 className="text-xl font-semibold">Projects</h3>
              </div>
              <ul className="space-y-2 text-tertiary">
                <li>• Intrusion detection system for cybersecurity</li>
                <li>• Full-stack student collaboration web app</li>
                <li>• Cloud-based automation tools</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-dark rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-secondary text-2xl" />
                <h3 className="text-xl font-semibold">Tech Stack</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-secondary mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary rounded text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-primary rounded text-sm">React</span>
                    <span className="px-3 py-1 bg-primary rounded text-sm">Next.js</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-secondary mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary rounded text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-primary rounded text-sm">Java</span>
                    <span className="px-3 py-1 bg-primary rounded text-sm">Python</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-secondary mb-2">Cloud</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary rounded text-sm">AWS</span>
                    <span className="px-3 py-1 bg-primary rounded text-sm">Azure</span>
                    <span className="px-3 py-1 bg-primary rounded text-sm">Docker</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-secondary mb-2">Cybersecurity</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary rounded text-sm">Penetration Testing</span>
                    <span className="px-3 py-1 bg-primary rounded text-sm">Security Analysis</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-secondary text-2xl" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Bachelor of Technology in Computer Science and Engineering</h4>
                  <p className="text-tertiary">Lovely Professional University | 2022 - 2026</p>
                </div>
                <div>
                  <h4 className="text-secondary mb-2">Certifications</h4>
                  <ul className="space-y-2 text-tertiary">
                    <li>• AWS Certification</li>
                    <li>• Security++ Certification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-secondary mb-2">Projects & Activities</h4>
                  <ul className="space-y-2 text-tertiary">
                    <li>• Developed an intrusion detection system in cybersecurity</li>
                    <li>• Participated in CTF challenge hackathons</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 