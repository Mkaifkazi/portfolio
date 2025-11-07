import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { id: 'skill-1', name: 'React.js', category: 'frontend', level: 5 },
  { id: 'skill-2', name: 'Next.js', category: 'frontend', level: 5 },
  { id: 'skill-3', name: 'TypeScript', category: 'frontend', level: 5 },
  { id: 'skill-4', name: 'JavaScript (ES6+)', category: 'frontend', level: 5 },
  { id: 'skill-5', name: 'HTML5', category: 'frontend', level: 5 },
  { id: 'skill-6', name: 'CSS3', category: 'frontend', level: 5 },
  { id: 'skill-7', name: 'Tailwind CSS', category: 'frontend', level: 5 },
  { id: 'skill-8', name: 'Material UI', category: 'frontend', level: 5 },
  { id: 'skill-9', name: 'Styled Components', category: 'frontend', level: 5 },
  { id: 'skill-10', name: 'Redux', category: 'frontend', level: 5 },
  { id: 'skill-11', name: 'Redux Toolkit', category: 'frontend', level: 5 },
  { id: 'skill-12', name: 'Redux Saga', category: 'frontend', level: 4 },
  { id: 'skill-13', name: 'React Query', category: 'frontend', level: 5 },
  { id: 'skill-14', name: 'React Router DOM', category: 'frontend', level: 5 },
  { id: 'skill-15', name: 'i18n', category: 'frontend', level: 4 },

  // Testing
  { id: 'skill-16', name: 'Jest', category: 'testing', level: 5 },
  { id: 'skill-17', name: 'React Testing Library', category: 'testing', level: 5 },
  { id: 'skill-18', name: 'Cypress', category: 'testing', level: 4 },
  { id: 'skill-19', name: 'NUnit', category: 'testing', level: 3 },

  // DevOps & Cloud
  { id: 'skill-20', name: 'Microsoft Azure', category: 'devops', level: 4 },
  { id: 'skill-21', name: 'AWS (S3, EC2)', category: 'devops', level: 4 },
  { id: 'skill-22', name: 'Docker', category: 'devops', level: 4 },
  { id: 'skill-23', name: 'Azure Functions', category: 'devops', level: 3 },
  { id: 'skill-24', name: 'Bitbucket Pipelines', category: 'devops', level: 4 },
  { id: 'skill-25', name: 'Jenkins', category: 'devops', level: 4 },
  { id: 'skill-26', name: 'GitHub Actions', category: 'devops', level: 5 },
  { id: 'skill-27', name: 'Git', category: 'devops', level: 5 },

  // Performance & Accessibility
  { id: 'skill-28', name: 'WCAG Compliance', category: 'performance', level: 5 },
  { id: 'skill-29', name: 'Lighthouse', category: 'performance', level: 5 },
  { id: 'skill-30', name: 'Axe DevTools', category: 'performance', level: 4 },
  { id: 'skill-31', name: 'Web Vitals', category: 'performance', level: 5 },
  { id: 'skill-32', name: 'New Relic', category: 'performance', level: 4 },
  { id: 'skill-33', name: 'Performance Optimization', category: 'performance', level: 5 },

  // Security
  { id: 'skill-34', name: 'OWASP', category: 'security', level: 4 },
  { id: 'skill-35', name: 'Secure Frontend Development', category: 'security', level: 5 },
  { id: 'skill-36', name: 'XSS Prevention', category: 'security', level: 5 },
  { id: 'skill-37', name: 'Code Review Best Practices', category: 'security', level: 5 },

  // AI & Productivity Tools
  { id: 'skill-38', name: 'Cursor', category: 'ai-tools', level: 5 },
  { id: 'skill-39', name: 'Claude Code', category: 'ai-tools', level: 5 },
  { id: 'skill-40', name: 'GitHub Copilot', category: 'ai-tools', level: 5 },
  { id: 'skill-41', name: 'ChatGPT', category: 'ai-tools', level: 5 },
];

export const skillCategories = {
  frontend: 'Frontend Development',
  testing: 'Testing & Quality Assurance',
  devops: 'DevOps & Cloud',
  performance: 'Performance & Accessibility',
  security: 'Security',
  'ai-tools': 'AI & Productivity Tools',
};
