import GlitchEffect from '../ui/GlitchEffect';
import TypewriterText from '../ui/TypewriterText';

const experiences = [
  {
    period: '2023 - Present',
    company: 'Flutter Developer @ Six-logics Pakistan',
    description: 'Developing complex mobile applications and providing Flutter expertise for various client projects.',
    projects: [
      {
        name: 'Adley',
        details: [
          'Driver Delivery App: Enables drivers to deliver packages efficiently, providing route details, package status updates, and tools for successful deliveries.',
          'Dispatcher App: Centralizes package management, allowing assignment to drivers, tracking delivery status, managing routes, and overseeing the entire delivery process.',
          'Customer App: Empowers customers to track their package status, set delivery preferences, manage profiles.'
        ]
      },
      {
        name: 'Composite Prime',
        details: [
          'Composite Prime: An app facilitating purchases with receipt storage capabilities.',
          'Composite Prime Rewards: Allows users to upload invoices for a chance to win exciting prizes through sweepstakes.',
          'Manager App: Enables prize management, viewing user submissions, announcing winners, and listing upcoming prizes.'
        ]
      }
    ]
  },
  {
    period: '2020 - 2023',
    company: 'Technical IT Support Representative @ SR Techno & AEOSSNY',
    description: null,
    details: [
      'IT support and troubleshooting',
      'Network Administration',
      'Server Management Domain Controller'
    ]
  },
  {
    period: '2020 - 2022',
    company: 'Flutter Developer (Self-Learner)',
    description: null,
    details: [
      'User login/signup app with Firebase including password reset option, login with Google and Facebook',
      'MyPlayer-11 soccer App',
      'Google Maps Integration in Flutter App',
      'Facebook UI',
      'Instagram UI',
      'Todo apps with GetX, Provider, Bloc, Firebase'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="terminal-section">
      <GlitchEffect>
        <h2 className="terminal-title">CAREER QUESTS</h2>
      </GlitchEffect>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={exp.period} className="relative pl-8 border-l-2 border-terminal-green">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-terminal-black border-2 border-terminal-green rounded-full"></div>
            
            <div className="space-y-4">
              <TypewriterText
                text={exp.period}
                className="text-lg font-bold text-terminal-green"
                delay={50 * (index + 1)}
              />
              
              <h3 className="text-xl font-terminal">{exp.company}</h3>
              
              {exp.description && (
                <p className="terminal-text opacity-80">{exp.description}</p>
              )}
              
              {exp.projects && (
                <div className="space-y-6 mt-4">
                  {exp.projects.map(project => (
                    <div key={project.name} className="terminal-card">
                      <h4 className="text-lg font-bold mb-2">{'>'} {project.name}</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li key={i} className="terminal-prompt text-sm">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {exp.details && (
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="terminal-prompt">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
