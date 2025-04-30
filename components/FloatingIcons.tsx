import React from 'react';
import Image from 'next/image';

const FloatingIcons = () => {
  // Using a simple colored box as placeholder
  const placeholderIcon = "data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' fill='%234ECCA3'/%3E%3C/svg%3E";

  const icons = [
    { alt: 'JavaScript', className: 'top-1/4 left-1/4' },
    { alt: 'TypeScript', className: 'top-1/3 right-1/3' },
    { alt: 'React', className: 'bottom-1/4 left-1/3' },
    { alt: 'Node.js', className: 'top-1/2 right-1/4' },
    { alt: 'Python', className: 'bottom-1/3 right-1/4' },
    { alt: 'AWS', className: 'bottom-1/4 right-1/3' },
    { alt: 'Docker', className: 'top-1/3 left-1/3' },
    { alt: 'HTML', className: 'bottom-1/3 left-1/4' },
    { alt: 'CSS', className: 'top-1/4 right-1/4' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={icon.alt}
          className={`absolute w-12 h-12 animate-float opacity-20 ${icon.className}`}
          style={{
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <Image
            src={placeholderIcon}
            alt={icon.alt}
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons; 