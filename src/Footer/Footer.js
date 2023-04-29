import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <h1>
          My Log <br /> Travels
        </h1>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <div>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">My Travel Logs</a>
              </li>
            </div>
            <div>
              <li>
                <a href="#">Travels</a>
              </li>
              <li>
                <a href="#">Promo Flights</a>
              </li>
              <li>
                <a href="#">Travel Routes</a>
              </li>
            </div>
            <div>
              <li>
                <a href="#">Recomendation</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </div>
            <div>
              <li>
                <a href="#">Mission Statement</a>
              </li>
              <li>
                <a href="#">The Team</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </div>
          </ul>
        </div>
        <p className={styles.copyright}>
          2021-2022 My Log Travels. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
