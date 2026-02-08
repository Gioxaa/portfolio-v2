/**
 * Skills Section
 * 
 * Skill categories with level indicators.
 */

"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profile, type Skill } from "@/content/profile";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref } = useScrollReveal<HTMLDivElement>({ delay });
  return <div ref={ref} className={className}>{children}</div>;
}

const levelColors: Record<Skill["level"], string> = {
  beginner: "bg-[hsl(var(--color-text-muted)/0.2)]",
  intermediate: "bg-[hsl(var(--color-info)/0.3)]",
  advanced: "bg-[hsl(var(--color-accent)/0.4)]",
  expert: "bg-[hsl(var(--color-accent))]",
};

const levelWidths: Record<Skill["level"], string> = {
  beginner: "w-1/4",
  intermediate: "w-2/4",
  advanced: "w-3/4",
  expert: "w-full",
};

export function SkillsSection() {
  return (
    <Section
      sectionId="skills"
      title="Skills & Expertise"
      subtitle="Technologies and domains I work with across the full stack and security spectrum."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {profile.skillCategories.map((category, index) => (
          <Reveal key={category.name} delay={index * 0.1}>
            <Card interactive proximityRadius={400} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-6">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs capitalize">
                          {skill.level}
                        </Badge>
                      </div>
                      <div className="h-1.5 rounded-full bg-[hsl(var(--color-border))] overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            levelWidths[skill.level],
                            levelColors[skill.level]
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
