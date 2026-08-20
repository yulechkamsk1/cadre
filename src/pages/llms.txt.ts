import type { APIRoute } from 'astro';
import { toMarkdown } from '../content/data';

export const GET: APIRoute = () => {
  const body = [toMarkdown('ru'), '---', toMarkdown('en')].join('\n\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
