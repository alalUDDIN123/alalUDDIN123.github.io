import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import styles from '../../assests/styles/navbar.module.css';
// import myPdf from "./Alal-Uddin-Resume.pdf";

const ResumeBtn = ({ title }) => {
    const googleDriveLink = 'https://drive.google.com/file/d/1U8jcZz14uUk-vsq-q-APcEnkJMOXnfOE/view?usp=sharing';

    return (
        <Nav.Item className={`${styles.__navbar__Items} ${styles.__nav_item___}`}>
            <Button

                onClick={() =>
                    window.open(googleDriveLink)
                }
            >
                <a
                    href="/Alal-Uddin-Resume.pdf"
                    download

                >
                    {title}
                </a>
            </Button>
        </Nav.Item>
    );
};

export default ResumeBtn;
