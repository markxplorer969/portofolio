import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';
import About from '@/components/shared/About';
import ProjectBento from '@/components/shared/ProjectBento';
import TechStack from '@/components/shared/TechStack';
import Experience from '@/components/shared/Experience';
import Contact from '@/components/shared/Contact';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <main className="relative bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <ProjectBento />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}