/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brutalist: {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          gray: '#2a2a2a',
        },
        neon: {
          pink: '#ff0080',
          purple: '#8000ff',
          blue: '#0040ff',
          cyan: '#00e5ff',
          green: '#00ff80',
          yellow: '#ffdd00',
          red: '#ff0040',
        },
        rainbow: {
          red: '#ff0000',
          orange: '#ff4000',
          yellow: '#ff8000',
          green: '#00ff00',
          blue: '#0000ff',
          indigo: '#4000ff',
          violet: '#8000ff',
        }
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'rainbow': 'rainbow 4s ease-in-out infinite',
        'pulse-neon': 'pulse 1s infinite',
        'scanline': 'scanline 3s infinite',
        'rgb-split': 'rgbSplit 0.3s ease-out forwards',
        'text-flicker': 'textFlicker 0.5s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2px, 0)' },
          '40%': { transform: 'translate(2px, 0)' },
          '60%': { transform: 'translate(-1px, 0)' },
          '80%': { transform: 'translate(1px, 0)' },
        },
        rainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        rgbSplit: {
          '0%': { 
            filter: 'hue-rotate(0deg)',
            transform: 'translate(0, 0)'
          },
          '100%': { 
            filter: 'hue-rotate(15deg)',
            transform: 'translate(2px, -1px)'
          },
        },
        textFlicker: {
          '0%, 100%': { opacity: '1' },
          '40%': { opacity: '0.3' },
          '60%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(45deg, #ff0000, #ff4000, #ff8000, #00ff00, #00e5ff, #8000ff)',
        'neon-grid': 'linear-gradient(rgba(255, 0, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 128, 0.1) 1px, transparent 1px)',
        'diagonal-stripes': 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%)',
      },
      fontFamily: {
        'retro': ['"Orbitron"', '"Courier New"', 'monospace'],
        'brutal': ['"Bebas Neue"', 'Arial', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      dropShadow: {
        'neon-pink': '0 0 10px rgba(255, 0, 128, 0.8)',
        'neon-purple': '0 0 10px rgba(128, 0, 255, 0.8)',
        'neon-blue': '0 0 10px rgba(0, 64, 255, 0.8)',
        'neon-cyan': '0 0 10px rgba(0, 229, 255, 0.8)',
        'neon-green': '0 0 10px rgba(0, 255, 128, 0.8)',
        'neon-yellow': '0 0 10px rgba(255, 221, 0, 0.8)',
        'rainbow': '0 0 20px rgba(255, 0, 128, 0.5), 0 0 30px rgba(128, 0, 255, 0.3), 0 0 40px rgba(0, 255, 128, 0.2)',
      },
      spacing: {
        '2px': '2px',
        '4px': '4px',
      },
    },
  },
  plugins: [],
};
