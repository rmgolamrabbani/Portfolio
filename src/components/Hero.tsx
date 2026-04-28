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
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
      })
      .from(".profile-img", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
      }, "-=1");

      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
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
            <span className="reveal-item block text-primary font-label-sm tracking-widest uppercase">MERN Stack Specialist</span>
          </div>
          <div className="overflow-hidden">
            <h1 className="reveal-item text-display-xl text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">G. Rabbani</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="reveal-item text-body-lg text-on-surface-variant max-w-lg">
              Crafting high-performance full-stack applications with architectural precision and futuristic user experiences.
            </p>
          </div>
          <div className="reveal-item flex gap-stack-md pt-4">
            <Magnetic>
              <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold py-4 px-8 rounded-lg shadow-[0px_10px_30px_rgba(59,130,246,0.3)] active:scale-95 transition-all">
                Explore Portfolio
              </button>
            </Magnetic>
            <Magnetic>
              <button className="glass-panel text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 active:scale-95 transition-all">
                View Resume
              </button>
            </Magnetic>
          </div>
        </div>
        
        {/* Profile & Orbiting Icons */}
        <div className="relative flex justify-center items-center">
          <div className="profile-img relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary/30 to-secondary/30">
            <div className="absolute inset-0 rounded-full glow-ring animate-[spin_10s_linear_infinite]" />
            <img 
              alt="G. Rabbani" 
              className="w-full h-full object-cover rounded-full border-4 border-surface relative z-10" 
              src="https://media.licdn.com/dms/image/v2/D4E03AQHwAC41UzTlxQ/profile-displayphoto-scale_400_400/B4EZ1RcS4GJIAg-/0/1775187871313?e=1778716800&v=beta&t=-xNPc1YuXyn38D6jGw3U3QLCHknGI03mEALytUoiGVs"
            />
          </div>
          
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
