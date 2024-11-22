// // src/app/blog/page.tsx
// "use client"; // Ensure this is at the top of your file
// import { LayoutGridDemo } from "@/components/LayoutGridDemo";
// import BlurFade from "@/components/magicui/blur-fade"; // Keep this
// import BlurFadeText from "@/components/magicui/blur-fade-text";
// import { ProjectCard } from "@/components/project-card";
// import { ResumeCard } from "@/components/resume-card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { DATA } from "@/data/resume";
// import Link from "next/link";
// import Markdown from "react-markdown";
// import { MarqueeDemo } from "@/components/MarqueeDemo";
// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import FramerCarousel from "@/components/FramerCarousel"; // Correctly importing the default export
// import Particles from "@/components/ui/particles";

// const images = Array.from({ length: 9 }, (_, i) => {
//   const isLandscape = i % 2 === 0;
//   const width = isLandscape ? 800 : 600;
//   const height = isLandscape ? 600 : 800;
//   return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
// });

// const BLUR_FADE_DELAY = 0.04;

// export default function Page() {
//   const { theme } = useTheme();
//   const [color, setColor] = useState("#ffffff");

//   useEffect(() => {
//     setColor(theme === "dark" ? "#ffffff" : "#000000");
//   }, [theme]);

//   return (
//     <main className="flex flex-col space-y-10  bg-background min-h-screen font-sans antialiased max-w-6xl mx-auto py-4 sm:py-4 px-6">
//       <div className="">
//         <section>
//           <FramerCarousel /> {/* This should now work */}
//         </section>
//         <section>
//           <MarqueeDemo />
//         </section>
//       </div>

//       <Particles
//         className="absolute inset-0 -z-10 h-[130vh]  w-full"
//         quantity={1500}
//         ease={30}
//         color={color}
//         refresh
//       />
//     </main>
//   );
// }
"use client";
import { formatDistanceToNow, parseISO } from "date-fns";
import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
    Slider,
    SliderContainer,
    SliderDotButton,
} from "@/components/carousel";
import Image from "next/image";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Home = () => {
    const [blogs, setBlogs] = useState<
        { id: string; title: string; content: string; author: string; date: string; links: string[] }[]
    >([]);

    const images = [
        "/600.300.jpg",
        "/600.300.jpg",
        "/600.300.jpg",
        "/600.300.jpg",
        "/600.300.jpg",
    ];

    useEffect(() => {
        const blogsRef = collection(db, "blogs");

        try {
            const unsubscribe = onSnapshot(blogsRef, (snapshot) => {
                const blogsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title || "",
                    content: doc.data().content || "",
                    author: doc.data().author || "",
                    date: doc.data().date || "",
                    links: doc.data().links || [], // Blogdagi linklar
                }));
                setBlogs(blogsData);
            });

            return () => unsubscribe();
        } catch (error) {
            console.error("Bloglarni olishda xato yuz berdi:", error);
        }
    }, []);

    const OPTIONS: EmblaOptionsType = { loop: true };

    return (
        <main className="flex flex-col bg-background space-y-10 min-h-screen font-sans antialiased max-w-2xl mx-auto py-4 sm:py-4 px-2">
            <div className="container mx-auto p-2">
                <h1 className="text-2xl font-bold mb-4 text-center">Bloglar</h1>

                {blogs.length === 0 ? (
                    <p className="text-gray-500 text-center">
                        Hozircha hech qanday blog qoʻshilmagan. Keyinroq qayta urinib ko‘ring.
                    </p>
                ) : (
                    blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} images={images} options={OPTIONS} />
                    ))
                )}
            </div>
        </main>
    );
};

const BlogCard = ({
    blog,
    images,
    options,
}: {
    blog: { id: string; title: string; content: string; author: string; date: string; links: string[] };
    images: string[];
    options: EmblaOptionsType;
}) => {
    const [expanded, setExpanded] = useState(false);
    const [showLinksModal, setShowLinksModal] = useState(false);
    const shortContent = blog.content.slice(0, 150);

    return (
        <div className="shadow-md rounded-lg p-4 mb-8  transition-shadow duration-300 dark:shadow-zinc-800   ">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p
                className={` ${expanded ? "max-h-full" : "max-h-24 overflow-hidden"
                    }`}
            >
                {blog.content}
            </p>
            {!expanded && blog.content.length > 150 && (
                <button
                    onClick={() => setExpanded(true)}
                    className=" underline text-sm mt-2 mb-4"
                >
                    Ko`rish
                </button>
            )}
            {expanded && (
                <button
                    onClick={() => setExpanded(false)}
                    className=" underline text-sm mb-4"
                >
                    Yopish
                </button>
            )}
            <section>
                <Carousel options={options} isAutoPlay={true} className="mx-auto">
                    <SliderContainer className="gap-1">
                        {images.map((imageSrc, index) => (
                            <Slider key={index} className="w-full">
                                <div className="dark:bg-background bg-white w-full ">
                                    <Image
                                        src={imageSrc}
                                        width={1000}
                                        height={800}
                                        alt={`Image ${index + 1}`}
                                        className="object-cover rounded-lg h-64 w-5/5 mx-auto   "
                                    />
                                </div>
                            </Slider>
                        ))}
                    </SliderContainer>
                    <div className="flex justify-center py-2">
                        <SliderDotButton />
                    </div>
                </Carousel>
            </section>
            <section>
                <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 ">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="object-cover rounded-lg "
                    />
                    <small className="text-gray-500">
                        {blog.author} <br />
                        {blog.date
                            ? `${formatDistanceToNow(parseISO(blog.date), {
                                addSuffix: true,
                            })}`
                            : "Vaqt ko‘rsatilmagan"}
                    </small>
                </div>
                <button className="text-sm underline cursor-pointer" onClick={() => setShowLinksModal(true)}>
                    link havolalari
                </button>
                </div>
            </section>

            {showLinksModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-background rounded-lg p-6 max-w-sm w-full">
                        <h3 className="text-lg font-bold mb-4">Havolalar</h3>
                        <ul className="space-y-2">
                            {blog.links.length > 0 ? (
                                blog.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=" underline"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <p className="">Havolalar mavjud emas</p>
                            )}
                        </ul>
                        <button
                            className="mt-4 bg-black dark:bg-white text-white dark:text-black   py-1 px-3 rounded"
                            onClick={() => setShowLinksModal(false)}
                        >
                            Yopish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
