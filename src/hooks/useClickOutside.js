import { useEffect } from 'react';

/**
 * Custom hook to detect clicks or touches outside one or more referenced elements.
 * @param {React.RefObject | React.RefObject[]} refs Single ref or array of refs to monitor
 * @param {Function} handler Callback executed when an outside click occurs
 * @param {boolean} active Whether the listener is currently active
 */
export function useClickOutside(refs, handler, active = true) {
  useEffect(() => {
    if (!active) return;

    function listener(event) {
      const refList = Array.isArray(refs) ? refs : [refs];
      const isInside = refList.some(
        (ref) => ref.current && ref.current.contains(event.target)
      );

      if (!isInside) {
        handler(event);
      }
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener, { passive: true });

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler, active]);
}
