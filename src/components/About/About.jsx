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
                        {/* <span className="__circle__round__one__"></span>
                        <span className="__circle__round__two__"></span> */}
                    </div>

                    <div className="__about__content__">
                        <h3>Software Engineer</h3>
                        <p>I'm Alal Uddin, a proficient software engineer with a deep passion for crafting exceptional web solutions.
                            My mission is to create web applications that simplify and enhance the lives of others.
                            My expertise covers a diverse range of technologies, including NodeJS,
                            ExpressJS, MongoDB, Mongoose, ReactJS, Angular, JavaScript, HTML, and CSS.
                            Beyond my technical skills, I'm dedicated to staying at the forefront of industry trends and best practices.
                            I look forward to leveraging my skills and experience to create innovative solutions that meet business goals.</p>
                    </div>


                </div>

            </Container>
        </>
    )
}

export default About