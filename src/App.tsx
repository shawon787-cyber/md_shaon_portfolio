import Navbar from '@/components/Navbar';
import BackgroundGlow from '@/components/BackgroundGlow';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
