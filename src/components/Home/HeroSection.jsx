import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Type from './Type'
import ResumeBtn from '../ResumeBtn'

const HeroSection = () => {
  return (
    <>
      <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Alal Uddin </strong>
              </h1>

              <div style={{ textAlign: "left", padding: "9px 0px 0px 41px" }}>
                <Type />
              </div>

              {/* <Row className="heading_home_social_main">
                <ul className="home-about-social-links">
                  <li className="social-icons" style={{ paddingLeft: "6.5%" }}>
                    <ResumeBtn title={"Get Resume"} />
                  </li>
                </ul>
              </Row> */}

              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="https://www.freecodecamp.org/news/content/images/2022/11/hire-full-stack-developers1546507474317-1.gif"

                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "25%" }}
              />
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default HeroSection