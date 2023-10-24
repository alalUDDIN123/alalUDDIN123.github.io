import React from 'react'
import { Button, Nav, } from 'react-bootstrap'
import styles from "../assests/styles/navbar.module.css"
const ResumeBtn = ({ title }) => {
    return (
        <>

            <Nav.Item className={`${styles.__navbar__Items} ${styles.__nav_item___}`}>
                <Button>{title}</Button>

            </Nav.Item>

        </>
    )
}

export default ResumeBtn