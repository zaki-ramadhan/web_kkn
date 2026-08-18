import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedContent({
  children,
  distance = 35,
  direction = 'vertical',
  reverse = false,
  duration = 0.65,
  delay = 0,
  scale = 1,
  threshold = 0.15,
  once = false,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const getInitialPosition = () => {
    if (direction === 'horizontal') {
      return { x: reverse ? -distance : distance, y: 0 };
    }
    return { x: 0, y: reverse ? -distance : distance };
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: initialPos.x,
        y: initialPos.y,
        scale: scale < 1 ? scale : 1,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier
              },
            }
          : {
              opacity: 0,
              x: initialPos.x,
              y: initialPos.y,
              scale: scale < 1 ? scale : 1,
              transition: {
                duration: 0.3,
                ease: 'easeInOut',
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
