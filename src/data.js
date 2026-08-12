// ─────────────────────────────────────────────────────────────
// Everything the site says lives here.
// Icons are Font Awesome 6 class names.
// A social with href '#' is treated as "not set yet" and is not
// rendered — fill the URL in and the icon appears on its own.
// ─────────────────────────────────────────────────────────────

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'focus', label: 'Focus' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const socials = [
  { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/s-mtGhub' },
  {
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sumit-patel-9111bb203/',
  },
  { icon: 'fa-solid fa-envelope', label: 'Email', href: 'mailto:patelsumit.1652002@gmail.com' },
  { icon: 'fa-solid fa-code', label: 'LeetCode', href: '#' }, // add your profile URL
  { icon: 'fa-solid fa-trophy', label: 'Codeforces', href: '#' }, // add your profile URL
]

export const hero = {
  brand: 'Sumit',
  greeting: "Hi, I'm",
  name: 'Sumit Patel',
  roles: ['Software Development Engineer @ Meesho', 'Backend & Distributed Systems', 'IIT Kharagpur'],
  tagline:
    'I build real-time backend systems that stay fast under load — low-latency gRPC pipelines, event-driven services and personalization infrastructure serving millions of users.',
  primaryCta: { label: 'View My Work', href: '#projects' },
  secondaryCta: { label: 'Download CV', href: '/sumit-patel-cv.pdf' },
}

export const about = {
  paragraphs: [
    'I am a Software Development Engineer at Meesho, working on the personalization stack that decides what millions of users see the moment they open the app. Most of my time goes into real-time feature pipelines, candidate generation and keeping p99 latency inside a budget that leaves no room for slack.',
    'I graduated from IIT Kharagpur with a Dual Degree in Mathematics and Computing. The same instinct that pulls me toward distributed systems keeps me in competitive programming — Guardian on LeetCode, Expert on Codeforces, and a global rank of 1008 in the Meta Hacker Cup.',
  ],
  emoji: '⚡',
  stats: [
    { value: 8.29, suffix: '', label: 'CGPA · IIT Kharagpur' },
    { value: 2189, suffix: '', label: 'LeetCode Max Rating' },
    { value: 1671, suffix: '', label: 'Codeforces Max Rating' },
    { value: 6.2, suffix: 'ms', label: 'p99 Latency Shipped' },
  ],
}

export const experience = [
  {
    role: 'Software Development Engineer',
    period: 'Jun 2025 – Present',
    start: '2025-06',
    end: null, // null = ongoing, duration counts up to today
    company: 'Meesho · Bangalore, India',
    points: [
      'Designed and shipped a real-time user-signal pipeline (Android → ScyllaDB → Orion Feature Store), replacing async Kafka sync with direct gRPC integration — cutting p99 latency to 6.2ms and enabling same-session feed personalization for millions of users.',
      'Owned end-to-end backend delivery for real-time feature-aggregation services powering PLP and PDP personalization, orchestrating parallel calls to multiple downstream services and a custom Geo-Utils engine within a p99 ≤ 100ms budget.',
      'Architected a production embedding-based candidate generation system (31×32 user embeddings) wired to a real-time feature store, generating the user feed via vector similarity search on interacted products.',
      'Built orchestration DAGs for the FY ranking pipeline and led a cold-start personalization initiative using social-graph signals, driving large-scale personalized feed generation with a projected ~30% CTR/CVR uplift.',
    ],
  },
  {
    role: 'Software Development Intern',
    period: 'May 2024 – Jul 2024',
    start: '2024-05',
    end: '2024-07',
    company: 'Addverb Technologies Ltd. · Noida, India',
    points: [
      'Worked with the FMS team on pathfinding for warehouse robotics, implementing A* for shortest traffic-free routing with dynamic traffic-light and turn-cost controls.',
      'Built live throughput and task-count visualization for real-time agent tracking using the ImGui C++ library inside Movect.',
      'Designed and optimized the Libao warehouse map, enabling coordinated flow of 200 agents and achieving 10,000+ sortations/hour.',
    ],
  },
  {
    role: 'Dual Degree, Mathematics and Computing',
    period: '2020 – 2025',
    start: '2020-06',
    end: '2025-05',
    company: 'IIT Kharagpur · Kharagpur, India',
    points: [
      'CGPA 8.29/10.0. Coursework in Design and Analysis of Algorithms, Computer Organisation and Architecture, and File Organization and Database Systems.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'C / C++', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'Go', level: 82 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 78 },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Spring Boot', level: 92 },
      { name: 'gRPC / Protobuf', level: 90 },
      { name: 'REST APIs', level: 90 },
      { name: 'Kafka', level: 85 },
      { name: 'Node.js', level: 80 },
    ],
  },
  {
    title: 'Data & Caching',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'ScyllaDB', level: 85 },
      { name: 'Redis', level: 88 },
      { name: 'DragonflyDB', level: 78 },
    ],
  },
]

