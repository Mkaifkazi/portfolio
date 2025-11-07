export const PERSONAL_INFO = {
  name: 'Mohammad Kaif Kazi',
  title: 'Frontend Developer',
  email: 'kaifkazi40@gmail.com',
  phone: '+91 9327356760',
  location: 'Vadodara, India',
  linkedin: 'https://www.linkedin.com/in/mohammedkaifkazi',
  github: 'https://github.com/Mkaifkazi',
  instagram: 'https://www.instagram.com/m.kaif.kazi_/',
  twitter: 'https://x.com/KaifKazi10',
  resumeUrl: '/MohammadKaifKazi_FrontendDeveloper_Resume.pdf',
};

export const NAVIGATION_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohammad-kaif-kazi',
    icon: 'FaLinkedin',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/kaifkazi',
    icon: 'FaGithub',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:kaifkazi40@gmail.com',
    icon: 'FaEnvelope',
  },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.2 },
  },
};
