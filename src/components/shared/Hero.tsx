'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Code2, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/data';
import ProfileCard from '@/components/ProfileCard';

// Rotating Text Component
const RotatingText = () => {
  const words = ["Software Engineer", "Vibe Coder", "System Architect"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: {
      y: 20,
      opacity: 0,
      rotateX: -90,
    },
    center: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      rotateX: 90,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <span className="inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const blurInVariants = {
    hidden: { 
      filter: 'blur(10px)', 
      opacity: 0, 
      y: 20 
    },
    visible: {
      filter: 'blur(0px)', 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1.5, // Start after typewriter effect begins
      },
    },
  };

  const scrollIconVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 3.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - Mobile: Single Column, Desktop: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          
          {/* Left Column - Existing Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Main Headline with Cinematic Blur-In */}
            <motion.h1
              variants={blurInVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {portfolioData.name}
              </span>
            </motion.h1>

            {/* Rotating Sub-headline */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl text-zinc-300 mb-6 font-light"
            >
              I am a <RotatingText />
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                asChild
              >
                <a href="#projects" className="flex items-center gap-3 relative z-10">
                  <Code2 className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View My Projects</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="relative overflow-hidden group border-2 border-purple-500/50 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20 backdrop-blur-sm px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600/10 before:to-indigo-600/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                asChild
              >
                <a href="#contact" className="flex items-center gap-3 relative z-10">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Contact Me</span>
                  <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card (Desktop Only) */}
          <div className="hidden lg:flex justify-center items-center">
            <ProfileCard
              name="Mark"
              title="Software Engineer"
              handle="markxplorer"
              status="Vibe Coding"
              avatarUrl="/avatar.png"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollIconVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-500"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;