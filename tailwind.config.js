/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': {
          DEFAULT: '#7C3AED', // Vibrant purple
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#2E1065',
        },
        'gradient': {
          'projects': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F43F5E 100%)',
          'skills': 'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #7C3AED 100%)',
          'experience': 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #7C3AED 100%)',
          'education': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #10B981 100%)',
          'contact': 'linear-gradient(135deg, #EC4899 0%, #F59E0B 50%, #7C3AED 100%)',
          'about': 'linear-gradient(135deg, #7C3AED 0%, #10B981 50%, #3B82F6 100%)',
          'hero': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F43F5E 100%)',
        },
        'text-primary': '#1F2937', // Darker gray for better contrast
        'text-secondary': '#4B5563', // Medium gray for secondary text
        'background': {
          DEFAULT: '#FFFFFF',
          'secondary': '#F9FAFB', // Lighter gray for subtle contrast
          'tertiary': '#F3F4F6', // Slightly darker for depth
        },
        'success': '#059669', // Emerald-600
        'error': '#DC2626', // Red-600
        'warning': '#D97706', // Amber-600
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-projects': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F43F5E 100%)',
        'gradient-skills': 'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #7C3AED 100%)',
        'gradient-experience': 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #7C3AED 100%)',
        'gradient-education': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #10B981 100%)',
        'gradient-contact': 'linear-gradient(135deg, #EC4899 0%, #F59E0B 50%, #7C3AED 100%)',
        'gradient-about': 'linear-gradient(135deg, #7C3AED 0%, #10B981 50%, #3B82F6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F43F5E 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(236, 72, 153, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(16, 185, 129, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(59, 130, 246, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(124, 58, 237, 0.1) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(236, 72, 153, 0.1) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'text-gradient': 'text-gradient 3s linear infinite',
        'shine': 'shine 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': '0% center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% center'
          },
        },
        shine: {
          '0%': {
            'background-position': '200% center'
          },
          '100%': {
            'background-position': '-200% center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(124, 58, 237, 0.5)',
      },
    },
  },
  plugins: [],
} 