/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
      addBase({
        ':root': {
          '--background': '0 0% 100%',
          '--foreground': '222.2 47.4% 11.2%',

          '--muted': '210 40% 96.1%',
          '--muted-foreground': '215.4 16.3% 46.9%',

          '--popover': '0 0% 100%',
          '--popover-foreground': '222.2 47.4% 11.2%',

          '--border': '214.3 31.8% 91.4%',
          '--input': '214.3 31.8% 91.4%',

          '--card': '0 0% 100%',
          '--card-foreground': '222.2 47.4% 11.2%',

          '--primary': '222.2 47.4% 11.2%',
          '--primary-foreground': '210 40% 98%',

          '--secondary': '210 40% 96.1%',
          '--secondary-foreground': '222.2 47.4% 11.2%',

          '--accent': '210 40% 96.1%',
          '--accent-foreground': '222.2 47.4% 11.2%',

          '--destructive': '0 100% 50%',
          '--destructive-foreground': '210 40% 98%',

          '--ring': '215 20.2% 65.1%',

          '--radius': '0.5rem',
        },
      }),
  ],
};
