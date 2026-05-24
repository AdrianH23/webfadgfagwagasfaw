import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  stagger?: number;
  childSelector?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, stagger = 100, childSelector } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = childSelector
      ? Array.from(element.querySelectorAll(childSelector))
      : [element];

    targets.forEach((target) => {
      const el = target as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'none';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = targets.indexOf(target);
            const delay = index * stagger;

            setTimeout(() => {
              target.style.transition = 'opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1)';
              target.style.opacity = '1';
              target.style.transform = 'translateY(0)';
            }, delay);

            observer.unobserve(target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [threshold, stagger, childSelector]);

  return ref;
}
