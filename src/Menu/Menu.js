import React from "react";
import styles from "./Menu.module.scss";
import Button from "./../UI/Button/Button";

const Menu = () => {
  return (
    <section className={styles.menuSection}>
      <ul className={styles.menu_list}>
        <li className={styles.menu_list_item}>Home</li>
        <li className={styles.menu_list_item}>Guides</li>
        <li className={styles.menu_list_item}>Flights</li>
        <li className={styles.menu_list_item}>About</li>
      </ul>
      <div className={styles.buttonContainer}>
        <Button transparent theme={styles.button}>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Menu;
