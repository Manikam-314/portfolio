'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';

const navItems = [
  { name: 'About',        href: '#about' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Experience',   href: '#experience' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: .45 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0D1117]/80 backdrop-blur-xl border-b border-[rgba(180,210,230,.35)] dark:border-[rgba(77,166,255,.1)] shadow-ice-sm dark:shadow-dark-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-ice-400 to-ice-500 flex items-center justify-center shadow-ice-sm">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="font-bold text-[15px] tracking-tight text-gray-900 dark:text-white">
            {portfolioConfig.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.name} href={item.href}
              className="text-[14px] font-medium text-[#64748B] hover:text-[#0A84FF] dark:text-slate-400 dark:hover:text-ice-400 transition-colors">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill bg-ice-500 text-white text-[13px] font-semibold hover:bg-ice-600 transition-all shadow-ice-sm group">
            Contact Me
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-500">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: .2 }}
            className="md:hidden bg-white/95 dark:bg-[#0D1117]/95 backdrop-blur-xl border-b border-[rgba(180,210,230,.3)] dark:border-[rgba(77,166,255,.08)] overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-4">
              {navItems.map(item => (
                <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)}
                  className="text-[15px] font-medium text-slate-600 dark:text-slate-300">
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill bg-ice-500 text-white text-[13px] font-semibold w-fit">
                Contact Me <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
