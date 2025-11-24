'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        layout
        initial={false}
        animate={{
          width: scrolled ? '90%' : '100%',
          y: scrolled ? 16 : 0, // top-4 = 16px
          borderRadius: scrolled ? 9999 : 0, // rounded-full
          backgroundColor: scrolled ? 'rgba(24, 24, 27, 0.8)' : 'transparent', // bg-zinc-900/80
          borderColor: scrolled ? 'rgba(39, 39, 42, 1)' : 'transparent', // border-zinc-800
          borderWidth: scrolled ? 1 : 0,
          backdropFilter: scrolled ? 'blur(12px)' : 'none', // backdrop-blur-md
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className={`
          fixed left-0 right-0 z-50 mx-auto
          ${scrolled ? 'border border-zinc-800' : ''}
        `}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <Link 
            href="#home" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
              Mark.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-zinc-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-zinc-800/50"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Tablet Navigation - Icons Only */}
          <div className="hidden lg:flex xl:hidden items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center text-zinc-300 hover:text-white p-3 transition-all duration-200 rounded-full hover:bg-zinc-800/50"
                title={item.label}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden lg:block">
            <Button
              size="sm"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              asChild
            >
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
          >
            <div className="mx-4 max-w-2xl mx-auto">
              <div className="bg-zinc-900/95 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-2xl p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 text-zinc-300 hover:text-white px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl hover:bg-zinc-800/50 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="mt-4 pt-4 border-t border-zinc-800"
                >
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                    asChild
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Get in Touch
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;