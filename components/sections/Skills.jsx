import GlitchEffect from '../ui/GlitchEffect';
import TypewriterText from '../ui/TypewriterText';

const skillCategories = [
  {
    title: 'DEVELOPMENT',
    skills: [
      'Flutter/Dart',
      'API Integration',
      'Google Maps',
      'Firebase',
      'State Management (Provider, GetX, Bloc)',
      'Git, GitHub, Bitbucket',
      'HTML/CSS/JavaScript'
    ]
  },
  {
    title: 'DESIGN & TOOLS',
    skills: [
      'UX/UI Design',
      'Adobe XD',
      'Adobe Photoshop',
      'WS Filmora',
      'MS Office Suite',
      'Android Studio',
      'VS Code'
    ]
  },
  {
    title: 'PROJECT MANAGEMENT',
    skills: [
      'Jira',
      'Version Control',
      'Documentation',
      'Email Composition',
      'Software Installation',
      'Team Coordination'
    ]
  },
  {
    title: 'PROGRAMMING CONCEPTS',
    skills: [
      'Procedural Programming',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'API Design',
      'Clean Architecture',
      'Responsive Design'
    ]
  }
];

const skillLevels = [
  { name: 'Flutter/Dart', level: 95 },
  { name: 'Firebase', level: 90 },
  { name: 'API Integration', level: 85 },
  { name: 'State Management', level: 80 },
  { name: 'UI/UX Design', level: 75 }
];

const Skills = () => {
  return (
    <section id="skills" className="terminal-section">
      <GlitchEffect>
        <h2 className="terminal-title">POWER LEVELS</h2>
      </GlitchEffect>

      <div className="space-y-12">
        {/* Skill Categories */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="terminal-card">
              <TypewriterText
                text={category.title}
                className="text-lg font-bold text-center block mb-4"
                delay={50 * (index + 1)}
              />
              
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="terminal-prompt text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="space-y-6">
          <h3 className="terminal-subtitle text-center">PROFICIENCY MATRIX</h3>
          
          <div className="space-y-4">
            {skillLevels.map((skill, index) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="terminal-text">{skill.name}</span>
                  <span className="terminal-text">{skill.level}%</span>
                </div>
                
                <div className="h-2 skill-progress-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-terminal-green transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animation: `loadBar 1.5s ease-out ${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ASCII Art Decoration */}
        <div className="text-center opacity-50">
          <pre className="font-mono text-xs">
            {`
   [====================]
   |     SKILL TREE    |
   [====================]
            `}
          </pre>
        </div>
      </div>

      <style jsx>{`
        @keyframes loadBar {
          from { width: 0; }
          to { width: var(--final-width); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
