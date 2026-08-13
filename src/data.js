// ─────────────────────────────────────────────────────────────
// Everything the site says lives here.
// Icons are Font Awesome 6 class names.
// A social with href '#' is treated as "not set yet" and is not
// rendered — fill the URL in and the icon appears on its own.
// ─────────────────────────────────────────────────────────────

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "focus", label: "Focus" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  {
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumit-patel-9111bb203/",
  },
  {
    icon: "fa-solid fa-code",
    label: "LeetCode",
    href: "https://leetcode.com/u/s_mtLC/",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    href: "https://github.com/s-mtGhub",
  },
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    href: "mailto:patelsumit.1652002@gmail.com",
  },
  // add your profile URL
  {
    icon: "fa-solid fa-trophy",
    label: "Codeforces",
    href: "https://codeforces.com/profile/__rider",
  }, // add your profile URL
];

export const hero = {
  brand: "Sumit",
  greeting: "Hi, I'm",
  name: "Sumit Patel",
  roles: [
    "Immediate Joiner",
    "Ex-SDE @ Meesho",
    "Backend & Distributed Systems",
    "IIT Kharagpur",
  ],
  tagline:
    "I build real-time backend systems that stay fast under load — low-latency gRPC pipelines, event-driven services and personalization infrastructure serving millions of users.",
  primaryCta: { label: "View My Work", href: "#experience" },
  secondaryCta: {
    label: "Download CV",
    href: "https://drive.google.com/file/d/1YqRylArLR6gaEdlCMwrMYgmgENQHuDFl/preview",
    target: "_blank",
  },
};

export const about = {
  paragraphs: [
    "I am a Software Development Engineer at Meesho, working on the personalization stack that decides what millions of users see the moment they open the app. Most of my time goes into real-time feature pipelines, candidate generation and keeping p99 latency inside a budget that leaves no room for slack.",
    "I graduated from IIT Kharagpur with a Dual Degree in Mathematics and Computing. The same instinct that pulls me toward distributed systems keeps me in competitive programming — Guardian on LeetCode, Expert on Codeforces, and a global rank of 1008 in the Meta Hacker Cup.",
  ],
  emoji: "⚡",
  stats: [
    { value: 8.29, suffix: "", label: "CGPA · IIT Kharagpur" },
    { value: 2189, suffix: "", label: "LeetCode Max Rating" },
    { value: 1671, suffix: "", label: "Codeforces Max Rating" },
    { value: 2005, suffix: "", label: "CodeChef Max Rating" },
  ],
};

