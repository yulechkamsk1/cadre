import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const root = fileURLToPath(new URL('..', import.meta.url));

// The OG image is generated once, locally, at build/design time (not served to
// visitors — the site itself loads fonts locally per the brief). Google's CSS2
// endpoint splits fonts into per-script files for browsers that understand
// unicode-range; an old user agent that predates that feature gets back a
// single TTF with full Latin+Cyrillic glyph coverage, which satori needs since
// it doesn't merge glyph coverage across multiple same-name font buffers.
const LEGACY_UA = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.7 Safari/534.34';

async function fetchGoogleFontTTF(family, weight) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`;
  const css = await fetch(cssUrl, { headers: { 'User-Agent': LEGACY_UA } }).then((r) => r.text());
  const [, fontUrl] = css.match(/src: url\((https:[^)]+)\) format\('truetype'\)/) ?? [];
  if (!fontUrl) throw new Error(`Could not resolve TTF url for ${family} ${weight}`);
  const buf = await fetch(fontUrl).then((r) => r.arrayBuffer());
  return Buffer.from(buf);
}

const [headingFont, bodyFont, monoFont] = await Promise.all([
  fetchGoogleFontTTF('Unbounded', 600),
  fetchGoogleFontTTF('Inter Tight', 400),
  fetchGoogleFontTTF('JetBrains Mono', 500),
]);

const width = 1200;
const height = 630;

const markup = {
  type: 'div',
  props: {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#FBFAF7',
      padding: '80px',
      fontFamily: 'Inter Tight',
    },
    children: [
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            fontFamily: 'JetBrains Mono',
            fontSize: 22,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#6B6B76',
          },
          children: 'Юлия Савельева',
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  fontFamily: 'Unbounded',
                  fontWeight: 600,
                  fontSize: 56,
                  lineHeight: 1.25,
                  color: '#16161A',
                  maxWidth: 960,
                },
                children: 'Строю инструменты, которыми пользуются агенты',
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  fontSize: 28,
                  color: '#6B6B76',
                  maxWidth: 820,
                },
                children: 'Fullstack-разработчик. MCP-серверы, оркестрация агентов, Vue 3.',
              },
            },
          ],
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'JetBrains Mono',
            fontSize: 20,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: '#2F4BE0',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  width: 14,
                  height: 14,
                  backgroundColor: '#2F4BE0',
                  borderRadius: 2,
                },
              },
            },
            { type: 'div', props: { style: { display: 'flex' }, children: 'Москва · открыта к предложениям' } },
          ],
        },
      },
    ],
  },
};

const svg = await satori(markup, {
  width,
  height,
  fonts: [
    { name: 'Unbounded', data: headingFont, weight: 600, style: 'normal' },
    { name: 'Inter Tight', data: bodyFont, weight: 400, style: 'normal' },
    { name: 'JetBrains Mono', data: monoFont, weight: 500, style: 'normal' },
  ],
});

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: width } });
const png = resvg.render().asPng();

writeFileSync(`${root}/public/og-image.png`, png);
console.log('Wrote public/og-image.png');
