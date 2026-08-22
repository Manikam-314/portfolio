'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio.config';
import { FileText, Github, Linkedin, Sparkles, Layers } from 'lucide-react';

/* ── Animated background blobs with smooth ice-blue motion ─────────── */
function Blobs() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
      {/* Dynamic drifting top-right ice-blue glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.12, 0.96, 1], 
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          opacity: [0.45, 0.7, 0.5, 0.45] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#0A84FF]/25 via-[#4DA6FF]/15 to-transparent blur-3xl"
      />
      {/* Mid-left floating ambient beam */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1], 
          x: [0, -30, 20, 0],
          y: [0, 25, -15, 0],
          opacity: [0.35, 0.6, 0.35] 
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 -left-24 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#0A84FF]/20 via-[#80CCFF]/10 to-transparent blur-3xl"
      />
      {/* Bottom-right smooth glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.65, 0.4]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#DDF4FF]/80 blur-3xl"
      />
      {/* Curved SVG wave at bottom */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
        <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" fill="white" fillOpacity="0.8"/>
      </svg>
    </div>
  );
}

/* ── 3D Motion Infinity Cube with Electric Thunder Lightning Effects ─────── */
function ThunderInfinityCube() {
  return (
    <div className="relative w-full aspect-square max-w-[360px] flex items-center justify-center select-none overflow-hidden mx-auto">
      
      {/* 1. Electric Thunder / Lightning SVG Background Aura */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 360" fill="none">
        <defs>
          <filter id="glow-thunder" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric Electric Energy Rings */}
        <circle cx="180" cy="180" r="140" stroke="rgba(10,132,255,0.15)" strokeWidth="1.5" strokeDasharray="8 6" />
        <circle cx="180" cy="180" r="105" stroke="rgba(77,166,255,0.25)" strokeWidth="1" strokeDasharray="5 5" />

        {/* Branching Electric Lightning Energy Bolts */}
        <motion.path
          d="M 180 180 L 130 50 L 100 80 L 45 25 M 180 180 L 265 70 L 240 105 L 325 40 M 180 180 L 285 255 L 255 275 L 320 330 M 180 180 L 75 245 L 105 265 L 35 315"
          stroke="#0A84FF"
          strokeWidth="1.8"
          filter="url(#glow-thunder)"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            opacity: [0.15, 1, 0.35, 0.95, 0.2, 0.9, 0.15],
            strokeDasharray: ['10 120', '50 70', '20 50', '90 10']
          }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Secondary Cyan Spark Flashes */}
        <motion.path
          d="M 180 180 L 60 120 L 80 140 M 180 180 L 300 130 L 280 150 M 180 180 L 140 300 L 160 285"
          stroke="#38BDF8"
          strokeWidth="1.2"
          strokeLinecap="round"
          animate={{ opacity: [0, 0.9, 0.1, 0.8, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* Pulsing Electric Node Sparks */}
        <motion.circle cx="45" cy="25" r="3.5" fill="#0A84FF" animate={{ scale: [1, 1.8, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity }} />
        <motion.circle cx="325" cy="40" r="3.5" fill="#38BDF8" animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.9, repeat: Infinity }} />
        <motion.circle cx="320" cy="330" r="3.5" fill="#0A84FF" animate={{ scale: [1, 1.8, 1], opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.1, repeat: Infinity }} />
        <motion.circle cx="35" cy="315" r="3.5" fill="#60A5FA" animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.7, repeat: Infinity }} />
      </svg>

      {/* 2. 3D Rotating Infinity Cube / Triangular Prism Glass Frame */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* Outer Rotating 3D Infinity Ring */}
        <motion.div
          animate={{ rotateZ: 360, rotateY: [0, 180, 360], rotateX: [0, 90, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-[42px] border-2 border-ice-400/40 border-dashed shadow-[0_0_30px_rgba(10,132,255,0.3)]"
        />

        {/* Counter-Rotating Triangular Prism Glass Geometry */}
        <motion.div
          animate={{ rotateZ: -360, rotateX: [360, 0], scale: [0.92, 1.06, 0.92] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-5 rounded-3xl bg-gradient-to-br from-ice-500/10 via-white/40 to-transparent border border-ice-400/60 backdrop-blur-md shadow-ice-md flex items-center justify-center"
        >
          {/* Triangular Isometric Infinity Lines */}
          <svg className="w-full h-full p-4 opacity-80" viewBox="0 0 200 200" fill="none">
            <polygon points="100,15 185,165 15,165" stroke="#0A84FF" strokeWidth="2" strokeDasharray="8 4"/>
            <polygon points="100,185 185,35 15,35" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="5 5"/>
            <circle cx="100" cy="100" r="60" stroke="#0A84FF" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="100" y1="15" x2="100" y2="185" stroke="#0A84FF" strokeWidth="1" opacity="0.6"/>
            <line x1="15" y1="165" x2="185" y2="35" stroke="#0A84FF" strokeWidth="1" opacity="0.6"/>
            <line x1="15" y1="35" x2="185" y2="165" stroke="#0A84FF" strokeWidth="1" opacity="0.6"/>
          </svg>
        </motion.div>

        {/* 3. Core Engine Badge (Floating in Center of 3D Prism) */}
        <motion.div
          animate={{ y: [0, -8, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="z-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-ice-500 via-blue-600 to-indigo-700 p-0.5 shadow-[0_0_35px_rgba(10,132,255,0.6)] flex items-center justify-center cursor-pointer group"
        >
          <div className="w-full h-full rounded-[22px] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center shadow-inner">
            <div className="w-8 h-8 rounded-xl bg-ice-100 text-ice-600 flex items-center justify-center shadow-ice-sm mb-1.5 group-hover:scale-110 transition-transform">
              <Sparkles size={16} className="text-ice-500" />
            </div>
            <span className="text-[13px] font-extrabold text-gray-950 leading-tight uppercase tracking-wider">Fresher</span>
            <span className="text-[9px] font-bold text-ice-500 uppercase tracking-widest mt-0.5">Software Dev</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 mesh-bg overflow-hidden">
      <Blobs />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">

        {/* ── Left ────────────────────────────────── */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-ice-100/90 border border-ice-200/80 text-ice-600 text-[12px] font-bold uppercase tracking-widest mb-8 shadow-ice-sm">
            <Sparkles size={13} className="text-ice-500" />
            Open to Software Developer & Full Stack Roles
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-[42px] sm:text-[62px] lg:text-[72px] font-extrabold tracking-tight text-gray-950 leading-[1.04] mb-6">
            {portfolioConfig.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[19px] sm:text-[21px] text-slate-500 leading-relaxed max-w-[540px] mb-10">
            I architect highly concurrent Java backend systems — microservices, event-driven pipelines, and distributed transactions — built to operate at production scale.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12">
            <a href={portfolioConfig.resumeUrl} download="MANIKAVASAGAM_S_Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-ice-500 text-white font-semibold text-[15px] hover:bg-ice-600 active:scale-95 transition-all shadow-ice-md hover:shadow-ice-lg group">
              <FileText size={16} />
              Download Resume
            </a>
            <a href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-white border border-[rgba(180,210,230,.7)] text-gray-800 font-semibold text-[15px] hover:border-ice-400 hover:shadow-ice-sm transition-all shadow-ice-sm group">
              <Layers size={16} className="text-ice-500" />
              View Projects
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.45 }}
            className="flex items-center gap-5 text-slate-400">
            <a href={portfolioConfig.github} target="_blank" rel="noopener noreferrer"
              className="hover:text-ice-500 transition-colors"><Github size={19} /></a>
            <a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer"
              className="hover:text-ice-500 transition-colors"><Linkedin size={19} /></a>
            <a href={portfolioConfig.leetcode} target="_blank" rel="noopener noreferrer"
              className="text-[12px] font-bold tracking-widest uppercase hover:text-ice-500 transition-colors">LeetCode</a>
          </motion.div>
        </div>

        {/* ── Right: 3D Motion Infinity Cube with Electric Thunder Effects ──── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 flex flex-col gap-6 relative items-center justify-center">

          {/* 3D Motion Rotating Infinity Cube / Triangle Prism with Thunder */}
          <ThunderInfinityCube />

          {/* Integrated Watery Glass Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-[rgba(180,210,230,.6)] shadow-ice-sm flex flex-col items-center justify-center hover:border-ice-400 hover:shadow-ice-md transition-all group"
            >
              <span className="text-xl sm:text-2xl font-black text-ice-500 tracking-tight group-hover:scale-105 transition-transform">200+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center mt-0.5">LeetCode Solved</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-[rgba(180,210,230,.6)] shadow-ice-sm flex flex-col items-center justify-center hover:border-ice-400 hover:shadow-ice-md transition-all group"
            >
              <span className="text-xl sm:text-2xl font-black text-ice-500 tracking-tight group-hover:scale-105 transition-transform">95%</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center mt-0.5">Cache Hit Rate</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-[rgba(180,210,230,.6)] shadow-ice-sm flex flex-col items-center justify-center hover:border-ice-400 hover:shadow-ice-md transition-all group"
            >
              <span className="text-xl sm:text-2xl font-black text-ice-500 tracking-tight group-hover:scale-105 transition-transform">5×</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center mt-0.5">Throughput Boost</span>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
