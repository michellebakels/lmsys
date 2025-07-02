import type { Config } from 'tailwindcss'

const config = {
  // @ts-ignore - safelist is a valid Tailwind option
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        norbpen: ['var(--font-norb-pen)', 'sans-serif'],
      },
    },
  },
  safelist: [
    'font-norbpen'
  ],
  plugins: [],
}
export default config
