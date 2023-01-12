import {
  Box,
  Flex,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
import resume from "./Alal-Uddin-Resume.pdf";
import { useMediaQuery } from "react-responsive";
import { HiMenu } from "react-icons/hi";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

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

const Navbar = () => {


  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // "#edf2f8" : "#edf2f8",
  return (
    <>
      {/* --------------------------Desktop--------------------------------------- */}
      <Desktop>
        <Box>
          <div
            style={{
              backgroundColor: "#edf2f8",
            }}
            className="navbar"
            id="nav-menu"
          >
            <div>
              <div className="navbar_container">
                <ul className="left_navbar">
                  <div className="left_navbar_logo">
                    <h2>
                      Alal <span>Uddin</span>
                    </h2>
                  </div>
                </ul>

                <ul className="navbar_right">
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#"> ABOUT</a>
                  </li>
                  <li>
                    <a href="#skills">SKILLS</a>
                  </li>
                  <li>
                    <a href="#project">PROJECT</a>
                  </li>
                  <li>
                    <a href="#contact">CONTACT</a>
                  </li>
                  <li>

                    <a href={resume} download>
                      <Button
                        h="40px"
                        fontFamily="Poppins"
                        w="100px"
                        fontSize="16px"
                        color="white"
                        bg="#dc143c"
                        _hover={{
                          background: "transparent",
                          color: "#dc143c",
                          border: "2px solid #dc143c",
                        }}
                      >
                        RESUME
                      </Button>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Desktop>
      {/* ---------------------------Tablet-------------------------------------- */}
      <Tablet>
        <Box>
          <div
            style={{
              backgroundColor: "#edf2f8",
            }}
            className="navbar"
            id="nav-menu"
          >
            <div>
              <div className="navbar_container">
                <ul className="left_navbar">
                  <div className="left_navbar_logo">
                    <h2>
                      Alal<span>Uddin</span>
                    </h2>
                  </div>
                </ul>

                <Flex
                  justifyContent="right"
                  alignItems="center"
                  className="tabletnav"
                  gap="20px"
                  paddingRight="20px"
                >
                  <div className="menubar">
                    <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
                      <HiMenu size="40px" />
                    </Box>
                    <Drawer
                      size="xl"
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent
                        style={{
                          backgroundColor:"#edf2f8",
                        }}
                      >
                        <DrawerCloseButton fontSize="30px" />

                        <DrawerBody textAlign="center">
                          <ul className="moAndTablet">
                            <li onClick={onClose}>
                              <a href="#">HOME</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#"> ABOUT</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#skills">SKILLS</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#project">PROJECT</a>
                            </li>
                        
                            <li onClick={onClose}>
                              <a href="#contact">CONTACT</a>
                            </li>
                            <li onClick={onClose}>
                              <a href={resume} download>
                                <Button
                                  h="40px"
                                  fontFamily="Poppins"
                                  w="100px"
                                  fontSize="16px"
                                  color="white"
                                  bg="#dc143c"
                                  _hover={{
                                    background: "transparent",
                                    color: "#dc143c",
                                    border: "2px solid #dc143c",
                                  }}
                                >
                                  RESUME
                                </Button>
                              </a>
                            </li>
                          </ul>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </div>

                </Flex>
              </div>
            </div>
          </div>
        </Box>
      </Tablet>
      {/* ----------------------------Mobile------------------------------------- */}
      <Mobile>
        <Box>
          <div
            style={{
              backgroundColor: "#edf2f8",
            }}
            className="navbar"
            id="nav-menu"
          >
            <div>
              <div className="navbar_container">
                <ul className="left_navbar">
                  <div className="left_navbar_logo">
                    <h2>
                      Alal<span>Uddin</span>
                    </h2>
                  </div>
                </ul>

                <Flex
                  justifyContent="right"
                  alignItems="center"
                  className="tabletnav"
                  gap="20px"
                  paddingRight="20px"
                >
                  <div className="menubar">
                    <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
                      <HiMenu size="40px" />
                    </Box>
                    <Drawer
                      size="xl"
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent
                        style={{
                          backgroundColor:"#edf2f8",
                        }}
                      >
                        <DrawerCloseButton fontSize="30px" />

                        <DrawerBody textAlign="center">
                          <ul className="moAndTablet">
                            <li onClick={onClose}>
                              <a href="#">HOME</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#"> ABOUT</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#skills">SKILLS</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#project">PROJECT</a>
                            </li>
                            
                            <li onClick={onClose}>
                              <a href="#contact">CONTACT</a>
                            </li>
                            <li onClick={onClose}>
                              <a href={resume} download>
                                <Button
                                  h="40px"
                                  fontFamily="Poppins"
                                  w="100px"
                                  fontSize="16px"
                                  color="white"
                                  bg="#dc143c"
                                  _hover={{
                                    background: "transparent",
                                    color: "#dc143c",
                                    border: "2px solid #dc143c",
                                  }}
                                >
                                  RESUME
                                </Button>
                              </a>
                            </li>
                          </ul>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </div>

                  
                </Flex>
              </div>
            </div>
          </div>
        </Box>
      </Mobile>
    </>
  );
};

export default Navbar