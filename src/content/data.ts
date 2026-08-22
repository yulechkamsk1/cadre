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
    educationLabel: string;
    education: string;
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
        'Fullstack-разработчик. Два года пишу фронтенд на Vue 3 для тяжёлого финтех-продукта, а в свободное время — MCP-серверы и пайплайны из нескольких агентов.',
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
        'Два года в финтехе: клиентская часть тяжёлого корпоративного приложения на Vue 3, бэкенд — на PHP и Node.js.',
        'Но больше всего цепляют инструменты для LLM. Написала несколько MCP-серверов под задачи команды, переписала документацию и структуру репозитория так, чтобы агент не терял контекст при чтении, и собрала схему, где задача делится между несколькими агентами. Это не демка — команда пользуется этим каждый день.',
        'Сейчас разбираюсь в Solana: @solana/web3.js, wallet-adapter, вызовы Anchor-программ.',
        'Провожу код-ревью, менторю джунов.',
      ],
      educationLabel: 'Образование',
      education: 'РАНХиГС, «Информационные технологии и программирование» — неоконченное высшее.',
    },
    projects: {
      title: 'Проекты',
      note: 'Внутреннее — без репозитория, но с честным описанием, что и как делала.',
      items: [
        {
          name: 'SFS',
          tag: 'рабочий проект',
          summary: 'Кредитно-финансовая платформа: кабинет с кредитными заявками, интеграцией с банками, счетами и промокодами.',
          description:
            'Переиспользуемые модульные компоненты на Composition API. Рефакторила legacy-код бэкенда с оглядкой на SOLID.',
          stack: ['Vue 3', 'PHP (Yii2)', 'Docker'],
        },
        {
          name: 'MCP-серверы для команды',
          tag: 'демо на GitHub',
          summary: 'Агент получает прямой доступ к внутренним системам команды — без копипаста контекста в чат.',
          description:
            'Раньше контекст копировали в чат руками, теперь агент сам достаёт нужное. Отдельно продумывала, как проверять качество того, что агент генерирует, до того как это попадёт в ревью. Настоящий сервер — внутренний код команды без публичного репозитория; здесь — самостоятельный демо-пересбор той же идеи на моковых данных (таск-трекер, поиск по докам, эвристическая проверка перед ревью).',
          stack: ['MCP', 'Claude API', 'GPT API', 'Node.js'],
          link: { label: 'GitHub', href: 'https://github.com/yulechkamsk1/agent-ops-mcp' },
        },
        {
          name: 'AI Interviewer',
          tag: 'хакатон',
          summary: 'Агент проводит первый созвон с кандидатом вместо HR — прямо в чате.',
          description: 'Задаёт вопросы, разбирает ответы, собирает саммари.',
          stack: ['Claude API', 'чат-интерфейс'],
        },
        {
          name: 'Telegram Task Bot',
          tag: 'командный проект',
          summary: 'Бот расшифровывает голосовые и превращает их в список задач.',
          description: 'Приоритет каждой задачи бот определяет сам — по смыслу сообщения.',
          stack: ['Python', 'Telegram API', 'speech-to-text'],
        },
        {
          name: 'Payment System',
          tag: 'дипломный проект',
          summary: 'Платёжный флоу и синхронизация состояния между сервисами.',
          description: 'От создания платежа до подтверждения каждый сервис в цепочке знает актуальный статус.',
          stack: ['PHP', 'PostgreSQL'],
          link: { label: 'GitHub', href: 'https://github.com/yulechkamsk1/diplom' },
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
      intro: 'Telegram — самый быстрый способ достучаться. Отвечаю в течение дня.',
      links: [
        { label: 'Telegram', value: '@yulechkamsk', href: 'https://t.me/yulechkamsk' },
        { label: 'Email', value: 'savelevau634@gmail.com', href: 'mailto:savelevau634@gmail.com' },
        { label: 'GitHub', value: 'yulechkamsk1', href: GITHUB_URL },
      ],
      availability: 'Готова к удалённой работе, гибриду или офису в Москве. Full-time, part-time, контракт — как удобнее.',
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
        'Fullstack developer. Two years building Vue 3 front ends for a heavy fintech product, and in my own time — MCP servers and multi-agent pipelines.',
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
        'Two years in fintech: the client side of a heavy corporate app in Vue 3, backend in PHP and Node.js.',
        "What actually gets me excited is tooling for LLMs. I've built MCP servers for my team's workflows, rewritten our docs and repo structure so an agent doesn't lose context mid-read, and put together a setup where a task splits across several agents. Not a demo — the team uses it daily.",
        'Currently learning Solana: @solana/web3.js, wallet-adapter, calling Anchor programs.',
        'I review code and mentor juniors.',
      ],
      educationLabel: 'Education',
      education: 'RANEPA, "Information Technology and Programming" — incomplete higher education.',
    },
    projects: {
      title: 'Projects',
      note: 'Internal work — no repo, but an honest account of what I did.',
      items: [
        {
          name: 'SFS',
          tag: 'work project',
          summary: 'A credit and finance platform: a dashboard for loan applications, bank integrations, invoices, and promo codes.',
          description:
            'Reusable modular components built with the Composition API. Refactored legacy backend code with an eye on SOLID.',
          stack: ['Vue 3', 'PHP (Yii2)', 'Docker'],
        },
        {
          name: 'MCP servers for the team',
          tag: 'demo on GitHub',
          summary: "An agent gets direct access to the team's internal systems — no more copy-pasting context into a chat.",
          description:
            "We used to paste context into chat by hand; now the agent pulls what it needs itself. I separately worked out how to check the quality of what the agent generates before it hits review. The real server is internal team code with no public repo; this is a standalone rebuild of the same idea against mock data (task tracker, docs search, a heuristic pre-review check).",
          stack: ['MCP', 'Claude API', 'GPT API', 'Node.js'],
          link: { label: 'GitHub', href: 'https://github.com/yulechkamsk1/agent-ops-mcp' },
        },
        {
          name: 'AI Interviewer',
          tag: 'hackathon',
          summary: 'An agent runs the first candidate call instead of HR — right in chat.',
          description: 'Asks questions, parses answers, writes up a summary.',
          stack: ['Claude API', 'chat interface'],
        },
        {
          name: 'Telegram Task Bot',
          tag: 'team project',
          summary: 'A bot that transcribes voice messages into a task list.',
          description: "It sets each task's priority itself, based on what the message actually says.",
          stack: ['Python', 'Telegram API', 'speech-to-text'],
        },
        {
          name: 'Payment System',
          tag: 'thesis project',
          summary: 'Payment flow and state sync across services.',
          description: 'From creation to confirmation, every service in the chain knows the current status.',
          stack: ['PHP', 'PostgreSQL'],
          link: { label: 'GitHub', href: 'https://github.com/yulechkamsk1/diplom' },
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
