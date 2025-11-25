# ⚡ Mark's Portfolio | Vibe Coder Edition

![Project Banner](https://placehold.co/1200x400/09090b/6366f1?text=Vibe+Coder+Portfolio)

> A high-performance, immersive personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed for Software Engineers who value aesthetics, interactivity, and clean architecture.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## ✨ Key Features

This isn't just a static site. It's an interactive experience featuring:

* **💎 3D Holographic Profile:** A physics-based tilt card with holographic shine and mouse-tracking effects (Pure TypeScript & Framer Motion).
* **🎵 "Soundtrack of Code" Player:** A fully functional music player with:
    * Real-time seekable slider.
    * Spinning Vinyl animation.
    * Local audio playback logic.
* **💻 VS Code Contact Form:** A contact section designed to look like a code editor where users "run a script" to send messages.
* **🗂️ IDE-Style Experience:** Experience section organized like vertical file tabs in a text editor.
* **🍎 Floating Dock:** macOS-style navigation dock with magnification effects.
* **🚀 Interactive Project Grid:** Premium glassmorphism cards with click-to-reveal overlay logic.
* **⚡ Performance Optimized:**
    * `next/image` for LCP optimization.
    * Dynamic imports for heavy components.
    * Accessibility (A11y) score of 100.

## 🛠️ Tech Stack

-   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/username/mark-portfolio.git](https://github.com/username/mark-portfolio.git)
cd mark-portfolio
2. Install Dependencies
Bash

npm install
# or
yarn install
3. Download Audio Assets (Important!)
This project uses local MP3 files for the music player to ensure zero-latency playback. Run the included script to fetch them:

Bash

node scripts/download-music.js
This will create a public/music/ folder and download the tracks automatically.

4. Run the Development Server
Bash

npm run dev
Open http://localhost:3000 with your browser to see the result.

📂 Project Structure
root/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root Layout (Fonts, Metadata)
│   └── page.tsx          # Main Landing Page (Assembly)
├── components/
│   ├── ui/               # Shadcn UI Base Components
│   └── shared/           # Custom "Vibe" Components
│       ├── Hero.tsx      # Main Intro with 3D Card
│       ├── About.tsx     # Scroll Reveal Text & Terminal
│       ├── Projects.tsx  # Grid with Hover Overlay
│       ├── Experience.tsx # IDE Tabs Layout
│       ├── SpotifyWidget.tsx # Music Player
│       └── Contact.tsx   # VS Code Form
├── lib/
│   ├── data.ts           # Single Source of Truth (Edit content here!)
│   └── utils.ts          # Helper functions
├── public/
│   ├── music/            # Downloaded MP3s
│   └── avatar.png        # Your Profile Picture
└── scripts/              # Utility scripts (e.g., music downloader)
🎨 Customization
All text content, project data, and experience history are managed in a single file for easy maintenance.

Edit lib/data.ts to update:

Profile Bio & Role

Project List (Title, Description, Links)

Experience History

Music Playlist Metadata

🚢 Deployment
This project is optimized for Vercel.

Push your code to GitHub.

Import the repository in Vercel.

The scripts/download-music.js script should be run during the build process if you don't commit MP3s to git.

Recommended: Add node scripts/download-music.js && next build as your Build Command in Vercel.

🤝 Contribution
Feel free to fork this repository and use it as a template for your own portfolio! If you find a bug or have a suggestion, open an issue.

📄 License
MIT License © 2025 Mark Xplorer