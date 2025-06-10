'use client';

import { motion } from 'framer-motion';

const Confetti = () => {
  const confetti = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    color: i % 2 === 0 ? '#e6c343' : '#44a5ae',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((c) => (
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
            x: [0, Math.random() * 50 - 25, 0],
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