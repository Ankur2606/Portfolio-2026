export const personalInfo = {
  name: "Bhavya Pratap Singh Tomar",
  greeting: "Hey, I'm Bhavya 👋",
  titles: ["AI Engineer", "Hackathon Champion", "Full-Stack Builder"],
  email: "bhavyapsingh28@gmail.com",
  phone: "+91-8305595498",
  github: "https://github.com/Ankur2606",
  githubUsername: "Ankur2606",
  linkedin: "https://linkedin.com/in/bhavya-pratap-singh-tomar",
  education: "B.Tech CSE (AI & Robotics) · VIT Bhopal University · CGPA 8.37 · 2022–2026",
  bio: "I'm an AI engineer who thrives at the intersection of machine learning and production-grade software. With 9+ hackathon wins and experience building systems that handle millions of users, I specialize in turning cutting-edge AI research into real-world impact. From real-time trading platforms to NLP pipelines for food security — I build things that matter.",
};

export const stats = [
  { label: "Hackathon Wins", value: "9+" },
  { label: "Users Impacted", value: "2M+" },
  { label: "Tokens Processed", value: "200K+" },
  { label: "LeetCode Problems", value: "200+" },
];

export const experience = [
  {
    company: "Seequenze Technologies",
    role: "Software Development Engineer Intern",
    duration: "Dec 2024 — Feb 2025",
    bullets: [
      "Engineered a real-time betting & trading platform handling **10K+ concurrent users** using WebSocket and Redis pub/sub architecture",
      "Built fault-tolerant infrastructure that **reduced trade failures by 30%** through robust error handling and retry mechanisms",
      "Implemented real-time odds calculation engine with sub-second latency for live trading scenarios",
    ],
    metrics: ["10K+ concurrent users", "30% fewer failures"],
  },
  {
    company: "FoodNEST — CSIR-CFTRI",
    role: "AI Research Intern",
    duration: "May 2024 — Jul 2024",
    bullets: [
      "Developed NLP & ML models for food security analytics impacting **2M+ stakeholders** across agricultural supply chains",
      "Processed **200K+ tokens** for large-scale data analysis using transformer-based models",
      "Achieved **25% uplift** in crop prediction accuracy through ensemble learning techniques",
    ],
    metrics: ["2M+ stakeholders", "25% accuracy uplift"],
  },
];

export const projects = [
  {
    name: "CQ Lite",
    tagline: "AI-Powered Multi-Agent Code Review",
    description:
      "A multi-agent code review system that autonomously analyzes PRs, detects bugs, security vulnerabilities, and code smells — then generates actionable improvement suggestions.",
    tech: ["CrewAI", "LangChain", "Gemini", "FastAPI", "Python"],
    metric: "40% faster reviews",
    details: [
      "Multi-agent architecture with specialized reviewer agents for security, performance, and style",
      "Integrated with GitHub webhooks for automatic PR analysis",
      "Generates contextual fix suggestions with confidence scores",
      "Supports 10+ programming languages with language-specific review rules",
    ],
  },
  {
    name: "AI Voice Assistant",
    tagline: "Sub-500ms Latency Voice Pipeline",
    description:
      "A low-latency, real-time AI voice assistant with end-to-end streaming pipeline — from speech recognition to LLM response to voice synthesis, all under 500ms.",
    tech: ["Deepgram STT", "Groq LLM", "Smallest.ai TTS", "WebSocket", "Python"],
    metric: "<500ms latency",
    details: [
      "End-to-end streaming pipeline with parallel processing stages",
      "WebSocket-based bidirectional audio streaming",
      "Optimized for conversational AI with context-aware responses",
      "Achieved sub-500ms total round-trip latency",
    ],
  },
  {
    name: "NoPing",
    tagline: "Unified Productivity + Blockchain Platform",
    description:
      "A comprehensive productivity platform with integrated Web3 rewards — combining task management, collaboration tools, and gamified blockchain incentives.",
    tech: ["React", "Node.js", "Solidity", "Ethereum", "Hardhat"],
    metric: "Web3 gamification",
    details: [
      "Full-stack productivity suite with real-time collaboration",
      "Smart contract-based reward system for task completion",
      "Gamified experience with NFT achievements and token rewards",
      "Decentralized data ownership and portable reputation system",
    ],
  },
];

export const achievements = [
  {
    title: "Amazon ML Challenge",
    rank: "Top 23",
    total: "83,000+ teams",
    org: "Amazon",
    highlight: true,
  },
  {
    title: "Intel OneAPI Hackathon",
    rank: "National Winner",
    total: "",
    org: "Intel",
    highlight: true,
  },
  {
    title: "SIH 2024",
    rank: "National Finalist",
    total: "Top 5",
    org: "Govt. of India",
    highlight: true,
  },
  {
    title: "Google Cloud GenAI",
    rank: "Top 7",
    total: "",
    org: "Google Cloud",
    highlight: false,
  },
  {
    title: "AMD Pervasive AI",
    rank: "Top 10",
    total: "",
    org: "AMD",
    highlight: false,
  },
];

export const skillCategories = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Solidity"],
  },
  {
    category: "AI & ML",
    icon: "🧠",
    skills: ["PyTorch", "TensorFlow", "LangChain", "CrewAI", "HuggingFace", "RAG"],
  },
  {
    category: "Frameworks",
    icon: "⚛️",
    skills: ["React", "Next.js", "Node.js", "Express", "FastAPI"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "ChromaDB"],
  },
  {
    category: "Web3",
    icon: "⛓️",
    skills: ["Solidity", "Ethereum", "Hardhat"],
  },
];

export const certifications = [
  "Stanford Machine Learning Specialization",
  "DeepLearning.AI NLP Specialization",
];

export const mockJobs = [
  {
    id: "1",
    title: "Senior ML Engineer",
    company: "Google",
    match: 94,
    salary: "$180K–$250K",
    tags: ["PyTorch", "LangChain", "GCP"],
  },
  {
    id: "2",
    title: "AI Research Scientist",
    company: "Meta",
    match: 88,
    salary: "$160K–$220K",
    tags: ["Transformers", "Python", "RAG"],
  },
  {
    id: "3",
    title: "ML Platform Engineer",
    company: "Netflix",
    match: 91,
    salary: "$170K–$240K",
    tags: ["Kubernetes", "Python", "AWS"],
  },
  {
    id: "4",
    title: "Full Stack AI Developer",
    company: "Stripe",
    match: 76,
    salary: "$150K–$200K",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];
