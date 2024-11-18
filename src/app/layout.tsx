// Add this at the top of your file to ensure the component is treated as client-side
"use client";

import Navbar from "@/components/navbar";
import Speed from "@/components/Speed";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { motion, useScroll } from "framer-motion";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Move the scroll logic inside the client component
  const { scrollYProgress } = useScroll();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/N.png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <CustomCursor /> {/* Move CustomCursor inside here */}
            {children}
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 flex origin-bottom h-full max-h-14 items-center gap-20 justify-center">
              <Navbar />
              <Speed />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
