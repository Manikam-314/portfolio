'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  'Backend Microservices & APIs (Java, Spring Boot, Spring Data JPA, Hibernate, REST APIs)',
  'Distributed Systems & Messaging (Apache Kafka, Saga Pattern, Transactional Outbox)',
  'High-Performance Caching & Concurrency (Redis Write-Through Caching, Redis SETNX Locks)',
  'Database Management (PostgreSQL, MySQL, MongoDB, Qdrant Vector DB)',
  'Security & Authentication (Spring Security, JWT, OAuth2, Role-Based Access Control)',
  'Frontend Development (React.js, Next.js, TypeScript, JavaScript, Tailwind CSS)',
  'Real-Time WebSockets & Audio Streaming (WebSocket Protocol, Web Speech API)',
  'Docker & Containerization (Docker, Kubernetes)',
  'CI/CD & Cloud Infrastructure (GitHub Actions, AWS EC2, S3, RDS)',
  'System Reliability & Observability (Prometheus, Grafana, OpenTelemetry Tracing)',
  'AI & LLM Integration (Spring AI, RAG Architecture, LangChain, LangGraph)',
  'Search Engine & Rate Limiting (Elasticsearch Indexing, Bucket4j Token Bucket)',
];

export default function About() {
  return (
    <section id="about" className="relative section-white py-16 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-10 w-[500px] h-[500px] rounded-full bg-ice-100/40 dark:bg-ice-900/10 blur-3xl" />

      <div className="max-w-[960px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.25em] text-ice-500 dark:text-ice-400 mb-4"
        >
          01 · ABOUT
        </motion.p>

        {/* Headline matching image 2 style */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-[52px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] mb-8"
        >
          Building scalable apps with{' '}
          <span className="font-serif italic font-normal text-ice-500 dark:text-ice-400">
            Java &amp; Full Stack
          </span>
        </motion.h2>

        {/* Intro Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4 text-[16px] sm:text-[18px] text-slate-600 dark:text-slate-300 leading-relaxed mb-10"
        >
          <p>
            I&apos;m a passionate{' '}
            <span className="text-gray-950 dark:text-white font-semibold">
              Java Backend &amp; Full Stack Engineer
            </span>{' '}
            focused on building modern, scalable, and resilient software applications using Java, Spring Boot, Microservices, React, Next.js, and Cloud technologies.
          </p>
          <p>
            As a fresher graduating in 2026, I continuously explore new technologies, enterprise architectural patterns, and apply my skills through real-world, production-grade projects.
          </p>
        </motion.div>

        {/* Thin Divider Line */}
        <div className="w-full border-t border-[rgba(180,210,230,.4)] dark:border-slate-800/80 mb-8 sm:mb-10" />

        {/* Clean Capability Arrow List matching Image 2 */}
        <div className="flex flex-col">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group py-4 sm:py-4.5 border-b border-[rgba(180,210,230,.3)] dark:border-slate-800/60 flex items-center gap-4 hover:pl-2 transition-all duration-200"
            >
              <ArrowRight
                size={16}
                className="text-slate-400 group-hover:text-ice-500 dark:group-hover:text-ice-400 transition-colors shrink-0"
              />
              <span className="text-[14px] sm:text-[16px] font-medium text-slate-700 dark:text-slate-300 group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                {cap}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
