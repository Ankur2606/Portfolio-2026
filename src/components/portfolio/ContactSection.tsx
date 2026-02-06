import { useState } from "react";
import { motion } from "framer-motion";
import { MacWindow } from "./MacWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo } from "@/data/portfolioData";
import { Send, Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:${personalInfo.email}?subject=${subject}&body=${body}`,
      "_self"
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <MacWindow title="Contact — Messages" id="contact" variant="messages">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Let's build something amazing together 🚀
            </h3>

            {(["name", "email", "message"] as const).map((field) => (
              <div key={field}>
                <label className="text-xs text-muted-foreground capitalize block mb-1">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, message: e.target.value }))
                    }
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
                    placeholder="Your message..."
                    required
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, [field]: e.target.value }))
                    }
                    className="w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder={field === "name" ? "Your name" : "your@email.com"}
                    required
                  />
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </form>

          {/* Direct links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground">
              Or reach out directly
            </h4>
            {[
              {
                icon: Mail,
                label: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: Github,
                label: `github.com/${personalInfo.githubUsername}`,
                href: personalInfo.github,
              },
              {
                icon: Linkedin,
                label: "LinkedIn Profile",
                href: personalInfo.linkedin,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 glass rounded-xl hover:glow transition-all group"
              >
                <link.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </MacWindow>
    </motion.div>
  );
};
