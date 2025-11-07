import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Travel Site',
    description: 'Modern travel booking platform with responsive design and smooth animations',
    longDescription: 'Built a travel booking website with destination exploration, trip planning features, and a beautiful user interface.',
    image: '/projects/travel-site.jpg',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'personal',
    featured: true,
    liveUrl: 'https://travelsite-eight-theta.vercel.app/',
  },
  {
    id: 'project-2',
    title: 'Flowdeck',
    description: 'Productivity dashboard for managing tasks and workflows efficiently',
    longDescription: 'Developed a comprehensive dashboard application for task management and workflow optimization with an intuitive interface.',
    image: '/projects/flowdeck.jpg',
    technologies: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    category: 'personal',
    featured: true,
    liveUrl: 'https://flowdeck-pi.vercel.app/dashboard',
  },
  {
    id: 'project-3',
    title: 'Luxe Store',
    description: 'Modern e-commerce platform with product catalog and shopping cart',
    longDescription: 'Created a fully responsive e-commerce website with product browsing, cart management, and seamless user experience.',
    image: '/projects/luxe-store.jpg',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'ecommerce',
    featured: true,
    liveUrl: 'https://ecommerce-site-flax-rho.vercel.app/',
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and professional experience',
    longDescription: 'Built a modern portfolio website with dark mode, smooth animations, and responsive design to showcase my work and skills.',
    image: '/projects/portfolio.jpg',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'personal',
    featured: true,
    liveUrl: 'https://portfolio-nine-sigma-3my4k3sro7.vercel.app/',
  },
];

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'personal', label: 'Personal' },
  { value: 'opensource', label: 'Open Source' },
];
