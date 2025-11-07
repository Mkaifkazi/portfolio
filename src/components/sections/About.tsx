import React from 'react';
import { FaReact, FaCode, FaRocket, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <FaReact className="text-5xl" />,
      title: '5+ Years',
      description: 'Total Experience',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaCode className="text-5xl" />,
      title: '20+',
      description: 'Projects Delivered',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: '95+',
      description: 'Lighthouse Score',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: '100%',
      description: 'Test Coverage',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const expertise = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Modern Tech Stack',
      description: 'React.js, Next.js, TypeScript, and cutting-edge frontend technologies',
      gradient: 'from-primary-500 to-blue-500',
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Security & Accessibility',
      description: 'WCAG-compliant designs and OWASP secure coding practices',
      gradient: 'from-accent-500 to-purple-500',
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Performance Optimization',
      description: 'Expert in Lighthouse, Web Vitals, and real-world performance tuning',
      gradient: 'from-primary-500 to-cyan-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer with 5+ years of experience (3+ years professional, 2 years freelance) designing and developing enterprise-grade web applications using React.js, Next.js, and TypeScript.
          </p>
        </motion.div>

        {/* Highlights Grid - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 overflow-hidden text-center">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200 rounded-2xl`} />

                {/* Icon with gradient background */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white transition-all duration-200`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className={`bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary & Core Expertise - Side by Side Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-4" />
                <h3 className="text-3xl font-bold">Professional Summary</h3>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer with <span className="font-semibold text-primary-600 dark:text-primary-400">5+ years of experience</span> specializing in building modern, accessible, and high-performance web applications. Starting with 2 years of freelance work delivering e-commerce and portfolio websites, I've grown into professional roles where I've delivered enterprise solutions using React.js, Next.js, and TypeScript.
                </p>
                <p>
                  My approach combines technical excellence with a strong focus on user experience, accessibility (WCAG compliance), and performance optimization. I've successfully <span className="font-semibold text-primary-600 dark:text-primary-400">improved page load times by 30%</span> and <span className="font-semibold text-primary-600 dark:text-primary-400">enhanced team efficiency by 40%</span> through modular, reusable component architectures.
                </p>
                <p>
                  I'm experienced in leveraging AI-assisted development tools like Cursor, Claude Code, and GitHub Copilot to accelerate development cycles while maintaining high code quality and documentation standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-accent-500 to-primary-500 rounded-full mr-4" />
                <h3 className="text-3xl font-bold">Core Expertise</h3>
              </div>

              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education - Enhanced Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl mr-4 shadow-md">
                  🎓
                </div>
                <h3 className="text-3xl font-bold">Education</h3>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-1 h-24 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Bachelor of Information Technology
                  </h4>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    Vadodara Institute of Engineering (GTU)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                    <span className="text-2xl">📅</span>
                    <span>August 2019 - April 2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
