"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Entrance Animation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.5
    });

    // Scroll Spy Logic
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav 
        ref={navRef} 
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-container-max rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-md flex justify-between items-center px-8 md:px-12 py-5 z-50 shadow-2xl"
      >
        <div className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase font-headline-lg">
          G. Rabbani
        </div>
        <div className="hidden lg:flex items-center gap-10 font-headline-lg font-medium tracking-tight">
          {navLinks.map((link) => (
            <Magnetic key={link.id}>
              <a 
                className={cn(
                  "text-slate-400 hover:text-white transition-colors relative group py-2",
                  activeSection === link.id && "text-primary font-bold"
                )} 
                href={`#${link.id}`}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  activeSection === link.id && "w-full"
                )} />
              </a>
            </Magnetic>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Magnetic>
            <button className="hidden md:block bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(173,198,255,0.3)]">
              Hire Me
            </button>
          </Magnetic>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white w-12 h-12 flex items-center justify-center rounded-xl glass-panel hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        links={navLinks}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
