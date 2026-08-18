import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({
  to = 100,
  from = 0,
  duration = 2,
  separator = '',
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) {
      setCount(from);
      return;
    }

    let startTime = null;
    let animationFrame = null;

    const animateCount = timestamp => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + (to - from) * easeProgress);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, from, to, duration]);

  const formatted = count.toLocaleString('id-ID') + (separator ? '' : '');

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
