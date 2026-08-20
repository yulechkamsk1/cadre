type Lang = 'ru' | 'en';

const otherLang: Record<Lang, Lang> = { ru: 'en', en: 'ru' };

function applyLang(lang: Lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-lang-block]').forEach((el) => {
    el.hidden = el.dataset.langBlock !== lang;
  });

  document.querySelectorAll<HTMLButtonElement>('[data-lang-toggle]').forEach((btn) => {
    const label = otherLang[lang].toUpperCase();
    btn.textContent = label;
    btn.setAttribute('aria-label', `Switch language to ${label}`);
  });

  document.dispatchEvent(new CustomEvent<Lang>('langchange', { detail: lang }));
}

document.querySelectorAll<HTMLButtonElement>('[data-lang-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'ru';
    applyLang(otherLang[current as Lang]);
  });
});
