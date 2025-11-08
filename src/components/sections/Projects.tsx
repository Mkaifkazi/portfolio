import React from 'react';
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Tooltip } from '../ui/Tooltip';
import { projects } from '../../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my recent work in web development and enterprise applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <FaStar />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="text-gray-800" size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <Tooltip
                        content={
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(4).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-primary-100 dark:bg-gray-600 text-primary-700 dark:text-white rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        }
                      >
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs cursor-help">
                          +{project.technologies.length - 4}
                        </span>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
