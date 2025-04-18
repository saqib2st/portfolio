import Image from 'next/image';
import GlitchEffect from '../ui/GlitchEffect';
import TypewriterText from '../ui/TypewriterText';
import AsciiArt from '../ui/AsciiArt';

const About = () => {
  return (
    <section id="about" className="terminal-section">
      <GlitchEffect>
        <h2 className="terminal-title">PLAYER PROFILE</h2>
      </GlitchEffect>

      <div className="grid-cols-responsive">
        <div className="space-y-6">
          <div className="profile-image" style={{ marginRight: "10px", position: "relative", right: "-10px" }}>
            <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0, 255, 0, 0.2)" }}></div>
            <Image
              src="/images/profile.png"
              alt="Saqib"
              width={200}
              height={200}
              style={{
                objectFit: "cover",
                objectPosition: "calc(60% + 2.5px)",
                transform: "scale(1)",
                filter: "brightness(110%) contrast(125%)"
              }}
              className="w-full h-full"
            />
            <div className="absolute inset-0 opacity-50 animate-scan" 
                 style={{ backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.1), transparent)" }}></div>
          </div>

          <div className="terminal-text space-y-4">
            <TypewriterText
              text="Self-motivated and dedicated Flutter developer with expertise in API integration, Firebase implementation, and Dart programming."
              className="block"
            />
            <p className="terminal-prompt">Deep understanding of Git/Bitbucket version control systems and proficient with Jira for project management.</p>
            <p className="terminal-prompt">Specialized in creating responsive and user-friendly mobile applications with a focus on excellence in every project.</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="terminal-subtitle">{'>'} Education</h3>
            <div className="space-y-4">
              <div className="terminal-card">
                <p className="font-bold">BSCS (3.32/4.0) | 2018-2022</p>
                <p>Government College University, Faisalabad</p>
              </div>
              <div className="terminal-card">
                <p className="font-bold">ADP (Math, Statistics) | 2019-2022</p>
                <p>Punjab University, Lahore</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="terminal-subtitle">{'>'} Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Flutter', 'Dart', 'Firebase', 'REST API', 'Google Maps',
                'Git', 'GitHub', 'Bitbucket', 'Jira', 'Provider',
                'GetX', 'Bloc', 'HTML/CSS', 'JavaScript', 'Adobe XD',
                'UX/UI Design'
              ].map((tech) => (
                <span key={tech} className="terminal-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="terminal-subtitle">{'>'} Personal Achievements</h3>
            <ul className="list-none space-y-2">
              {[
                'IT Coordinator experience',
                '30 WPM typing speed',
                'Proficient in MS Office Suite',
                'Self-taught Flutter development',
                'Adobe Photoshop skills',
                'Video editing with WS Filmora',
                'Efficient usage of AI tools'
              ].map((achievement) => (
                <li key={achievement} className="terminal-prompt">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <AsciiArt content={`
   ____ 
  /    \\
 | CODE |
  \\____/
   |  |
  [____]
        `} />
      </div>
    </section>
  );
};

export default About;
