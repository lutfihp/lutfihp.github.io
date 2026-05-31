export interface Repo {
  label: string
  url: string
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
  role: string
  image: string | null
  stack: string[]
  description: string
  repos: Repo[]
  screenshots: Screenshot[]
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  summary: string
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
  links: { github: string; linkedin: string }
}

export interface PortfolioData {
  profile: Profile
  skills: SkillGroup[]
  experience: ExperienceEntry[]
  projects: Project[]
}

export const data: PortfolioData = {
  profile: {
    name: 'Lutfi Hilman Prasetya',
    role: 'Full-stack Software Developer',
    location: 'Remote · UTC+7',
    blurb:
      "I'm a software developer with 10+ years of experience building web and desktop applications across manufacturing, enterprise IT, and SaaS. I work across the full stack — strong roots in C# .NET and Node.js on the backend, React and Next.js on the frontend — and I enjoy building systems that solve real operational problems.",
    links: {
      github: 'https://github.com/lutfihp',
      linkedin: 'https://www.linkedin.com/in/lutfihp',
    },
  },

  skills: [
    { group: 'Backend',  items: ['C# .NET', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'PHP Laravel'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Blazor'] },
    { group: 'Data',     items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'] },
    { group: 'Platform', items: ['Docker', 'AWS', 'RabbitMQ', 'Electron', 'CI/CD'] },
  ],

  experience: [
    {
      role: 'Senior Software Developer',
      company: 'Atech Solution',
      period: 'Dec 2021 — Present',
      summary:
        'Building client and internal products in the web department — appointment systems, OCPP integrations, time-tracking tools, web scrapers, and an Electron-based AI desktop app.',
    },
    {
      role: 'Backend Developer',
      company: 'Xtremax Teknologi Indonesia',
      period: 'Oct 2018 — Dec 2021',
      summary:
        'Developed and maintained .NET Core REST APIs in a microservice architecture with RabbitMQ. Worked across AWS services (Kibana, DynamoDB, S3) and maintained Sitecore CMS platforms.',
    },
    {
      role: 'Programmer',
      company: 'Cladtek Bi-Metal Manufacturing',
      period: 'Apr 2015 — Jul 2018',
      summary:
        'Built WinForms desktop applications in the R&D department for industrial inspection systems, integrating cameras, microcontrollers, and the MVTec Halcon machine vision library.',
    },
  ],

  projects: [
    {
      slug: 'project-1',
      title: 'Project One',
      tagline: 'Short description of what this project does',
      year: '2024',
      role: 'Lead Engineer',
      image: null,
      stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
      description: 'Full project description to be added.',
      repos: [],
      screenshots: [
        { src: null, caption: 'Overview' },
        { src: null, caption: 'Detail view' },
      ],
    },
    {
      slug: 'project-2',
      title: 'Project Two',
      tagline: 'Short description of what this project does',
      year: '2023',
      role: 'Full-stack Engineer',
      image: null,
      stack: ['Python', 'FastAPI', 'React'],
      description: 'Full project description to be added.',
      repos: [],
      screenshots: [
        { src: null, caption: 'Overview' },
        { src: null, caption: 'Detail view' },
      ],
    },
    {
      slug: 'project-3',
      title: 'Project Three',
      tagline: 'Short description of what this project does',
      year: '2022',
      role: 'Backend Engineer',
      image: null,
      stack: ['C# .NET', 'Node.js', 'SQL Server'],
      description: 'Full project description to be added.',
      repos: [],
      screenshots: [
        { src: null, caption: 'Overview' },
        { src: null, caption: 'Detail view' },
      ],
    },
    {
      slug: 'project-4',
      title: 'Project Four',
      tagline: 'Short description of what this project does',
      year: '2021',
      role: 'Creator',
      image: null,
      stack: ['NestJS', 'MongoDB', 'Docker'],
      description: 'Full project description to be added.',
      repos: [],
      screenshots: [
        { src: null, caption: 'Overview' },
        { src: null, caption: 'Detail view' },
      ],
    },
  ],
}
