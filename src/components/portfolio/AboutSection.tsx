import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo, stats } from "@/data/portfolioData";
import bhavyaPhoto from "@/assets/bhavya-photo.jpg";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="About — Finder" id="about" variant="finder">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Photo */}
          <img
            src={bhavyaPhoto}
            alt="Bhavya"
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border border-border/40 flex-shrink-0"
          />

          <div className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">{personalInfo.bio}</p>
            <p className="text-sm text-muted-foreground">{personalInfo.education}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 pt-2">
              {stats.map((s) => (
                <span
                  key={s.label}
                  className="glass px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  <span className="text-primary font-bold">{s.value}</span>{" "}
                  <span className="text-muted-foreground">{s.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </MacWindow>
    </motion.div>
  );
};
