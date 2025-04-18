import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

export default function Home() {
  useEffect(() => {
    // Add key press sound effect
    const handleKeyPress = () => {
      const audio = new Audio('/sounds/key-press.mp3');
      audio.volume = 0.2;
      audio.play();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <Layout>
      <div className="space-y-20">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </Layout>
  );
}
