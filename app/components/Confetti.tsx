'use client';

import { motion } from 'framer-motion';

const Confetti = () => {
  const leftConfetti = Array.from({ length: 10 }).map((_, i) => ({
    id: `left-${i}`,
    x: Math.random() * 10, // Limite à 10% de la largeur
    y: Math.random() * 100,
    delay: Math.random() * 2,
    color: i % 2 === 0 ? '#e6c343' : '#44a5ae',
  }));

  const rightConfetti = Array.from({ length: 10 }).map((_, i) => ({
    id: `right-${i}`,
    x: 90 + Math.random() * 10, // Entre 90% et 100% de la largeur
    y: Math.random() * 100,
    delay: Math.random() * 2,
    color: i % 2 === 0 ? '#e6c343' : '#44a5ae',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...leftConfetti, ...rightConfetti].map((c) => (
        <motion.div
          key={c.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: c.color,
            left: `${c.x}%`,
            top: `${c.y}%`,
          }}
          animate={{
            y: [0, 100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti; 