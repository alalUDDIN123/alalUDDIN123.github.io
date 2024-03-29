import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./styles.css"
import Skills from "../skills/Skills";
import { Projects } from "../projects/Projects";
import ContactMe from "../contact/ContactMe";
import HeroSection from "./HeroSection";
import About from "../About/About";
import { Helmet } from "react-helmet";

function Home() {
  return (


    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
    </>
  );
}

export default Home;