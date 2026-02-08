/**
 * Projects Section
 * 
 * Project cards with proximity effects.
 */

"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "@/components/ui/external-link";
import { IconGitHub, IconExternalLink } from "@/components/ui/icons";
import { profile, getFeaturedProjects } from "@/content/profile";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref } = useScrollReveal<HTMLDivElement>({ delay });
  return <div ref={ref} className={className}>{children}</div>;
}

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = profile.projects.filter((p) => !p.featured);

  return (
    <Section
      sectionId="projects"
      title="Works & Projects"
      subtitle="A selection of projects I've built, from security tools to infrastructure automation."
    >
      {/* Featured Projects */}
      <div className="mb-16">
        <h3 className="text-lg font-medium text-[hsl(var(--color-text-secondary))] mb-6">
          Featured
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <Card interactive proximityRadius={350} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <span className="text-sm text-[hsl(var(--color-text-muted))]">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-[hsl(var(--color-text-secondary))] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="border-t border-[hsl(var(--color-border))] p-4">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <ExternalLink
                        href={project.githubUrl}
                        className="text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-text))]"
                      >
                        <IconGitHub size={18} />
                        <span className="text-sm ml-1">Code</span>
                      </ExternalLink>
                    )}
                    {project.liveUrl && (
                      <ExternalLink
                        href={project.liveUrl}
                        className="text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-text))]"
                      >
                        <IconExternalLink size={18} />
                        <span className="text-sm ml-1">Live</span>
                      </ExternalLink>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-lg font-medium text-[hsl(var(--color-text-secondary))] mb-6">
          Other Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Card className="h-full">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">{project.title}</h4>
                  <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
