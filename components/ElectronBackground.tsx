import React from 'react';

// Generate 40 electrons with random properties
const ELECTRONS = Array.from({ length: 40 }, (_, i) => {
  const size = Math.random() * 1 + 1.2; // 1.2px to 2.2px
  const top = Math.random() * 100; // percent
  const left = Math.random() * 100; // percent
  const duration = Math.random() * 10 + 8; // 8s to 18s
  const delay = Math.random() * 10; // 0s to 10s
  const direction = Math.random() > 0.5 ? 1 : -1; // left/right
  return { size, top, left, duration, delay, direction, i };
});

const ElectronBackground = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
    <div className="relative w-full h-full">
      {ELECTRONS.map((e) => (
        <div
          key={e.i}
          className="absolute bg-white rounded-full electron-glow"
          style={{
            width: e.size,
            height: e.size,
            top: `${e.top}%`,
            left: `${e.left}%`,
            animation: `electron-drift-${e.i} ${e.duration}s linear infinite`,
            animationDelay: `${e.delay}s`,
          }}
        />
      ))}
      <style jsx global>{`
        .electron-glow {
          box-shadow: 0 0 3px 1px #fff, 0 0 1px 0.5px #fff;
          opacity: 0.85;
        }
        ${ELECTRONS.map(
          (e) => `
          @keyframes electron-drift-${e.i} {
            0% { transform: translate(0, 0); opacity: 0.85; }
            80% { opacity: 0.85; }
            100% { transform: translate(${e.direction * 60}vw, 20vh); opacity: 0; }
          }
        `
        ).join('')}
      `}</style>
    </div>
  </div>
);

export default ElectronBackground; 