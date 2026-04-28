"use client";

import React from 'react';
import Magnetic from './Magnetic';

const SocialIcon = ({ path }: { path: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-5 h-5"
  >
    <path d={path} />
  </svg>
);

const Footer = () => {
  const socials = [
    { 
      name: "GitHub", 
      href: "#", 
      path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" 
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" 
    },
    { 
      name: "Twitter", 
      href: "#", 
      path: "M4 4l11.733 16h4.267l-11.733 -16z" 
    },
    { 
      name: "Email", 
      href: "mailto:rabbani@developer.com", 
      path: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7 M2 7v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7" 
    },
  ];

  return (
    <footer className="relative w-full border-t border-white/5 bg-surface-container-low py-12 md:py-20 mt-20">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase font-headline-lg">G. Rabbani</h2>
            <p className="text-sm text-on-surface-variant max-w-xs">
              Designing and developing futuristic digital experiences with performance and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {socials.map((social) => (
                <Magnetic key={social.name}>
                  <a 
                    href={social.href}
                    className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all shadow-xl"
                    aria-label={social.name}
                  >
                    <SocialIcon path={social.path} />
                  </a>
                </Magnetic>
              ))}
            </div>
            <p className="text-xs text-on-surface-variant tracking-widest uppercase">
              © {new Date().getFullYear()} G. Rabbani. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
