'use client';

import { motion, AnimatePresence, useScroll } from 'framer-motion';
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
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-bold"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  // Parallax scroll hook
  const { scrollY } = useScroll();
  
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Blur-in variants for headline
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
        delay: 0.6, // Starts after other elements begin animating
      },
    },
  };

  // Scroll indicator variants
  const scrollIconVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.8, // Appears after all content is visible
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  // Parallax transform for background elements
  const parallaxY = scrollY * 0.5; // Slower parallax effect
  const parallaxScale = 1 + scrollY * 0.0002; // Subtle scale effect

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
        style={{
          y: parallaxY * 0.3, // Slow parallax for background
        }}
      />
      
      {/* Parallax Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          y: parallaxY * 0.7, // Medium parallax for overlay
          scale: parallaxScale,
        }}
      />
      
      {/* Floating Particles */}
      <motion.div 
        className="absolute inset-0"
        style={{
          y: parallaxY * 1.2, // Fast parallax for particles
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: 1 + Math.random() * 2,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - Mobile: Single Column, Desktop: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          
          {/* Left Column - Text Content with Orchestrated Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-6"
          >
            {/* 1. Welcome Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-2 rounded-full">
                <Code2 className="h-4 w-4 mr-2" />
                <span className="font-mono text-sm">Welcome to my portfolio</span>
              </div>
            </motion.div>

            {/* 2. Main Headline with Cinematic Blur-In */}
            <motion.h1
              variants={blurInVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {portfolioData.name}
              </span>
            </motion.h1>

            {/* 3. Rotating Sub-headline */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl text-zinc-300 mb-6 font-light"
            >
              I am a <RotatingText />
            </motion.h2>

            {/* 4. Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>

            {/* 5. CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white px-8 py-4 text-base font-semibold shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 border-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 transition-shadow"
                asChild
              >
                <a href="#projects" className="flex items-center gap-3 relative z-10">
                  <Code2 className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View My Projects</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                size="lg"
                className="relative overflow-hidden group bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 px-8 py-4 text-base font-semibold before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
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

          {/* Right Column - Profile Card with Independent Animation */}
          <div className="hidden lg:flex justify-center items-center h-[600px] relative">
            {/* Spotlight Glow Behind Profile Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full -z-10" />
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut", 
                delay: 0.8 // Appears after text animations start
              }}
            >
              <ProfileCard
                name="Mark"
                title="Software Engineer"
                handle="markxplorer"
                status="Vibe Coding"
                avatarUrl="/avatar.png"
                iconUrl="/icon-pattern.png"
                grainUrl="/grain-texture.png"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled={true}
                behindGlowColor="rgba(99, 102, 241, 0.4)"
                behindGlowSize="60%"
                onContactClick={() => console.log('Contact clicked')}
              />
            </motion.div>
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