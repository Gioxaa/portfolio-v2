/**
 * Skills Section
 * 
 * Skill categories with animated proficiency indicators.
 */

"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profile, type Skill } from "@/content/profile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref } = useScrollReveal<HTMLDivElement>({ delay });
  return <div ref={ref} className={className}>{children}</div>;
}

const getSkillConfig = (level: Skill["level"]) => {
  switch (level) {
    case "Expert":
      return { 
        width: "100%", 
        className: "bg-[hsl(var(--color-accent))] shadow-[0_0_15px_-2px_hsl(var(--color-accent))]" 
      };
    case "Proficient":
      return { 
        width: "75%", 
        className: "bg-[hsl(var(--color-accent))]/70" 
      };
    case "Familiar":
      return { 
        width: "50%", 
        className: "bg-[hsl(var(--color-accent))]/30" 
      };
    default:
      return { width: "0%", className: "bg-transparent" };
  }
};

export function SkillsSection() {
  return (
    <Section
      sectionId="skills"
      title="Skills & Expertise"
      subtitle="Technologies and domains I specialize in, categorized by proficiency."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {profile.skillCategories.map((category, index) => (
          <Reveal key={category.name} delay={index * 0.1}>
            <Card interactive proximityRadius={400} className="h-full border-[hsl(var(--color-border))]/50 bg-[hsl(var(--color-card))]/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold tracking-tight">{category.name}</h3>
                </div>
                
                <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => {
                    const config = getSkillConfig(skill.level);
                    return (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium group-hover:text-[hsl(var(--color-accent))] transition-colors duration-300">
                            {skill.name}
                          </span>
                          <Badge 
                            variant="outline" 
                            className={cn(
                              "text-[10px] px-2 py-0.5 border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))]",
                              skill.level === "Expert" && "border-[hsl(var(--color-accent))]/30 text-[hsl(var(--color-accent))]"
                            )}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        
                        <div className="h-1.5 w-full bg-[hsl(var(--color-border))]/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: config.width }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                              duration: 1.2, 
                              ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for "premium" feel
                              delay: 0.2 + (skillIndex * 0.05) 
                            }}
                            className={cn(
                              "h-full rounded-full relative",
                              config.className
                            )}
                          >
                            {/* Inner shine effect for expert level */}
                            {skill.level === "Expert" && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 h-full -skew-x-12 animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
