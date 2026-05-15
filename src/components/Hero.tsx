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
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        filter: "blur(12px)",
        duration: 1.2,
        stagger: 0.12,
      }).from(
        ".hero-image",
        {
          scale: 0.8,
          opacity: 0,
          rotate: -4,
          duration: 1.6,
          ease: "elastic.out(1,0.5)",
        },
        "-=1"
      );

      gsap.to(".floating-card", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random",
        },
      });

      gsap.to(".rotate-ring", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050507] flex items-center justify-center pt-30 sm:pt-28"
    >
      {/* Background */}
      <HeroBackground />

      {/* Mouse Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 w-[550px] h-[550px] bg-cyan-500/10 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Gradient Lights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050507] to-transparent" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <div className="hero-reveal inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="uppercase tracking-[0.3em] text-[11px] font-semibold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Available For Freelance
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <div className="overflow-hidden">
              <h2 className="hero-reveal text-2xl sm:text-3xl md:text-4xl text-zinc-400 font-light">
                Hi, I'm
              </h2>
            </div>

            <div className="overflow-hidden pb-3">
              <h1 className="hero-reveal text-[52px] sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 bg-[length:200%_auto] animate-gradient-flow drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                  G. Rabbani
                </span>
              </h1>
            </div>
          </div>

          {/* Branding Text */}
          <div className="overflow-hidden mt-5">
            <p className="hero-reveal text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Designing scalable digital products with modern technologies,
              immersive user experiences, and high-performance full-stack
              architecture.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-reveal flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            {/* Explore */}
            <Magnetic>
              <a href="#projects" className="w-full sm:w-auto group">
                <button
                  className="
                  relative overflow-hidden
                  w-full sm:w-auto
                  px-8 py-4
                  rounded-2xl
                  bg-gradient-to-r from-cyan-500 to-fuchsia-500
                  text-white
                  font-semibold
                  transition-all duration-500
                  hover:scale-[1.03]
                  hover:shadow-[0_0_70px_rgba(59,130,246,0.45)]
                "
                >
                  {/* Animated Beam */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-all duration-1000" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Portfolio
                    <span>→</span>
                  </span>
                </button>
              </a>
            </Magnetic>

            {/* Resume */}
            <Magnetic>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group"
              >
                <button
                  className="
                  relative overflow-hidden
                  w-full sm:w-auto
                  px-8 py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  text-zinc-200
                  hover:bg-white/10
                  hover:border-white/20
                  hover:text-white
                  transition-all duration-300
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
                "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/5 to-transparent transition-opacity duration-500" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">
                      description
                    </span>

                    View Resume
                  </span>
                </button>
              </a>
            </Magnetic>
          </div>

          {/* Experience Cards */}
          <div className="hero-reveal grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <h3 className="text-3xl font-bold text-white">1+</h3>

              <p className="text-zinc-400 text-sm mt-1">
                Years Experience
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <h3 className="text-3xl font-bold text-white">20+</h3>

              <p className="text-zinc-400 text-sm mt-1">
                Projects Built
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] col-span-2 sm:col-span-1">
              <h3 className="text-3xl font-bold text-white">100%</h3>

              <p className="text-zinc-400 text-sm mt-1">
                Responsive UI
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0">
          {/* Rotating Rings */}
          <div className="rotate-ring absolute w-[420px] h-[420px] rounded-full border border-cyan-500/10" />

          <div className="rotate-ring absolute w-[500px] h-[500px] rounded-full border border-fuchsia-500/10 reverse-spin" />

          {/* Main Image */}
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 1,
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="hero-image relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-fuchsia-500/20 to-indigo-500/30 blur-3xl rounded-[35px]" />

            {/* Border */}
            <div className="relative p-[2px] rounded-[35px] bg-gradient-to-tr from-cyan-500/50 via-white/10 to-fuchsia-500/50 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
              <div className="w-[260px] h-[330px] sm:w-[320px] sm:h-[420px] md:w-[390px] md:h-[500px] overflow-hidden rounded-[33px] bg-[#0F0F12] relative">
                <img
                  src="/gr.jpeg"
                  alt="G. Rabbani"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="floating-card absolute top-2 left-0 sm:left-2"
          >
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-5 py-4 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <span className="material-symbols-outlined text-2xl">
                    terminal
                  </span>
                </div>

                <div>
                  <h3 className="text-white text-sm font-semibold">
                    Clean Code
                  </h3>

                  <p className="text-zinc-400 text-xs">
                    Scalable Architecture
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="floating-card absolute bottom-4 right-0 sm:right-2"
          >
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-5 py-4 shadow-2xl shadow-fuchsia-500/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400">
                  <span className="material-symbols-outlined text-2xl">
                    database
                  </span>
                </div>

                <div>
                  <h3 className="text-white text-sm font-semibold">
                    Full Stack
                  </h3>

                  <p className="text-zinc-400 text-xs">
                    Modern Solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="floating-card absolute top-1/2 -right-2 sm:-right-6"
          >
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-5 py-4 text-center shadow-2xl shadow-amber-500/10">
              <h3 className="text-amber-400 text-2xl font-bold">
                JS
              </h3>

              <p className="text-zinc-400 text-[10px] tracking-[0.25em] uppercase mt-1">
                Expert
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;