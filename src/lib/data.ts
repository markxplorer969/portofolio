import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Mark",
  role: "Software Engineer Student",
  bio: "A vibe coder building full-stack applications with AI-driven workflows.",
  projects: [
    {
      title: "MarkTools",
      description: "A comprehensive suite of developer tools powered by Next.js and AI integration to streamline development workflows.",
      tags: ["Next.js", "AI", "TypeScript", "Tailwind CSS"],
      imageUrl: "/projects/marktools.png",
      repoUrl: "https://github.com/mark/marktools",
      demoUrl: "https://marktools.dev",
      featured: true
    },
    {
      title: "Facebook Live UID Checker",
      description: "Web scraping tool to verify and check Facebook user IDs from live streams and public profiles.",
      tags: ["Node.js", "Web Scraping", "Puppeteer", "Express"],
      imageUrl: "/projects/fb-uid-checker.png",
      repoUrl: "https://github.com/mark/fb-uid-checker",
      featured: true
    },
    {
      title: "Auto.js Scripts",
      description: "Collection of automation scripts for mobile tasks using Auto.js framework to improve productivity.",
      tags: ["JavaScript", "Auto.js", "Mobile Automation", "Android"],
      imageUrl: "/projects/autojs-scripts.png",
      repoUrl: "https://github.com/mark/autojs-scripts",
      featured: false
    }
  ],
  experience: [
    {
      company: "University Tech Lab",
      role: "Full Stack Developer Intern",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using Next.js and React",
        "Implemented AI-powered features to enhance user experience",
        "Collaborated with cross-functional teams to deliver projects on time"
      ]
    },
    {
      company: "Open Source Contributions",
      role: "Active Contributor",
      period: "2022 - Present",
      description: [
        "Contributed to various open source projects on GitHub",
        "Developed automation tools and scripts for the community",
        "Maintained and documented several popular repositories"
      ]
    }
  ]
};