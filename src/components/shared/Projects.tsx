'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Languages } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ProjectCard from './ProjectCard';
import { portfolioData } from '@/lib/data';

const Projects = () => {
  const [isPersian, setIsPersian] = useState(false);

  const toggleLanguage = () => {
    setIsPersian(!isPersian);
  };

  const translations = {
    en: {
      workBadge: "My Work",
      workTitle: "Featured Projects",
      workDescription: "A selection of my recent work, including full-stack applications, automation tools, and AI-powered solutions.",
      allProjects: "All Projects",
      exploreMore: "Explore more of my work and experiments",
      collaboration: "Interested in collaboration?",
      letsTalk: "Let's talk!"
    },
    fa: {
      workBadge: "کارهای من",
      workTitle: "پروژه‌های ویژه",
      workDescription: "انتخابی از کارهای اخیر من، شامل برنامه‌های کامل، ابزارهای خودکار و راه‌حل‌های هوش مصنوعی.",
      allProjects: "همه پروژه‌ها",
      exploreMore: "کاوش بیشتر کارها و آزمایش‌های من",
      collaboration: "علاقه‌مند به همکاری؟",
      letsTalk: "صحبت کنیم!"
    }
  };

  const t = isPersian ? translations.fa : translations.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const featuredProjects = portfolioData.projects.filter(project => project.featured);
  const allProjects = portfolioData.projects;

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            className="text-center mb-16"
          >
            {/* Language Toggle Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-700/50 transition-all duration-300"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {isPersian ? 'English' : 'فارسی'}
                </span>
              </button>
            </div>

            <Badge variant="secondary" className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-4 py-2">
              <Code2 className="h-4 w-4 mr-2" />
              {t.workBadge}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.workTitle}
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t.workDescription}
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* All Projects Section */}
          {allProjects.length > featuredProjects.length && (
            <motion.div
              variants={headerVariants}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {t.allProjects}
                </h3>
                <p className="text-zinc-400">
                  {t.exploreMore}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    project={project} 
                    index={featuredProjects.length + index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            variants={headerVariants}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full">
              <Rocket className="h-5 w-5 text-indigo-400" />
              <span className="text-zinc-300">
                {t.collaboration}{' '}
                <a 
                  href="#contact" 
                  className="text-indigo-400 hover:text-indigo-300 ml-1 transition-colors"
                >
                  {t.letsTalk}
                </a>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;