export const tools = [
  { icon: 'fa-brands fa-google', label: 'GCP / GKE' },
  { icon: 'fa-brands fa-aws', label: 'AWS' },
  { icon: 'fa-brands fa-docker', label: 'Docker' },
  { icon: 'fa-brands fa-git-alt', label: 'Git' },
  { icon: 'fa-solid fa-fire', label: 'Prometheus' },
  { icon: 'fa-solid fa-chart-line', label: 'Grafana' },
  { icon: 'fa-solid fa-magnifying-glass', label: 'Elasticsearch' },
  { icon: 'fa-solid fa-infinity', label: 'GitHub Actions' },
]

// The "Services" slot from the template, reworked into what you
// actually work on — you're employed, not taking client work.
export const focus = [
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Distributed Systems',
    text: 'Microservices that hold their shape under load, with circuit breakers and sane failure modes.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Backend Engineering',
    text: 'Spring Boot, gRPC and REST services built end to end and owned in production.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Real-Time Personalization',
    text: 'Feature stores, embedding-based candidate generation and same-session feed ranking.',
  },
  {
    icon: 'fa-solid fa-tower-broadcast',
    title: 'Event-Driven Architecture',
    text: 'Kafka pipelines and DAG orchestration for signal ingestion at scale.',
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Distributed Caching',
    text: 'Redis, DragonflyDB and ScyllaDB tuned to keep p99 inside a tight latency budget.',
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Observability',
    text: 'Prometheus, Grafana and Elasticsearch — so a regression is visible before it is reported.',
  },
]

export const projects = [
  {
    emoji: '🛒',
    title: 'E-Commerce Platform',
    tagline: 'Personal Project',
    text: 'Full-stack e-commerce app on Node.js, Express and MongoDB with JWT-based secure session management, plus separate React/Redux admin and customer interfaces.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    emoji: '🌳',
    title: 'Advanced Quad-Tree Visualizer',
    tagline: 'Personal Project',
    text: 'C++/OpenGL quadtree visualizer for real-time interactive rendering and updates, built to explore large-scale spatial data management and GIS applications.',
    tags: ['C++', 'OpenGL', 'Spatial Data'],
    live: '#',
    code: '#',
  },
  {
    emoji: '🔗',
    title: 'mini-url',
    tagline: 'Meesho · In-house',
    text: "Co-owner of Meesho's in-house URL shortening service, used across internal and customer-facing surfaces.",
    tags: ['Java', 'Spring Boot', 'Redis'],
  },
]

export const achievements = [
  {
    icon: 'fa-solid fa-shield-halved',
    year: '2024',
    title: 'Guardian on LeetCode',
    text: 'Max rating 2189 — top competitive-programming tier on the platform.',
  },
  {
    icon: 'fa-solid fa-chess-knight',
    year: '2024',
    title: 'Expert on Codeforces',
    text: 'Max rating 1671 across rated rounds.',
  },
  {
    icon: 'fa-solid fa-earth-americas',
    year: '2023',
    title: 'Meta Hacker Cup',
    text: 'Global Rank 1008 in Round 2.',
  },
  {
    icon: 'fa-solid fa-star',
    year: 'Meesho',
    title: 'Star Performer of the Quarter',
    text: 'Awarded by GM-Growth for demonstrating the "Lightspeed" competency.',
  },
  {
    icon: 'fa-solid fa-arrow-trend-up',
    year: 'Impact',
    title: '+2.5% 1ODNR',
    text: 'Personalization experiments improving first-session feed relevance.',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    year: '2020',
    title: 'JEE Mains',
    text: '99.44 percentile.',
  },
]

export const certifications = [
  {
    emoji: '🔐',
    issuer: 'Google Developer Group · Devtown',
    title: 'Server Authentication',
    text: 'Server-side authentication implemented with MongoDB, Express and Node.js.',
    href: '#',
  },
  {
    emoji: '☁️',
    issuer: 'GDG · Microsoft Learn Student Ambassador · ShapeAI',
    title: 'Cloud Computing with AWS',
    text: 'Cloud computing fundamentals and hands-on deployment on AWS.',
    href: '#',
  },
  {
    emoji: '📈',
    issuer: 'Google Developer Group',
    title: 'Data Science / ML',
    text: 'Machine learning project on real estate price prediction.',
    href: '#',
  },
]

export const contact = {
  email: 'patelsumit.1652002@gmail.com',
  phone: '+91 70007 14921',
  location: 'Bangalore, India',
}

export const footer = {
  owner: 'Sumit Patel',
  year: 2026,
}
