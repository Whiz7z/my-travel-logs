import React, { useState, useRef } from "react";
import styles from "./Menu.module.scss";
import Button from "./../UI/Button/Button";
import { NavLink, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Menu = () => {
  const navRef = useRef();
  const location = useLocation();
  let activeStyle = {
    fontWeight: "bold",
  };
  const setSelected = (e) => {
    console.log(e.target.key);
    e.target.className = styles.boldText;
  };

  const showBar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  const hideBar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };
  return (
    <section className={styles.menuSection}>
      <ul ref={navRef} className={styles.menu_list}>
        <li
          key={"home"}
          className={styles.menu_list_item}
          onClick={(e) => setSelected(e)}
        >
          <NavLink
            to="home"
            style={({ isActive }) =>
              isActive | (location.pathname === "/") ? activeStyle : undefined
            }
            onClick={() => hideBar()}
          >
            <Link to="home" py={true} smooth={true}>
              Home
            </Link>
          </NavLink>
        </li>
        <li className={styles.menu_list_item}>
          <NavLink
            to="places"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => hideBar()}
          >
            <Link to="places" py={true} smooth={true}>
              Places
            </Link>
          </NavLink>
        </li>
        <li className={styles.menu_list_item}>
          <NavLink
            to="packages"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => hideBar()}
          >
            <Link to="packages" py={true} smooth={true}>
              Packages
            </Link>
          </NavLink>
        </li>
        <li className={styles.menu_list_item}>
          <NavLink
            to="contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => hideBar()}
          >
            <Link to="contact" py={true} smooth={true}>
              Contact
            </Link>
          </NavLink>
        </li>
        <button
          className={`${styles.nav_btn} ${styles.nav_close_btn}`}
          onClick={() => showBar()}
        >
          <FaTimes />
        </button>
      </ul>

      <button
        className={`${styles.nav_btn} ${styles.nav_burger_btn}`}
        onClick={() => showBar()}
      >
        <FaBars />
      </button>
      <div className={styles.buttonContainer}>
        <Button transparent theme={styles.button}>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Menu;
