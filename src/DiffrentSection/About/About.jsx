import React from 'react'

import profile from "../../Images/mypic.png";
import "./about.css"
function About() {
    return (
        <>

            <section className="about" id="about">

                <h2 className="title">About me</h2>
                <div clasName="about-content">
                    <div clasName="column right">
                        <div className="text">I'm Alal Uddin and I'm a <span clasName="typing-2"></span></div>
                        <p> Passionate Developer proficient in Web NodeJS, ExpressJS, MongoDb,Mongoose, ReactJS,
                            JavaScript, HTML, CSS,Data Structures, and Algorithms. Approachable team leader, always keen to take
                            the goal-oriented path to complete the tasks at hand. Strongly interested in
                            obtaining a Developer position to create scalable products and work on providing a
                            wow-user experience through them.</p>
                      
                    </div>
                </div>

            </section>


        </>

    )
}

export default About
