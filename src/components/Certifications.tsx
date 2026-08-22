'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio.config';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-white py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 bottom-0 w-[400px] h-[300px] bg-ice-100/25 dark:bg-ice-900/10 blur-3xl"/>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.22em] text-ice-500 dark:text-ice-400 mb-4">
          07 · Credentials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] mb-12">
          Certifications
        </motion.h2>

        <div className="max-w-2xl flex flex-col">
          {portfolioConfig.certifications.map((cert, idx) => {
            const parts = cert.split('–');
            const title = parts[0]?.trim() || cert;
            const org   = parts[1]?.trim() || 'Professional';
            return (
              <motion.div key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex items-center justify-between gap-4 py-5 border-b border-[rgba(180,210,230,.4)] dark:border-slate-800 group">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-[#F2F8FD] dark:bg-slate-900 border border-[rgba(180,210,230,.5)] dark:border-slate-800 text-ice-500 shrink-0 shadow-ice-sm">
                    <Award size={16} strokeWidth={1.75}/>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-gray-900 dark:text-slate-100">{title}</p>
                    <p className="text-[12px] text-slate-400 font-medium mt-0.5">{org}</p>
                  </div>
                </div>
                <span className="shrink-0 text-[11px] font-extrabold text-emerald-500 uppercase tracking-wider">
                  Verified ✓
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
