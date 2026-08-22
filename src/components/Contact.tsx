'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio.config';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); setForm({ name:'', email:'', message:'' }); }, 1200);
  };

  return (
    <section id="contact" className="section-ice py-16 sm:py-28 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-[500px] h-[500px] rounded-full bg-ice-200/30 dark:bg-ice-900/10 blur-3xl"/>
      <div className="pointer-events-none absolute -left-16 top-10 w-[350px] h-[350px] rounded-full bg-ice-100/20 dark:bg-ice-800/10 blur-3xl"/>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] font-extrabold uppercase tracking-[.22em] text-ice-500 dark:text-ice-400 mb-4">
          08 · Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl min-[400px]:text-3xl sm:text-[48px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] mb-8 sm:mb-16">
          Let&apos;s Work Together
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: context + channels */}
          <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10">
            <p className="text-[16px] sm:text-[18px] text-slate-500 dark:text-slate-400 leading-relaxed">
              I&apos;m actively looking for <span className="text-gray-900 dark:text-white font-semibold">Java Backend and Full Stack roles</span> at product companies. Reach out and let&apos;s connect.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { href: `mailto:${portfolioConfig.email}`,  icon: Mail,     label: 'Email', value: portfolioConfig.email,  color: 'text-ice-500' },
                { href: `tel:${portfolioConfig.phone}`,     icon: Phone,    label: 'Phone', value: `+91 ${portfolioConfig.phone}`, color: 'text-emerald-500' },
              ].map(ch => {
                const Icon = ch.icon;
                return (
                  <a key={ch.label} href={ch.href}
                    className="flex items-center gap-4 group max-w-full overflow-hidden">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.5)] dark:border-slate-800 shadow-ice-sm text-slate-400 group-hover:text-ice-500 transition-colors shrink-0">
                      <Icon size={18} strokeWidth={1.75}/>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400 mb-0.5">{ch.label}</p>
                      <p className="text-[14px] sm:text-[15px] font-semibold text-gray-800 dark:text-slate-200 group-hover:text-ice-500 transition-colors truncate">{ch.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-[rgba(180,210,230,.4)] dark:border-slate-800">
              {[
                { href: portfolioConfig.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: portfolioConfig.github,   icon: Github,   label: 'GitHub'   },
              ].map(s => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.4)] dark:border-slate-800 text-slate-400 hover:text-ice-500 hover:border-ice-300 transition-all shadow-ice-sm"
                    title={s.label}>
                    <Icon size={17} strokeWidth={1.75}/>
                  </a>
                );
              })}
              <a href={portfolioConfig.leetcode} target="_blank" rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.4)] dark:border-slate-800 text-slate-400 hover:text-ice-500 hover:border-ice-300 text-[11px] font-extrabold tracking-widest uppercase transition-all shadow-ice-sm">
                LeetCode
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white dark:bg-slate-900 rounded-card border border-[rgba(180,210,230,.4)] dark:border-slate-800 shadow-ice-md p-6 sm:p-10">
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-14 gap-4">
                  <div className="p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500">
                    <CheckCircle2 size={32} strokeWidth={1.75}/>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-950 dark:text-white">Message sent!</h3>
                  <p className="text-[15px] text-slate-400 max-w-xs">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                  <button onClick={() => setStatus('idle')}
                    className="mt-2 text-[12px] font-extrabold uppercase tracking-widest text-ice-500 hover:underline flex items-center gap-1">
                    Send another <ArrowRight size={12}/>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: 'name',  label: 'Full Name',     type: 'text',  placeholder: 'Sarah Jenkins' },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'sarah@stripe.com' },
                    ].map(f => (
                      <div key={f.id} className="flex flex-col gap-1.5">
                        <label htmlFor={`contact-${f.id}`}
                          className="text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400">
                          {f.label}
                        </label>
                        <input id={`contact-${f.id}`} type={f.type} required
                          value={form[f.id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                          disabled={status === 'sending'}
                          placeholder={f.placeholder}
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(180,210,230,.6)] dark:border-slate-700 bg-[#F8FCFF] dark:bg-slate-800 text-[15px] text-gray-900 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-ice-400/25 focus:border-ice-400 dark:focus:border-ice-500 transition-all disabled:opacity-50"/>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message"
                      className="text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400">
                      Message
                    </label>
                    <textarea id="contact-message" rows={5} required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      disabled={status === 'sending'}
                      placeholder="Tell me about the role or project..."
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(180,210,230,.6)] dark:border-slate-700 bg-[#F8FCFF] dark:bg-slate-800 text-[15px] text-gray-900 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-ice-400/25 focus:border-ice-400 dark:focus:border-ice-500 transition-all resize-none disabled:opacity-50"/>
                  </div>
                  <button type="submit" disabled={status === 'sending'}
                    className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-ice-500 text-white text-[14px] font-semibold hover:bg-ice-600 transition-all shadow-ice-md disabled:opacity-60">
                    {status === 'sending'
                      ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Sending…</>
                      : <><Send size={14}/>Send Message</>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
