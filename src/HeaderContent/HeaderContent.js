import React from "react";
import styles from "./HeaderContent.module.scss";
import Button from "../UI/Button/Button";
import placeImage from "../img/place-header.png";

const HeaderContent = () => {
  return (
    <section className={styles.header_section}>
      <div className={styles.info_container}>
        <h1>Travel to your dream destination</h1>
        <p>
          Do you often find yourself daydreaming about traveling to an exotic
          location or a far-off destination? Look no further! Browse our website
          today and start planning your next adventure to your dream
          destination!
        </p>
        <Button>Reserve Tickets</Button>
      </div>
      <div className={styles.image_container}>
        <img src={placeImage} alt="place" />
      </div>
    </section>
  );
};

export default HeaderContent;
