import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";

export const GitHubSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const u = personalInfo.githubUsername;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="GitHub — Activity Monitor" id="github">
        <div className="space-y-6">
          {/* Contribution chart */}
          <div className="overflow-x-auto rounded-lg">
            <img
              src={`https://ghchart.rshah.org/3b82f6/${u}`}
              alt={`${u}'s GitHub contribution chart`}
              className="w-full min-w-[700px] rounded-lg"
              loading="lazy"
            />
          </div>

          {/* GitHub stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&icon_color=a78bfa&bg_color=00000000`}
              alt="GitHub stats"
              className="w-full rounded-lg"
              loading="lazy"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&bg_color=00000000`}
              alt="Top languages"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Profile link */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            View full profile <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </MacWindow>
    </motion.div>
  );
};
