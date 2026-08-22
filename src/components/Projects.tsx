'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Cpu, Database, Network, Activity, TrendingUp, CheckCircle2, 
  ArrowRight, Lock, Shield, Zap, Search, MessageSquare, Video, 
  Layers, Globe, Terminal, ExternalLink, Github, BookOpen, 
  Workflow, ChevronDown, ChevronUp, AlertCircle, HelpCircle, X
} from 'lucide-react';

/* ── ISOMETRIC ILLUSTRATIONS (SVG) ── */

function WalletIsometric() {
  return (
    <svg className="w-full max-w-[320px] aspect-[4/3] drop-shadow-ice-md" viewBox="0 0 200 150" fill="none">
      {/* Grid Floor */}
      <path d="M100 20 L180 60 L100 100 L20 60 Z" fill="rgba(77,166,255,0.03)" stroke="rgba(180,210,230,0.2)" strokeWidth="0.5"/>
      <path d="M100 30 L160 60 M100 40 L140 60 M100 50 L120 60" stroke="rgba(180,210,230,0.15)" strokeWidth="0.5"/>
      <path d="M100 30 L40 60 M100 40 L60 60 M100 50 L80 60" stroke="rgba(180,210,230,0.15)" strokeWidth="0.5"/>

      {/* Main ledger stack (Back) */}
      <g transform="translate(85, 35)">
        <path d="M30 0 L60 15 L30 30 L0 15 Z" fill="#DDF4FF" stroke="#0A84FF" strokeWidth="1"/>
        <path d="M0 15 L0 35 L30 50 L30 30 Z" fill="#B3E3FF" stroke="#0A84FF" strokeWidth="1"/>
        <path d="M30 30 L30 50 L60 35 L60 15 Z" fill="#80CCFF" stroke="#0A84FF" strokeWidth="1"/>
        {/* Layer division lines */}
        <path d="M0 22 L30 37 L60 22" fill="none" stroke="#0A84FF" strokeWidth="0.5"/>
        <path d="M0 29 L30 44 L60 29" fill="none" stroke="#0A84FF" strokeWidth="0.5"/>
      </g>

      {/* Microservice Block (Left) */}
      <g transform="translate(35, 55)">
        <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="#FFFFFF" stroke="#4DA6FF" strokeWidth="1"/>
        <path d="M0 10 L0 25 L20 35 L20 20 Z" fill="#F2F8FD" stroke="#4DA6FF" strokeWidth="1"/>
        <path d="M20 20 L20 35 L40 25 L40 10 Z" fill="#DDF4FF" stroke="#4DA6FF" strokeWidth="1"/>
        {/* Floating badge */}
        <circle cx="20" cy="10" r="4" fill="#0A84FF"/>
      </g>

      {/* Database Node (Right) */}
      <g transform="translate(125, 65)">
        <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="#FFFFFF" stroke="#4DA6FF" strokeWidth="1"/>
        <path d="M0 10 L0 20 L20 30 L20 20 Z" fill="#F2F8FD" stroke="#4DA6FF" strokeWidth="1"/>
        <path d="M20 20 L20 30 L40 20 L40 10 Z" fill="#DDF4FF" stroke="#4DA6FF" strokeWidth="1"/>
        {/* Lock icon overlay */}
        <path d="M17 12 H23 V17 H17 Z" fill="#0A84FF" opacity="0.8"/>
        <path d="M18 12 V10 A2 2 0 0 1 22 10 V12" stroke="#0A84FF" strokeWidth="0.8" fill="none"/>
      </g>

      {/* Flow lines */}
      <path d="M70 75 Q100 85 125 78" fill="none" stroke="#0A84FF" strokeWidth="1.2" strokeDasharray="3 3"/>
      <path d="M115 50 Q105 70 65 75" fill="none" stroke="#4DA6FF" strokeWidth="1.2" strokeDasharray="3 3"/>
    </svg>
  );
}

function CollabrixIsometric() {
  return (
    <svg className="w-full max-w-[320px] aspect-[4/3] drop-shadow-ice-md" viewBox="0 0 200 150" fill="none">
      <path d="M100 20 L180 60 L100 100 L20 60 Z" fill="rgba(77,166,255,0.03)" stroke="rgba(180,210,230,0.2)" strokeWidth="0.5"/>

      {/* Floating screens */}
      <g transform="translate(30, 30)">
        <path d="M0 25 L35 10 L35 45 L0 60 Z" fill="rgba(255,255,255,0.85)" stroke="#0A84FF" strokeWidth="1"/>
        <line x1="8" y1="26" x2="28" y2="18" stroke="#4DA6FF" strokeWidth="1"/>
        <line x1="8" y1="36" x2="28" y2="28" stroke="#DDF4FF" strokeWidth="1.5"/>
        <circle cx="12" cy="46" r="2.5" fill="#4DA6FF"/>
      </g>

      {/* Speech wave representation */}
      <path d="M75 55 Q85 45 95 55 T115 55" fill="none" stroke="#0A84FF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M80 60 Q90 53 100 60 T120 60" fill="none" stroke="#4DA6FF" strokeWidth="1" opacity="0.6"/>

      {/* AI Processing Engine (Center-right) */}
      <g transform="translate(115, 45)">
        <path d="M30 0 L60 15 L30 30 L0 15 Z" fill="#DDF4FF" stroke="#0A84FF" strokeWidth="1"/>
        <path d="M0 15 L0 30 L30 45 L30 30 Z" fill="#B3E3FF" stroke="#0A84FF" strokeWidth="1"/>
        <path d="M30 30 L30 45 L60 30 L60 15 Z" fill="#80CCFF" stroke="#0A84FF" strokeWidth="1"/>
        {/* Core glow */}
        <circle cx="30" cy="15" r="7" fill="#0A84FF" opacity="0.2"/>
        <circle cx="30" cy="15" r="4" fill="#0A84FF"/>
      </g>

      {/* Network mesh linking screens */}
      <line x1="65" y1="55" x2="115" y2="60" stroke="#4DA6FF" strokeWidth="1" strokeDasharray="3 3"/>
    </svg>
  );
}

