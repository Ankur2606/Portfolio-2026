import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Rocket,
  Trophy,
  Wrench,
  Github,
  FileText,
  Bot,
  Mail,
} from "lucide-react";

const dockItems = [
  { icon: Home, label: "Home", target: "hero" },
  { icon: User, label: "About", target: "about" },
  { icon: Briefcase, label: "Experience", target: "experience" },
  { icon: Rocket, label: "Projects", target: "projects" },
  { icon: Trophy, label: "Achievements", target: "achievements" },
  { icon: Wrench, label: "Skills", target: "skills" },
  { icon: Github, label: "GitHub", target: "github" },
  { icon: FileText, label: "Resume", target: "resume" },
  { icon: Bot, label: "AutoApply", target: "automation" },
  { icon: Mail, label: "Contact", target: "contact" },
];

export const Dock = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <div className="glass-strong rounded-2xl px-2 sm:px-3 py-2 flex items-end gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide">
        {dockItems.map((item) => (
          <motion.button
            key={item.target}
            onClick={() => scrollTo(item.target)}
            whileHover={{ scale: 1.35, y: -10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative group p-2 sm:p-2.5 rounded-xl hover:bg-secondary/50 transition-colors flex-shrink-0"
            aria-label={item.label}
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-primary transition-colors" />

            {/* Tooltip */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs glass-strong px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>

            {/* Reflection dot */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary/60 transition-all" />
          </motion.button>
        ))}
      </div>
    </nav>
  );
};
