const AsciiArt = ({ content, className = '' }) => {
  return (
    <pre className={`text-terminal-green font-mono opacity-80 text-center ${className}`}>
      {content}
    </pre>
  );
};

export default AsciiArt;
