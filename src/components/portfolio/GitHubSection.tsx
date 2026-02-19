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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            <div className="flex w-full h-full bg-[#111827]/40 border border-white/5 rounded-lg overflow-hidden p-2">
              <img
                src={`https://github-stats-extended.vercel.app/api?username=${u}&rank_icon=github&show_icons=true&include_all_commits=true&hide_title=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&icon_color=a78bfa`}
                alt="GitHub stats"
                className="w-full h-full object-contain"
                loading="lazy"
              />https://github-stats-extended.vercel.app/api?username=Ankur2606&include_all_commits=true
            </div>
            
            <div className="flex w-full h-full bg-[#111827]/40 border border-white/5 rounded-lg overflow-hidden p-2">
              <img
                src={`https://github-stats-extended.vercel.app/api/top-langs?username=${u}&layout=donut&langs_count=4&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&height=160`}
                alt="Top languages"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
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
