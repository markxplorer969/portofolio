'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Experience data
const EXPERIENCE = [
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
  },
  {
    company: "Freelance Projects",
    role: "Full Stack Developer",
    period: "2022 - 2023",
    description: [
      "Built custom web applications for various clients",
      "Implemented responsive design and modern UI/UX principles",
      "Delivered projects on time with focus on performance and scalability"
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.h2
            variants={headerVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Experience
          </motion.h2>
          
          <motion.p
            variants={headerVariants}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Professional journey and milestones that shaped my career.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-zinc-900 border-4 border-indigo-500 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-indigo-400" />
                  </div>
                  {index < EXPERIENCE.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-zinc-800" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-indigo-400 font-medium">
                        {exp.company}
                      </div>
                    </div>
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400 px-3 py-1 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <motion.div
                        key={descIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="flex items-start gap-3 text-zinc-300"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{desc}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* View More Button */}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all duration-200"
                      asChild
                    >
                      <a
                        href="#projects"
                        className="flex items-center gap-2"
                      >
                        View Projects
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
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