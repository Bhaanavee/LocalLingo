module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(210deg 70% 20%)",
        midBlue: "hsl(220deg 65% 50%)",
        lightBlue: "#7aebfb",
        purple: "rgba(149, 66, 232, 0.35)",
        lightGreen: "#8d39a3",
        softSky: "#65c4fa",
      },
      backgroundImage: {
        'gradient-01': 'linear-gradient(270deg, hsl(295deg 76% 51%) 0%, hsl(284deg 70% 73%) 26%, hsl(257deg 70% 86%) 39%, hsl(202deg 92% 90%) 50%, hsl(215deg 77% 81%) 61%, hsl(221deg 73% 70%) 74%, hsl(220deg 76% 51%) 100%)',
        'hero-gradient': 'linear-gradient(97.86deg, hsl(210deg 70% 20%) 0%, hsl(215deg 70% 30%) 50%, hsl(220deg 65% 50%) 100%)',
        'gradient-02': 'linear-gradient(270deg, #7aebfb, rgba(149, 66, 232, 0.35))',
        'gradient-03': 'linear-gradient(270deg, rgba(149, 66, 232, 0.35), rgba(45, 72, 152, 0.75))',
        'feedback-gradient': 'linear-gradient(270deg, #8d39a3, rgba(45, 72, 152, 0.75))',
        'footer-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
      }
    },
  },
  plugins: [],
}