export const experience = [
  {
    role: "Software Development Engineer",
    period: "Jun 2025 – Present",
    start: "2025-06",
    end: null, // null = ongoing, duration counts up to today
    company: "Meesho · Bangalore, India",
    points: [
      "Designed and shipped a real-time user-signal pipeline (Android → ScyllaDB → Orion Feature Store), replacing async Kafka sync with direct gRPC integration — cutting p99 latency to 6.2ms and enabling same-session feed personalization for millions of users.",
      "Owned end-to-end backend delivery for real-time feature-aggregation services powering PLP and PDP personalization, orchestrating parallel calls to multiple downstream services and a custom Geo-Utils engine within a p99 ≤ 100ms budget.",
      "Architected a production embedding-based candidate generation system (31×32 user embeddings) wired to a real-time feature store, generating the user feed via vector similarity search on interacted products.",
      "Built orchestration DAGs for the FY ranking pipeline and led a cold-start personalization initiative using social-graph signals, driving large-scale personalized feed generation with a projected ~30% CTR/CVR uplift.",
    ],
  },
  {
    role: "Software Development Intern",
    period: "May 2024 – Jul 2024",
    start: "2024-05",
    end: "2024-07",
    company: "Addverb Technologies Ltd. · Noida, India",
    points: [
      "Worked with the FMS team on pathfinding for warehouse robotics, implementing A* for shortest traffic-free routing with dynamic traffic-light and turn-cost controls.",
      "Built live throughput and task-count visualization for real-time agent tracking using the ImGui C++ library inside Movect.",
      "Designed and optimized the Libao warehouse map, enabling coordinated flow of 200 agents and achieving 10,000+ sortations/hour.",
    ],
  },
  {
    role: "Dual Degree, Mathematics and Computing",
    period: "2020 – 2025",
    start: "2020-06",
    end: "2025-05",
    company: "IIT Kharagpur · Kharagpur, India",
    points: [
      "CGPA 8.29/10.0. Coursework in Design and Analysis of Algorithms, Computer Organisation and Architecture, and File Organization and Database Systems.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C / C++", level: 92 },
      { name: "Java", level: 85 },
      { name: "Go", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "gRPC / Protobuf", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "Kafka", level: 75 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    title: "Data & Caching",
    skills: [
      { name: "MySQL", level: 78 },
      { name: "MongoDB", level: 78 },
      { name: "ScyllaDB", level: 75 },
      { name: "Redis", level: 85 },
      { name: "DragonflyDB", level: 80 },
    ],
  },
];

export const tools = [
  { icon: "fa-brands fa-google", label: "GCP / GKE" },
  { icon: "fa-brands fa-aws", label: "AWS" },
  { icon: "fa-brands fa-docker", label: "Docker" },
  { icon: "fa-brands fa-git-alt", label: "Git" },
  { icon: "fa-solid fa-fire", label: "Prometheus" },
  { icon: "fa-solid fa-chart-line", label: "Grafana" },
  { icon: "fa-solid fa-magnifying-glass", label: "Elasticsearch" },
  { icon: "fa-solid fa-infinity", label: "GitHub Actions" },
];

// The "Services" slot from the template, reworked into what you
// actually work on — you're employed, not taking client work.
export const focus = [
  {
    icon: "fa-solid fa-network-wired",
    title: "Distributed Systems",
    text: "Microservices that hold their shape under load, with circuit breakers and sane failure modes.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Engineering",
    text: "Spring Boot, gRPC and REST services built end to end and owned in production.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Real-Time Personalization",
    text: "Feature stores, embedding-based candidate generation and same-session feed ranking.",
  },
  {
    icon: "fa-solid fa-tower-broadcast",
    title: "Event-Driven Architecture",
    text: "Kafka pipelines and DAG orchestration for signal ingestion at scale.",
  },
  {
    icon: "fa-solid fa-database",
    title: "Distributed Caching",
    text: "Redis, DragonflyDB and ScyllaDB tuned to keep p99 inside a tight latency budget.",
  },
  {
    icon: "fa-solid fa-gauge-high",
    title: "Observability",
    text: "Prometheus, Grafana and Elasticsearch — so a regression is visible before it is reported.",
  },
];

export const projects = [
  {
    emoji: "🛒",
    title: "E-Commerce Platform",
    tagline: "Personal Project",
    text: "Full-stack e-commerce app on Node.js, Express and MongoDB with JWT-based secure session management, plus separate React/Redux admin and customer interfaces.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    live: { href: "#", target: "_blank" },
    code: {
      href: "https://github.com/MERN-Stack-E-Commerce-Project",
      target: "_blank",
    },
  },
  {
    emoji: "🌳",
    title: "Advanced Quad-Tree Visualizer",
    tagline: "Personal Project",
    text: "C++/OpenGL quadtree visualizer for real-time interactive rendering and updates, built to explore large-scale spatial data management and GIS applications.",
    tags: ["C++", "OpenGL", "Spatial Data"],
    live: { href: "#", target: "_blank" },
    code: {
      href: "https://github.com/s-mtGhub/Quad-Tree-Visualizer",
      target: "_blank",
    },
  },
  {
    emoji: "🤖",
    title: "Telegram Bot: Git Commit Tracker",
    tagline: "Personal Project",
    text: "Telegram bot that tracks new commits to a GitHub repository and sends notifications to a Telegram channel, built with C++ real-time updates.",
    tags: ["Java", "Spring Boot", "Redis"],
    code: {
      href: "https://github.com/s-mtGhub/TelegramBot-gitNewCommitTracker",
      target: "_blank",
    },
  },
];

export const achievements = [
  {
    icon: "fa-solid fa-shield-halved",
    year: "2024",
    title: "Guardian on LeetCode",
    text: "Max rating 2189 — top competitive-programming tier on the platform.",
  },
  {
    icon: "fa-solid fa-chess-knight",
    year: "2024",
    title: "Expert on Codeforces",
    text: "Max rating 1671 across rated rounds.",
  },
  {
    icon: "fa-solid fa-earth-americas",
    year: "2023",
    title: "Meta Hacker Cup",
    text: "Global Rank 1008 in Round 2.",
  },
  {
    icon: "fa-solid fa-star",
    year: "Meesho",
    title: "Star Performer of the Quarter",
    text: 'Awarded by GM-Growth for demonstrating the "Lightspeed" competency.',
  },
  {
    icon: "fa-solid fa-arrow-trend-up",
    year: "Impact @ Meesho",
    title: "+2.5% 1ODNR",
    text: "Personalization experiments improving first-session feed relevance.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    year: "2020",
    title: "JEE Mains",
    text: "99.44 percentile.",
  },
];

export const certifications = [
  {
    emoji: "🌱",
    issuer: "Coursera / Self-paced",
    title: "Spring Boot Course Completion",
    text: "Spring Boot course completion certificate.",
    href: "https://drive.google.com/file/d/1jyEg-jExVkCYOngi303L9uboM8O5Ywc4/preview",
  },
  {
    emoji: "🔁",
    issuer: "Online Course",
    title: "Apache Kafka Course Completion",
    text: "Apache Kafka course completion certificate.",
    href: "https://drive.google.com/file/d/1DuRty-DmhEgcJOTtLhggfs-7hlSzzchF/preview",
  },
  {
    emoji: "🐬",
    issuer: "Online Course",
    title: "Introduction to SQL with MySQL",
    text: "Introduction to SQL with MySQL course completion certificate.",
    href: "https://drive.google.com/file/d/1YGzwMw31HNk0x8S38uvi2lhUQa8W6GzQ/preview",
  },
  {
    emoji: "🟥",
    issuer: "Online Course",
    title: "Master in Redis",
    text: "Master in Redis course completion certificate.",
    href: "https://drive.google.com/file/d/1fAL7151bSQSOJgXTPFm8yXJ84AN9mMqn/preview",
  },
  {
    emoji: "🛡️",
    issuer: "Microsoft Learn Student Ambassador",
    title: "Server Authentication (Microsoft Learn)",
    text: "Server-side authentication implementation certified by Microsoft Learn Student Ambassador.",
    href: "https://drive.google.com/file/d/1C9LYNhwrmDQ0aoCmrF3ue1nMutHKZpzQ/preview",
  },
  {
    emoji: "🔑",
    issuer: "Google Developer Group",
    title: "Server Authentication (GDG)",
    text: "Server-side authentication implementation certified by Google Developer Group.",
    href: "https://drive.google.com/file/d/1Hl_ysFf18ebZpidxRislK_0daU3U-DJ2/preview",
  },
  {
    emoji: "🧾",
    issuer: "Devtown",
    title: "Server Authentication (Devtown)",
    text: "Server-side authentication implementation certified by Devtown.",
    href: "https://drive.google.com/file/d/1k3ahe_iuqnNu98STzJBtuPPxQX9tnXsK/preview",
  },
  {
    emoji: "☁️",
    issuer: "Microsoft Learn Student Ambassador · ShapeAI",
    title: "Cloud Computing with AWS",
    text: "Cloud computing fundamentals and hands-on deployment on AWS.",
    href: "https://drive.google.com/file/d/1bRo42mEZE_HYbAJzHf1qR6fcOnxRo5KQ/preview",
  },
  {
    emoji: "📊",
    issuer: "Google Developer Group",
    title: "Data Science / ML",
    text: "Machine learning project on real estate price prediction.",
    href: "https://drive.google.com/file/d/1BSv2sxh-fQG_4dmJRudHXfRzACglcwXG/preview",
  },
];

export const contact = {
  email: "patelsumit.1652002@gmail.com",
  phone: "+91 9679203447",
  location: "Bangalore, India",
};

export const footer = {
  owner: "Sumit Patel",
  year: 2026,
};
