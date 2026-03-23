import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const interactiveSelector = 'a, button, [data-cursor="hover"], input, textarea, select';

export default function AnimatedCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return undefined;
    }

    setEnabled(true);

    const handleMove = (event) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleLeave = () => {
      setVisible(false);
    };

    const handlePointerOver = (event) => {
      if (event.target.closest(interactiveSelector)) {
        setHovering(true);
      }
    };

    const handlePointerOut = (event) => {
      if (event.target.closest(interactiveSelector)) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div className="hide-mobile-cursor pointer-events-none fixed inset-0 z-[130]">
      <motion.div
        className="absolute h-2.5 w-2.5 rounded-full bg-blue-300"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          opacity: visible ? 0.95 : 0,
          scale: hovering ? 0.25 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.25 }}
      />

      <motion.div
        className="absolute h-10 w-10 rounded-full border border-blue-200/60"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.8 : 1,
          borderColor: hovering ? 'rgba(168, 182, 255, 0.95)' : 'rgba(132, 151, 255, 0.8)'
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 350, mass: 0.35 }}
      />
    </div>
  );
}
