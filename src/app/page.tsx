import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';
import About from '@/components/shared/About';
import Projects from '@/components/shared/Projects';
import TechStack from '@/components/shared/TechStack';
import Experience from '@/components/shared/Experience';
import GithubGraph from '@/components/shared/GithubGraph';
import Contact from '@/components/shared/Contact';
import FavoritePlaylist from '@/components/shared/FavoritePlaylist';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <main className="relative bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <GithubGraph />
      <FavoritePlaylist />
      <Contact />
      <Footer />
    </main>
  );
}