/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9ca3af",
        
"secondary": "#f3f4f6",
        
"accent": "#dbeafe",
        
"neutral": "#44403c",
        
"base-100": "#6b7280",
        
"info": "#c7d2fe",
        
"success": "#bbf7d0",
        
"warning": "#f59e0b",
        
"error": "#7f1d1d",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
