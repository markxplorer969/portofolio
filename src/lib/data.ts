import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Mark",
  role: "Software Engineer Student",
  bio: "A vibe coder building full-stack applications with AI-driven workflows.",
  contact: {
    email: "admin@markxplorer.me",
    instagram: "@_markxplorer.io",
    tiktok: "@markxplorer969",
    github: "@markxplorer969",
    telegram: "@marlxplorer969",
    location: "Karawang, Indonesia"
  },
  projects: [
    {
      title: "MarkTools",
      description: "A comprehensive suite of developer tools powered by Next.js and AI integration to streamline development workflows.",
      tags: ["Next.js", "AI", "TypeScript", "Tailwind CSS"],
      imageUrl: "/projects/marktools.png",
      repoUrl: "https://wa.me/6285883795285",
      demoUrl: "https://marktools.web.id",
      featured: true
    },
    {
      title: "Simple Payment",
      description: "Modern payment gateway solution with secure transactions and intuitive user interface.",
      tags: ["Next.js", "Payment", "TypeScript", "Web Development"],
      imageUrl: "/projects/payment.png",
      repoUrl: "https://github.com/MarkXplorer/markpay-web",
      demoUrl: "https://payment.markxplorer.my.id",
      featured: true
    },
    {
      title: "Norvus Community",
      description: "Community platform for developers and tech enthusiasts to connect and collaborate.",
      tags: ["Community", "Web Platform", "Social", "Networking"],
      imageUrl: "/projects/norvus.png",
      repoUrl: "https://wa.me/6285883795285",
      demoUrl: "https://www.norvuscomunity.xyz",
      featured: true
    },
    {
      title: "Fake Call Generator",
      description: "Fun application for generating realistic fake call interfaces for pranks and entertainment.",
      tags: ["React", "JavaScript", "Mobile", "Entertainment"],
      imageUrl: "/projects/fakecall.png",
      repoUrl: "https://github.com/markxplorer969/fakecall.git",
      demoUrl: "https://fakecall.markxplorer.my.id",
      featured: false
    },
    {
      title: "QC iPhone Web",
      description: "Quality control web application for iPhone testing and validation processes.",
      tags: ["Testing", "Quality Control", "Web App", "iPhone"],
      imageUrl: "/projects/qc.png",
      repoUrl: "https://github.com/markxplorer969/QcIphong.git",
      demoUrl: "https://qciphong.markxplorer.my.id",
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