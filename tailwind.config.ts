import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        "my": "#bd9d34"
      },
      backgroundColor: {
        "my": "#f9f4f0",
        "my2": "#bd9d34"
      },
      maxWidth: {
        "my": "1280px"
      },
      borderColor: {
        "my": "#bd9d34"
      }
    },
  },
  plugins: [],
}
export default config
