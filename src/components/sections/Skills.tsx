import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { skills, skillCategories } from '../../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  const categoryCounts = Object.keys(skillCategories).reduce((acc, category) => {
    acc[category] = skills.filter((s) => s.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  const getLevelWidth = (level: number) => `${(level / 5) * 100}%`;
  const getLevelColor = (level: number) => {
    if (level >= 5) return 'bg-gradient-to-r from-primary-500 to-accent-500';
    if (level >= 4) return 'bg-primary-500';
    if (level >= 3) return 'bg-primary-400';
    return 'bg-primary-300';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical skillset spans frontend development, testing, DevOps, and modern AI tools
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(skillCategories).map(([key, label], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCategory === key
                    ? 'ring-2 ring-primary-500 shadow-2xl scale-105'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedCategory(key)}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{label}</h3>
                  <div className="text-3xl font-bold gradient-text">{categoryCounts[key]}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Skills</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Selected Category Label */}
        {selectedCategory && (
          <div className="mb-6 text-center">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium">
              {skillCategories[selectedCategory as keyof typeof skillCategories]}
            </span>
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 uppercase">
                    {skill.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full ${getLevelColor(skill.level)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: getLevelWidth(skill.level) }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Level Indicator */}
                <div className="flex justify-between items-center mt-1">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-2 rounded-full ${
                          level <= skill.level
                            ? 'bg-primary-500'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {skill.level === 5 ? 'Expert' : skill.level === 4 ? 'Advanced' : skill.level === 3 ? 'Intermediate' : 'Beginner'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