function MovieSharkIsometric() {
  return (
    <svg className="w-full max-w-[320px] aspect-[4/3] drop-shadow-ice-md" viewBox="0 0 200 150" fill="none">
      <path d="M100 20 L180 60 L100 100 L20 60 Z" fill="rgba(77,166,255,0.03)" stroke="rgba(180,210,230,0.2)" strokeWidth="0.5"/>

      {/* Isometric Seat Map Container */}
      <g transform="translate(40, 30)">
        {/* Base sheet */}
        <path d="M60 0 L120 30 L60 60 L0 30 Z" fill="#FFFFFF" stroke="#0A84FF" strokeWidth="1"/>

        {/* Seat grids (dots representing rows) */}
        {[
          { x: 30, y: 15, c: '#0A84FF' },
          { x: 50, y: 25, c: '#0A84FF' },
          { x: 70, y: 35, c: '#4DA6FF' },
          { x: 90, y: 45, c: '#B3E3FF' },
          { x: 40, y: 25, c: '#0A84FF' },
          { x: 60, y: 35, c: '#F59E0B' }, // Locked seat (Yellow)
          { x: 80, y: 45, c: '#0A84FF' },
        ].map((seat, i) => (
          <ellipse key={i} cx={seat.x} cy={seat.y} rx="3" ry="1.8" fill={seat.c}/>
        ))}
      </g>

      {/* Cache server & DB tower */}
      <g transform="translate(130, 65)">
        <path d="M15 0 L30 7.5 L15 15 L0 7.5 Z" fill="#DDF4FF" stroke="#4DA6FF" strokeWidth="1"/>
        <path d="M0 7.5 L0 25 L15 32.5 L15 15 Z" fill="#B3E3FF" stroke="#4DA6FF" strokeWidth="1"/>
        <path d="M15 15 L15 32.5 L30 25 L30 7.5 Z" fill="#80CCFF" stroke="#4DA6FF" strokeWidth="1"/>
      </g>

      <path d="M90 75 Q115 85 130 80" fill="none" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3 2"/>
    </svg>
  );
}

/* ── DETAILED DATA STRUCTURES FOR ENTERPRISE SHOWCASE ── */

interface KeyFeature {
  icon: React.ComponentType<any>;
  title: string;
  explanation: string;
}

interface TechCategory {
  category: string;
  items: string[];
}

interface StepFlow {
  from: string;
  to: string;
  action: string;
  explanation: string;
}

interface ShowcaseProject {
  id: string;
  title: string;
  categoryBadge: string;
  heroDescription: string;
  techStack: TechCategory[];
  features: KeyFeature[];
  highlights: { title: string; explanation: string }[];
  sequenceSteps: StepFlow[];
  metrics: { value: string; label: string }[];
  challenges: string[];
  isometric: React.ComponentType<any>;
  githubUrl: string;
  liveDemoUrl: string;
}

