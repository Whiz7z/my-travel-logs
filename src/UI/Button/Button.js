import React from "react";
import styles from "./Button.module.scss";

const Button = ({ transparent, children, theme, ...buttonProps }) => {
  if (transparent) {
    return (
      <button className={`${styles.btn_transparent} ${theme}`} {...buttonProps}>
        {children}
      </button>
    );
  } else if (!transparent) {
    return (
      <button className={`${styles.btn_filled} ${theme}`} {...buttonProps}>
        {children}
      </button>
    );
  }
  return (
    <button className={`${styles.btn_transparent} ${theme}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
