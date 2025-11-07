import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { PERSONAL_INFO, NAVIGATION_LINKS } from '../../utils/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {PERSONAL_INFO.name.split(' ').map(word => word[0]).join('')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend Developer passionate about building modern, accessible web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>{PERSONAL_INFO.phone}</li>
              <li>{PERSONAL_INFO.location}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} {PERSONAL_INFO.name}. Built with{' '}
            <FaHeart className="inline text-red-500 mx-1" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};
