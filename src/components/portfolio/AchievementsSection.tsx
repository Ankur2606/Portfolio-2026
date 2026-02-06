import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { achievements } from "@/data/portfolioData";
import { Trophy } from "lucide-react";

export const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="Achievements — Spotlight" id="achievements">
        {/* Featured achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {achievements
            .filter((a) => a.highlight)
            .map((a, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                className="relative glass rounded-xl p-6 text-center space-y-2 animate-shimmer overflow-hidden group"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-mac-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <Trophy className="w-8 h-8 mx-auto text-mac-gold" />
                <div className="text-2xl sm:text-3xl font-bold text-gradient">
                  {a.rank}
                </div>
                {a.total && (
                  <p className="text-xs text-muted-foreground">
                    out of {a.total}
                  </p>
                )}
                <h3 className="font-semibold text-foreground text-sm">
                  {a.title}
                </h3>
                <p className="text-xs text-primary">{a.org}</p>
              </motion.div>
            ))}
        </div>

        {/* Other achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {achievements
            .filter((a) => !a.highlight)
            .map((a, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1 + 0.6, duration: 0.4 }}
                className="glass rounded-xl p-4 flex items-center gap-4 group hover:glow transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-mac-gold/70" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {a.rank}
                    {a.total && (
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        / {a.total}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {a.title} · {a.org}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </MacWindow>
    </motion.div>
  );
};
