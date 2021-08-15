import React from 'react'
import HomeImg from "../images/pixeltrue-web-development.svg"

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
        <h1 className="title">Front-end Web Developer</h1>
        <p className="description">
          Hi there! My name is Tendai. I design and develop websites and apps
          with custom graphics, photos, videos and animations.
        </p>
        <div className="call-to-action">
          <a className="hire-btn" href="#contact">Contact</a>
          <a className="portfolio-btn" href="#portfolio">Portfolio</a>
        </div>
      </div>
      <div className="home-right">
        <img src={HomeImg} alt="" />
      </div>
    </section>
  )
}

export default Home
