import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Code2,
  Globe,
  Server,
  ShoppingCart,
  PenTool,
  Terminal,
} from 'lucide-react';

export const profile = {
  name: 'Md Shaon',
  fullName: 'Mohammad Shaon',
  roles: ['Frontend Developer', 'MERN Stack Developer', 'WordPress Developer'],
  location: 'Sylhet, Bangladesh',
  availability: 'Open to Remote Opportunities',
  email: 'shawonmohammad787@gmail.com',
  github: 'https://github.com/shawon787-cyber',
  linkedin: 'https://www.linkedin.com/in/md-shaon-87315933b/',
  portfolio: 'https://tech-agent-shawon-portfolio.netlify.app/',
  // Configure a real WhatsApp number here to enable the WhatsApp link.
  // Format: https://wa.me/<countrycode><number> — e.g. https://wa.me/8801XXXXXXXXX
  whatsapp: '',
};

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  {
    label: 'WhatsApp',
    href: profile.whatsapp || null,
    icon: MessageCircle,
    disabled: !profile.whatsapp,
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const aboutHighlights = [
  {
    icon: Code2,
    title: 'Modern Frontend Development',
    description: 'React, Next.js, and TypeScript for responsive, accessible interfaces.',
  },
  {
    icon: ShoppingCart,
    title: 'WordPress & WooCommerce',
    description: 'Custom themes, plugins, and performance-focused store customization.',
  },
  {
    icon: Server,
    title: 'MERN Stack Applications',
    description: 'End-to-end apps with Node.js, Express.js, and MongoDB.',
  },
];

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    title: 'CMS & E-commerce',
    icon: ShoppingCart,
    skills: ['WordPress', 'WooCommerce', 'Shopify'],
  },
  {
    title: 'Design & Motion',
    icon: PenTool,
    skills: ['Figma', 'UI/UX Design', 'Framer Motion', 'Three.js'],
  },
  {
    title: 'Developer Tools',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
];

export const projects = [
  {
    name: 'FundFlow',
    category: 'Full-Stack Web App',
    description:
      'A full-stack web application built with the MERN stack, focused on managing financial contributions with a clean, responsive interface and REST API integration.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shawon787-cyber/fundflow',
    demo: null,
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    name: 'MediQueue',
    category: 'Tutor Booking Platform',
    description:
      'A tutor booking platform that helps users discover tutors and manage tutoring bookings, with authentication and a MongoDB-backed booking flow.',
    tech: ['React', 'JavaScript', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shawon787-cyber/mediqueue',
    demo: null,
    accent: 'from-teal-500/20 to-cyan-500/10',
  },
  {
    name: 'Blood Bridge',
    category: 'Donation Platform',
    description:
      'A blood donation web application that connects donors and recipients, featuring search, donor profiles, and request management built on the MERN stack.',
    tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
    github: 'https://github.com/shawon787-cyber/bloodbridge',
    demo: null,
    accent: 'from-rose-500/20 to-emerald-500/10',
  },
  {
    name: 'HireLoop',
    category: 'Job Platform',
    description:
      'A job-related web application with a client interface for browsing and managing job listings, built with React and a Node.js backend.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shawon787-cyber/hireloop-client',
    demo: null,
    accent: 'from-emerald-500/20 to-lime-500/10',
  },
  {
    name: 'SkillSphere',
    category: 'Learning Platform',
    description:
      'A learning-focused web application for exploring skills and course-style content, built with a modern React frontend and MERN-stack backend.',
    tech: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/shawon787-cyber/SkillSphere',
    demo: null,
    accent: 'from-teal-500/20 to-emerald-500/10',
  },
  {
    name: 'Keen Keeper',
    category: 'Web Application',
    description:
      'A MERN-stack web application with a focused feature set, built with React and a Node.js/Express backend and MongoDB persistence.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shawon787-cyber/Keen-Keeper',
    demo: null,
    accent: 'from-emerald-500/20 to-green-500/10',
  },
];

export const experiences = [
  {
    role: 'WordPress & Web Developer',
    org: 'ABG-SERVICE.',
    location: 'Germany (Remote)',
    description:
      'Worked remotely on WordPress website development, customization, maintenance, and performance improvements for client-focused web solutions.',
    current: true,
  },
  {
    role: 'Freelance & Local Agency Projects',
    org: 'Freelance',
    location: 'Bangladesh',
    description:
      'Collaborated on WordPress websites, responsive interfaces, website customization, and client-specific development tasks.',
    current: false,
  },
];

export const principles = [
  {
    icon: PenTool,
    title: 'Thoughtful UI/UX',
    description: 'Interfaces designed around clarity, hierarchy, and how people actually use them.',
  },
  {
    icon: Code2,
    title: 'Maintainable Code',
    description: 'Readable, well-structured code that is easy to extend and reason about.',
  },
  {
    icon: Globe,
    title: 'Responsive by Design',
    description: 'Every layout adapts cleanly from mobile to large desktops.',
  },
  {
    icon: Server,
    title: 'Performance First',
    description: 'Fast load times and smooth interaction as a baseline, not an afterthought.',
  },
];
