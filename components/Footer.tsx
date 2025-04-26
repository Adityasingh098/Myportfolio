import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: <FaGithub className="w-5 h-5" />, 
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    { 
      icon: <FaEnvelope className="w-5 h-5" />, 
      href: 'mailto:adityasingh917632@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-black py-12 border-t border-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-tertiary hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-secondary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-tertiary">
              © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
            </p>
            <p className="text-tertiary">
              Full Stack Developer & AI Specialist
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 