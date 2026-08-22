'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Zap, Network, Cloud, BarChart3, Layers } from 'lucide-react';

const cats = [
  { icon: Code2,     title: 'Languages',              tech: ['Java', 'TypeScript', 'JavaScript', 'SQL'],                                             color: 'text-ice-500', bg: 'bg-ice-50 dark:bg-ice-900/20' },
  { icon: Server,    title: 'Backend & APIs',          tech: ['Spring Boot', 'Spring Security', 'REST', 'JWT', 'WebSocket', 'Hibernate'],            color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/10' },
  { icon: Database,  title: 'Databases',               tech: ['PostgreSQL', 'MySQL', 'MongoDB'],                                                     color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/10' },
  { icon: Zap,       title: 'Caching & Search',        tech: ['Redis', 'Elasticsearch'],                                                             color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/10' },
  { icon: Network,   title: 'Event Streaming',         tech: ['Apache Kafka', 'Outbox Pattern', 'Idempotent Consumers'],                             color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/10' },
  { icon: Layers,    title: 'Architecture',            tech: ['Microservices', 'API Gateway', 'Saga', 'Event-Driven'],                               color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-900/10' },
  { icon: Cloud,     title: 'Cloud & DevOps',          tech: ['AWS (EC2, S3, RDS, EKS)', 'Docker', 'Kubernetes', 'CI/CD'],                          color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/10' },
  { icon: BarChart3, title: 'Observability',           tech: ['Prometheus', 'Grafana', 'OpenTelemetry'],                                             color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/10' },
];

export default function TechStack() {
  return (
    <section id="skills" className="section-ice py-16 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-ice-200/30 to-transparent blur-3xl"/>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.22em] text-ice-500 dark:text-ice-400 mb-4">
          02 · Engineering Toolkit
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl min-[400px]:text-3xl sm:text-[48px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1]">
            My Production Stack
          </motion.h2>
          <p className="text-[14px] sm:text-[15px] text-slate-400 max-w-xs">Technologies I rely on to build resilient, scalable systems.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cats.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-900 rounded-card p-5 sm:p-6 border border-[rgba(180,210,230,.4)] dark:border-slate-800 shadow-ice-sm hover:shadow-ice-md transition-all cursor-default">
                <div className={`self-start inline-flex p-2.5 rounded-xl mb-4 sm:mb-5 ${cat.bg}`}>
                  <Icon size={20} className={cat.color} strokeWidth={1.75}/>
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tech.map(t => (
                    <span key={t}
                      className="px-2 py-0.5 text-[11px] font-semibold rounded-lg bg-[#F2F8FD] dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-[rgba(180,210,230,.5)] dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
