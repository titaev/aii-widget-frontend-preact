import { useEffect, useRef } from 'preact/compat';
import { viewCountIncrementing } from '@src/actions/viewCountIncrementing';

export const useIncrementViewCount = () => {
  const ref = useRef(null);
  useEffect(() => {
    const handleIntersection = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          viewCountIncrementing();
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });
    observer.observe(ref.current);
  }, []);
  return ref;
};
