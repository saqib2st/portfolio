import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AsciiArt from '../ui/AsciiArt';
import TypewriterText from '../ui/TypewriterText';

const Header = ({ soundEnabled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const playKeySound = () => {
    if (soundEnabled) {
      const keySound = new Audio('/sounds/key-press.mp3');
      keySound.volume = 0.2;
      keySound.play();
    }
  };

  return (
    <header className="py-8 px-4 relative overflow-hidden border-b-2 border-terminal-green">
      <div className="terminal-container text-center">
        <AsciiArt content={`
  ____       _     ___    ___   ____        _    __  __  ___  _   _
 / ___|     / \\   / _ \\  |_ _| | __ )      / \\  |  \\/  ||_ _|| \\ | |
 \\___ \\    / _ \\ | | | |  | |  |  _ \\     / _ \\ | |\\/| | | | |  \\| |
  ___) |  / ___ \\| |_| |  | |  | |_) |   / ___ \\| |  | | | | | |\\  |
 |____/  /_/   \\_\\\\__\\_\\ |___| |____/   /_/   \\_\\_|  |_||___||_| \\_|
  `} />
        
        <div className="relative w-[500px] h-[500px] mx-auto my-6 rounded-full border-4 border-terminal-green overflow-hidden animate-float">
          <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0, 255, 0, 0.2)" }}></div>
          <Image
            src="/images/profile.png"
            alt="Saqib"
            width={150}
            height={150}
            style={{
              objectFit: "cover",
              objectPosition: "calc(50% + 3px) 60%",
              transform: "scale(1)",
              filter: "brightness(110%) contrast(125%) saturate(150%) hue-rotate(60deg)"
            }}
            className="w-full h-full"
          />
          {/* CRT scan effect */}
          <div className="absolute inset-0 opacity-50 animate-scan" 
               style={{ backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.1), transparent)" }}></div>
        </div>
        
        <h1 className="text-5xl font-bold tracking-widest mb-4 animate-pulse header-title">SAQIB</h1>
        
        <div className="h-8 mx-auto mb-6">
          <TypewriterText text="FLUTTER DEVELOPER" className="text-xl" />
        </div>
        
        <p className="text-lg mb-8 relative inline-block">
          [PRESS ENTER TO START]
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terminal-green animate-pulse"></span>
        </p>
        
        {/* Download Resume Button */}
        <div className="mb-6">
          <a 
            href="/assets/resume.pdf" 
            download
            className="terminal-button py-2 px-4 inline-block animate-pulse"
            onMouseDown={playKeySound}
          >
            &lt;DOWNLOAD RESUME/&gt;
          </a>
        </div>
        
        {/* Menu toggle for mobile */}
        <button 
          className="terminal-button fixed top-4 right-4 z-20 hide-on-desktop"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onMouseDown={playKeySound}
        >
          {isMenuOpen ? 'X CLOSE' : '≡ MENU'}
        </button>
        
        {/* Navigation Menu */}
        <nav className={`
          nav-menu
          ${isMenuOpen ? 'fixed inset-0 z-10 flex items-center justify-center' : 'hidden-mobile'}
        `} style={{ backgroundColor: isMenuOpen ? "rgba(0, 0, 0, 0.95)" : "transparent" }}>
          <ul className="nav-links">
            {['ABOUT ME', 'PROJECTS', 'EXPERIENCE', 'SKILLS', 'CONTACT'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>
                  <span 
                    className="terminal-button inline-block relative group cursor-pointer"
                    onClick={() => {
                      setIsMenuOpen(false);
                      playKeySound();
                    }}
                  >
                    {item}
                    <span className="menu-hover-line"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
