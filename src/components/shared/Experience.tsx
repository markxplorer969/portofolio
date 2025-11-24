'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Server } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const EXPERIENCES = [
  {
    year: "2024 - Present",
    title: "Vibe Coder & Full Stack Engineer",
    company: "Freelance / MarkTools",
    description: "Building AI-driven tools and full-stack web applications. Focusing on clean architecture and modern UX patterns.",
    skills: ["Next.js 14", "TypeScript", "AI Integration", "Tailwind"],
    icon: Code2
  },
  {
    year: "2023 - 2024",
    title: "System Automation & Scripting",
    company: "Open Source Contributor",
    description: "Developed complex automation scripts using Auto.js. Optimized workflows for mobile automation.",
    skills: ["Auto.js", "JavaScript", "Mobile Automation"],
    icon: Smartphone
  },
  {
    year: "2022 - 2023",
    title: "Hosting Seller & Bot Creator",
    company: "Self-Employed",
    description: "Started journey by managing game servers and building custom bots for communities. Learned fundamentals of deployment and backend logic.",
    skills: ["Server Management", "Bot Development", "Linux"],
    icon: Server
  }
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-indigo-950/20 to-zinc-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-4 py-2">
            <Code2 className="h-4 w-4 mr-2" />
            My Journey
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Building digital solutions, from automation tools to full-stack applications.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isVisible ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
          />
          
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-32 md:w-64 h-32 md:h-64 bg-indigo-500/20 blur-xl rounded-full -translate-x-1/2 md:-translate-x-1/2" />

          <div className="relative z-10 space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ x: 50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: 'easeOut'
                }}
                className="relative flex items-start md:items-center gap-6 md:gap-8"
              >
                <div className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + 0.3,
                      ease: 'easeOut'
                    }}
                    className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-md" />
                    
                    <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 bg-zinc-900 rounded-lg border border-zinc-700 flex items-center justify-center shadow-lg">
                      <exp.icon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                    </div>
                  </motion.div>
                  
                  {index < EXPERIENCES.length - 1 && (
                    <div className="absolute top-12 md:top-16 left-1/2 w-0.5 h-8 md:h-12 bg-gradient-to-b from-zinc-700 to-transparent -translate-x-1/2" />
                  )}
                </div>

                <motion.div
                  initial={{ y: 20 }}
                  animate={isVisible ? { y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.1,
                    ease: 'easeOut'
                  }}
                  whileHover={{ 
                    y: -4,
                    borderColor: 'rgb(99 102 241 / 0.5)',
                    transitionDuration: '0.2s'
                  }}
                  className="flex-1 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 md:p-8 shadow-2xl hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="bg-indigo-500/10 border-indigo-500/30 text-indigo-400">
                      {exp.year}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 text-sm md:text-base leading-relaxed">
                      {exp.company}
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + 0.4 + skillIndex * 0.1,
                            ease: 'easeOut'
                          }}
                        >
                          <Badge variant="secondary" className="text-xs bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;