export const personalInfo = {
  name: "Bhavya Pratap Singh Tomar",
  greeting: "Hey, I'm Bhavya 👋",
  titles: ["Applied AI Engineer", "3+ Hackathon Winner", "Full-Stack Builder"],
  email: "bhavyapsingh28@gmail.com",
  phone: "+91-7974559903",
  github: "https://github.com/Ankur2606",
  githubUsername: "Ankur2606",
  linkedin: "https://linkedin.com/in/bhavya-pratap-singh-tomar",
  education: "B.Tech AIML · MITS Gwalior · CGPA 7.7 · 2022–2026",
  bio: "I am an Applied AI engineer who bridges machine learning research and production backend systems. With a National Rank 23 in the Amazon ML Challenge and hands on experience scaling infrastructure for 10,000 concurrent users I specialize in applied AI. I build agentic workflows using LangGraph and optimize LLM pipelines for domains ranging from food security to automated code analysis.",
};

export const stats = [
  { label: "Hackathon Wins", value: "3+" },
  { label: "Users Impacted", value: "2M+" },
  { label: "AI Projects Shipped", value: "8+" },
  { label: "LeetCode Problems", value: "200+" },
];

export const experience = [
  {
    company: "Seequenze Technologies [cite: 3]",
    role: "AI Development Intern [cite: 3]",
    duration: "Nov 2024 Jan 2025 [cite: 4]",
    bullets: [
      "Developed a robust Fast API backend supporting 10K+ concurrent users for LLM-based code refactoring. [cite: 7]",
      "Engineered an advanced LLM-based code refactoring system handling 200K+ tokens, utilizing custom prompt engineering and AST-level analysis to bypass context window limits while preserving context integrity. [cite: 5]",
      "Developed an intelligent code transformation pipeline using advanced prompting techniques to convert static layouts into responsive designs and inline CSS to Tailwind CSS, serving 1,000+ business clients. [cite: 6]"
    ],
    metrics: ["10K+ concurrent users [cite: 7]", "200K+ tokens [cite: 5]"]
  },
  {
    company: "FoodNEST(S) [cite: 8]",
    role: "Artificial Intelligence Intern [cite: 8]",
    duration: "Sept 2024 Nov 2024 [cite: 9]",
    bullets: [
      "Developed and deployed an in-house multilingual, multimodal AI chatbot using Watsonx Granite models and FastAPI, automating order processing for 2M+ stakeholders and reducing manual overhead by 30%. [cite: 10]",
      "Devised a multilingual architecture across 22+ Indic languages, improving intent accuracy and customer satisfaction. [cite: 11]",
      "Architected distributed web/map/video scrapers with Python, Docker, and EC2, ensuring 98% uptime and secure hybrid-cloud data ingestion for analytics pipelines. [cite: 12]",
      "Built a scalable RAG application using LlamaIndex and prompt chaining, integrating Watsonx.ai APIs for governance-compliant model monitoring and supporting 500K+ clients. [cite: 13]"
    ],
    metrics: ["2M+ stakeholders [cite: 10]", "30% overhead reduction [cite: 10]"]
  }
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
    description: "A low-latency, real-time AI voice assistant with end-to-end streaming pipeline — from speech recognition to LLM response to voice synthesis, all under 500ms.",
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
    title: "Amazon ML Challenge 2025",
    rank: "Top 23",
    total: "83,000+ participants",
    org: "Amazon",
    highlight: true,
  },
  {
    title: "Intel AI Hackathon 2025",
    rank: "National Winner",
    total: "4000+ teams",
    org: "Intel",
    highlight: true,
  },
  {
    title: "Hackodisha 5.0",
    rank: "National Winner",
    total: "6000+ participants",
    org: "Webwiz, NIT Rourkela",
    highlight: true,
  },
  {
    title: "Google Cloud GenAI",
    rank: "Top 7",
    total: "90000+ participants",
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
