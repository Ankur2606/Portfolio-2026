import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skillCategories, certifications } from "@/data/portfolioData";
import { Award } from "lucide-react";

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="Skills — System Preferences" id="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08 + 0.2, duration: 0.4 }}
              className="glass rounded-xl p-4 space-y-3 hover:glow transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="font-semibold text-sm text-foreground">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-foreground/80 border border-border/20 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-border/30 pt-4">
          <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" /> Certifications
          </h4>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </MacWindow>
    </motion.div>
  );
};
