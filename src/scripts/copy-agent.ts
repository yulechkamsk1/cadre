type Lang = 'ru' | 'en';

const dataEl = document.getElementById('agent-markdown');
const markdown: Record<Lang, string> = dataEl ? JSON.parse(dataEl.textContent ?? '{}') : { ru: '', en: '' };

async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to the legacy method below
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  let succeeded = false;
  try {
    succeeded = document.execCommand('copy');
  } catch {
    succeeded = false;
  }
  textarea.remove();

  return succeeded;
}

document.querySelectorAll<HTMLButtonElement>('[data-copy-agent]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const lang: Lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
    const ok = await copyText(markdown[lang]);
    if (!ok) return;

    const copiedLabel = lang === 'ru' ? btn.dataset.copiedRu : btn.dataset.copiedEn;
    const original = btn.innerHTML;

    btn.dataset.copied = 'true';
    btn.textContent = copiedLabel ?? original;

    window.setTimeout(() => {
      btn.dataset.copied = 'false';
      btn.innerHTML = original;
    }, 1600);
  });
});
