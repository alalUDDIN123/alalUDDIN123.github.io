import React from 'react'
import "./style.css"
const Preloader = (props) => {

    return <div id={props.load ? "preloader" : "preloader-none"}></div>;

}

export default Preloader