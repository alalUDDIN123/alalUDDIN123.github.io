import React from 'react'
import { Container } from 'react-bootstrap'
import myImg from "../../assests/images/alalone.png";
import "../Home/styles.css"
const About = () => {
    return (
        <>
            <Container fluid className="home-about-section" id="about">
                <h2 className="__heading_____">
                    About
                    <span> Me</span>
                </h2>


                <div className="__about__">

                    <div className="__about__img__">
                        <img src={myImg} alt="Alal Uddin" />
                    </div>

                    <div className="__about__content__">
                        <h3>Software Engineer</h3>
                        <p>
                            I'm Alal Uddin, a software engineer with a keen passion for crafting web solutions that enhance user experiences.
                            My skills extend to technologies like NodeJS, ExpressJS, MongoDB, ReactJS, Angular, JavaScript, HTML, and CSS.
                            I'm committed to staying abreast of industry trends and best practices, ensuring that I can provide innovative
                            and custom-tailored solutions that perfectly align with your business objectives.I keep my finger on the pulse
                            of industry trends and best practices, all to cook up creative solutions that perfectly match your business needs..

                        </p>
                    </div>


                </div>

            </Container>
        </>
    )
}

export default About