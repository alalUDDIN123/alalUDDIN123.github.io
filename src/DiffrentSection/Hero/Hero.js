import React from "react";
import "./Hero.css";
import profile from "../../Images/mypic.png";
import { saveAs } from 'file-saver';
import { Box, Button, SimpleGrid, useColorMode } from "@chakra-ui/react";
import resume from "../../Components/Navbar/Alal-Uddin-Resume.pdf";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";
import SocialLinks from "./SocialLiks";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <>

      <Desktop>
        <div
          style={{
            backgroundColor: colorMode === "light" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_content">
                  <h5>Hello, my name is</h5>
                  <h2>Alal Uddin</h2>

                  <div className="full">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Mern Stack Developer.",
                            "A Tech Enthusiastic.",
                            "And ",
                            "Front End Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>


                  {/* <Button
                    mt={10}
                    h="50px"
                    fontFamily="Poppins"
                    w="150px"
                    fontWeight="bold"
                    fontSize="20px"
                    color="white"
                    bg="#dc143c"
                    _hover={{
                      background: "transparent",
                      color: "#dc143c",
                      border: "2px solid #dc143c",
                    }}

                    onClick={() => {
                      saveAs(resume, "Alal-Uddin-Resume.pdf")
                     
                    }}
                  >
                    RESUME
                  </Button> */}

                  <a href={resume} target="_blank" >
                    <Button
                       mt={10}
                       h="50px"
                       fontFamily="Poppins"
                       w="150px"
                       fontWeight="bold"
                       fontSize="20px"
                       color="white"
                       bg="#dc143c"
                       _hover={{
                         background: "transparent",
                         color: "#dc143c",
                         border: "2px solid #dc143c",
                       }}
                      onClick={() => {
                        saveAs(resume, "Alal-Uddin-Resume.pdf")
                      }}
                    >
                      RESUME
                    </Button>
                  </a>




                </div>
              </div>
            </Box>

            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_img">
                  <img src={profile} alt="Profile_image" />
                </div>
              </div>
            </Box>
          </SimpleGrid>

        </div>
      </Desktop>

      <Tablet>
        <div
          style={{
            backgroundColor: colorMode === "light" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container_tablet"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_img_tablet">
                  <img src={profile} alt="Profile_image" />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_tablet">
                <div className="home_box_content_tablet">
                  <h5>Hello, my name is</h5>
                  <h2>Alal Uddin</h2>
                  <div className="full_tablet">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Developer.",
                            "Mern Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <a href={resume} target="_blank" >
                    <Button
                       mt={10}
                       h="50px"
                       fontFamily="Poppins"
                       w="150px"
                       fontWeight="bold"
                       fontSize="20px"
                       color="white"
                       bg="#dc143c"
                       _hover={{
                         background: "transparent",
                         color: "#dc143c",
                         border: "2px solid #dc143c",
                       }}
                      onClick={() => {
                        saveAs(resume, "Alal-Uddin-Resume.pdf")
                      }}
                    >
                      RESUME
                    </Button>
                  </a>

                </div>
              </div>
            </Box>
          </SimpleGrid>

        </div>
      </Tablet>

      <Mobile>
        <div
          style={{
            backgroundColor: colorMode === "light" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container_mobile"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_img_mobile">
                  <img src={profile} alt="Profile_image" />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_content_mobile">
                  <h5>Hello, my name is</h5>
                  <h2>Alal Uddin</h2>
                  <div className="full_phone">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Developer.",
                            "Mern Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>

                    <a href={resume} target="_blank" >
                    <Button
                       mt={10}
                       h="50px"
                       fontFamily="Poppins"
                       w="150px"
                       fontWeight="bold"
                       fontSize="20px"
                       color="white"
                       bg="#dc143c"
                       _hover={{
                         background: "transparent",
                         color: "#dc143c",
                         border: "2px solid #dc143c",
                       }}
                      onClick={() => {
                        saveAs(resume, "Alal-Uddin-Resume.pdf")
                      }}
                    >
                      RESUME
                    </Button>
                  </a>
                  
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </Mobile>
      <SocialLinks />
    </>
  );
};
