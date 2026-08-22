'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const patterns = [
  {
    id: 'saga',
    title: 'Distributed Saga',
    subtitle: 'Cross-service transaction coordination',
    description: 'Each Saga step publishes a domain event. On downstream failure, compensating events roll back every prior step — ensuring consistency without Two-Phase Commit overhead.',
    outcome: 'Zero data drift across services under partial failures',
    diagram: (
      <svg className="w-full" viewBox="0 0 500 200" fill="none">
        {['Order Svc','Payment Svc','Wallet Svc'].map((label, i) => (
          <React.Fragment key={label}>
            <rect x={10 + i*155} y="70" width="140" height="38" rx="10" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5"/>
            <text x={80 + i*155} y="93" fill="#1D4ED8" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
            {i < 2 && <path d={`M${150+i*155},89 L${160+i*155},89`} stroke="#93C5FD" strokeWidth="1.5" markerEnd="url(#arr)"/>}
          </React.Fragment>
        ))}
        <rect x="165" y="140" width="140" height="32" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5"/>
        <text x="235" y="158" fill="#DC2626" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">✕ Failure → Compensate</text>
        <line x1="235" y1="108" x2="235" y2="140" stroke="#FCA5A5" strokeWidth="1.5" strokeDasharray="4 3"/>
        <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto"><path d="M0,0 L4,2 L0,4" fill="#93C5FD"/></marker></defs>
      </svg>
    ),
  },
  {
    id: 'outbox',
    title: 'Transactional Outbox',
    subtitle: 'Reliable event delivery without dual-write',
    description: 'Messages are inserted into an Outbox table in the same DB transaction as domain data. An async relay polls and publishes to Kafka — guaranteeing at-least-once delivery even through crashes.',
    outcome: 'Safe Kafka publishing even during mid-transaction server crashes',
    diagram: (
      <svg className="w-full" viewBox="0 0 500 160" fill="none">
        <rect x="10" y="55" width="150" height="56" rx="10" fill="#F8FAFF" stroke="#E2E8F0" strokeWidth="1.5"/>
        <text x="85" y="76" fill="#475569" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Single DB Transaction</text>
        <text x="85" y="92" fill="#94A3B8" fontSize="8" fontFamily="mono" textAnchor="middle">INSERT domain_record</text>
        <text x="85" y="104" fill="#94A3B8" fontSize="8" fontFamily="mono" textAnchor="middle">INSERT outbox_events</text>
        <path d="M160,83 C195,60 215,60 240,83" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
        <text x="200" y="55" fill="#94A3B8" fontSize="8" fontFamily="mono" textAnchor="middle">async relay</text>
        <rect x="240" y="55" width="120" height="56" rx="10" fill="#FAF5FF" stroke="#C4B5FD" strokeWidth="1.5"/>
        <text x="300" y="84" fill="#7E22CE" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Kafka Broker</text>
        <text x="300" y="99" fill="#A855F7" fontSize="9" fontFamily="mono" textAnchor="middle">at-least-once ✓</text>
        <line x1="360" y1="83" x2="400" y2="83" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3"/>
        <rect x="400" y="60" width="80" height="46" rx="8" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1.5"/>
        <text x="440" y="84" fill="#065F46" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Consumer</text>
        <text x="440" y="98" fill="#059669" fontSize="8" fontFamily="mono" textAnchor="middle">idempotent</text>
      </svg>
    ),
  },
  {
    id: 'lock',
    title: 'Distributed Locking',
    subtitle: 'Race prevention under concurrency',
    description: 'Redis SETNX acquires a lock on a resource key (e.g. seat:42) with a TTL. Only one request succeeds; all others are immediately rejected. Auto-expires to prevent deadlocks.',
    outcome: 'Zero double-bookings under 10,000+ concurrent users',
    diagram: (
      <svg className="w-full" viewBox="0 0 500 180" fill="none">
        {[
          { label: 'User A (Seat 42)', y: 60, c: '#065F46', bc: '#6EE7B7', bg: '#ECFDF5', result: '✓ LOCK ACQUIRED', rc: '#059669' },
          { label: 'User B (Seat 42)', y: 120, c: '#9F1239', bc: '#FCA5A5', bg: '#FEF2F2', result: '✕ REJECTED', rc: '#DC2626' },
        ].map(u => (
          <React.Fragment key={u.label}>
            <rect x="10" y={u.y} width="160" height="32" rx="8" fill={u.bg} stroke={u.bc} strokeWidth="1.5"/>
            <text x="90" y={u.y+20} fill={u.c} fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{u.label}</text>
            <line x1="170" y1={u.y+16} x2="235" y2="108" stroke={u.bc} strokeWidth="1.5" strokeDasharray="4 3"/>
          </React.Fragment>
        ))}
        <rect x="235" y="72" width="160" height="48" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5"/>
        <text x="315" y="93" fill="#DC2626" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Redis Lock (TTL 5m)</text>
        <text x="315" y="107" fill="#EF4444" fontSize="8" fontFamily="mono" textAnchor="middle">SETNX seat:42:lock</text>
        <text x="420" y="80" fill="#059669" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700">✓ A locks</text>
        <text x="420" y="120" fill="#DC2626" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700">✕ B blocked</text>
      </svg>
    ),
  },
  {
    id: 'kafka',
    title: 'Kafka Partition Strategy',
    subtitle: 'Ordered, scalable event streaming',
    description: 'Using wallet ID as the Kafka partition key ensures sequential processing per entity. Consumer groups scale horizontally while maintaining strict ordering within each partition.',
    outcome: '3×–5× throughput improvement via async decoupling',
    diagram: (
      <svg className="w-full" viewBox="0 0 500 180" fill="none">
        <rect x="10" y="70" width="120" height="40" rx="10" fill="#F8FAFF" stroke="#E2E8F0" strokeWidth="1.5"/>
        <text x="70" y="88" fill="#475569" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Producer</text>
        <text x="70" y="103" fill="#94A3B8" fontSize="8" fontFamily="mono" textAnchor="middle">key=wallet_id</text>
        <line x1="130" y1="90" x2="185" y2="90" stroke="#C4B5FD" strokeWidth="1.5" strokeDasharray="4 3"/>
        <rect x="185" y="40" width="130" height="100" rx="10" fill="#FAF5FF" stroke="#C4B5FD" strokeWidth="1.5"/>
        <text x="250" y="62" fill="#7E22CE" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Kafka Topic</text>
        {[0,1,2].map(n => (
          <React.Fragment key={n}>
            <rect x="200" y={75+n*22} width="100" height="16" rx="5" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1"/>
            <text x="250" y={87+n*22} fill="#5B21B6" fontSize="8" fontFamily="mono" textAnchor="middle">Partition {n}</text>
          </React.Fragment>
        ))}
        <line x1="315" y1="90" x2="365" y2="90" stroke="#C4B5FD" strokeWidth="1.5" strokeDasharray="4 3"/>
        <rect x="365" y="70" width="120" height="40" rx="10" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1.5"/>
        <text x="425" y="88" fill="#065F46" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Consumers</text>
        <text x="425" y="103" fill="#059669" fontSize="8" fontFamily="mono" textAnchor="middle">Sequential ✓</text>
      </svg>
    ),
  },
];

