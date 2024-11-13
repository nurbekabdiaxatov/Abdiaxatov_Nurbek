
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
const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col  space-y-10 min-h-screen bg-background font-sans antialiased max-w-6xl mx-auto py-4 sm:py-4 px-6">
      <div className=" grid grid-cols-3  items-center ">
        <div className="">
          <section>
            <CarouselPlugin />
          </section>
      </div>
      </div>
      
    


    </main>
  );
}
