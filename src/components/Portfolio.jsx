import React from 'react';
import ProjectsData from "../ProjectsData"

import GitHub from "../images/github.svg";
import externalLink from "../images/externalLink.svg"


const Portfolio = () => {
  console.log(ProjectsData)
  return (
    <section id="portfolio">
      <h1 className="portfolio-heading">Portfolio</h1>
      <div className="portfolio-grid">
        {ProjectsData.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.name}</h2>
            <p>
              {project.description}
            </p>
            <div className="technologies">
              {project.technologies.map((technology, index) => (
                <img key={index} src={technology} alt="" />
              ))}
            </div>
            <div className="link">
              <a
                href={project.links[0]}
                target="_blank"
                rel="noreferrer"
              ><img src={GitHub} alt="GitHub"
                /></a>
              <a
                href={project.links[1]}
                target="_blank"
                rel="noreferrer"
              ><img src={externalLink} alt="Live Site"
                /></a>
            </div>
          </div>
        ))}
      </div>
      <a
        className="see-more"
        href="https://github.com/TendaiChikwiri?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        See more on Github
      </a>
    </section>
  )
}

export default Portfolio
