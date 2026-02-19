import { useEffect } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { JobAutomationSection } from "@/components/portfolio/JobAutomationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Dock } from "@/components/portfolio/Dock";

const Index = () => {
  useEffect(() => {
    document.title = "Bhavya Pratap Singh Tomar | AI Engineer & Builder";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Portfolio of Bhavya Pratap Singh Tomar — AI Engineer, Hackathon Champion, and Full-Stack Developer specializing in ML, NLP, and scalable systems.";
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = content;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-mesh animate-page-reveal">
      {/* Hero — full viewport */}
      <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <HeroSection />
      </div>

      {/* Sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 pb-32 animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
        <GitHubSection />
        <ResumeSection />
        <JobAutomationSection />
        <ContactSection />
      </main>

      {/* macOS Dock */}
      <div className="animate-dock-rise" style={{ animationDelay: '0.8s' }}>
        <Dock />
      </div>
    </div>
  );
};

export default Index;
