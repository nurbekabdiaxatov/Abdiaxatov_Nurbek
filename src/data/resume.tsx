import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nurbek Abdiaxatov ",
  initials: "NA",
  url: "https://nurbek-abdiaxatov.vercel.app/",
  location: "Uzbekistan, Andijon, Bo'ston",
  locationLink: "https://maps.app.goo.gl/Eubd9TkVLZhBkxD16",
  prize: " 🎉",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Telegram.",
  summary:
    "I am recognized as a professional in the field of software development. My primary areas of expertise include React, Next.js, and Tailwind CSS. I am passionate about creating user interfaces, fetching dynamic data, and incorporating visualization elements.",
  avatarUrl: "/me.jpeg",
  banner: "/banner.svg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C",
    "C++",
    "Javascript",
    "HTML", 
    "CSS",
    "Tailwind",
    "Git",
    "GitHub",
    "Figma",
    "VSCode",
    "Linux",
    "Tailwind",
    "Vite",
    "Ant design",
    "Material UI",
    "Bootstrap",
    "Chakra UI",
    "MongoDB",
    "Material tailwind",
    "Magic ui"

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/project", icon: Icons.Projects, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nurbekabdiaxatov",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nurbekabdiaxatov",
        icon: Icons.linkedin,

        navbar: true,
      },
      tel: {
        name: "tel",
        url: "tel:+998940192117",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Abdiaxatov",
        icon: Icons.Telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nurbekabdiaxatov@gmail.com",
        icon: Icons.email,
        navbar: true,
      }

    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },

  ],
  education: [
    {
      school: "Najot Talim",
      href: "https://najottalim.uz/",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/najot_talim.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Digital City",
      href: "https://it-park.uz/index.php/uz/itpark",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/digital_city.png",
      start: "2022",
      end: "2021",
    },
  ],
  template: [
        {
      school: "Najot Talim",
      href: "https://najottalim.uz/",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/najot_talim.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Digital City",
      href: "https://it-park.uz/index.php/uz/itpark",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/digital_city.png",
      start: "2022",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Najot Talim hackathon",
      dates: "june 7rd - 11th, 2024",
      location: "Uzbekistan, Fargana",
      description:
        "Developed a web application that aggregates market data and trends of grains like wheat, barley, and corn from various sources and predicts future prices. The platform provides real-time insights, historical data analysis, and price forecasting to help buyers and sellers make informed decisions in the grain market.",
      image:
        "/najot_talim.png",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://e-commers-seedra-front-bellashuv.vercel.app/all-product",
        },
      ],
    },
  ],
} as const;
