import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./styles.css"
import Skills from "../skills/Skills";
import { Projects } from "../projects/Projects";
import ContactMe from "../contact/ContactMe";
import HeroSection from "./HeroSection";
import About from "../About/About";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <HeroSection />
      </Container>

      {/* about */}

      <About />

      {/* skilss section */}

      <Skills />

      {/* projects */}
      <Projects />

      {/* contact section */}

      <ContactMe />
    </section>
  );
}

export default Home;