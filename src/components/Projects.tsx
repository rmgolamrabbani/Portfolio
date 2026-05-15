"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "QurbaniHat",
      description: "A digital marketplace for Qurbani animals, featuring healthy livestock with verified records and transparent pricing.",
      image: "/projects/qurbanhat.png",
      tags: ["React", "Tailwind"],
      primaryTag: "React",
      secondaryTag: "Tailwind",
      demoLink: "https://assignment-08-flame.vercel.app/",
      codeLink: "https://github.com/rmgolamrabbani/assignment-08"
    },
    {
      title: "KeenKeeper",
      description: "A personal relationship management tool designed to track and nurture meaningful connections with interaction tracking.",
      image: "/projects/keenkeeper.png",
      tags: ["React", "Tailwind"],
      primaryTag: "React",
      secondaryTag: "Tailwind",
      demoLink: "https://assignment-07-4iec.vercel.app/",
      codeLink: "https://github.com/rmgolamrabbani/Assignment-07"
    },
    {
      title: "DigiTools",
      description: "An all-in-one platform for premium AI tools, design assets, and templates for designers and developers.",
      image: "/projects/digitools.png",
      tags: ["React", "Vite"],
      primaryTag: "React",
      secondaryTag: "Vite",
      demoLink: "https://assignment-06-wawh.vercel.app/",
      codeLink: "https://github.com/rmgolamrabbani/Assignment-06"
    },
    {
      title: "Bruce's Attire",
      description: "A handcrafted fashion e-commerce platform focusing on unique clothing designs and premium shopping experience.",
      image: "/projects/brucesattire.png",
      tags: ["React", "Tailwind"],
      primaryTag: "React",
      secondaryTag: "Tailwind",
      demoLink: "https://fashion-e-commerce-rho.vercel.app/",
      codeLink: "https://github.com/rmgolamrabbani/Fashion-e-commerce"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="py-section-gap relative" id="projects">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end gap-stack-md mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl space-y-4"
          >
            <h2 className="text-headline-lg text-white">Featured <span className="text-primary">Creations</span></h2>
            <p className="text-body-lg text-on-surface-variant">A curated selection of complex systems and user-centric digital products.</p>
          </motion.div>
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ x: 10 }}
            className="text-primary font-bold flex items-center gap-2 transition-transform"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
            <span className={`material-symbols-outlined transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              arrow_forward
            </span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: showAll ? 0 : index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl glass-panel aspect-[4/3]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <span className="text-[10px] uppercase tracking-widest bg-primary/20 text-primary px-3 py-1 rounded-full font-bold backdrop-blur-md">{project.primaryTag}</span>
                      <span className="text-[10px] uppercase tracking-widest bg-secondary/20 text-secondary px-3 py-1 rounded-full font-bold backdrop-blur-md">{project.secondaryTag}</span>
                    </div>
                    <h3 className="text-headline-md text-white">{project.title}</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                    <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1  bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-on-primary py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-all text-center"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

