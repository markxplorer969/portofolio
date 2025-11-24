'use client';

import { useState, useEffect } from 'react';
import { X, Menu, Code, Briefcase, User, Mail, Home, ExternalLink, Github, Phone, MapPin, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const quickLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const contactInfo = [
    { label: 'Email', value: 'mark@example.com', icon: Mail, href: 'mailto:mark@example.com' },
    { label: 'Phone', value: '+62 858-3795-285', icon: Phone, href: 'tel:+628583795285' },
    { label: 'Location', value: 'Jakarta, Indonesia', icon: MapPin },
  ];

  const skills = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Docker'
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="default"
        size="icon"
        className="fixed top-4 left-4 z-40 md:hidden bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar Content */}
          <div className="absolute left-0 top-0 h-full w-80 bg-zinc-900 border-r border-zinc-800 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-white">Mark</span>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation */}
            <div className="p-6 border-b border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Navigation</h3>
              <div className="space-y-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 text-zinc-300 hover:text-white p-3 rounded-lg hover:bg-zinc-800 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-b border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Contact</h3>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start space-x-3">
                    <info.icon className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs text-zinc-500 mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-zinc-300 hover:text-indigo-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm text-zinc-300">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="p-6 border-b border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-zinc-800 text-zinc-300 text-xs hover:bg-zinc-700 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div className="p-6">
              <Button
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                asChild
              >
                <a
                  href="/mark-cv.pdf"
                  download
                  className="flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-zinc-800">
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  asChild
                >
                  <a
                    href="https://github.com/mark"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/mark"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;