const showcases: ShowcaseProject[] = [
  {
    id: 'wallet',
    title: 'Distributed Fintech Wallet System',
    categoryBadge: 'Distributed Systems',
    heroDescription: 'A secure, high-concurrency payment infrastructure built to handle concurrent wallet updates with atomic guarantees. It solves the critical double-spending problem at the application layer through pessimistic concurrency locks and coordinates distributed microservices using event-driven saga orchestration. A transactional outbox table tracks state history to eliminate dual-write data loss.',
    techStack: [
      { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Spring Data JPA', 'REST APIs'] },
      { category: 'Database & Cache', items: ['PostgreSQL', 'Redis Cache'] },
      { category: 'Messaging', items: ['Apache Kafka'] },
      { category: 'Cloud & DevOps', items: ['AWS (EC2, S3)', 'Docker', 'Kubernetes'] },
      { category: 'Monitoring & Logs', items: ['Prometheus', 'Grafana', 'OpenTelemetry'] }
    ],
    features: [
      { icon: Shield, title: 'Transactional Consistency', explanation: 'Saga orchestrator manages payment authorization, ledger posting, and automatic compensating rollbacks.' },
      { icon: Lock, title: 'Race Condition Defense', explanation: 'Acquires distributed write locks on ledger balances via Redis SETNX locks with strict TTL thresholds.' },
      { icon: Layers, title: 'Transactional Outbox Pattern', explanation: 'Writes database records and outbound events atomically within a single transaction boundaries.' },
      { icon: Server, title: 'Idempotency Protection', explanation: 'Inbox pattern filters duplicate messages, guaranteeing operations commit exactly once.' }
    ],
    highlights: [
      { title: 'Saga Pattern', explanation: 'Coordinates distributed transactions with automatic rollback logic.' },
      { title: 'Redis Distributed Lock', explanation: 'Prevents race conditions during concurrent balance changes.' },
      { title: 'Transactional Outbox', explanation: 'Guarantees reliable Kafka event publishing without DB dual-write.' },
      { title: 'OpenTelemetry', explanation: 'Propagates W3C trace contexts across microservices for tracing request roots.' }
    ],
    sequenceSteps: [
      { from: 'User', to: 'API Gateway', action: 'Initiate Transfer', explanation: 'Secure HTTP POST request with idempotency token is intercepted by the Gateway.' },
      { from: 'API Gateway', to: 'Auth Service', action: 'Authorize Token', explanation: 'Validates JWT signature and scopes, establishing context.' },
      { from: 'Gateway', to: 'Wallet Service', action: 'Acquire Balance Lock', explanation: 'Wallet service locks balance records (using Redis SETNX) for transaction security.' },
      { from: 'Wallet Service', to: 'PostgreSQL DB', action: 'Write Ledger & Outbox', explanation: 'Atomically updates user account balance and appends event to the outbox database.' },
      { from: 'Outbox Relay', to: 'Kafka', action: 'Stream Event Log', explanation: 'Asynchronous poller reads outbox table logs and publishes events to partition key.' },
      { from: 'Kafka Broker', to: 'Transaction Svc', action: 'Process Transaction', explanation: 'Transaction service verifies transfer validity, confirming post state.' }
    ],
    metrics: [
      { value: '95%', label: 'Redis Cache Hit Rate' },
      { value: '3-5×', label: 'Transaction Throughput' },
      { value: '80%', label: 'Processing Latency Reduction' },
      { value: '0%', label: 'Double-Booking/Balance Overdraft Rate' }
    ],
    challenges: [
      'Orchestrated multi-step microservice rollbacks using decoupled compensating transaction loops.',
      'Eliminated silent data synchronization drops via CDC (Change Data Capture) outbox relays.',
      'Mitigated distributed race condition lock starvation using exponential backoff retry algorithms.'
    ],
    isometric: WalletIsometric,
    githubUrl: 'https://github.com/manikiphone14email',
    liveDemoUrl: '#'
  },
  {
    id: 'collabrix',
    title: 'Real-Time Meeting Collaboration & AI',
    categoryBadge: 'AI Platform / Real-Time Systems',
    heroDescription: 'A low-latency real-time collaboration engine supporting peer-to-peer conferencing, live audio captioning, and dynamic meetings summarization. Built with full-duplex WebSockets to stream concurrent incremental speech-to-text frames, it utilizes Python NLP microservices and LangChain RAG pipelines to index meetings as searchable vector embeddings in Qdrant database clusters.',
    techStack: [
      { category: 'Backend', items: ['Java', 'Spring Boot', 'WebSocket', 'OpenFeign', 'WebClient'] },
      { category: 'AI Pipeline', items: ['Python', 'Gemini API', 'LangChain RAG', 'Qdrant (Vector DB)'] },
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Web Speech API'] },
      { category: 'Database', items: ['MongoDB', 'Redis Cache'] },
      { category: 'DevOps & Git', items: ['Docker', 'CI/CD Pipelines'] }
    ],
    features: [
      { icon: Video, title: 'Low-Latency Media', explanation: 'Signaling pathways enable peer-to-peer WebRTC HD audio and video conferences.' },
      { icon: MessageSquare, title: 'Live Transcriptions', explanation: 'Web Speech API processes speech and streams frames instantly to WebSocket handlers.' },
      { icon: Cpu, title: 'GenAI Meeting Insights', explanation: 'Leverages Gemini and customized extractive summarization pipelines to extract action-items and risks.' },
      { icon: Search, title: 'Semantic Knowledge Search', explanation: 'LangChain RAG engine performs vector searches over stored session embeddings.' }
    ],
    highlights: [
      { title: 'WebRTC Signaling', explanation: 'WebSocket server coordinates session descriptors and ICE network routing.' },
      { title: 'LangChain RAG', explanation: 'Retrieves meeting context chunks to enrich AI queries with historical facts.' },
      { title: 'Vector Embeddings', explanation: 'Converts transcripts into text-vectors, stored in Qdrant index.' },
      { title: 'Stateless Broadcaster', explanation: 'Broadcasts session room updates to 100+ clients using Redis pub/sub backplanes.' }
    ],
    sequenceSteps: [
      { from: 'Speaker Microphone', to: 'Web Speech API', action: 'Convert Audio to Text', explanation: 'Browser captures local audio, converting it into incremental text chunks.' },
      { from: 'React Client', to: 'Spring WS', action: 'Stream WebSocket Frames', explanation: 'Streams text snippets immediately over socket frames to server endpoint.' },
      { from: 'Spring Boot WS', to: 'MongoDB', action: 'Store Raw Transcript', explanation: 'Performs non-blocking bulk updates to preserve incremental conversation lines.' },
      { from: 'Spring Boot WS', to: 'Python NLP Svc', action: 'Forward Segment', explanation: 'Posts text batches to NLP services for vectorization and summary evaluation.' },
      { from: 'Python NLP Svc', to: 'Qdrant Vector DB', action: 'Upsert Text Vectors', explanation: 'Stores sentence embeddings, enabling semantic search queries.' },
      { from: 'Qdrant / Gemini', to: 'React UI', action: 'Broadcast Summaries', explanation: 'Renders extracted summary bullets and decisions back to meeting participants.' }
    ],
    metrics: [
      { value: 'Sub-50ms', label: 'WebSocket Broadcast Latency' },
      { value: '90%', label: 'Primary DB Search Offload' },
      { value: '4×', label: 'NLP Ingestion Execution Speedup' },
      { value: '99.9%', label: 'Room State Sync Consistency' }
    ],
    challenges: [
      'Resolved database locking under continuous concurrent WebSocket transcript updates using write-buffers.',
      'Reduced LLM context window ingestion cost by chunking and indexing files in Qdrant.',
      'Maintained synchronized meeting room rosters during sudden disconnects with Redis session caching.'
    ],
    isometric: CollabrixIsometric,
    githubUrl: 'https://github.com/manikiphone14email',
    liveDemoUrl: '#'
  },
  {
    id: 'movieshark',
    title: 'Movie Ticket Booking System',
    categoryBadge: 'Enterprise Platform',
    heroDescription: 'An atomic seat reservation platform resolving high-concurrency database conflicts during ticket checkout peaks. Built using Redis key locks with automatic TTL-based expirations to protect seat maps from double booking. Syncs catalogs with Elasticsearch indexes to offload search traffic, protecting relational tables using Bucket4j rate-limiting tokens.',
    techStack: [
      { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JWT Security', 'Hibernate'] },
      { category: 'Database & Search', items: ['MySQL', 'Redis Cache', 'Elasticsearch'] },
      { category: 'Payments & Channels', items: ['Razorpay SDK', 'WebSocket API'] },
      { category: 'Security & Traffic', items: ['Bucket4j Token-Bucket API', 'CORS Filters'] }
    ],
    features: [
      { icon: Lock, title: 'Temporary Seat Hold', explanation: 'Redis key locks reserve chosen seat positions for 5 minutes during user checkouts.' },
      { icon: Search, title: 'Search Load Reduction', explanation: 'Elasticsearch offloads movie catalog queries, protecting primary database resources.' },
      { icon: Zap, title: 'Token Bucket Limiter', explanation: 'Protects checkout APIs from script scraping using Bucket4j rate limits.' },
      { icon: Globe, title: 'Payment Rollback webhook', explanation: 'Razorpay webhook automatically reconciles ledger tables if card authorization fails.' }
    ],
    highlights: [
      { title: 'Soft Seat Lock', explanation: 'Temporary holds with auto-expire policies prevent seat locking deadlocks.' },
      { title: 'Elasticsearch Sync', explanation: 'Syncs catalog updates asynchronously to keep indexes updated.' },
      { title: 'Rate Limiting', explanation: 'Bucket4j interceptors restrict client IP request velocity.' },
      { title: 'Isolation Levels', explanation: 'Leverages MySQL database isolation levels to prevent dirty/phantom reads.' }
    ],
    sequenceSteps: [
      { from: 'User UI', to: 'Spring Gateway', action: 'Select Seat 42', explanation: 'User attempts selection; gateway validates JWT session.' },
      { from: 'Spring Boot', to: 'Redis Cache', action: 'Acquire Soft Lock', explanation: 'Sets key "lock:seat:42" with 5-minute TTL. Succeeds if free.' },
      { from: 'Spring Boot', to: 'All Clients', action: 'WebSocket Broadcast', explanation: 'Updates seat status to "Locked", turning it yellow on other screens.' },
      { from: 'User UI', to: 'Razorpay / Gateway', action: 'Process Payment', explanation: 'Triggers secure payment validation loop on external card network.' },
      { from: 'Razorpay SDK', to: 'Spring Controller', action: 'Webhook Callback', explanation: 'Payment gateway posts checkout status update, verifying charge success.' },
      { from: 'Spring Boot', to: 'MySQL Database', action: 'Commit Reservation', explanation: 'Converts soft lock to persistent ticket record, clearing Redis lock.' }
    ],
    metrics: [
      { value: '0%', label: 'Double Booking Rate' },
      { value: '90%', label: 'Search Query Load Offloaded' },
      { value: '100%', label: 'DDoS Scraper API Protection' },
      { value: '<10ms', label: 'WebSocket Seat Status Sync' }
    ],
    challenges: [
      'Resolved database lock timeouts under 10,000+ booking concurrency checks using Redis pre-locks.',
      'Reconciled seat status states under network drops using timed websocket sweeps.',
      'Protected transaction endpoints from bot spam using customized Bucket4j limits.'
    ],
    isometric: MovieSharkIsometric,
    githubUrl: 'https://github.com/manikiphone14email',
    liveDemoUrl: 'https://book-your-show-mu.vercel.app'
  }
];

export default function Projects() {
  const [selectedArchProject, setSelectedArchProject] = useState<ShowcaseProject | null>(null);
  const [expandedFlow, setExpandedFlow] = useState<string | null>(null);
  const [activeFlowPath, setActiveFlowPath] = useState<Record<string, string>>({
    wallet: 'saga',
    collabrix: 'stt',
    movieshark: 'lock'
  });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Lock document scroll when popup modal is active
  useEffect(() => {
    if (selectedArchProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArchProject]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedArchProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFlow = (id: string) => {
    setExpandedFlow(expandedFlow === id ? null : id);
  };

  const handleFlowTab = (projId: string, pathId: string) => {
    setActiveFlowPath(prev => ({ ...prev, [projId]: pathId }));
  };

  return (
    <section id="projects" className="section-white py-16 sm:py-28 relative overflow-hidden border-t border-[rgba(180,210,230,.35)]">
      {/* Dynamic light beams */}
      <div className="pointer-events-none absolute left-0 top-1/4 w-[600px] h-[600px] rounded-full bg-ice-100/30 dark:bg-ice-900/10 blur-3xl"/>
      <div className="pointer-events-none absolute right-0 top-2/3 w-[500px] h-[500px] rounded-full bg-ice-200/20 dark:bg-ice-900/5 blur-3xl"/>

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-20 text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-extrabold uppercase tracking-[.25em] text-ice-500 dark:text-ice-400 mb-3"
          >
            03 · Enterprise Case Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-2xl min-[400px]:text-3xl sm:text-[54px] font-black tracking-tight text-gray-950 dark:text-white leading-[1.05]"
          >
            Engineering Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 mt-3 sm:mt-4 max-w-xl text-[14px] sm:text-[16px]"
          >
            A deep dive into distributed architectures, concurrency-safe designs, system performance bottlenecks, and robust production engineering.
          </motion.p>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-10 sm:gap-16">
          {showcases.map((project) => {
            const IsometricImg = project.isometric;
            // Key tech stack highlights for preview tag row
            const techPreview = project.techStack.flatMap(s => s.items).slice(0, 7);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="w-full bg-white dark:bg-slate-900/60 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-[rgba(180,210,230,.5)] dark:border-slate-800/80 shadow-ice-md hover:shadow-ice-lg transition-all"
              >
                {/* ── Title block & category ── */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest bg-ice-100 dark:bg-ice-900/30 text-ice-500 dark:text-ice-400 border border-ice-200/50 dark:border-ice-700/20">
                    {project.categoryBadge}
                  </span>
                </div>

                {/* ── Core Section (Intro + Isometric) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left detail column */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <p className="text-[16px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.heroDescription}
                    </p>

                    {/* Tech stack preview tags */}
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] font-bold text-slate-400 mr-1">Stack:</span>
                      {techPreview.map(t => (
                        <span key={t}
                          className="px-2.5 py-1 rounded-lg bg-[#F2F8FD] dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300 border border-[rgba(180,210,230,.4)] dark:border-slate-700/60">
                          {t}
                        </span>
                      ))}
                      {project.techStack.flatMap(s => s.items).length > 7 && (
                        <span className="text-[11px] font-medium text-slate-400">
                          +{project.techStack.flatMap(s => s.items).length - 7} more
                        </span>
                      )}
                    </div>

                    {/* Action buttons list */}
                    <div className="flex flex-wrap gap-3 mt-2">
                      <button
                        onClick={() => setSelectedArchProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-ice-500 text-white font-semibold text-[13px] hover:bg-ice-600 active:scale-95 transition-all shadow-ice-sm cursor-pointer"
                      >
                        <Layers size={15}/>
                        View Architecture
                      </button>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.6)] dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[13px] hover:border-ice-400 transition-all shadow-ice-sm">
                        <Github size={14}/>
                        View Source
                      </a>
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.6)] dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[13px] hover:border-ice-400 transition-all shadow-ice-sm">
                        <Globe size={14}/>
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Right: Isometric Vector Illustration */}
                  <div className="lg:col-span-5 flex items-center justify-center p-6 bg-[#F2F8FD] dark:bg-slate-900/50 rounded-2xl border border-[rgba(180,210,230,.3)] dark:border-slate-800/80">
                    <IsometricImg />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* ── ARCHITECTURE DETAILS POPUP MODAL ── */}
      <AnimatePresence>
        {selectedArchProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Watery Translucent Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArchProject(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Dialog Window - Translucent Watery Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white/80 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-[0_25px_60px_rgba(10,132,255,0.18)] p-6 sm:p-10 flex flex-col gap-10 scrollbar-thin"
            >
              {/* Sticky Top Bar / Modal Header - Translucent Watery Glass Header */}
              <div className="sticky top-0 z-20 -mt-6 sm:-mt-10 -mx-6 sm:-mx-10 p-6 sm:p-8 bg-white/85 backdrop-blur-xl border-b border-[rgba(180,210,230,.4)] flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mb-2">
                    {selectedArchProject.title}
                  </h3>
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-ice-100/90 text-ice-600 border border-ice-200/60 shadow-ice-sm">
                      {selectedArchProject.categoryBadge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Architecture Blueprint</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArchProject(null)}
                  className="p-2.5 rounded-full bg-white/90 border border-ice-200/60 text-slate-500 hover:bg-ice-50 hover:text-ice-600 transition-all cursor-pointer shrink-0 shadow-ice-sm"
                  aria-label="Close Architecture Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body Content */}
              
              {/* 1. Technology Breakdown */}
              <div className="bg-[#F2F8FD] dark:bg-slate-900/40 rounded-card p-6 sm:p-8 border border-[rgba(180,210,230,.3)] dark:border-slate-800/60">
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-6">Engaged Technologies</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {selectedArchProject.techStack.map(stack => (
                    <div key={stack.category} className="flex flex-col gap-2.5">
                      <span className="text-[11px] font-bold text-gray-900 dark:text-white tracking-tight">{stack.category}</span>
                      <div className="flex flex-wrap gap-1">
                        {stack.items.map(t => (
                          <span key={t}
                            className="px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400 border border-[rgba(180,210,230,.4)] dark:border-slate-800 shadow-ice-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Key Architecture Features */}
              <div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-4">Core Architectural Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {selectedArchProject.features.map((feat, i) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div key={i}
                        className="bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.4)] dark:border-slate-800 p-5 rounded-card shadow-ice-sm">
                        <div className="p-2 w-fit rounded-xl bg-ice-50 dark:bg-ice-900/30 text-ice-500 mb-3">
                          <FeatIcon size={18} strokeWidth={2}/>
                        </div>
                        <h4 className="text-[14px] font-extrabold text-gray-950 dark:text-white mb-1 tracking-tight">{feat.title}</h4>
                        <p className="text-[12px] text-slate-400 leading-relaxed">{feat.explanation}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Interactive Blueprint Diagram */}
              <div className="bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.4)] dark:border-slate-800 rounded-card p-6 md:p-8 shadow-ice-md relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[rgba(180,210,230,.3)] dark:border-slate-800 pb-4">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">Interactive Blueprint</p>
                    <h4 className="text-[18px] font-extrabold text-gray-950 dark:text-white">Distributed Architecture Flow</h4>
                  </div>

                  {/* Flow path toggle buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedArchProject.id === 'wallet' && (
                      <>
                        {[
                          { id: 'saga', label: 'Saga Event Flow' },
                          { id: 'compensating', label: 'Compensation Flow' },
                          { id: 'cache', label: 'Redis Cache Check' }
                        ].map(tab => (
                          <button key={tab.id} onClick={() => handleFlowTab('wallet', tab.id)}
                            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-tight border transition-all cursor-pointer ${
                              activeFlowPath.wallet === tab.id
                                ? 'bg-ice-500 text-white border-ice-500'
                                : 'bg-white dark:bg-slate-800 text-slate-500 border-[rgba(180,210,230,.5)] dark:border-slate-700 hover:border-ice-400'
                            }`}>
                            {tab.label}
                          </button>
                        ))}
                      </>
                    )}
                    {selectedArchProject.id === 'collabrix' && (
                      <>
                        {[
                          { id: 'stt', label: 'WebSocket Audio/STT' },
                          { id: 'gemini', label: 'Gemini Summary' },
                          { id: 'rag', label: 'LangChain RAG' }
                        ].map(tab => (
                          <button key={tab.id} onClick={() => handleFlowTab('collabrix', tab.id)}
                            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-tight border transition-all cursor-pointer ${
                              activeFlowPath.collabrix === tab.id
                                ? 'bg-ice-500 text-white border-ice-500'
                                : 'bg-white dark:bg-slate-800 text-slate-500 border-[rgba(180,210,230,.5)] dark:border-slate-700 hover:border-ice-400'
                            }`}>
                            {tab.label}
                          </button>
                        ))}
                      </>
                    )}
                    {selectedArchProject.id === 'movieshark' && (
                      <>
                        {[
                          { id: 'lock', label: 'Redis Seat TTL Lock' },
                          { id: 'es', label: 'Elasticsearch Offload' },
                          { id: 'razorpay', label: 'Razorpay Webhook' }
                        ].map(tab => (
                          <button key={tab.id} onClick={() => handleFlowTab('movieshark', tab.id)}
                            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-tight border transition-all cursor-pointer ${
                              activeFlowPath.movieshark === tab.id
                                ? 'bg-ice-500 text-white border-ice-500'
                                : 'bg-white dark:bg-slate-800 text-slate-500 border-[rgba(180,210,230,.5)] dark:border-slate-700 hover:border-ice-400'
                            }`}>
                            {tab.label}
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* SVG DIAGRAM DRAWING NODES */}
                <div className="relative w-full overflow-x-auto min-h-[300px] flex items-center justify-center py-4 bg-[#F2F8FD]/30 dark:bg-slate-900/10 rounded-2xl border border-[rgba(180,210,230,.25)] dark:border-slate-800">
                  
                  {/* Wallet System Diagram */}
                  {selectedArchProject.id === 'wallet' && (
                    <svg className="w-[780px] h-[340px]" viewBox="0 0 780 340" fill="none">
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M0,0 L10,5 L0,10 z" fill="#0A84FF" />
                        </marker>
                        <marker id="comp-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M0,0 L10,5 L0,10 z" fill="#EF4444" />
                        </marker>
                      </defs>

                      <path d="M 90 90 L 210 90 M 330 90 L 460 90 M 580 90 L 580 200 M 580 230 L 460 230 M 340 230 L 210 230"
                        fill="none" stroke={activeFlowPath.wallet === 'saga' ? '#0A84FF' : '#E2E8F0'} strokeWidth={activeFlowPath.wallet === 'saga' ? 2 : 1}
                        strokeDasharray={activeFlowPath.wallet === 'saga' ? '6 4' : 'none'} className={activeFlowPath.wallet === 'saga' ? 'animate-[dash_12s_linear_infinite]' : ''}/>
                      
                      <path d="M 580 200 L 580 90 M 580 90 L 460 90 M 340 90 L 210 90"
                        fill="none" stroke={activeFlowPath.wallet === 'compensating' ? '#EF4444' : '#E2E8F0'} strokeWidth={activeFlowPath.wallet === 'compensating' ? 2 : 0.8}
                        strokeDasharray={activeFlowPath.wallet === 'compensating' ? '6 4' : 'none'} className={activeFlowPath.wallet === 'compensating' ? 'animate-[dash_12s_linear_infinite]' : ''}/>

                      <path d="M 270 110 L 270 190 M 270 190 L 330 205"
                        fill="none" stroke={activeFlowPath.wallet === 'cache' ? '#10B981' : '#E2E8F0'} strokeWidth={activeFlowPath.wallet === 'cache' ? 2 : 0.8}
                        strokeDasharray={activeFlowPath.wallet === 'cache' ? '6 4' : 'none'} className={activeFlowPath.wallet === 'cache' ? 'animate-[dash_12s_linear_infinite]' : ''}/>

                      {[
                        { id: 'react', label: 'React client', x: 20, y: 70, w: 100, h: 40, desc: 'JWT Web Client' },
                        { id: 'gateway', label: 'API Gateway', x: 170, y: 70, w: 100, h: 40, desc: 'Spring Gateway' },
                        { id: 'auth', label: 'Auth Service', x: 310, y: 40, w: 110, h: 40, desc: 'JWT Validation' },
                        { id: 'walletsvc', label: 'Wallet Service', x: 310, y: 110, w: 110, h: 40, desc: 'Manages ledger DB' },
                        { id: 'txsvc', label: 'Transaction Svc', x: 490, y: 70, w: 120, h: 40, desc: 'Atomic posts' },
                        { id: 'kafka', label: 'Kafka Event Bus', x: 490, y: 210, w: 120, h: 40, desc: 'Saga stream partitions' },
                        { id: 'redis', label: 'Redis Balance Lock', x: 200, y: 210, w: 130, h: 40, desc: 'SETNX balance key' },
                        { id: 'postgres', label: 'PostgreSQL DB', x: 340, y: 210, w: 110, h: 40, desc: 'Ledger table schema' },
                        { id: 'otel', label: 'OpenTelemetry', x: 670, y: 140, w: 100, h: 40, desc: 'Distributed tracing' }
                      ].map(node => (
                        <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
                          <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8"
                            fill="#FFFFFF" stroke={hoveredNode === node.id ? '#0A84FF' : 'rgba(180,210,230,0.6)'} strokeWidth={hoveredNode === node.id ? 2 : 1.5}
                            className="transition-all duration-200 shadow-ice-sm dark:fill-slate-900"/>
                          <text x={node.x + node.w/2} y={node.y + 18} fill="#111827" className="dark:fill-white" fontSize="10.5" fontFamily="Inter" fontWeight="700" textAnchor="middle">{node.label}</text>
                          <text x={node.x + node.w/2} y={node.y + 30} fill="#94A3B8" fontSize="8" fontFamily="mono" textAnchor="middle">{node.desc}</text>
                        </g>
                      ))}
                    </svg>
                  )}

                  {/* Collabrix (Real-Time Audio / NLP) Diagram */}
                  {selectedArchProject.id === 'collabrix' && (
                    <svg className="w-[780px] h-[340px]" viewBox="0 0 780 340" fill="none">
                      <path d="M 90 90 L 190 90 M 290 90 L 390 90 M 490 90 L 590 90 M 640 110 L 640 180 M 590 200 L 490 200 M 390 200 L 290 200"
                        fill="none" stroke={activeFlowPath.collabrix === 'stt' ? '#0A84FF' : '#E2E8F0'} strokeWidth={activeFlowPath.collabrix === 'stt' ? 2 : 1}
                        strokeDasharray={activeFlowPath.collabrix === 'stt' ? '6 4' : 'none'} className={activeFlowPath.collabrix === 'stt' ? 'animate-[dash_12s_linear_infinite]' : ''}/>
                      
                      <path d="M 440 110 L 440 180 M 440 200 L 390 200 L 290 200"
                        fill="none" stroke={activeFlowPath.collabrix === 'gemini' ? '#F59E0B' : '#E2E8F0'} strokeWidth={activeFlowPath.collabrix === 'gemini' ? 2 : 0.8}
                        strokeDasharray={activeFlowPath.collabrix === 'gemini' ? '6 4' : 'none'} className={activeFlowPath.collabrix === 'gemini' ? 'animate-[dash_12s_linear_infinite]' : ''}/>

                      <path d="M 240 110 L 240 180 M 240 200 L 190 200 L 190 110"
                        fill="none" stroke={activeFlowPath.collabrix === 'rag' ? '#10B981' : '#E2E8F0'} strokeWidth={activeFlowPath.collabrix === 'rag' ? 2 : 0.8}
                        strokeDasharray={activeFlowPath.collabrix === 'rag' ? '6 4' : 'none'} className={activeFlowPath.collabrix === 'rag' ? 'animate-[dash_12s_linear_infinite]' : ''}/>

                      {[
                        { id: 'mic', label: 'Microphone/Client', x: 20, y: 70, w: 110, h: 40, desc: 'Web Speech API' },
                        { id: 'socket', label: 'WebSocket Svc', x: 170, y: 70, w: 100, h: 40, desc: 'Signaling broker' },
                        { id: 'mongo', label: 'MongoDB DB', x: 170, y: 180, w: 100, h: 40, desc: 'Transcript blocks' },
                        { id: 'spring', label: 'Spring Boot Server', x: 370, y: 70, w: 120, h: 40, desc: 'Session Coordinator' },
                        { id: 'py_nlp', label: 'Python NLP Svc', x: 370, y: 180, w: 120, h: 40, desc: 'Extractive summary' },
                        { id: 'webrtc', label: 'WebRTC Signaling', x: 570, y: 70, w: 120, h: 40, desc: 'STUN/TURN channels' },
                        { id: 'gemini_node', label: 'Gemini AI API', x: 570, y: 180, w: 120, h: 40, desc: 'Generates summaries' },
                        { id: 'qdrant', label: 'Qdrant DB', x: 240, y: 250, w: 110, h: 40, desc: 'Vector text matrix' }
                      ].map(node => (
                        <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
                          <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8"
                            fill="#FFFFFF" stroke={hoveredNode === node.id ? '#0A84FF' : 'rgba(180,210,230,0.6)'} strokeWidth={hoveredNode === node.id ? 2 : 1.5}
                            className="transition-all duration-200 shadow-ice-sm dark:fill-slate-900"/>
                          <text x={node.x + node.w/2} y={node.y + 18} fill="#111827" className="dark:fill-white" fontSize="10.5" fontFamily="Inter" fontWeight="700" textAnchor="middle">{node.label}</text>
                          <text x={node.x + node.w/2} y={node.y + 30} fill="#94A3B8" fontSize="8" fontFamily="mono" textAnchor="middle">{node.desc}</text>
                        </g>
                      ))}
                    </svg>
                  )}

                  {/* MovieShark Booking Diagram */}
                  {selectedArchProject.id === 'movieshark' && (
                    <svg className="w-[780px] h-[340px]" viewBox="0 0 780 340" fill="none">
                      <path d="M 90 90 L 190 90 M 290 90 L 390 90 M 440 110 L 440 180 M 440 200 L 390 200 L 290 200"
                        fill="none" stroke={activeFlowPath.movieshark === 'lock' ? '#F59E0B' : '#E2E8F0'} strokeWidth={activeFlowPath.movieshark === 'lock' ? 2 : 1}
                        strokeDasharray={activeFlowPath.movieshark === 'lock' ? '6 4' : 'none'} className={activeFlowPath.movieshark === 'lock' ? 'animate-[dash_12s_linear_infinite]' : ''}/>

                      <path d="M 90 90 L 190 90 M 240 110 L 240 180"
                        fill="none" stroke={activeFlowPath.movieshark === 'es' ? '#0A84FF' : '#E2E8F0'} strokeWidth={activeFlowPath.movieshark === 'es' ? 2 : 0.8}
                        strokeDasharray={activeFlowPath.movieshark === 'es' ? '6 4' : 'none'} className={activeFlowPath.movieshark === 'es' ? 'animate-[dash_12s_linear_infinite]' : ''}/>

                      <path d="M 440 90 L 570 90 M 620 110 L 620 180 M 570 200 L 490 200"
                        fill="none" stroke={activeFlowPath.movieshark === 'razorpay' ? '#10B981' : '#E2E8F0'} strokeWidth={activeFlowPath.movieshark === 'razorpay' ? 2 : 0.8}
                        strokeDasharray={activeFlowPath.movieshark === 'razorpay' ? '6 4' : 'none'} className={activeFlowPath.movieshark === 'razorpay' ? 'animate-[dash_12s_linear_infinite]' : ''}/>

                      {[
                        { id: 'client', label: 'User Client', x: 20, y: 70, w: 100, h: 40, desc: 'React View' },
                        { id: 'gate', label: 'Spring Boot App', x: 170, y: 70, w: 110, h: 40, desc: 'Controller APIs' },
                        { id: 'es_node', label: 'Elasticsearch DB', x: 170, y: 180, w: 110, h: 40, desc: 'Search index' },
                        { id: 'redis_lock', label: 'Redis Seat Lock', x: 370, y: 180, w: 120, h: 40, desc: 'SETNX seat key' },
                        { id: 'mysql', label: 'MySQL Database', x: 220, y: 250, w: 110, h: 40, desc: 'Order transaction' },
                        { id: 'limit', label: 'Bucket4j Limiter', x: 370, y: 70, w: 120, h: 40, desc: 'IP rate control' },
                        { id: 'razorpay_node', label: 'Razorpay Gateway', x: 570, y: 70, w: 120, h: 40, desc: 'External acquirer' },
                        { id: 'webhook', label: 'Webhook Handler', x: 570, y: 180, w: 120, h: 40, desc: 'Reconcile callback' }
                      ].map(node => (
                        <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
                          <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8"
                            fill="#FFFFFF" stroke={hoveredNode === node.id ? '#0A84FF' : 'rgba(180,210,230,0.6)'} strokeWidth={hoveredNode === node.id ? 2 : 1.5}
                            className="transition-all duration-200 shadow-ice-sm dark:fill-slate-900"/>
                          <text x={node.x + node.w/2} y={node.y + 18} fill="#111827" className="dark:fill-white" fontSize="10.5" fontFamily="Inter" fontWeight="700" textAnchor="middle">{node.label}</text>
                          <text x={node.x + node.w/2} y={node.y + 30} fill="#94A3B8" fontSize="8" fontFamily="mono" textAnchor="middle">{node.desc}</text>
                        </g>
                      ))}
                    </svg>
                  )}

                </div>
              </div>

              {/* 4. Engineering Highlights */}
              <div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-4">Design Patterns & Mechanisms</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {selectedArchProject.highlights.map((hl, i) => (
                    <div key={i}
                      className="bg-[#F2F8FD]/45 dark:bg-slate-900/40 p-5 rounded-card border border-[rgba(180,210,230,.3)] dark:border-slate-800">
                      <h4 className="text-[14px] font-bold text-gray-950 dark:text-white mb-2 tracking-tight">
                        {hl.title}
                      </h4>
                      <p className="text-[12px] text-slate-400 leading-relaxed">{hl.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Sequence Flows ("How It Works") */}
              <div className="border border-[rgba(180,210,230,.4)] dark:border-slate-800 rounded-card overflow-hidden">
                <button
                  onClick={() => toggleFlow(selectedArchProject.id)}
                  className="w-full flex items-center justify-between p-5 bg-white dark:bg-slate-900 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-ice-50 dark:bg-ice-900/30 text-ice-500">
                      <Workflow size={16}/>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-extrabold text-gray-950 dark:text-white tracking-tight">Step-by-Step Transaction Sequence</h4>
                      <p className="text-[12px] text-slate-400">Execution flow trace across service boundaries</p>
                    </div>
                  </div>
                  {expandedFlow === selectedArchProject.id ? <ChevronUp size={18} className="text-slate-400"/> : <ChevronDown size={18} className="text-slate-400"/>}
                </button>

                <AnimatePresence>
                  {expandedFlow === selectedArchProject.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="bg-[#F2F8FD]/30 dark:bg-slate-900/20 border-t border-[rgba(180,210,230,.25)] dark:border-slate-800 overflow-hidden"
                    >
                      <div className="p-6 flex flex-col gap-5">
                        {selectedArchProject.sequenceSteps.map((step, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 pb-5 border-b border-[rgba(180,210,230,.2)] dark:border-slate-800 last:border-0 last:pb-0">
                            
                            <div className="flex items-center gap-3 shrink-0">
                              <span className="w-6 h-6 rounded-full bg-ice-100 dark:bg-ice-900/40 border border-ice-200 dark:border-ice-700/30 text-[10px] text-ice-600 dark:text-ice-400 font-extrabold flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <div className="text-xs font-mono font-extrabold text-ice-600 dark:text-ice-400 uppercase tracking-wider">
                                {step.from} → {step.to}
                              </div>
                            </div>

                            <div className="flex-1">
                              <p className="text-[14px] font-bold text-gray-950 dark:text-white mb-1">
                                {step.action}
                              </p>
                              <p className="text-[12px] text-slate-400 leading-relaxed">
                                {step.explanation}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 6. Performance Metrics */}
              <div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-4">Proven Benchmarks Under Load</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedArchProject.metrics.map(metric => (
                    <div key={metric.label}
                      className="bg-white dark:bg-slate-900 p-5 rounded-card border border-[rgba(180,210,230,.35)] dark:border-slate-800 shadow-ice-sm">
                      <p className="text-2xl sm:text-3xl font-black text-ice-500 tracking-tight mb-1">{metric.value}</p>
                      <p className="text-[12px] font-bold text-gray-900 dark:text-white tracking-tight">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Engineering Challenges Solved */}
              <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-[rgba(180,210,230,.4)] dark:border-slate-800 rounded-card shadow-ice-sm mb-4">
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                  <AlertCircle size={14} className="text-ice-500"/>
                  Production Engineering Bottlenecks Solved
                </h4>
                <ul className="flex flex-col gap-3">
                  {selectedArchProject.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-ice-500 shrink-0 mt-2"/>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

