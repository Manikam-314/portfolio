'use client';
import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  'Arrays & Hashing','Two Pointers','Sliding Window','Binary Search',
  'Linked Lists','Trees & Graphs','Dynamic Programming','Backtracking',
  'Heap / Priority Queue','Intervals','Greedy',
];

export default function LeetCode() {
  return (
    <section id="leetcode" className="section-ice py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[400px] bg-gradient-to-bl from-ice-200/25 to-transparent blur-3xl"/>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.22em] text-ice-500 dark:text-ice-400 mb-4">
          06 · Algorithmic Depth
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl sm:text-[48px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] mb-16">
          Competitive Programming
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Progress card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-card border border-[rgba(180,210,230,.4)] dark:border-slate-800 shadow-ice-md p-10 flex flex-col items-center text-center">

            {/* Ring */}
            <div className="relative w-44 h-44 mb-8">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#DDF4FF" strokeWidth="8" className="dark:stroke-slate-800"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#blueGrad)" strokeWidth="8"
                  strokeLinecap="round" strokeDasharray="314.16" strokeDashoffset="94"/>
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4DA6FF"/>
                    <stop offset="100%" stopColor="#0A84FF"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-gray-950 dark:text-white">200+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Solved</span>
              </div>
            </div>

            {/* Difficulty split */}
            <div className="grid grid-cols-3 gap-4 w-full border-t border-[rgba(180,210,230,.4)] dark:border-slate-800 pt-6">
              {[
                { label:'Easy',   value:'80+',  color:'text-emerald-500' },
                { label:'Medium', value:'100+', color:'text-amber-500' },
                { label:'Hard',   value:'20+',  color:'text-rose-500' },
              ].map(d => (
                <div key={d.label}>
                  <p className={`text-xl font-extrabold ${d.color}`}>{d.value}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">{d.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text + chips */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-extrabold text-gray-950 dark:text-white mb-4 tracking-tight">
                Algorithms → Production Engineering
              </h3>
              <div className="flex flex-col gap-4 text-[17px] text-slate-500 dark:text-slate-400 leading-relaxed">
                <p>My daily LeetCode practice directly informs how I design backend services — choosing O(1) hash lookups vs. O(N) scans, picking sorted sets for leaderboards and rate limiters, and writing thread-safe Java code that avoids GC pressure.</p>
                <p>The discipline of finding optimal solutions under constraints translates perfectly to performance budgeting, cache strategy, and query optimization in real distributed systems.</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-400 mb-4">Core Focus Areas</p>
              <div className="flex flex-wrap gap-2.5">
                {topics.map(t => (
                  <span key={t}
                    className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.5)] dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-ice-400 hover:text-ice-500 dark:hover:border-ice-600 dark:hover:text-ice-400 cursor-default transition-colors shadow-ice-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
