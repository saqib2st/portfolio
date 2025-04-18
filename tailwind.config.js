/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#000000',
          darkGreen: '#003300',
          green: '#00ff00',
          lightGreen: '#33ff33',
          dimGreen: 'rgba(0, 255, 0, 0.3)',
          glow: 'rgba(0, 255, 0, 0.7)'
        }
      },
      fontFamily: {
        'mono': ['VT323', 'Courier New', 'monospace'],
        'terminal': ['Fira Code', 'monospace']
      },
      animation: {
        'scan': 'scan 2s linear infinite',
        'pulse': 'pulse 2s infinite',
        'glitch': 'glitch 5s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'crt-on': 'turn-on 4s linear forwards'
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100vh)' }
        },
        // Other keyframes will be added in globals.css
      },
      boxShadow: {
        'terminal': '0 0 10px 0 rgba(0, 255, 0, 0.7)',
        'terminal-hover': '0 0 20px 0 rgba(0, 255, 0, 0.9)'
      }
    }
  },
  plugins: [],
}
