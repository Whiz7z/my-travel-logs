import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";
import HeaderContent from "../HeaderContent/HeaderContent";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Menu />
      <HeaderContent />
    </header>
  );
};

export default Header;
