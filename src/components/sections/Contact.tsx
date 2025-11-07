import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: PERSONAL_INFO.email,
      link: `mailto:${PERSONAL_INFO.email}`,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      value: PERSONAL_INFO.phone,
      link: `tel:${PERSONAL_INFO.phone}`,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Location',
      value: PERSONAL_INFO.location,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.linkedin,
      icon: <FaLinkedin className="text-3xl" />,
      gradient: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    },
    {
      name: 'GitHub',
      url: PERSONAL_INFO.github,
      icon: <FaGithub className="text-3xl" />,
      gradient: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black',
    },
    {
      name: 'Instagram',
      url: PERSONAL_INFO.instagram,
      icon: <FaInstagram className="text-3xl" />,
      gradient: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
    },
    {
      name: 'X (Twitter)',
      url: PERSONAL_INFO.twitter,
      icon: <FaTwitter className="text-3xl" />,
      gradient: 'from-sky-500 to-blue-600',
      hoverColor: 'hover:from-sky-600 hover:to-blue-700',
    },
    {
      name: 'Email',
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: <FaEnvelope className="text-3xl" />,
      gradient: 'from-red-500 to-orange-500',
      hoverColor: 'hover:from-red-600 hover:to-orange-600',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your next project or opportunity. I'm always open to new challenges!
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                {info.link ? (
                  <a href={info.link} className="block">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-center relative overflow-hidden">
                      {/* Gradient hover effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />

                      {/* Icon */}
                      <div className="relative mb-4">
                        <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-md transition-all duration-200`}>
                          {info.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-center relative overflow-hidden">
                    {/* Gradient hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />

                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-md transition-all duration-200`}>
                        {info.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${social.gradient} ${social.hoverColor} text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200`}
                >
                  {social.icon}
                  <span className="font-semibold">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
