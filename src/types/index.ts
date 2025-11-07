export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: 'enterprise' | 'ecommerce' | 'personal' | 'opensource';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'testing' | 'devops' | 'performance' | 'security' | 'ai-tools';
  level: number; // 1-5
  icon?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Theme = 'light' | 'dark';
