// Decorative only: small accent-colored dots trailing the cursor. Skipped
// entirely on touch devices (no persistent cursor) and under reduced motion.
const canRun =
  window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canRun) {
  const container = document.createElement('div');
  container.className = 'cursor-trail';
  container.setAttribute('aria-hidden', 'true');
  document.body.appendChild(container);

  const minInterval = 45;
  let lastSpawn = 0;

  window.addEventListener(
    'pointermove',
    (e) => {
      const now = performance.now();
      if (now - lastSpawn < minInterval) return;
      lastSpawn = now;

      const dot = document.createElement('span');
      dot.className = 'cursor-trail__dot';
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      container.appendChild(dot);
      dot.addEventListener('animationend', () => dot.remove(), { once: true });
    },
    { passive: true },
  );
}
