import { useState, useEffect } from 'react';
import GlitchEffect from '../ui/GlitchEffect';
import TypewriterText from '../ui/TypewriterText';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    // Initialize with your public key
    emailjs.init("9XyjyvgRmW1aonsmg");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_codllhj',
        'template_ctav33u',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'saqib.amin2323@gmail.com',
        },
        '9XyjyvgRmW1aonsmg'
      );
      
      setStatus('MESSAGE TRANSMITTED SUCCESSFULLY');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('TRANSMISSION FAILED. PLEASE TRY AGAIN');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="terminal-section">
      <GlitchEffect>
        <h2 className="terminal-title">ESTABLISH COMMUNICATION</h2>
      </GlitchEffect>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <TypewriterText
            text="READY TO CONNECT? TRANSMIT YOUR MESSAGE BELOW"
            className="text-lg opacity-80"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="terminal-text block mb-2">
              {'>'} ENTER YOUR NAME:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="terminal-input w-full"
              placeholder="_"
            />
          </div>

          <div>
            <label htmlFor="email" className="terminal-text block mb-2">
              {'>'} COMMUNICATION CHANNEL (EMAIL):
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="terminal-input w-full"
              placeholder="_"
            />
          </div>

          <div>
            <label htmlFor="message" className="terminal-text block mb-2">
              {'>'} YOUR MESSAGE:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="terminal-input w-full resize-none"
              placeholder="_"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="terminal-button animate-pulse"
              disabled={status === 'TRANSMITTING...'}
            >
              {status || 'TRANSMIT MESSAGE'}
            </button>
          </div>
        </form>

        <div className="text-center space-y-4">
          <p className="terminal-text">ALTERNATIVE COMMUNICATION CHANNELS:</p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/saqib2st"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
              title="GitHub Profile"
            >
              [GH]
            </a>
            <a
              href="https://www.linkedin.com/in/saqibz-amin/"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
              title="LinkedIn Profile"
            >
              [LI]
            </a>
            <a
              href="https://wa.me/+923099091002"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
              title="WhatsApp Contact"
            >
              [WA]
            </a>
            <a
              href="mailto:saqib.amin2323@gmail.com"
              className="terminal-button"
              title="Email Contact"
            >
              [EM]
            </a>
          </div>
        </div>

        {/* ASCII Art Decoration */}
        <div className="text-center opacity-50">
          <pre className="font-mono text-xs">
            {`
   /==========\\
   | CONTACT  |
   |  PORTAL  |
   \\==========/
            `}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Contact;
