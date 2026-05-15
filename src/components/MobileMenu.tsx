"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; id: string }[];
  activeSection: string;
}

const MobileMenu = ({ isOpen, onClose, links, activeSection }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-lg z-[60] lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-surface-container-highest border-l border-white/10 z-[70] lg:hidden p-12 flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white w-12 h-12 flex items-center justify-center rounded-full glass-panel hover:scale-110 transition-transform"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex flex-col gap-8 mt-16">
              <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Navigation</span>
              <div className="flex flex-col gap-6">
                {links.map((link, index) => (
                  <motion.a
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    href={`#${link.id}`}
                    onClick={onClose}
                    className={cn(
                      "text-3xl font-headline-lg transition-all",
                      activeSection === link.id ? "text-primary font-bold" : "text-white/60 hover:text-white"
                    )}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-auto space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Socials</span>
                <div className="flex gap-4">
                  {['code', 'share', 'link'].map((icon) => (
                    <div key={icon} className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-white/60 hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-xl">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="mailto:rmgolamrabbany@gmail.com" className="w-full">
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold shadow-xl">
                  Hire Me
                </button>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