export default function SystemDesign() {
  const [active, setActive] = useState('saga');
  const sel = patterns.find(p => p.id === active)!;

  return (
    <section id="architecture" className="section-ice py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-ice-200/25 to-transparent blur-3xl"/>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.22em] text-ice-500 dark:text-ice-400 mb-4">
          04 · Distributed Architecture
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl sm:text-[48px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] mb-16">
          System Design Patterns
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Pills */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 flex-wrap">
            {patterns.map(p => (
              <button key={p.id} onClick={() => setActive(p.id)}
                className={`text-left px-5 py-4 rounded-card border transition-all ${
                  active === p.id
                    ? 'bg-white dark:bg-slate-900 border-[rgba(180,210,230,.6)] dark:border-slate-700 shadow-ice-md'
                    : 'bg-transparent border-transparent hover:border-[rgba(180,210,230,.4)] dark:hover:border-slate-800'
                }`}>
                <p className={`text-[14px] font-bold tracking-tight mb-0.5 ${active === p.id ? 'text-gray-950 dark:text-white' : 'text-slate-500 dark:text-slate-500'}`}>{p.title}</p>
                <p className="text-[11px] text-slate-400">{p.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div key={sel.id}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="bg-white dark:bg-slate-900 rounded-card border border-[rgba(180,210,230,.4)] dark:border-slate-800 shadow-ice-md overflow-hidden">
                <div className="p-8 sm:p-10 border-b border-[rgba(180,210,230,.35)] dark:border-slate-800">
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-950 dark:text-white mb-3">{sel.title}</h3>
                  <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{sel.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice-50 dark:bg-ice-900/20 border border-ice-200/60 dark:border-ice-700/30 text-ice-600 dark:text-ice-300 text-[12px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-ice-500"/>
                    {sel.outcome}
                  </div>
                </div>
                <div className="p-8 sm:p-10 bg-[#F2F8FD]/50 dark:bg-slate-800/30">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-400 mb-5">Flow Diagram</p>
                  {sel.diagram}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
