export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  architectureHighlights: string[];
  performanceImprovements: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: 'experience' | 'education' | 'achievement';
  details: string[];
}

export interface SystemDesignTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics?: string;
  bullets: string[];
  diagramType: 'saga' | 'outbox' | 'locking' | 'kafka' | 'gateway';
}

export interface PortfolioConfig {
  name: string;
  title: string;
  subTitle: string;
  summary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumeUrl: string;
  skills: {
    category: string;
    items: { name: string; iconName: string }[];
  }[];
  projects: Project[];
  systemDesign: SystemDesignTopic[];
  experience: ExperienceItem[];
  certifications: string[];
}

export const portfolioConfig: PortfolioConfig = {
  name: "MANIKAVASAGAM S",
  title: "Software Engineer",
  subTitle: "Java Backend & Full Stack Engineer",
  summary: "Computer Science graduate with hands-on experience in Java, Spring Boot, Microservices, REST APIs, and distributed backend systems. Built scalable backend applications using Spring Boot, Spring Data JPA, Hibernate, Kafka, Redis, PostgreSQL, and AWS. Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, SQL, microservices architecture, and backend system design, with experience developing, testing, debugging, and optimizing backend applications.",
  email: "manikiphone14email@gmail.com",
  phone: "6381638581",
  github: "https://github.com/manikiphone14email",
  linkedin: "https://linkedin.com/in/manikavasagam-s",
  leetcode: "https://leetcode.com/manikiphone14email",
  resumeUrl: "/resume.pdf",
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", iconName: "java" },
        { name: "JavaScript", iconName: "javascript" },
        { name: "TypeScript", iconName: "typescript" },
        { name: "SQL", iconName: "sql" }
      ]
    },
    {
      category: "Backend Frameworks & APIs",
      items: [
        { name: "Spring Boot", iconName: "springboot" },
        { name: "Spring Security", iconName: "security" },
        { name: "Spring Data JPA", iconName: "jpa" },
        { name: "Hibernate", iconName: "hibernate" },
        { name: "REST APIs & Design", iconName: "api" },
        { name: "JWT", iconName: "jwt" },
        { name: "WebSocket", iconName: "websocket" },
        { name: "OpenFeign & WebClient", iconName: "api" },
        { name: "Maven", iconName: "backend" }
      ]
    },
    {
      category: "Microservices & Architecture",
      items: [
        { name: "Microservices", iconName: "microservices" },
        { name: "API Gateway", iconName: "gateway" },
        { name: "Eureka Registry", iconName: "microservices" },
        { name: "Resilience4J", iconName: "microservices" },
        { name: "Saga Pattern", iconName: "saga" },
        { name: "Outbox / Inbox Pattern", iconName: "outbox" },
        { name: "Event-Driven Architecture", iconName: "event" }
      ]
    },
    {
      category: "Databases & Messaging",
      items: [
        { name: "PostgreSQL", iconName: "postgresql" },
        { name: "MySQL", iconName: "mysql" },
        { name: "MongoDB", iconName: "mongodb" },
        { name: "Qdrant Vector DB", iconName: "postgresql" },
        { name: "Redis Caching & Locks", iconName: "redis" },
        { name: "Apache Kafka", iconName: "kafka" }
      ]
    },
    {
      category: "DevOps, Cloud & Monitoring",
      items: [
        { name: "Docker & Kubernetes", iconName: "docker" },
        { name: "AWS (EC2, S3, RDS, Lambda, ECS)", iconName: "aws" },
        { name: "CI/CD Pipelines", iconName: "git" },
        { name: "Prometheus & Grafana", iconName: "prometheus" },
        { name: "OpenTelemetry", iconName: "opentelemetry" }
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "Spring AI", iconName: "ai" },
        { name: "LLMs & RAG", iconName: "ai" },
        { name: "Prompt Engineering", iconName: "ai" },
        { name: "LangChain & LangGraph", iconName: "ai" },
        { name: "Hugging Face & AI Agents", iconName: "ai" }
      ]
    },
    {
      category: "Testing & CS Fundamentals",
      items: [
        { name: "JUnit 5 & Mockito", iconName: "junit" },
        { name: "Data Structures & Algorithms", iconName: "dsa" },
        { name: "OOP & SOLID Principles", iconName: "dsa" },
        { name: "Design Patterns & SDLC", iconName: "dsa" },
        { name: "Git & Postman", iconName: "git" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", iconName: "react" },
        { name: "HTML5 & CSS3", iconName: "htmlcss" }
      ]
    }
  ],
  projects: [
    {
      title: "AgenticGPT — Multimodal Autonomous AI Platform",
      description: "Enterprise-grade stateful AI chat platform featuring long-term memory extraction, multimodal vision analysis, and adaptive RAG search pipelines.",
      longDescription: "Built a full-stack, autonomous AI chat platform powered by Python, FastAPI, and LangGraph DAG engine. Features asynchronous background memory extraction (SQLite + FAISS), local Ollama & Moondream Vision AI integration, adaptive document RAG search, and real-time Server-Sent Events (SSE) streaming.",
      techStack: ["Python", "FastAPI", "LangChain", "LangGraph", "React", "TypeScript", "Tailwind CSS", "FAISS", "SQLite", "Ollama", "Moondream Vision", "Redis"],
      architectureHighlights: [
        "Stateful LangGraph Agent Engine: Directed Acyclic Graph (DAG) state machine orchestrating autonomous tool selection, multi-step reasoning execution branches, and non-blocking SSE streaming.",
        "Asynchronous Long-Term Memory System: Background daemon worker extracts user identity, tech stack, and preferences into a dual-layer SQLite + FAISS vector memory with sub-0.5s recall.",
        "Multimodal Vision & Adaptive RAG: Local Moondream Vision (1.8B) for real-time image analysis (drag-and-drop & Ctrl+V paste) and adaptive PDF vector retrieval (k=15 for summaries vs. k=5 for Q&A)."
      ],
      performanceImprovements: [
        "Achieved sub-0.5s long-term memory retrieval latency across multi-modal user interactions using dual-layer SQLite fact indexing and FAISS vector similarity scoring.",
        "Eliminated response blocking with non-blocking Server-Sent Events (SSE) streaming while asynchronous background threads update memory indices and digest context."
      ],
      githubUrl: "https://github.com/manikiphone14email",
      liveDemoUrl: "#"
    },
    {
      title: "Distributed Fintech Wallet System",
      description: "Distributed wallet and transaction platform using Java, Spring Boot, Microservices, Kafka, Redis, and PostgreSQL.",
      longDescription: "Built a distributed wallet and transaction platform using Java, Spring Boot, and Microservices, developing secure REST APIs for wallet management, payments, and transaction processing with PostgreSQL, Redis, and Kafka.",
      techStack: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kafka", "Redis", "PostgreSQL", "AWS"],
      architectureHighlights: [
        "Implemented Saga-based distributed transaction workflows with Outbox/Inbox patterns and idempotent Kafka consumers to maintain consistency across microservices and prevent duplicate transaction processing.",
        "Improved concurrency handling and prevented conflicting updates using Redis distributed locks (SETNX), transactional workflows, and partition-aware Kafka message processing.",
        "Added observability and distributed tracing with Prometheus, Grafana, and OpenTelemetry to monitor service health, latency, and microservice interactions."
      ],
      performanceImprovements: [
        "Reduced database reads by 95% using Redis write-through caching (@Cacheable) for frequently accessed wallet and transaction data, improving response time and lowering database IOPS.",
        "Increased system throughput by 3x–5x and reduced end-to-end latency by up to 80% by introducing asynchronous event-driven processing for transaction, notification, and wallet update workflows."
      ],
      githubUrl: "https://github.com/manikiphone14email",
      liveDemoUrl: "#"
    },
    {
      title: "Real-Time Meeting Collaboration System",
      description: "Real-time AI-powered video conferencing and collaborative note-taking platform using React, Spring Boot, WebSockets, and Python NLP.",
      longDescription: "Built a real-time AI-powered video conferencing and collaborative note-taking platform using React, Spring Boot, WebSocket-based communication, and Python, supporting live captions, chat, and AI-generated meeting summaries.",
      techStack: ["React", "Spring Boot", "WebSocket", "Python", "MongoDB", "Web Speech API", "NLP"],
      architectureHighlights: [
        "Implemented low-latency transcript streaming using the Web Speech API and WebSockets to deliver real-time speech-to-text updates during meetings.",
        "Developed secure backend modules for JWT authentication, room-based session management, participant moderation, and real-time chat synchronization.",
        "Designed event-driven transcript handling and persistent storage using MongoDB and WebSocket-based streaming to support post-meeting summary generation and collaborative review workflows."
      ],
      performanceImprovements: [
        "Built a Python-based NLP pipeline for extractive summarization, keyword-based action-item detection, and concise meeting summary generation from transcript data.",
        "Optimized WebSpeech streaming over WebSockets for instant, low-latency live captions during concurrent video sessions."
      ],
      githubUrl: "https://github.com/manikiphone14email",
      liveDemoUrl: "#"
    },
    {
      title: "Movie Ticket Booking System",
      description: "Full-stack movie ticket booking platform with real-time seat locking, Elasticsearch search offloading, and Bucket4j rate limiting.",
      longDescription: "Developed a full-stack movie ticket booking platform using React and Spring Boot with JWT-based authentication, role-based access control, and modular REST APIs for users, admins, and theatre owners.",
      techStack: ["React", "Spring Boot", "MySQL", "WebSocket", "Elasticsearch", "Bucket4j"],
      architectureHighlights: [
        "Designed a real-time seat locking mechanism using WebSockets and soft locks with expiration, handling concurrent bookings and preventing race conditions during seat selection.",
        "Implemented transactional booking workflows and concurrency-safe seat allocation logic to ensure atomic booking confirmation under simultaneous user requests."
      ],
      performanceImprovements: [
        "Integrated Elasticsearch to optimize movie, theatre, and show search performance, offloading high-volume search queries from the primary relational database.",
        "Added API rate limiting using Bucket4j (token bucket algorithm) to protect backend services from request spikes and improve service reliability under heavy traffic."
      ],
      githubUrl: "https://github.com/manikiphone14email",
      liveDemoUrl: "https://book-your-show-mu.vercel.app"
    }
  ],
  systemDesign: [
    {
      id: "saga",
      title: "Distributed Saga & Outbox/Inbox Patterns",
      subtitle: "Event-driven consistency & idempotent transaction execution",
      description: "Maintains strict consistency across distributed microservices. Prevents duplicate transaction processing using idempotent Kafka consumers and Outbox/Inbox publishing patterns.",
      metrics: "Guaranteed transactional integrity & zero database drift",
      bullets: [
        "Saga orchestration manages multi-step wallet payment workflows and compensating rollbacks.",
        "Transactional Outbox pattern commits events into DB logs in the same atomic transaction as domain entities.",
        "Idempotent Kafka consumer keys filter duplicate messages on network retries."
      ],
      diagramType: "saga"
    },
    {
      id: "locking",
      title: "Redis Distributed Locks (SETNX) & Soft Locks",
      subtitle: "Preventing race conditions in seat bookings & wallet balances",
      description: "Solves simultaneous double-booking and concurrent account mutation issues using Redis distributed locks with TTL expiration and atomic SETNX commands.",
      metrics: "Prevents race conditions & double-spending under high concurrency",
      bullets: [
        "Seat selection acquires a soft lock with automatic TTL expiration via WebSockets.",
        "Redis SETNX locks key indices (e.g. wallet:user_id:lock) during monetary transfers.",
        "Pushes real-time occupancy updates to all connected UI clients instantly."
      ],
      diagramType: "locking"
    },
    {
      id: "outbox",
      title: "Elasticsearch Search Offloading & Caching",
      subtitle: "Offloading high-volume search queries and 95% DB read reduction",
      description: "Offloads heavy movie/theatre queries to Elasticsearch index nodes while utilizing Redis write-through caching (@Cacheable) for wallet data.",
      metrics: "95% database read reduction & instant search response",
      bullets: [
        "Syncs DB entities to Elasticsearch to handle high-frequency search and filter queries.",
        "Redis @Cacheable caches hot transaction records to minimize relational IOPS.",
        "Bucket4j rate-limiting guards microservices against traffic spikes and burst attacks."
      ],
      diagramType: "outbox"
    },
    {
      id: "kafka",
      title: "Event Streaming & Observability Tracing",
      subtitle: "Partition-aware Kafka event loops with OpenTelemetry & Grafana",
      description: "Asynchronous event-driven architecture driving transaction, notification, and wallet updates with end-to-end tracing using Prometheus, Grafana, and OpenTelemetry.",
      metrics: "3x–5x throughput boost & 80% lower end-to-end latency",
      bullets: [
        "Partition-aware Kafka message keys guarantee strict per-account event ordering.",
        "Prometheus & Grafana track microservice response latencies and system throughput.",
        "OpenTelemetry distributed tracing maps cross-service call trees for instant debugging."
      ],
      diagramType: "kafka"
    }
  ],
  experience: [
    {
      role: "Frontend Web Development Intern",
      company: "UpEd Learning Solutions",
      period: "May 2026",
      type: "experience",
      details: [
        "Contributed to the development of NexusFlow, a project management platform, using React and modern web development practices.",
        "Developed and improved frontend pages and reusable UI components for project and task management features.",
        "Worked on responsive and user-friendly interfaces for different screen sizes.",
        "Integrated frontend functionality with application APIs and handled user interactions and data display.",
        "Debugged UI issues, fixed functionality problems, and performed testing to improve application usability."
      ]
    },
    {
      role: "B.E Computer Science Engineering",
      company: "KLN College of Engineering",
      period: "2022 - 2026",
      type: "education",
      details: [
        "Graduated with a CGPA of 7.5 / 10.",
        "Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, Operating Systems, Networks, and Software Engineering."
      ]
    },
    {
      role: "LeetCode Milestone & Problem Solving",
      company: "LeetCode / Self-Paced DSA",
      period: "Ongoing",
      type: "achievement",
      details: [
        "Solved 200+ Data Structures and Algorithms problems on LeetCode.",
        "Demonstrated mastery in Arrays, Hashing, Strings, Trees, Graphs, Dynamic Programming, and System Design patterns."
      ]
    }
  ],
  certifications: [
    "Java Backend Development – GeeksforGeeks",
    "Full Stack Development – upGrad",
    "Java Programming – GeeksforGeeks",
    "Solved 200+ Data Structures and Algorithms problems on LeetCode"
  ]
};
