import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that detects when an element enters the viewport
 * Uses Intersection Observer API for performance
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: unobserve after revealing (only animate once)
        if (!options.repeat) {
          observer.unobserve(element);
        }
      } else if (options.repeat) {
        setIsVisible(false);
      }
    }, defaultOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.repeat]);

  return [ref, isVisible];
}

export default useScrollReveal;

