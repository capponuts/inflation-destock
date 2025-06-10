'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Confetti = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const leftConfetti = Array.from({ length: 20 }).map((_, i) => ({
    id: `left-${i}`,
    x: Math.random() * 10,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    color: i % 2 === 0 ? '#e6c343' : '#44a5ae',
  }));

  const rightConfetti = Array.from({ length: 20 }).map((_, i) => ({
    id: `right-${i}`,
    x: 90 + Math.random() * 10,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    color: i % 2 === 0 ? '#e6c343' : '#44a5ae',
  }));

  const mouseConfetti = !isMobile ? Array.from({ length: 5 }).map((_, i) => ({
    id: `mouse-${i}`,
    color: i % 2 === 0 ? '#e6c343' : '#44a5ae',
    size: Math.random() * 4 + 2,
  })) : [];

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
      
      {!isMobile && mouseConfetti.map((c, i) => (
        <motion.div
          key={c.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: c.color,
            width: c.size,
            height: c.size,
            x: mousePosition.x + (i * 10 - 20),
            y: mousePosition.y + (i * 10 - 20),
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti; 