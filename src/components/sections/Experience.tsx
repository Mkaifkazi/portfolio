import React, { useState } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
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
            Experience
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey in frontend development and software engineering
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Experience Cards - Vertical Layout */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer relative overflow-hidden"
                  onClick={() => toggleExpand(exp.id)}
                >
                  {/* Gradient hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Section */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {/* Position & Company */}
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-md">
                            <FaBriefcase className="text-xl" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.position}
                            </h3>
                            <h4 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                              {exp.company}
                            </h4>
                          </div>
                        </div>

                        {/* Meta Information */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg">
                            <FaCalendar className="text-primary-500" />
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg">
                            <FaMapMarkerAlt className="text-accent-500" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Expand Button */}
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                          {expandedId === exp.id ? (
                            <FaChevronUp className="text-primary-500" />
                          ) : (
                            <FaChevronDown className="text-gray-400 group-hover:text-primary-500 transition-colors" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                            {/* Achievements */}
                            <div className="mb-6">
                              <div className="flex items-center mb-4">
                                <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-3" />
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                  Key Achievements
                                </h5>
                              </div>
                              <ul className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="flex items-start group/item"
                                  >
                                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mt-2 mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <div className="flex items-center mb-4">
                                <div className="w-1 h-6 bg-gradient-to-b from-accent-500 to-primary-500 rounded-full mr-3" />
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                  Technologies
                                </h5>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                  <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
