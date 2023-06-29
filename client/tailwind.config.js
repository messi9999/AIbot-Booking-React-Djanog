/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.js",
    "./src/components/Header.jsx",
    "./src/screens/ScheduleScreen.jsx",
    "./src/screens/ChatScreen.jsx",
    "./src/components/ChatAnswer.jsx",
    "./src/components/ChatQuestion.jsx",
    "./src/components/Login.jsx",
    "./src/components/Register.jsx"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
