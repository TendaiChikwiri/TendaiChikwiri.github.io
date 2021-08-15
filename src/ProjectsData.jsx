import API from "./images/api.svg";
import JavaScript from "./images/javascript.svg";
import React from "./images/react.svg";
import NextJS from "./images/nextjs.svg";
import Sass from "./images/sass.svg";
import Tailwind from "./images/tailwindcss.svg";
import TypeScript from "./images/typescript.svg";
import HTML from "./images/html.svg";
import CSS from "./images/css.svg";

const ProjectsData = [
  {
    name: "Weather App",
    description: "Weather application that shows current weather conditions fetched from an API for searched location",
    technologies: [API, NextJS],
    links: ["https://github.com/TendaiChikwiri/weather-app", "https://weather-app-neon-ten.vercel.app/"]
  },
  {
    name: "Tip Calculator",
    description: "Calculator app that calculates the tip based on a percentage and can also splits the bill between multiple people",
    technologies: [HTML, Sass, JavaScript],
    links: ["https://github.com/TendaiChikwiri/tip-calculator-app", "https://tendaichikwiri.github.io/tip-calculator-app/"]
  },
  {
    name: "Tik Tak Toe",
    description: "Tik Tak Toe game built with HTML, CSS & JavaScript",
    technologies: [HTML, CSS, JavaScript],
    links: ["https://github.com/TendaiChikwiri/tic-tac-toe", "https://tendaichikwiri.github.io/tic-tac-toe/"]
  },
  {
    name: "To Do App",
    description: " React Todo App built with TypeScript, ReactJS and tailwindCSS that stores tasks and stores them in local storage.",
    technologies: [TypeScript, React, Tailwind],
    links: ["https://github.com/TendaiChikwiri/todo-app", "https://tendaichikwiri.github.io/todo-app"]
  },

]

export default ProjectsData
