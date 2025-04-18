import GlitchEffect from '../ui/GlitchEffect';
import TypewriterText from '../ui/TypewriterText';

const projects = [
  {
    title: 'Capital Connect',
    description: 'An app for youngsters to explore business, internship, workshop, education, learning, and job opportunities in Brussels, Belgium. Features check-in/out functionality at the Capital building.',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.capital.connect.app',
      appStore: 'https://apps.apple.com/us/app/capital-connect-be/id6742452533'
    }
  },
  {
    title: 'ChocoBliss',
    description: 'An admin app for ecommerce store and a responsive website for ecommerce in Flutter.',
    links: {
      website: 'https://chocobliss-e2bc5.web.app/'
    }
  },
  {
    title: 'Wiim AI',
    description: 'AI-powered property finder app with Tinder-like swipe experience. Uses artificial intelligence to match users with properties.',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.wiim.wiimai',
      appStore: 'http://apps.apple.com/fr/app/wiim-ai/id6499375497?l=en-GB'
    }
  },
  {
    title: 'Wiim Club',
    description: 'AI-powered app for real estate agents and Wiim club members. Features property management and advanced AI tools.'
  },
  {
    title: 'Hollywood Bets Live',
    description: 'A sports app for live scores and more, including news and sports coverage. Available exclusively in South Africa.',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.rivals.hwbet&hl=en'
    }
  },
  {
    title: 'Sport-Score',
    description: 'A Flutter app featuring intricate football UI and expertly handling complex APIs for seamless sports data integration with a user-friendly interface.'
  },
  {
    title: 'VLOO Create & Display',
    description: 'App enables users to craft customizable templates with text, images, and styling akin to Canva. Templates can be saved and displayed on connected TV screens via the TV VLOO app.'
  },
  {
    title: 'Home Hunter',
    description: 'A responsive Flutter-based app and website. Platform to search for apartments in the UAE while also offering functionality to upload and list individual properties.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="terminal-section">
      <GlitchEffect>
        <h2 className="terminal-title">PROJECT ARCHIVE</h2>
      </GlitchEffect>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="terminal-card group transition-all duration-300">
            <div className="space-y-4">
              <TypewriterText
                text={`> ${project.title}`}
                className="text-xl font-bold block"
                delay={50 * (index + 1)}
              />
              
              <p className="terminal-text" style={{ opacity: 0.8 }}>{project.description}</p>
              
              {project.links && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-button text-sm"
                    >
                      [WEBSITE]
                    </a>
                  )}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-button text-sm"
                    >
                      [PLAY STORE]
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-button text-sm"
                    >
                      [APP STORE]
                    </a>
                  )}
                </div>
              )}
            </div>
            
            <div className="project-hover-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
