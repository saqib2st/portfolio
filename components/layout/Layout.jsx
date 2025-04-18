import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  
  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-terminal-black text-terminal-green">
      <Head>
        <title>Saqib - Flutter Developer</title>
        <meta name="description" content="Flutter Developer with expertise in mobile app development" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Terminal Effects */}
      <div className="scanline"></div>
      <div className="screen-glitch"></div>
      <div className="interlaced-lines"></div>
      <div className="crt-edges"></div>

      {!loaded ? (
        <BootScreen setSound={setSoundEnabled} />
      ) : (
        <>
          <Header soundEnabled={soundEnabled} />
          <main className="terminal-container flex-grow py-10">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

// Boot screen component with retro loading animation
const BootScreen = ({ setSound }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('');

  useEffect(() => {
    const lines = [
      "Initializing system...",
      "Loading core modules...",
      "Mounting file systems...",
      "Starting neural network...",
      "Establishing connection...",
      "Loading portfolio data...",
      "System ready. Welcome to Saqib's Terminal."
    ];
    
    let currentLine = 0;
    let progressInterval;
    
    const typeWriter = () => {
      if (currentLine < lines.length) {
        setBootText(prev => prev + '\n' + lines[currentLine]);
        currentLine++;
        setProgress(prev => prev + Math.floor(100 / lines.length));
      } else {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => setSound(true), 500);
      }
    };
    
    progressInterval = setInterval(typeWriter, 400);
    return () => clearInterval(progressInterval);
  }, [setSound]);

  return (
    <div className="fixed inset-0 bg-terminal-black flex flex-col items-center justify-center p-8 z-50 crt-on">
      <div className="w-full max-w-2xl">
        <pre className="text-terminal-green font-mono mb-8 whitespace-pre-line">
          {bootText}
        </pre>
        
        <div className="w-full bg-terminal-darkGreen/30 h-4 rounded-sm overflow-hidden border border-terminal-green">
          <div 
            className="h-full bg-terminal-green transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="mt-4 text-center text-terminal-green font-mono">
          {progress < 100 ? "LOADING..." : "PRESS ANY KEY TO CONTINUE"}
        </p>
      </div>
    </div>
  );
};

export default Layout;
