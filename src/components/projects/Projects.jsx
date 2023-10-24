import React from "react";
import "../../assests/styles/projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub, FaEye } from "react-icons/fa";
import { projectsData } from "./ProjectsData";

export const Projects = () => {
  return (
    <div id="projects" className="main_container" style={{ backgroundColor: "#1a202c" }}>
      <div className="project_container">
        <div className="project_heading">
          <h2 className="title">Projects</h2>
        </div>

        <div className="project_grid">
          {projectsData?.map((el, index) => (
            <div className="project_box" key={index} style={{ backgroundColor: "#1a202c" }}>
              <div className="project_image">
                <Carousel showArrows={true} autoPlay infiniteLoop showThumbs={false} autoFocus={true} showStatus={false} showIndicators={false} interval={2000}>
                  {el.images?.map((image, index) => (
                    <img src={image} alt={el.title} key={index} />
                  ))}
                </Carousel>
              </div>

              <div className="project_name">
                <h2>{el.title}</h2>
              </div>
              <div className="project_desc">
                <p>{el.description}</p>
              </div>

              <div className="project_tech_stack">
                <h5>
                  <span>Tech Stack :</span> {el.techStack}
                </h5>
              </div>

              <div className="project_icon">
                <div className="github_link">
                  <a href={el.gitHubLink} rel="noopener noreferrer" target="_blank">
                    <FaGithub /> Github
                  </a>
                </div>
                <div className="deploy_link">
                  <a href={el.deployedLink} rel="noopener noreferrer" target="_blank">
                    <FaEye /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
