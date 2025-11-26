'use client';

import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Dynamic imports for below-the-fold sections to reduce initial bundle size
const About = dynamic(() => import('@/components/shared/About'), {
  loading: () => <SectionLoader />
});

const Projects = dynamic(() => import('@/components/shared/Projects'), {
  loading: () => <SectionLoader />
});

const TechStack = dynamic(() => import('@/components/shared/TechStack'), {
  loading: () => <SectionLoader />
});

const Experience = dynamic(() => import('@/components/shared/Experience'), {
  loading: () => <SectionLoader />
});

const Contact = dynamic(() => import('@/components/shared/Contact'), {
  loading: () => <SectionLoader />
});

const FavoritePlaylist = dynamic(() => import('@/components/shared/FavoritePlaylist'), {
  loading: () => <SectionLoader />
});

const Footer = dynamic(() => import('@/components/shared/Footer'), {
  loading: () => <SectionLoader />
});

// Loading fallback component
const SectionLoader = () => (
  <section className="py-20 flex justify-center items-center min-h-[400px]">
    <LoadingSpinner />
  </section>
);

export default function Home() {
  return (
    <main className="relative bg-zinc-950 text-zinc-100" role="main">
      <Navbar />
      <Hero />
      
      {/* Dynamically loaded sections with loading states */}
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <FavoritePlaylist />
      <Contact />
      <Footer />
    </main>
  );
}