import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "FormMorf Website",
    description: "Documentation and showcase website for FormMorf library",
    longDescription:
      "Official website for FormMorf library featuring comprehensive documentation, interactive examples, and modern design with dark mode support.",
    image: "/projects/formmorf-website.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "next-themes",
      "Lucide React",
      "Radix UI",
      "Shiki",
    ],
    category: "opensource",
    featured: true,
    liveUrl: "https://formmorf-website.vercel.app/",
  },
  {
    id: "project-2",
    title: "Flowdeck",
    description:
      "Productivity dashboard for managing tasks and workflows efficiently",
    longDescription:
      "Developed a comprehensive dashboard application for task management and workflow optimization with an intuitive interface.",
    image: "/projects/flowdeck.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Router DOM",
      "React Hook Form",
      "Bootstrap",
      "React Bootstrap",
      "Sass",
      "dnd-kit",
      "Recharts",
      "date-fns",
      "Yup",
      "React Hot Toast",
      "React Icons",
    ],
    category: "personal",
    featured: true,
    liveUrl: "https://flowdeck-pi.vercel.app/dashboard",
  },
  {
    id: "project-3",
    title: "FormMorf Library",
    description:
      "Dynamic form builder library with drag-and-drop functionality",
    longDescription:
      "A powerful form building library with Material-UI components, drag-and-drop interface, and state management for creating complex forms.",
    image: "/projects/formmorf-library.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Material-UI",
      "Emotion",
      "@dnd-kit",
      "Zustand",
      "Immer",
      "Vite",
      "Vitest",
      "nanoid",
      "pnpm",
    ],
    category: "opensource",
    featured: true,
    liveUrl: "https://www.npmjs.com/package/@formmorf/builder",
  },
  {
    id: "project-4",
    title: "Luxe Store",
    description:
      "Modern e-commerce platform with product catalog and shopping cart",
    longDescription:
      "Created a fully responsive e-commerce website with product browsing, cart management, and seamless user experience.",
    image: "/projects/luxe-store.jpg",
    technologies: [
      "React",
      "React Router DOM",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "React Hot Toast",
      "React Icons",
      "TypeScript",
    ],
    category: "ecommerce",
    featured: false,
    liveUrl: "https://ecommerce-site-flax-rho.vercel.app/",
  },
  {
    id: "project-5",
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and professional experience",
    longDescription:
      "Built a modern portfolio website with dark mode, smooth animations, and responsive design to showcase my work and skills.",
    image: "/projects/portfolio.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "Framer Motion",
      "React Hook Form",
      "Tailwind CSS",
      "EmailJS",
      "React Icons",
    ],
    category: "personal",
    featured: false,
    liveUrl: "https://portfolio-nine-sigma-3my4k3sro7.vercel.app/",
  },

  {
    id: "project-6",
    title: "Travel Site",
    description:
      "Modern travel booking platform with responsive design and smooth animations",
    longDescription:
      "Built a travel booking website with destination exploration, trip planning features, and a beautiful user interface.",
    image: "/projects/travel-site.jpg",
    technologies: ["React", "Vite", "React Router DOM"],
    category: "personal",
    featured: false,
    liveUrl: "https://travelsite-eight-theta.vercel.app/",
  },
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "enterprise", label: "Enterprise" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "personal", label: "Personal" },
  { value: "opensource", label: "Open Source" },
];
