import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { personalInfo } from "@/data/portfolioData";
import bhavyaPhoto from "@/assets/bhavya-photo.jpg";

export const HeroSection = () => {
  const typedText = useTypingEffect(personalInfo.titles, 80, 40, 2200);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8"
      >
        {/* Profile photo */}
        <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl animate-glow-pulse" />
          <img
            src={bhavyaPhoto}
            alt="Bhavya Pratap Singh Tomar"
            className="relative w-full h-full rounded-full object-cover border-2 border-primary/30 shadow-lg"
          />
        </div>

        {/* Greeting */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {personalInfo.greeting}
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground h-8">
            <span className="text-gradient font-semibold">{typedText}</span>
            <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">
              &nbsp;
            </span>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            {
              icon: Mail,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-3 rounded-xl hover:glow transition-all"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-foreground/80" />
            </motion.a>
          ))}
        </div>

        {/* Explore prompt */}
        <motion.button
          type="button"
          onClick={scrollToAbout}
          className="text-sm text-muted-foreground/60 flex items-center gap-1 justify-center pt-8 cursor-pointer hover:text-muted-foreground/80 transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to About section"
        >
          Click the dock to explore
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
};
