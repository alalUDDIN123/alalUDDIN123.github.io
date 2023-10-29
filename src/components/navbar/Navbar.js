import React from 'react'
import styles from "../../assests/styles/navbar.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiFillProject,
  AiFillContacts,
  AiFillHome,
  AiFillStar
} from "react-icons/ai";
import { FaUserTie } from "react-icons/fa"
import ResumeBtn from '../resumtBtn/ResumeBtn';
import HamburgerMenu from '../hamburger/HamburgerMenu';


const navItems = [
  {
    title: "Home",
    icon: <AiFillHome />,
    id: 1,
    referenceTo: "/",
  },
  {
    title: "About",
    icon: <FaUserTie />,
    id: 2,
    referenceTo: "/about",

  },
  {
    title: "Skills",
    icon: <AiFillStar />,
    id: 3,
    referenceTo: "/skills",

  },
  {
    title: "Projects",
    icon: <AiFillProject />,
    id: 4,
    referenceTo: "/projects",
  },
  {
    title: "Contact",
    icon: <AiFillContacts />,
    id: 5,
    referenceTo: "/contact",

  }
]
const NavBar = () => {

  const [navBg, updateNavbarBackgroundColor] = useState(false)

  function showNavbarBg() {
    if (window.scrollY >= 20) {
      updateNavbarBackgroundColor(true);
    } else {
      updateNavbarBackgroundColor(false);
    }
  }

  window.addEventListener("scroll", showNavbarBg);

  return (
    <>
      <nav className={`${navBg ? '__navbar__sticky' : '__main__navbar__'}`}>

        {/* navbar logo */}
        <div className={styles.__navbar__logo__}>
          <Link to={"/"}>
            <h1>Alal Uddin</h1>
          </Link>
        </div>

        {/* for mobile and tablet screen toggle bar */}

        <HamburgerMenu />

        {/* navbar item */}
        <div className={styles.___navbar__Items}>
          {/* item */}
          <div className={styles.__navbar__Item}>
            {navItems.map((item) => {
              return (
                <Link
                  className={styles.__nav__item__each}
                  to={item.referenceTo}
                >
                  {item.icon} {item.title}
                </Link>
              )
            })}
          </div>

          {/* resume button */}

          <ResumeBtn title={"Resume"} />
        </div>

      </nav>
    </>
  )
}

export default NavBar