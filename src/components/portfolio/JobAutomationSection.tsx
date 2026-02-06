import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { mockJobs } from "@/data/portfolioData";
import { Bot, Zap, BarChart3, ArrowRight, Check, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Tab = "overview" | "demo" | "architecture";

export const JobAutomationSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [applying, setApplying] = useState<string | null>(null);
  const [applied, setApplied] = useState<string[]>([]);

  const handleAutoApply = (id: string) => {
    setApplying(id);
    setTimeout(() => {
      setApplied((prev) => [...prev, id]);
      setApplying(null);
    }, 1500);
  };

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: "overview", label: "Overview", icon: Bot },
    { key: "demo", label: "Live Demo", icon: Zap },
    { key: "architecture", label: "Architecture", icon: BarChart3 },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="AutoApply — What I'm Building Next" id="automation">
        {/* Tab bar */}
        <div className="flex gap-1 mb-6 p-1 glass rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-foreground">
                🤖 Lightweight Job Application Automation
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                A platform that leverages AI to automate the tedious parts of
                job hunting — intelligent job matching based on your skills,
                automated resume tailoring, one-click applications, and a
                centralized tracker to manage your pipeline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    title: "AI Matching",
                    desc: "Skills-based scoring with ML-powered relevance ranking",
                  },
                  {
                    title: "Auto Apply",
                    desc: "One-click submission with AI-tailored cover letters",
                  },
                  {
                    title: "Smart Tracker",
                    desc: "Real-time pipeline dashboard with status insights",
                  },
                ].map((f) => (
                  <div key={f.title} className="glass rounded-xl p-4 space-y-1">
                    <h4 className="font-semibold text-sm text-primary">
                      {f.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "demo" && (
            <motion.div
              key="demo"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-3"
            >
              <p className="text-xs text-muted-foreground mb-4">
                ✨ Interactive mockup — click "Auto Apply" to see the flow
              </p>
              {mockJobs.map((job) => {
                const isApplied = applied.includes(job.id);
                const isApplying = applying === job.id;
                return (
                  <div
                    key={job.id}
                    className="glass rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-sm text-foreground">
                          {job.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {job.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {job.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0 bg-secondary/40"
                          >
                            {t}
                          </Badge>
                        ))}
                        <span className="text-[10px] text-muted-foreground">
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    {/* Match score */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`text-lg font-bold ${
                          job.match >= 90 ? "text-green-400" : job.match >= 80 ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {job.match}%
                      </div>

                      <button
                        onClick={() => !isApplied && !isApplying && handleAutoApply(job.id)}
                        disabled={isApplied || isApplying}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                          isApplied
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : isApplying
                            ? "bg-primary/20 text-primary"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                      >
                        {isApplied ? (
                          <>
                            <Check className="w-3 h-3" /> Applied
                          </>
                        ) : isApplying ? (
                          <>
                            <Loader2 className="w-3 h-3 animate-spin" /> Applying...
                          </>
                        ) : (
                          <>
                            <Zap className="w-3 h-3" /> Auto Apply
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <p className="text-sm text-muted-foreground">
                End-to-end pipeline architecture
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 py-4">
                {[
                  { label: "Job Scraper", sub: "Multi-source aggregation" },
                  { label: "AI Matcher", sub: "Skill-based scoring" },
                  { label: "Resume Tailor", sub: "LLM-powered customization" },
                  { label: "Auto Submit", sub: "One-click apply" },
                  { label: "Tracker", sub: "Real-time dashboard" },
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-2">
                    <div className="glass rounded-xl p-3 text-center min-w-[120px]">
                      <p className="text-xs font-semibold text-primary">
                        {step.label}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {step.sub}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-primary/50 flex-shrink-0 rotate-90 sm:rotate-0" />
                    )}
                  </div>
                ))}
              </div>
              <div className="glass rounded-xl p-4 text-sm text-foreground/80">
                <span className="text-primary font-semibold">Tech Stack: </span>
                Python · FastAPI · LangChain · Playwright · PostgreSQL · React
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MacWindow>
    </motion.div>
  );
};
