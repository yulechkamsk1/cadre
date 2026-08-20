type Theme = 'light' | 'dark';

const other: Record<Theme, Theme> = { light: 'dark', dark: 'light' };
const label: Record<Theme, string> = { light: 'DARK', dark: 'LIGHT' };

function resolvedTheme(): Theme {
  const explicit = document.documentElement.getAttribute('data-theme');
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyLabel(theme: Theme) {
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    const target = other[theme];
    btn.textContent = label[theme];
    btn.setAttribute('aria-label', `Switch to ${target} theme`);
  });
}

applyLabel(resolvedTheme());

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = other[resolvedTheme()];
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
    applyLabel(next);
  });
});
