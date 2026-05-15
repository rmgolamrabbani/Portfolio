"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".reveal-item", {
        y: 120,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power4.out"
      })
        .from(".profile-img", {
          scale: 0.7,
          opacity: 0,
          duration: 1.8,
          ease: "elastic.out(1, 0.5)"
        }, "-=1.2");

      gsap.to(".floating-element", {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden" id="home">
      <HeroBackground />

      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
        <div className="space-y-stack-lg">
          <div className="overflow-hidden">
            <span className="reveal-item block text-primary font-label-sm tracking-[0.3em] uppercase mb-4">Engineer • Developer • Architect</span>
          </div>
          <div className="space-y-2">
            <div className="overflow-hidden">
              <h1 className="reveal-item text-display-lg text-white leading-none">
                Hi, I'm
              </h1>
            </div>
            <div className="overflow-hidden pb-2">
              <h1 className="reveal-item text-display-xl text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-flow">G. Rabbani</span>
              </h1>
            </div>
          </div>
          <div className="overflow-hidden">
            <p className="reveal-item text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Engineering high-performance full-stack applications with <span className="text-white font-medium">architectural precision</span> and futuristic user experiences.
            </p>
          </div>
          <div className="reveal-item flex gap-stack-md pt-4">
            <Magnetic>
              <a href="#projects">
                <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold py-4 px-8 rounded-lg shadow-[0px_10px_30px_rgba(59,130,246,0.3)] active:scale-95 transition-all w-full">
                  Explore Portfolio
                </button>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="glass-panel text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 active:scale-95 transition-all w-full">
                  View Resume
                </button>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Profile & Orbiting Icons */}
        <div className="relative flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="profile-img relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary/30 to-secondary/30 group"
          >
            <div className="absolute inset-0 rounded-full glow-ring animate-[spin_10s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity" />
            <img
              alt="G. Rabbani"
              className="w-full h-full object-cover rounded-full border-4 border-surface relative z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              src="/gr.jpeg"
            />
            {/* Ambient Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10 group-hover:bg-primary/40 transition-colors" />
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="floating-element absolute top-0 right-10 w-16 h-16 glass-panel rounded-full flex items-center justify-center text-primary"
            >
              <span className="material-symbols-outlined text-3xl">terminal</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="floating-element absolute bottom-10 left-0 w-20 h-20 glass-panel rounded-full flex items-center justify-center text-secondary"
            >
              <span className="material-symbols-outlined text-4xl">database</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="floating-element absolute top-1/2 -left-12 w-14 h-14 glass-panel rounded-full flex items-center justify-center text-tertiary-container"
            >
              <span className="material-symbols-outlined text-2xl">javascript</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
