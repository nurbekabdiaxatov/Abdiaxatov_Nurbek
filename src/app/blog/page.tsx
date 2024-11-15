"use client";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import BlurFade from "@/components/magicui/blur-fade"; // Keep this
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { CarouselPlugin } from "@/components/CarouselPlugin";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";
const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <main className="flex flex-col  space-y-10 min-h-screen  font-sans antialiased max-w-6xl mx-auto py-4 sm:py-4 px-6">
      
        <div className="">
          <section>
            <CarouselPlugin />
        </section>
        <section>
          <MarqueeDemo />
        </section>
      </div>

    

      <Particles
        className="absolute inset-0 -z-10  h-[100vh] "
        quantity={500}
        ease={60}
        color={color}
        refresh
      />
    </main>
  );
}
