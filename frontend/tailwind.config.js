/** @type {import('tailwindcss').Config} */
module.exports = {
    // `overline` is a Tailwind utility; without this an app's own eyebrow-label class draws a line above the text.
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        background: 'oklch(var(--background-raw) / <alpha-value>)',
        foreground: 'oklch(var(--foreground-raw) / <alpha-value>)',
        card: { DEFAULT: 'oklch(var(--background-raw) / <alpha-value>)', foreground: 'oklch(var(--foreground-raw) / <alpha-value>)' },
        popover: { DEFAULT: 'oklch(var(--background-raw) / <alpha-value>)', foreground: 'oklch(var(--foreground-raw) / <alpha-value>)' },
        primary: { DEFAULT: 'oklch(var(--primary-raw) / <alpha-value>)', foreground: 'oklch(var(--primary-foreground-raw) / <alpha-value>)' },
        secondary: { DEFAULT: 'oklch(var(--secondary-raw) / <alpha-value>)', foreground: 'oklch(var(--foreground-raw) / <alpha-value>)' },
        muted: { DEFAULT: 'oklch(var(--secondary-raw) / <alpha-value>)', foreground: 'oklch(var(--muted-foreground-raw) / <alpha-value>)' },
        accent: { DEFAULT: 'oklch(var(--accent-raw) / <alpha-value>)', foreground: 'oklch(var(--foreground-raw) / <alpha-value>)' },
        destructive: { DEFAULT: 'oklch(var(--destructive-raw) / <alpha-value>)', foreground: 'oklch(var(--primary-foreground-raw) / <alpha-value>)' },
        border: 'oklch(var(--border-raw) / <alpha-value>)',
        input: 'oklch(var(--border-raw) / <alpha-value>)',
        ring: 'oklch(var(--primary-raw) / <alpha-value>)',
        scrim: 'oklch(var(--scrim-raw) / <alpha-value>)',
        gold: 'oklch(var(--gold-raw) / <alpha-value>)',
        'on-image': 'oklch(var(--on-image-raw) / <alpha-value>)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};