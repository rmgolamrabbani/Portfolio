"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'React / Next.js', value: '95%' },
    { name: 'Node.js / Express', value: '90%' },
    { name: 'MongoDB / SQL', value: '85%' },
    { name: 'AWS / DevOps', value: '80%' },
  ];

  return (
    <section className="py-section-gap relative overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-stack-md"
          >
            <h2 className="text-headline-lg text-white">The Engineer Behind the <span className="text-primary">Stack</span></h2>
            <p className="text-body-lg text-on-surface-variant">
              With over 5 years of experience in building scalable web applications, I specialize in the MERN stack. My approach combines robust backend architecture with pixel-perfect frontend execution.
            </p>
            <div className="grid grid-cols-2 gap-stack-lg pt-8">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.value}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'speed', title: 'Performance', desc: 'Optimizing for speed and core web vitals.', color: 'text-primary' },
              { icon: 'security', title: 'Security', desc: 'Implementing enterprise-grade security protocols.', color: 'text-secondary', offset: true },
              { icon: 'grid_view', title: 'Scalability', desc: 'Systems designed to grow with your user base.', color: 'text-tertiary' },
              { icon: 'architecture', title: 'Architecture', desc: 'Clean code and design patterns for longevity.', color: 'text-primary-fixed', offset: true },
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-panel p-8 rounded-xl space-y-4 hover:border-primary/50 transition-all ${item.offset ? 'md:mt-8' : ''}`}
              >
                <span className={`material-symbols-outlined text-4xl ${item.color}`}>{item.icon}</span>
                <h4 className="text-white font-bold">{item.title}</h4>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
