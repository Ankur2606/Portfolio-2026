import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, FileText, GraduationCap, Briefcase, Code, Trophy } from "lucide-react";

const highlights = [
  { icon: GraduationCap, text: "B.Tech CSE (AI & Robotics) — VIT Bhopal — 8.37 CGPA" },
  { icon: Briefcase, text: "2 production internships — Seequenze & CSIR-CFTRI" },
  { icon: Code, text: "3 major projects — AI code review, voice assistant, Web3" },
  { icon: Trophy, text: "9+ national hackathon wins including Amazon, Intel, Google" },
];

export const ResumeSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="Resume — Preview" id="resume">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Bhavya Pratap Singh Tomar</h3>
              <p className="text-sm text-muted-foreground">AI Engineer & Full-Stack Developer</p>
            </div>
          </div>

          <div className="space-y-3">
            {highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm">
                <h.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{h.text}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="/resume.pdf"
            download="Bhavya_Pratap_Singh_Tomar_Resume.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume (PDF)
          </motion.a>
        </div>
      </MacWindow>
    </motion.div>
  );
};
