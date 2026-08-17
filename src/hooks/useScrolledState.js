import { useState, useEffect } from 'react';

/**
 * Custom hook to monitor scroll offset using IntersectionObserver on a target element,
 * with a passive scroll event fallback.
 * @param {string} targetElementId ID of the target element (e.g. 'hero-section')
 * @param {number} threshold Intersection threshold (default 0.15)
 * @returns {boolean} Whether the page has scrolled past the target
 */
export function useScrolledState(targetElementId = 'hero-section', threshold = 0.15) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const targetEl = document.getElementById(targetElementId);
    if (!targetEl) {
      const handleScrollFallback = () => {
        setIsScrolled(window.scrollY > 400);
      };
      window.addEventListener('scroll', handleScrollFallback, { passive: true });
      return () => window.removeEventListener('scroll', handleScrollFallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(targetEl);
    return () => observer.disconnect();
  }, [targetElementId, threshold]);

  return isScrolled;
}
