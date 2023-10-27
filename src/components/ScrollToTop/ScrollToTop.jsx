import { Box } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";

import React, { useState } from "react";
import styles from "./Scroll.module.css";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};

export const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <>  <Desktop>
            <Box className={styles.btn}>

                <FaArrowCircleUp

                    className={styles.icon}
                    style={{ display: visible ? "inline" : "none" }}
                    onClick={scrollToTop}
                />
            </Box></Desktop>
            <Tablet>
                <Box className={styles.Tabbtn}>

                    <FaArrowCircleUp

                        className={styles.Tabicon}
                        style={{ display: visible ? "inline" : "none" }}
                        onClick={scrollToTop}
                    />
                </Box>
            </Tablet>
            <Mobile>
                <Box className={styles.Mobbtn}>

                    <FaArrowCircleUp

                        className={styles.Mobicon}
                        style={{ display: visible ? "inline" : "none" }}
                        onClick={scrollToTop}
                    />
                </Box>
            </Mobile>
        </>

    )
};