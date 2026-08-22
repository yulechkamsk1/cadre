// Turns the vertical project list into a horizontal row of collapsed cards
// that expand on click — a scaled-down, CSS/DOM take on a floating-card
// portfolio effect (no WebGL). Skipped under reduced motion, so the default
// markup (fully visible, stacked, no JS required) is the permanent fallback
// — see the `.has-carousel` comment in global.css.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  document.querySelectorAll<HTMLElement>('.project-list').forEach((list) => {
    list.classList.add('has-carousel');

    const toggles = Array.from(list.querySelectorAll<HTMLButtonElement>('.project__toggle'));

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggles.forEach((t) => t.setAttribute('aria-expanded', 'false'));
        toggle.setAttribute('aria-expanded', wasOpen ? 'false' : 'true');

        if (!wasOpen) {
          toggle
            .closest('.project')
            ?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        }
      });
    });

    // Let a plain vertical mouse wheel drive the horizontal scroll too,
    // not just trackpads/touch.
    list.addEventListener(
      'wheel',
      (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          list.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      },
      { passive: false },
    );
  });
}
