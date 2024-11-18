"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
const BLUR_FADE_DELAY = 0.04;
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { createSwapy } from "swapy";

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  useEffect(() => {
    // Ensure Swapy only runs in the browser
    if (typeof window !== "undefined") {
      const container = document.querySelector('.projects-container');
      if (container) {
        const swapy = createSwapy(container, {
          animation: 'dynamic', // Change animation if needed
        });

        swapy.onSwap((event) => {
          console.log(event.data.object); // You can store the new order here
        });

        // Optional: Enable or disable Swapy
        swapy.enable(true);
      } else {
        console.warn("Swapy container not found");
      }
    }
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <main className="flex flex-col space-y-10 min-h-screen font-sans antialiased max-w-2xl mx-auto py-4 sm:py-4 px-6">
      <section id="projects">
        <div className="space-y-12 w-full py-0 mb-20">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Wrap the projects in a container with a class for Swapy */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto projects-container cursor-grab">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.id || id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <div data-swapy-slot={`project-${id}`} className="flex flex-col h-full">
                  <div data-swapy-item={`item-${id}`} className="flex-1 flex flex-col justify-between">
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <Particles
        className="absolute inset-0 -z-10 h-[100%]"
        quantity={500}
        ease={60}
        color={color}
        refresh
      />
    </main>
  );
}
