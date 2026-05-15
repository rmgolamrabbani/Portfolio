"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      window.location.reload();
    }, 2000);
  };

  return (
    <section className="py-section-gap relative" id="contact">
      <div className="max-w-container-max mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          <div className="p-12 md:p-20 bg-primary/5 border-r border-white/5 space-y-stack-lg">
            <h2 className="text-headline-lg text-white">Let's <span className="text-primary">Connect</span></h2>
            <p className="text-body-lg text-on-surface-variant">Ready to start your next high-tech project? Fill out the form or reach out directly via my social channels.</p>

            <div className="space-y-8 pt-8">
              {[
                { icon: 'mail', label: 'Email me', value: 'rmgolamrabbany@gmail.com', color: 'text-primary' },
                { icon: 'location_on', label: 'Location', value: 'Rajshahi.Bangladesh', color: 'text-secondary' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className={`material-symbols-outlined text-2xl ${item.color}`}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">{item.label}</p>
                    <p className="text-white font-bold text-lg">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-12">
              {['code', 'share', 'link'].map((icon) => (
                <Magnetic key={icon}>
                  <button className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-xl">{icon}</span>
                  </button>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="p-12 md:p-20 bg-slate-950/20">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                { label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
              ].map((field) => (
                <div key={field.label} className="space-y-3">
                  <label className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">{field.label}</label>
                  <input
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </div>
              ))}
              <div className="space-y-3">
                <label className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                  placeholder="Describe your project..."
                  rows={4}
                ></textarea>
              </div>
              <Magnetic>
                <button type="submit" className="w-full  bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-on-primary font-bold py-5 rounded-2xl shadow-xl hover:shadow-primary/20 transition-all">
                  Send Message
                </button>
              </Magnetic>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Toast Message */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]"
          >
            <div className="bg-primary text-on-primary px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 backdrop-blur-xl">
              <span className="material-symbols-outlined">check_circle</span>
              <span className="font-bold">Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
