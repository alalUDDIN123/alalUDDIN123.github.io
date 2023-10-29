import React, { useState } from 'react';
import styles from "../../assests/styles/hamburicon.module.css"
const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`${styles.__pure_css_hamburger__icons} ${isActive ? 'active' : ''}`}
            onClick={toggleMenu}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default HamburgerMenu;
