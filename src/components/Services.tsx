"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building reactive, high-conversion interfaces using React, Next.js, and sophisticated CSS frameworks for mobile-first experiences.",
      icon: "layers",
      color: "text-primary",
      bgColor: "bg-primary-container/20",
      features: ["SPA & SSR Applications", "Interactive Animations", "Responsive UI/UX Design"]
    },
    {
      title: "Backend Systems",
      description: "Developing robust server-side logic and database schemas using Node.js, Express, and microservices architecture.",
      icon: "dns",
      color: "text-secondary",
      bgColor: "bg-secondary-container/20",
      features: ["RESTful & GraphQL APIs", "Database Optimization", "Auth & Security Protocols"]
    },
    {
      title: "Full-stack Solutions",
      description: "End-to-end product development from initial concept and prototyping to final deployment and maintenance.",
      icon: "hub",
      color: "text-tertiary",
      bgColor: "bg-tertiary-container/20",
      features: ["SaaS Platform Development", "MVP Implementation", "Cloud Infrastructure"],
      highlight: true
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-low/50 relative" id="services">
      <div className="max-w-container-max mx-auto px-gutter text-center space-y-stack-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-headline-lg text-white">Specialized <span className="text-secondary">Services</span></h2>
          <p className="text-body-lg text-on-surface-variant">Tailored technology solutions built for modern business requirements.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass-panel p-10 rounded-2xl text-left group transition-all duration-300 ${service.highlight ? 'border-primary/30' : ''}`}
            >
              <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                <span className={`material-symbols-outlined text-3xl ${service.color}`}>{service.icon}</span>
              </div>
              <h3 className="text-headline-md text-white mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-on-surface">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${service.color} text-sm`}>check_circle</span> 
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
