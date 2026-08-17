import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past Section 2 (#alur-faskes)
      const section2 = document.getElementById('alur-faskes');
      let triggerOffset = 800;

      if (section2) {
        // Trigger right after entering/passing section 2
        triggerOffset = section2.offsetTop + 100;
      }

      if (window.scrollY > triggerOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas halaman"
      title="Kembali ke atas"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-900/95 hover:bg-brand-950 text-lime-400 border border-brand-700/80 shadow-elevation backdrop-blur-md flex items-center justify-center transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-lime-400/50 hover:scale-105 active:scale-95 group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
