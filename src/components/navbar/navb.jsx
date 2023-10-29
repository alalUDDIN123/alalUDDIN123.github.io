

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiFillProject,
  AiFillContacts,
  AiFillHome,
  AiFillStar
} from "react-icons/ai";
import { FaUserTie } from "react-icons/fa"
import { Link } from "react-scroll";
import styles from "../../assests/styles/c.css"

import { useEffect } from "react";
import ResumeBtn from "../resumtBtn/ResumeBtn";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  useEffect(() => {
    function handleScroll() {
      const sections = ["home", "about", "skills", "projects", "contact"];

      // Determine the active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();
          // console.log("react getBround ::", rect)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h1>{`Alal Uddin`}</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            {/* home */}
            <Nav.Item className={activeSection === "home" ? "__navbar__active__item" : ""}>
              <Link
                className="__nav__link__react__smooth__"
                to="home"
                onClick={() => updateExpanded(false)}
                smooth
                duration={500}>
                <AiFillHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </Nav.Item>

            {/* about */}
            <Nav.Item className={activeSection === "about" ? "__navbar__active__item" : ""}>
              <Link
                className="__nav__link__react__smooth__"
                to="about"
                onClick={() => updateExpanded(false)}
                smooth
                duration={500}>
                <FaUserTie style={{ marginBottom: "2px" }} /> About
              </Link>
            </Nav.Item>


            {/* skills */}
            <Nav.Item className={activeSection === "skills" ? "__navbar__active__item" : ""}>
              <Link
                className="__nav__link__react__smooth__"
                to="skill"
                onClick={() => updateExpanded(false)}
                smooth
                duration={500}>
                <AiFillStar style={{ marginBottom: "2px" }} /> Skills
              </Link>
            </Nav.Item>

            {/* projects  */}
            <Nav.Item className={activeSection === "projects" ? "__navbar__active__item" : ""}>
              <Link
                className="__nav__link__react__smooth__"
                to="projects"
                smooth
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <AiFillProject style={{ marginBottom: "2px" }} /> Projects
              </Link>
            </Nav.Item>

            {/* contact */}
            <Nav.Item className={activeSection === "contact" ? "__navbar__active__item" : ""}>
              <Link
                className="__nav__link__react__smooth__"
                to="contacts"
                smooth
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <AiFillContacts style={{ marginBottom: "2px" }} /> Contact
              </Link>
            </Nav.Item>

            <Nav.Item className={`${styles.__navbar__Items} ${styles.__nav_item___}`}>
              <ResumeBtn title={"Resume"} />

            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
