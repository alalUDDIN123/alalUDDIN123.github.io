import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import lms from "../../Images/lms.png"
import y from "../../Images/y.png"
import b from "../../Images/b.png"
import s from "../../Images/s.jpg"
import e_com from "../../Images/Products_Page.PNG"
import { FaGithub, FaEye } from "react-icons/fa";

export const Projects = () => {

  return (
    <div
      id="project"
      className="main_container"
      style={{
        backgroundColor: "#1a202c",
      }}
    >
      <div className="project_container">
        <div className="project_heading">
          <h2 className="title">
            Projects
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={lms} alt="Learning managemen" />
                </div>

                <div className="project_name">
                  <h2>Learning Management</h2>
                </div>
                <div className="project_desc">
                  <p>
                  This is one of the best project that I have made. There are two main persons. One 
                  is Admin and another Student
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> JavaScript, Html, Css
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/alalUDDIN123/Learning-Managment-System"
                      rel="noopener norefferer"
                      target="_blank"
                     
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://sparkling-salmiakki-eec37c.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img
                    style={{ width: "100%" }}
                    src={e_com}
                    alt="language"
                  />
                </div>

                <div className="project_name">
                  <h2>E-Commerce</h2>
                </div>
                <div className="project_desc">
                  <p>
                  This is my assignment project which I have done within 3 days . 
                  Only logged in user can access products route.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, Html, Css
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/alalUDDIN123/E-Commerce-Site"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://isnt-alal-uddin-awesome-20e04.netlify.app"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={y} alt="youtube" />
                </div>

                <div className="project_name">
                  <h2>YouTube Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                  This is a mini You Tube app build within 2 days .
                  By default most popular video shows here . 
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> JavaScript, Html, Css
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/alalUDDIN123/You-Tube-Mini-App"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://youtubeminiapp.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src="https://camo.githubusercontent.com/16674fc9990c57ead34af91c6f7a97238897502456a4253fc041cb6448f853be/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a775a33786c4d774b734f76666b4e346e53586a445f772e706e67" alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Netmeds.clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                  Netmeds is one of India's leading healthcare aggregators and
                   most trusted medicine delivery website.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> Html, Css, JavaScript
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/alalUDDIN123/psychedelic-art-4007"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://verdant-strudel-f074e5.netlify.app"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>


            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={b} alt="bewakoof" />
                </div>

                <div className="project_name">
                  <h2>Bewakoof.com</h2>
                </div>
                <div className="project_desc">
                  <p>
                  Bewakoof.com is leading E-Commerce web 
                  application which provides wide range of 
                  Men and Women Clothing .
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> Html, Css, JavaScript.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/alalUDDIN123/Team_Bewakoof?organization=alalUDDIN123&organization=alalUDDIN123"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://astonishing-kitten-4d475f.netlify.app"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={s} alt="Ssense" />
                </div>

                <div className="project_name">
                  <h2>Ssense-Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                   SSENSE is a multi-brand retailer based in Montreal,
                   Canada specialising in the sale .
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> Html, Css, JavaScript
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/alalUDDIN123/innate-partner-2755?organization=alalUDDIN123&organization=alalUDDIN123"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://euphonious-sable-199f27.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};