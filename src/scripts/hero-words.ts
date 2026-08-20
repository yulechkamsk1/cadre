// Wraps each word of the hero headline in its own span so :hover can target
// individual words. Done here (after fonts are ready) rather than at build
// time — splitting the heading into many inline boxes before the web font
// swaps in was measurably contributing to layout shift during that swap.
function wrapWords(h1: HTMLElement) {
  const words = (h1.textContent ?? '').split(' ');
  h1.textContent = '';
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.className = 'hero__word';
    span.textContent = word;
    h1.appendChild(span);
    if (i < words.length - 1) h1.appendChild(document.createTextNode(' '));
  });
}

function run() {
  document.querySelectorAll<HTMLElement>('.hero__headline').forEach(wrapWords);
}

if (document.fonts?.ready) {
  document.fonts.ready.then(run).catch(run);
} else {
  run();
}
