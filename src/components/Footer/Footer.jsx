import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import "./footer.css"

const Footer = () => {
    return (


        <footer class="footer">
            <div class="footer-container">
                <div class="footer-icons">
                    <a href="https://github.com/alalUDDIN123">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/alal-uddin-066444206/">
                        <FaLinkedin />
                    </a>
                </div>
                <p class="footer-text">Copyright © 2023 Alal Uddin</p>
            </div>
        </footer>


    );
};

export default Footer;
