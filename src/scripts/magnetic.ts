// Buttons drift slightly toward the cursor on hover. Pointer-fine only
// (no touch), and off entirely under reduced motion.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = window.matchMedia('(pointer: fine)').matches;

if (!reduceMotion && canHover) {
  const strength = 0.35;
  const maxOffset = 10;

  document.querySelectorAll<HTMLElement>('.btn-mono, .hero__cta').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      const x = Math.max(-maxOffset, Math.min(maxOffset, relX * strength));
      const y = Math.max(-maxOffset, Math.min(maxOffset, relY * strength));
      el.style.transform = `translate(${x}px, ${y}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}
