import { useState } from "react";
import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/portfolioData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="Projects — Launchpad" id="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-xl p-5 text-left space-y-3 hover:glow transition-all group"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary/60 transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.tagline}
              </p>
              <div className="text-xs text-primary font-semibold">
                {project.metric}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5 bg-secondary/50"
                  >
                    {t}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5 bg-secondary/50"
                  >
                    +{project.tech.length - 3}
                  </Badge>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </MacWindow>

      {/* Project detail modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="glass-strong border-border/30 max-w-lg">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {selectedProject.name}
                </DialogTitle>
                <DialogDescription className="text-primary font-medium">
                  {selectedProject.tagline} · {selectedProject.metric}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {selectedProject.description}
              </p>
              <ul className="space-y-2">
                {selectedProject.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary">▸</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-secondary/50">
                    {t}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
