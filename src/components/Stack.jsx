import React from 'react'
import JavaScriptIcon from "../images/javascript.svg";
import Python from "../images/python.svg";
import ReactIcon from "../images/react.svg";
import NextJS from "../images/nextjs.svg";
import Sass from "../images/sass.svg";
import Tailwind from "../images/tailwindcss.svg";

const Stack = () => {
  return (
    <section id="stack">
      <h1>Tech Stack</h1>
      <h2>Programming Languages</h2>
      <ul className="languages stack-list">
        <li>
          <img src={JavaScriptIcon} alt="" />
          <p>JavaScript</p>
        </li>
        <li>
          <img src={Python} alt="" />
          <p>Python</p>
        </li>
      </ul>
      <h2>Front-end</h2>
      <ul className="front-end stack-list">
        <li>
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </li>
        <li>
          <img src={NextJS} alt="" />
          <p>NextJs</p>
        </li>
        <li>
          <img src={Sass} alt="" />
          <p>Sass</p>
        </li>
        <li>
          <img src={Tailwind} alt="" />
          <p>Tailwind CSS</p>
        </li>
      </ul>
      {/* <!-- <h2>Back-end</h2>
      <ul className="back-end stack-list">
        <li>
          <img src="./icons/django.svg" alt="" />
          <p>Django</p>
        </li>
        <li>
          <img src="./icons/express.svg" alt="" />
          <p>Express</p>
        </li>
      </ul>
      <h2>Databases</h2>
      <ul className="database stack-list">
        <li>
          <img src="./icons/mongodb-icon-1.svg" alt="" />
          <p>MongoDB</p>
        </li>
        <li>
          <img src="./icons/sqlite.svg" alt="" />
          <p>SQLite</p>
        </li>
      </ul> --> */}
    </section>
  )
}

export default Stack
