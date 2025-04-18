import { useState, useEffect } from 'react';

const TypewriterText = ({ text, className = '', delay = 25, skipAnimation = false }) => {
  const [displayedText, setDisplayedText] = useState(skipAnimation ? text : '');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (skipAnimation) {
      setDisplayedText(text);
      return;
    }
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, delay);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [text, delay, skipAnimation]);

  return (
    <span className={`relative inline-block ${className}`}>
      {displayedText}
      {!skipAnimation && cursorVisible && <span className="ml-0.5 inline-block w-2 h-4 bg-terminal-green animate-blink-caret"></span>}
    </span>
  );
};

export default TypewriterText;
