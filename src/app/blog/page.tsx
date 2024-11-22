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
import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Home = () => {
    // Bloglar ro'yxatini saqlash uchun useState hook
    const [blogs, setBlogs] = useState<
        { id: string; title: string; content: string; author: string; date: string }[]
    >([]);

    // Firebase Firestore'dan bloglarni olish uchun useEffect hook
    useEffect(() => {
        const blogsRef = collection(db, "blogs");

        try {
            // onSnapshot yordamida Firestore'dan real-time ma'lumot olish
            const unsubscribe = onSnapshot(blogsRef, (snapshot) => {
                // Snapshot'dan blog ma'lumotlarini olish
                const blogsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title || "",
                    content: doc.data().content || "",
                    author: doc.data().author || "",
                    date: doc.data().date || "",
                }));
                setBlogs(blogsData); // Blogs ro'yxatini yangilash
            });

            // Unsubscribe qilish uchun tozalash funksiyasi
            return () => unsubscribe();
        } catch (error) {
            console.error("Bloglarni olishda xato yuz berdi:", error);
        }
    }, []); // Faqat komponent birinchi marta yuklanganda ishlaydi

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Bloglar</h1>

            {/* Bloglar ro'yxatini tekshirish */}
            {blogs.length === 0 ? (
                <p className="text-gray-500 text-center">
                    Hozircha hech qanday blog qo`shilmagan. Keyinroq qayta urinib ko`ring.
                </p>
            ) : (
                // Agar bloglar bo'lsa, ularni ro'yxatda ko'rsatish
                blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600">{blog.title}</h2>
                        <p className="text-gray-700">{blog.content}</p>
                        <small className="text-gray-500">
                            {blog.author} | {blog.date}
                        </small>
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;
