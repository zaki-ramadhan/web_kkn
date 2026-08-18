import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 0.04,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  once = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const getInitialY = () => {
    if (direction === 'top') return -15;
    if (direction === 'bottom') return 15;
    return 0;
  };

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
            y: getInitialY(),
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  filter: 'blur(0px)',
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: i * delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }
              : {
                  opacity: 0,
                  filter: 'blur(10px)',
                  y: getInitialY(),
                  transition: {
                    duration: 0.2,
                  },
                }
          }
          className="inline-block"
        >
          {el}
          {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}
