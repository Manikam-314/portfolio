'use client';
import React from 'react';
import Header        from '@/components/Header';
import Hero          from '@/components/Hero';
import About         from '@/components/About';
import TechStack     from '@/components/TechStack';
import Projects      from '@/components/Projects';
import SystemDesign  from '@/components/SystemDesign';
import Experience    from '@/components/Experience';
import LeetCode      from '@/components/LeetCode';
import Certifications from '@/components/Certifications';
import Contact       from '@/components/Contact';
import { Sparkles } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFF] dark:bg-[#06080F] transition-colors duration-200">
      <Header/>
      <main className="flex-1">
        {/* mesh-bg applied inside Hero itself */}
        <Hero/>
        {/* white */}
        <About/>
        {/* ice */}
        <TechStack/>
        {/* white */}
        <Projects/>
        {/* ice */}
        <SystemDesign/>
        {/* white */}
        <Experience/>
        {/* ice */}
        <LeetCode/>
        {/* white */}
        <Certifications/>
        {/* ice */}
        <Contact/>
      </main>

      {/* Premium footer */}
      <footer className="bg-white dark:bg-[#0D1117] border-t border-[rgba(180,210,230,.35)] dark:border-slate-900 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
              <Sparkles size={14} className="text-white" />
            </div>
            <span className="text-[14px] font-bold text-gray-700 dark:text-slate-300">
              {portfolioConfig.name}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"/>
            <span className="text-[13px] text-slate-400">Java Backend & Full Stack Engineer</span>
          </div>
          <p className="text-[12px] text-slate-400">
            &copy; {new Date().getFullYear()} · Built with Next.js · Ice Blue Design System
          </p>
        </div>
      </footer>
    </div>
  );
}
