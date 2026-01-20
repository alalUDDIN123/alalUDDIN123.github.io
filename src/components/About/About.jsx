import React from 'react'
import { Container } from 'react-bootstrap'
import myImg from "../../assests/images/alalone.png";
import "./about.css"
const About = () => {
    return (
        <>
            <Container fluid className="home-about-section" id="about">
                <div className="__about__">
                    <div className="__about__img__">
                        <img src={myImg} alt="Alal Uddin" />
                    </div>
                    <div className="__about__content__">
                        <h3 className="__heading_____">
                            About
                            <span> Me</span>
                        </h3>
                        <h2>Full Stack Software Engineer</h2>
                        <p>
                            I’m a Full-Stack Software Engineer who enjoys building clean,
                            scalable, and user-focused web applications. I believe in writing
                            maintainable code, learning continuously, and turning ideas into
                            reliable digital experiences.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About