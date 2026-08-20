const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

// Content must never depend on this script running: only opt an element into
// the hidden-until-revealed state right before we can guarantee an observer
// will bring it back. If this script fails to load, nothing was ever hidden.
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  );

  targets.forEach((el) => {
    el.classList.add('reveal-pending');
    observer.observe(el);
  });
}
