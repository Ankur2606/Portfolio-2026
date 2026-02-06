import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experience } from "@/data/portfolioData";

const renderBullet = (text: string) => {
  // Bold text between ** markers
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-primary font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow
        title="experience — bash — 80×24"
        id="experience"
        variant="terminal"
        contentClassName="font-mono-code"
      >
        <div className="space-y-8">
          {/* Terminal prompt */}
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">bhavya@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">cat experience.log</span>
          </p>

          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 border-l-2 border-primary/30">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/80 border-2 border-background" />

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-sans">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-primary font-sans">{exp.role}</p>
                  <p className="text-xs text-muted-foreground">{exp.duration}</p>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-sm text-foreground/80 leading-relaxed font-sans flex gap-2"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      <span>{renderBullet(bullet)}</span>
                    </li>
                  ))}
                </ul>

                {/* Metric pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MacWindow>
    </motion.div>
  );
};
