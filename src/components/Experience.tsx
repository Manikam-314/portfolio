'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio.config';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

function NodeIcon({ type }: { type: string }) {
  if (type === 'experience')
    return <Briefcase size={15} className="text-ice-500"/>;
  if (type === 'education')
    return <GraduationCap size={15} className="text-emerald-500"/>;
  return <Trophy size={15} className="text-amber-500"/>;
}

export default function Experience() {
  return (
    <section id="experience" className="section-white py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-20 w-[400px] h-[400px] rounded-full bg-ice-100/30 dark:bg-ice-900/10 blur-3xl"/>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.22em] text-ice-500 dark:text-ice-400 mb-4">
          05 · Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl sm:text-[48px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] mb-16">
          Experience & Education
        </motion.h2>

        <div className="max-w-2xl flex flex-col">
          {portfolioConfig.experience.map((item, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex items-start gap-8 group">
              {/* Vertical connector */}
              {idx < portfolioConfig.experience.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[rgba(180,210,230,.6)] dark:bg-slate-800"/>
              )}
              {/* Icon node */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.6)] dark:border-slate-800 shadow-ice-sm flex items-center justify-center z-10">
                <NodeIcon type={item.type}/>
              </div>
              {/* Content */}
              <div className={`${idx < portfolioConfig.experience.length - 1 ? 'pb-14' : 'pb-0'}`}>
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-400 mb-2">{item.period}</p>
                <h3 className="text-[18px] font-extrabold tracking-tight text-gray-950 dark:text-white mb-1">{item.role}</h3>
                <p className="text-[14px] font-bold text-ice-500 dark:text-ice-400 mb-4">{item.company}</p>
                <ul className="flex flex-col gap-2">
                  {item.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-ice-300 dark:bg-ice-700 shrink-0 mt-2.5"/>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
