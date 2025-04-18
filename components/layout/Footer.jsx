import Link from 'next/link';
import AsciiArt from '../ui/AsciiArt';

const Footer = () => {
  return (
    <footer className="py-8 border-t-2 border-terminal-green">
      <div className="terminal-container text-center">
        <AsciiArt content={`
   ____ 
  /    \\
 | CODE |
  \\____/
   |  |
  [____]
        `} />
        
        <div className="flex justify-center space-x-8 my-6">
          <Link href="https://github.com/saqib2st" target="_blank" rel="noopener noreferrer">
            <span className="text-terminal-green hover:text-terminal-lightGreen transition-colors duration-300 cursor-pointer">
              [GH]
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/saqibz-amin/" target="_blank" rel="noopener noreferrer">
            <span className="text-terminal-green hover:text-terminal-lightGreen transition-colors duration-300 cursor-pointer">
              [LI]
            </span>
          </Link>
          <Link href="https://wa.me/+923099091002" target="_blank" rel="noopener noreferrer">
            <span className="text-terminal-green hover:text-terminal-lightGreen transition-colors duration-300 cursor-pointer">
              [PH]
            </span>
          </Link>
        </div>
        
        <div className="terminal-text opacity-70">
          <p>© {new Date().getFullYear()} SAQIB | SYSTEM VERSION 2.0.25</p>
          <p className="text-xs mt-2">
            <span className="terminal-prompt">TERMINAL STATUS: ONLINE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
