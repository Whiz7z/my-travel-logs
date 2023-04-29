import React from "react";
import styles from "./ChooseSection.module.scss";
import image from "../img/chooseSection-place.png";

const ChooseSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titles}>
          <h1>
            Choose anywhere <br />
            you'd like to be
          </h1>
          <div className={styles.subtitle}>
            <h3>Secluded Beaches</h3>
            <p>
              Are you tired of the crowded beaches and the bustling city life?
              Come and explore our secluded beaches, where you can enjoy the
              tranquility and solitude of nature. Walk on the soft sands,
              breathe in the fresh sea air, and listen to the soothing sound of
              the waves. Choose your spot and relax, or indulge in water sports
              and beach activities.
            </p>
          </div>
          <div className={styles.subtitle}>
            <h3>Alpine Getaways</h3>
            <p>
              If you are looking for an escape to the mountains, look no further
              than our alpine getaways. Experience the majestic beauty of the
              snow-capped peaks, crystal-clear lakes, and picturesque valleys.
              Enjoy skiing, snowboarding, hik ing, or simply relax in a cozy
              mountain lodge
            </p>
          </div>
        </div>
        <img alt="choose" src={image} className={styles.picture} />
      </div>
    </section>
  );
};

export default ChooseSection;
