'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'Distributed Systems',
    desc: 'Event-driven microservices with Kafka, Saga pattern, and Outbox — designed for zero data drift at scale.',
    color: 'text-ice-500',
    bg: 'bg-ice-100/60 dark:bg-ice-900/20',
  },
  {
    icon: Zap,
    title: 'Performance Engineering',
    desc: 'Redis caching at 95%+ hit rates, Elasticsearch offloading 90% of heavy queries, <100ms API latency.',
    color: 'text-amber-500',
    bg: 'bg-amber-50/60 dark:bg-amber-900/10',
  },
  {
    icon: Shield,
    title: 'Production Reliability',
    desc: 'Concurrency-safe design with distributed locking, idempotent consumers, and OpenTelemetry observability.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50/60 dark:bg-emerald-900/10',
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-white py-16 sm:py-28 overflow-hidden">
      {/* Soft top curve from hero */}
      <div className="pointer-events-none absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full text-[#F8FCFF] dark:text-[#06080F]">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,0 L0,0 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Background blur circle */}
      <div className="pointer-events-none absolute right-0 top-20 w-[500px] h-[500px] rounded-full bg-ice-100/40 dark:bg-ice-900/10 blur-3xl"/>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.22em] text-ice-500 dark:text-ice-400 mb-4">
          01 · About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left text */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl min-[400px]:text-3xl sm:text-[48px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] mb-6 sm:mb-8">
              Building systems that handle the hard parts
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4 text-[15px] sm:text-[17px] text-slate-500 dark:text-slate-400 leading-relaxed">
              <p>
                I&apos;m a <span className="text-gray-900 dark:text-white font-semibold">Java Backend &amp; Full Stack Engineer</span> graduating in 2026, with deep experience building distributed systems that remain consistent, fast, and observable under concurrent production load.
              </p>
              <p>
                I don&apos;t just write code that works — I design architectures that handle failures gracefully, scale horizontally, and give operations teams full visibility through structured tracing.
              </p>
            </motion.div>
          </div>

          {/* Right stats grid */}
          <div className="lg:col-span-6 grid grid-cols-1 min-[400px]:grid-cols-2 gap-4 sm:gap-5">
            {[
              { value: '3+',    label: 'Production Projects',     sub: 'End-to-end systems' },
              { value: '5×',    label: 'Throughput Improvement',  sub: 'via async Kafka pipelines' },
              { value: '95%',   label: 'Redis Cache Hit Rate',    sub: 'in seat booking system' },
              { value: '200+',  label: 'LeetCode Problems',       sub: 'across DSA topics' },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#F2F8FD] dark:bg-slate-900 rounded-card p-4 sm:p-6 border border-[rgba(180,210,230,.4)] dark:border-slate-800 shadow-ice-sm hover:shadow-ice-md hover:-translate-y-0.5 transition-all">
                <p className="text-2xl sm:text-3xl font-extrabold text-ice-500 dark:text-ice-400 tracking-tight mb-1">{s.value}</p>
                <p className="text-[13px] font-bold text-gray-800 dark:text-slate-200 mb-0.5">{s.label}</p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillar cards */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-card p-6 sm:p-7 border border-[rgba(180,210,230,.35)] dark:border-slate-800 shadow-ice-sm hover:shadow-ice-md hover:-translate-y-1 transition-all">
                <div className={`inline-flex p-3 rounded-2xl ${p.bg} mb-4 sm:mb-5`}>
                  <Icon size={20} className={p.color} strokeWidth={1.75}/>
                </div>
                <h3 className="text-[16px] font-bold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
