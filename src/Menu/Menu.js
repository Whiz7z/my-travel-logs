import React, { useState, useRef } from "react";
import styles from "./Menu.module.scss";
import Button from "./../UI/Button/Button";
import { NavLink, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

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
            Home
          </NavLink>
        </li>
        <li key={"guide"} className={styles.menu_list_item}>
          <NavLink
            to="guide"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => hideBar()}
          >
            Guides
          </NavLink>
        </li>
        <li key={"flights"} className={styles.menu_list_item}>
          <NavLink
            to="flight"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => hideBar()}
          >
            Flight
          </NavLink>
        </li>
        <li key={"about"} className={styles.menu_list_item}>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => hideBar()}
          >
            About
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
