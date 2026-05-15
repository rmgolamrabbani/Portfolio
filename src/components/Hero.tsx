"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.from(".reveal-item", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
      }).from(
        ".profile-img",
        {
          scale: 0.7,
          opacity: 0,
          duration: 1.6,
          ease: "elastic.out(1,0.5)",
        },
        "-=1"
      );

      gsap.to(".floating-element", {
        y: -25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-15"
    >
      <HeroBackground />

      {/* Gradient Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="overflow-hidden">
            <span className="reveal-item inline-block text-sm tracking-[0.35em] uppercase text-blue-400 font-semibold pt-5">
              MERN Stack Developer
            </span>
          </div>

          <div>
            <div className="overflow-hidden">
              <h1 className="reveal-item text-4xl md:text-6xl font-black text-white leading-tight">
                Hi, I'm
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="reveal-item text-5xl md:text-8xl font-black leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient-x">
                  G. Rabbani
                </span>
              </h1>
            </div>
          </div>

          <div className="overflow-hidden">
            <p className="reveal-item text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Engineering modern full-stack web applications with
              <span className="text-white font-semibold">
                {" "}
                futuristic UI
              </span>{" "}
              and scalable backend architecture.
            </p>
          </div>

          {/* Buttons */}
          <div className="reveal-item flex flex-col sm:flex-row gap-5 pt-4">
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-500 px-8 py-4 font-bold text-white shadow-[0_10px_40px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">
                  Explore Portfolio
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                View Resume
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="profile-img relative w-80 h-80 md:w-[430px] md:h-[430px]"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-30 animate-pulse" />

            {/* Border */}
            <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-300">
              <div className="w-full h-full rounded-full bg-slate-950" />
            </div>

            {/* Image */}
            <img
              src="/gr.jpeg"
              alt="G. Rabbani"
              className="relative z-10 w-full h-full rounded-full object-cover border border-white/10 shadow-2xl"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-sm font-medium shadow-xl">
              Full Stack Developer
            </div>
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="floating-element absolute top-5 right-10 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-cyan-300 shadow-xl">
              <span className="material-symbols-outlined text-3xl">
                terminal
              </span>
            </div>

            <div className="floating-element absolute bottom-10 left-0 w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-blue-400 shadow-xl">
              <span className="material-symbols-outlined text-4xl">
                database
              </span>
            </div>

            <div className="floating-element absolute top-1/2 -left-10 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-yellow-300 shadow-xl">
              <span className="material-symbols-outlined text-2xl">
                code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;