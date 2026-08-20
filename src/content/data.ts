export interface ProjectItem {
  name: string;
  tag: string;
  summary: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface SiteContent {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    copyForAgent: string;
    copied: string;
    langToggleLabel: string;
    skipToContent: string;
  };
  hero: {
    name: string;
    headline: string;
    subhead: string;
    status: string;
    photoAlt: string;
    ctas: ContactLink[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  projects: {
    title: string;
    note: string;
    items: ProjectItem[];
  };
  stack: {
    title: string;
    groups: StackGroup[];
  };
  contact: {
    title: string;
    intro: string;
    links: ContactLink[];
    availability: string;
  };
  footer: {
    text: string;
  };
}

const GITHUB_URL = 'https://github.com/yulechkamsk1';

export const content: Record<'ru' | 'en', SiteContent> = {
  ru: {
    htmlLang: 'ru',
    meta: {
      title: 'Юлия Савельева — Fullstack-разработчик',
      description:
        'Строю инструменты, которыми пользуются агенты: MCP-серверы, оркестрация агентов и фронтенд для высоконагруженного финтеха на Vue 3.',
    },
    nav: {
      copyForAgent: 'Скопировать для агента',
      copied: 'Скопировано',
      langToggleLabel: 'EN',
      skipToContent: 'Перейти к содержанию',
    },
    hero: {
      name: 'Юлия Савельева',
      headline: 'Строю инструменты, которыми пользуются агенты',
      subhead:
        'Fullstack-разработчик. Пишу MCP-серверы, настраиваю оркестрацию агентов и делаю фронтенд для высоконагруженного финтеха на Vue 3.',
      status: 'Москва · удалённо или гибрид · открыта к предложениям',
      photoAlt: 'Юлия Савельева',
      ctas: [
        { label: 'Telegram', value: '@yulechkamsk', href: 'https://t.me/yulechkamsk' },
        { label: 'Email', value: 'savelevau634@gmail.com', href: 'mailto:savelevau634@gmail.com' },
        { label: 'GitHub', value: 'GitHub', href: GITHUB_URL },
      ],
    },
    about: {
      title: 'Чем занимаюсь',
      paragraphs: [
        'Два года коммерческой разработки в финтехе: клиентская часть высоконагруженного корпоративного приложения на Vue 3 и серверная логика на PHP и Node.js.',
        'Параллельно занимаюсь тем, что мне интереснее всего — инструментами для LLM. Написала несколько MCP-серверов под задачи своей команды, перестроила внутреннюю документацию и структуру репозитория так, чтобы агенты читали их без потери контекста, и собрала схему, в которой задача разбивается между несколькими агентами, а инструменты выстраиваются в один пайплайн. Схемы проверяла на реальных задачах команды, а не на демо.',
        'Сейчас разбираюсь в разработке под Solana: клиент на @solana/web3.js, wallet-adapter, вызовы Anchor-программ.',
        'Провожу код-ревью и менторю джунов.',
      ],
    },
    projects: {
      title: 'Проекты',
      note: 'Внутренние наработки с работы — без репозитория, но с описанием подхода.',
      items: [
        {
          name: 'MCP-серверы для команды',
          tag: 'без репозитория',
          summary: 'Набор MCP-серверов под рабочие процессы команды.',
          description:
            'Агент получает доступ к внутренним данным и инструментам напрямую, вместо копирования контекста в чат руками. Отдельно занималась контролем качества генерации — что и как проверяем, прежде чем код уходит в ревью.',
          stack: ['MCP', 'Claude API', 'GPT API', 'Node.js'],
        },
        {
          name: 'AI Interviewer',
          tag: 'хакатон',
          summary: 'HR-агент, который проводит первичное интервью с кандидатом в чате.',
          description: 'Задаёт вопросы, разбирает ответы, собирает результат.',
          stack: ['Claude API', 'чат-интерфейс'],
        },
        {
          name: 'Telegram Task Bot',
          tag: 'командный проект',
          summary: 'Бот расшифровывает голосовые сообщения и превращает их в план задач.',
          description: 'Приоритеты расставляются автоматически по содержанию сообщения.',
          stack: ['Python', 'Telegram API', 'speech-to-text'],
        },
        {
          name: 'Payment System',
          tag: 'дипломный проект',
          summary: 'Логика обработки платежей и координация взаимодействия между сервисами.',
          description: 'Сервисы синхронизируют состояние платежа на всех этапах обработки.',
          stack: ['PHP', 'PostgreSQL'],
        },
      ],
    },
    stack: {
      title: 'Стек',
      groups: [
        {
          title: 'Фронтенд',
          items: ['Vue 3 (Composition API)', 'JavaScript', 'HTML', 'CSS', 'Figma', 'адаптивная и кроссбраузерная вёрстка'],
        },
        { title: 'Бэкенд', items: ['PHP', 'Node.js', 'Python', 'REST API'] },
        { title: 'Базы', items: ['PostgreSQL', 'MySQL'] },
        { title: 'Инфраструктура', items: ['Docker Compose', 'Linux', 'Git'] },
        {
          title: 'AI',
          items: [
            'разработка MCP-серверов',
            'Claude API',
            'GPT API',
            'Qwen API',
            'контекст-инжиниринг',
            'оркестрация агентов',
            'Claude Code',
            'Cursor',
            'Codex',
          ],
        },
        {
          title: 'Web3',
          items: ['Solana — @solana/web3.js', 'wallet-adapter', 'Anchor', 'SPL-токены (изучаю)'],
        },
      ],
    },
    contact: {
      title: 'Написать',
      intro: 'Telegram — самый быстрый способ. Отвечаю в течение дня.',
      links: [
        { label: 'Telegram', value: '@yulechkamsk', href: 'https://t.me/yulechkamsk' },
        { label: 'Email', value: 'savelevau634@gmail.com', href: 'mailto:savelevau634@gmail.com' },
        { label: 'GitHub', value: 'yulechkamsk1', href: GITHUB_URL },
      ],
      availability: 'Открыта к удалённой работе, гибриду и офису в Москве. Полная занятость, частичная или контракт.',
    },
    footer: {
      text: '© 2026 Юлия Савельева',
    },
  },
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Yulia Savelyeva — Fullstack Developer',
      description:
        'I build the tools agents use: MCP servers, agent orchestration, and front ends for high-load fintech in Vue 3.',
    },
    nav: {
      copyForAgent: 'Copy for agent',
      copied: 'Copied',
      langToggleLabel: 'RU',
      skipToContent: 'Skip to content',
    },
    hero: {
      name: 'Yulia Savelyeva',
      headline: 'I build the tools agents use',
      subhead:
        'Fullstack developer. I write MCP servers, orchestrate agent pipelines, and build front ends for high-load fintech in Vue 3.',
      status: 'Moscow · remote or hybrid · open to offers',
      photoAlt: 'Yulia Savelyeva',
      ctas: [
        { label: 'Telegram', value: '@yulechkamsk', href: 'https://t.me/yulechkamsk' },
        { label: 'Email', value: 'savelevau634@gmail.com', href: 'mailto:savelevau634@gmail.com' },
        { label: 'GitHub', value: 'GitHub', href: GITHUB_URL },
      ],
    },
    about: {
      title: 'What I do',
      paragraphs: [
        'Two years of commercial development in fintech: the client side of a high-load corporate application in Vue 3, and server-side logic in PHP and Node.js.',
        "In parallel, I work on what interests me most — tools for LLMs. I've built several MCP servers for my team's workflows, restructured internal docs and the repository layout so agents can read them without losing context, and put together a scheme where a task splits across several agents with tools chained into one pipeline. I tested these setups on the team's real tasks, not demos.",
        'Currently learning Solana development: a client on @solana/web3.js, wallet-adapter, calling Anchor programs.',
        'I do code reviews and mentor junior developers.',
      ],
    },
    projects: {
      title: 'Projects',
      note: 'Internal work from my job — no repository, but the approach is described.',
      items: [
        {
          name: 'MCP servers for the team',
          tag: 'no repository',
          summary: "A set of MCP servers for the team's workflows.",
          description:
            "An agent gets direct access to internal data and tools instead of context being copy-pasted into a chat by hand. I separately worked on quality control for generated output — what gets checked, and how, before code goes to review.",
          stack: ['MCP', 'Claude API', 'GPT API', 'Node.js'],
        },
        {
          name: 'AI Interviewer',
          tag: 'hackathon',
          summary: 'An HR agent that runs a first-round interview with a candidate in chat.',
          description: 'Asks questions, parses answers, compiles a result.',
          stack: ['Claude API', 'chat interface'],
        },
        {
          name: 'Telegram Task Bot',
          tag: 'team project',
          summary: 'A bot that transcribes voice messages into a prioritized task list.',
          description: 'Priorities are set automatically from message content.',
          stack: ['Python', 'Telegram API', 'speech-to-text'],
        },
        {
          name: 'Payment System',
          tag: 'thesis project',
          summary: 'Payment processing logic and coordination between services.',
          description: 'Services keep payment state in sync across every processing stage.',
          stack: ['PHP', 'PostgreSQL'],
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        {
          title: 'Frontend',
          items: ['Vue 3 (Composition API)', 'JavaScript', 'HTML', 'CSS', 'Figma', 'responsive & cross-browser layout'],
        },
        { title: 'Backend', items: ['PHP', 'Node.js', 'Python', 'REST API'] },
        { title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
        { title: 'Infrastructure', items: ['Docker Compose', 'Linux', 'Git'] },
        {
          title: 'AI',
          items: [
            'MCP server development',
            'Claude API',
            'GPT API',
            'Qwen API',
            'context engineering',
            'agent orchestration',
            'Claude Code',
            'Cursor',
            'Codex',
          ],
        },
        {
          title: 'Web3',
          items: ['Solana — @solana/web3.js', 'wallet-adapter', 'Anchor', 'SPL tokens (learning)'],
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      intro: "Telegram is the fastest way to reach me. I reply within a day.",
      links: [
        { label: 'Telegram', value: '@yulechkamsk', href: 'https://t.me/yulechkamsk' },
        { label: 'Email', value: 'savelevau634@gmail.com', href: 'mailto:savelevau634@gmail.com' },
        { label: 'GitHub', value: 'yulechkamsk1', href: GITHUB_URL },
      ],
      availability: 'Open to remote, hybrid, or on-site work in Moscow. Full-time, part-time, or contract.',
    },
    footer: {
      text: '© 2026 Yulia Savelyeva',
    },
  },
};

export function toMarkdown(lang: 'ru' | 'en'): string {
  const c = content[lang];
  const lines: string[] = [];

  lines.push(`# ${c.hero.name}`);
  lines.push('');
  lines.push(`## ${c.hero.headline}`);
  lines.push('');
  lines.push(c.hero.subhead);
  lines.push('');
  lines.push(`_${c.hero.status}_`);
  lines.push('');
  lines.push(c.hero.ctas.map((cta) => `[${cta.label}](${cta.href})`).join(' · '));
  lines.push('');
  lines.push(`## ${c.about.title}`);
  lines.push('');
  for (const p of c.about.paragraphs) {
    lines.push(p);
    lines.push('');
  }
  lines.push(`## ${c.projects.title}`);
  lines.push('');
  for (const item of c.projects.items) {
    lines.push(`### ${item.name} (${item.tag})`);
    lines.push('');
    lines.push(item.summary);
    lines.push('');
    lines.push(item.description);
    lines.push('');
    lines.push(item.stack.map((s) => `\`${s}\``).join(' '));
    if (item.link) {
      lines.push('');
      lines.push(`[${item.link.label}](${item.link.href})`);
    }
    lines.push('');
  }
  lines.push(`## ${c.stack.title}`);
  lines.push('');
  for (const group of c.stack.groups) {
    lines.push(`- **${group.title}:** ${group.items.join(', ')}`);
  }
  lines.push('');
  lines.push(`## ${c.contact.title}`);
  lines.push('');
  lines.push(c.contact.intro);
  lines.push('');
  for (const link of c.contact.links) {
    lines.push(`- ${link.label}: [${link.value}](${link.href})`);
  }
  lines.push('');
  lines.push(c.contact.availability);
  lines.push('');

  return lines.join('\n');
}
