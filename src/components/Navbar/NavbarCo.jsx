import {
    Box,
    Flex,
    useDisclosure,
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


const NavbarCo = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
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
                                        <a href="#about"> ABOUT ME </a>
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


                                        <button
                                            style={{
                                                backgroundColor: "#3500D3",
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "15px",
                                                cursor: "pointer",
                                                padding: "8px 15px",
                                                borderRadius: "15px",
                                                border: "3px solid rgba(11,12,16,0.4)",
                                            }}
                                            onClick={() =>
                                                window.open("https://drive.google.com/file/d/1n1-8DiwYU_Ym7kiDbt88Cx9geuquGLO7/view")
                                            }
                                        >
                                            <a
                                                href={resume}
                                                download="Alal-Uddin-Resume.pdf"
                                                style={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                            >
                                                Resume
                                            </a>
                                        </button>


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
                                                    backgroundColor: "#edf2f8",
                                                }}
                                            >
                                                <DrawerCloseButton fontSize="30px" />

                                                <DrawerBody textAlign="center">
                                                    <ul className="moAndTablet">
                                                        <li onClick={onClose}>
                                                            <a href="#">HOME</a>
                                                        </li>
                                                        <li onClick={onClose}>
                                                            <a href="#about"> ABOUT ME</a>
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
                                                            <button
                                                                style={{
                                                                    backgroundColor: "#3500D3",
                                                                    color: "white",
                                                                    fontWeight: "bold",
                                                                    fontSize: "15px",
                                                                    cursor: "pointer",
                                                                    padding: "8px 15px",
                                                                    borderRadius: "15px",
                                                                    border: "3px solid rgba(11,12,16,0.4)",
                                                                }}
                                                                onClick={() =>
                                                                    window.open("https://drive.google.com/file/d/1n1-8DiwYU_Ym7kiDbt88Cx9geuquGLO7/view")
                                                                }
                                                            >
                                                                <a
                                                                    href={resume}
                                                                    download="Alal-Uddin-Resume.pdf"
                                                                    style={{
                                                                        textDecoration: "none",
                                                                        color: "inherit",
                                                                    }}
                                                                >
                                                                    Resume
                                                                </a>
                                                            </button>

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
                                                    backgroundColor: "#edf2f8",
                                                }}
                                            >
                                                <DrawerCloseButton fontSize="30px" />

                                                <DrawerBody textAlign="center">
                                                    <ul className="moAndTablet">
                                                        <li onClick={onClose}>
                                                            <a href="#">HOME</a>
                                                        </li>
                                                        <li onClick={onClose}>
                                                            <a href="#about"> ABOUT ME</a>
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
                                                            <button
                                                                style={{
                                                                    backgroundColor: "#3500D3",
                                                                    color: "white",
                                                                    fontWeight: "bold",
                                                                    fontSize: "15px",
                                                                    cursor: "pointer",
                                                                    padding: "8px 15px",
                                                                    borderRadius: "15px",
                                                                    border: "3px solid rgba(11,12,16,0.4)",
                                                                }}
                                                                onClick={() =>
                                                                    window.open("https://drive.google.com/file/d/1n1-8DiwYU_Ym7kiDbt88Cx9geuquGLO7/view")
                                                                }
                                                            >
                                                                <a
                                                                    href={resume}
                                                                    download="Alal-Uddin-Resume.pdf"
                                                                    style={{
                                                                        textDecoration: "none",
                                                                        color: "inherit",
                                                                    }}
                                                                >
                                                                    Resume
                                                                </a>
                                                            </button>

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

    )
}

export default NavbarCo