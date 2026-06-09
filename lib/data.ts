export interface ProjectLink {
  label: string
  url: string
  type: 'github' | 'live' | 'youtube' | 'other'
}

export interface Screenshot {
  src: string | null
  caption: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  year: string
  image: string | null
  stack: string[]
  description: string
  links: ProjectLink[]
  screenshots: Screenshot[]
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface Profile {
  name: string
  role: string
  location: string
  blurb: string
  links: { github: string; linkedin: string; youtube: string }
}

export interface PortfolioData {
  profile: Profile
  skills: SkillGroup[]
  experience: ExperienceEntry[]
  projects: Project[]
}

export const data: PortfolioData = {
  profile: {
    name: 'Lutfi Prasetya',
    role: 'Full-stack Software Developer',
    location: 'Remote · UTC+7',
    blurb:
      "I'm a software developer with 9+ years of experience building web and desktop applications across manufacturing, enterprise IT, and SaaS. I work across the full stack — strong roots in C# .NET and Node.js on the backend, React and Next.js on the frontend — and I enjoy building systems that solve real operational problems.",
    links: {
      github: 'https://github.com/lutfihp',
      linkedin: 'https://www.linkedin.com/in/lutfihp',
      youtube: 'https://www.youtube.com/@codading',
    },
  },

  skills: [
    { group: 'Backend',  items: ['C# .NET', 'Node.js', 'NestJS', 'Python', 'PHP Laravel'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { group: 'Data',     items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    { group: 'Platform', items: ['Docker', 'AWS', 'Electron', 'CI/CD'] },
  ],

  experience: [
    {
      role: 'Senior Software Developer',
      company: 'Atech Solution',
      period: 'Dec 2021 — Present',
      bullets: [
        'Work in the web department to develop client and internal company products.',
        'Maintain existing .NET Core application.',
        'Develop appointment system with PHP Laravel for backend and JavaScript, Bootstrap, and jQuery for frontend.',
        'Develop OCPP application with Python and Next.js.',
        'Develop time-tracking and work monitoring apps with NestJS and MongoDB.',
        'Develop web scraper with Python, Playwright, and AWS Lambda.',
        'Develop Electron-based desktop app for Openclaw AI agent.',
      ],
    },
    {
      role: 'Backend Developer',
      company: 'Xtremax Teknologi Indonesia',
      period: 'Oct 2018 — Dec 2021',
      bullets: [
        'Work in the backend department and collaborate with other teams such as frontend, QA, DevOps, and system analysts.',
        'Develop and maintain REST API in .NET Core microservice with RabbitMQ as message broker.',
        'Work with several AWS services including Kibana, DynamoDB, and S3.',
        'Develop application that organizes Active Directory with Rcdevs WebAdm.',
        'Maintain existing ASP.NET website with feature development, bug fixing, and vulnerability updates.',
        'Maintain existing web powered by Sitecore CMS.',
        'Prepare deployment instructions and assist web engineers during deployments.',
        'Prepare queries to create reports from production data (SQL Server).',
      ],
    },
    {
      role: 'Programmer',
      company: 'Cladtek Bi-Metal Manufacturing',
      period: 'Apr 2015 — Jul 2018',
      bullets: [
        'Work in R&D department and collaborate with multiple engineering disciplines including electronics and mechanical.',
        'Develop inspection system desktop application with WinForms .NET for the piping industry.',
        'Prepare installation files, maintain the application, and conduct user training with workshop operators.',
        'Interact with external hardware such as industrial cameras and microcontrollers.',
        'Build 2 applications for communication and video streaming via WiFi.',
        'Research and test the MVTec Halcon machine vision library.',
      ],
    },
  ],

  projects: [
    {
      slug: 'super-battle',
      title: 'SuperBattle',
      tagline: 'Pick your team of heroes or villains — AI narrates who wins',
      year: '2026',
      image: 'https://cdn.codading.site/img/sb_landing.PNG',
      stack: ['Next.js', 'FastAPI', 'TypeScript', 'Tailwind', 'Framer Motion'],
      description:
        'SuperBattle lets you build teams of up to 3 DC or Marvel characters and watch an AI-generated battle story unfold with a declared winner. Under the hood, the Next.js frontend talks to a Python FastAPI service that handles character data from SuperHero API and Comic Vine, with Groq LLM generating the narrative. The /how-it-works page gives a full engineering walkthrough of the architecture, prompt design, and caching system.',
      links: [
        { label: 'super-battle-app', url: 'https://github.com/lutfihp/super-battle-app', type: 'github' },
        { label: 'super-battle-api', url: 'https://github.com/lutfihp/super-battle-api', type: 'github' },
        { label: 'Live',             url: 'https://superbattle.codading.site',             type: 'live' },
      ],
      screenshots: [
        { src: 'https://cdn.codading.site/img/sb_landing.PNG',   caption: 'Landing' },
        { src: 'https://cdn.codading.site/img/sb_matchup.PNG',   caption: 'Team matchup' },
        { src: 'https://cdn.codading.site/img/sb_story.PNG',     caption: 'Battle story' },
        { src: 'https://cdn.codading.site/img/sb_ai_prompt.PNG', caption: 'AI prompt inspector' },
        { src: 'https://cdn.codading.site/img/sb_howitwork.PNG', caption: 'How it works' },
      ],
    },
    {
      slug: 'mutawazin',
      title: 'Mutawazin Tutor Platform',
      tagline: 'Online tutoring platform with teacher & student registration and course scheduling',
      year: '2026',
      image: 'https://cdn.codading.site/img/mtwz_landing.PNG',
      stack: ['Python', 'FastAPI', 'Svelte'],
      description:
        'Mutawazin is an online tutoring platform that handles teacher and student registration, course scheduling, and session management. The backend is a FastAPI service managing users, bookings, and availability. The frontend is a Svelte app providing dashboards for both students and teachers.',
      links: [],
      screenshots: [
        { src: 'https://cdn.codading.site/img/mtwz_landing.PNG',   caption: 'Landing' },
        { src: 'https://cdn.codading.site/img/mtwz_login.PNG',     caption: 'Login' },
        { src: 'https://cdn.codading.site/img/mtwz_dashboard.PNG', caption: 'Dashboard' },
      ],
    },
    {
      slug: 'puanita',
      title: 'Puanita CMS',
      tagline: 'Headless CMS for news and articles — API + publishing app',
      year: '2024',
      image: 'https://cdn.codading.site/img/puan_landing.PNG',
      stack: ['NestJS', 'Next.js', 'MongoDB', 'Tailwind', 'TypeScript'],
      description:
        'Puanita is a headless CMS built for news and article publishing. The backend (puanita-api) is a NestJS REST API backed by MongoDB, handling content management, authentication, and media. The frontend (puanita-app) is a Next.js application providing an editorial dashboard for creating, editing, and publishing articles.',
      links: [
        { label: 'puanita-api', url: 'https://github.com/lutfihp/puanita-api', type: 'github' },
        { label: 'puanita-app', url: 'https://github.com/lutfihp/puanita-app', type: 'github' },
      ],
      screenshots: [
        { src: 'https://cdn.codading.site/img/puan_landing.PNG',   caption: 'Landing' },
        { src: 'https://cdn.codading.site/img/puan_login.PNG',     caption: 'Login' },
        { src: 'https://cdn.codading.site/img/puan_edit.PNG',      caption: 'Article editor' },
        { src: 'https://cdn.codading.site/img/puan_dashboard.PNG', caption: 'Dashboard' },
      ],
    },
  ],
}
