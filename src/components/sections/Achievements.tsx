import React from 'react';
import { FaTrophy, FaMedal, FaShieldAlt, FaRobot, FaRocket, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { achievements } from '../../data/achievements';

const iconMap: Record<string, React.ReactElement> = {
  FaTrophy: <FaTrophy />,
  FaMedal: <FaMedal />,
  FaShieldAlt: <FaShieldAlt />,
  FaRobot: <FaRobot />,
  FaRocket: <FaRocket />,
  FaUsers: <FaUsers />,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Awards, certifications, and milestones throughout my career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl">
                    {iconMap[achievement.icon]}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{achievement.description}</p>
                {achievement.date && (
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {achievement.date}
                  </span>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
