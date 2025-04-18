import { useEffect, useState } from 'react';

const GlitchEffect = ({ children, className = "", intensity = "medium" }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.9;
      if (shouldGlitch) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Define glitch intensity CSS
  let glitchClass = "hover:animate-glitch";
  if (intensity === "low") {
    glitchClass += " hover:translate-x-[1px]";
  } else if (intensity === "high") {
    glitchClass += " hover:animate-shakeX";
  }
  
  return (
    <div className={`relative ${className} ${isGlitching ? glitchClass : ""}`}>
      {/* Original content */}
      <div className={isGlitching ? "opacity-90" : ""}>{children}</div>
      
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <div className="absolute top-0 left-0 w-full h-full text-terminal-lightGreen opacity-70 -translate-x-1">
            {children}
          </div>
          <div className="absolute top-0 left-0 w-full h-full text-terminal-glow opacity-70 translate-x-1">
            {children}
          </div>
          <div className="absolute top-0 left-0 w-full h-full mix-blend-screen">
            <div className="w-full h-full bg-terminal-green opacity-10 animate-glitch"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="w-full h-[1px] bg-terminal-green animate-scan"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default GlitchEffect;
