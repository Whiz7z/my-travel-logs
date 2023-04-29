import React from "react";
import styles from "./Features.module.scss";
import firstImage from "../img/features-first.png";
import secondImage from "../img/features-second.png";
import thirdImage from "../img/features-third.png";

const Features = () => {
  return (
    <section className={styles.feature_section}>
      <div className={styles.features_content}>
        <div className={styles.feature_item}>
          <img alt="feature" src={firstImage}></img>
          <h3>Recreation</h3>
          <p>
            Whether you're looking for a peaceful hike through a serene forest
            or a relaxing day by the lake, we have options to suit every
            interest and budget. So why not take some time for yourself and
            explore the recreational opportunities that await you?
          </p>
        </div>
        <div className={styles.feature_item}>
          <img alt="feature" src={secondImage}></img>
          <h3>New Peaks</h3>
          <p>
            Explore breathtaking landscapes, summit new heights, and push your
            limits on thrilling outdoor activities such as rock climbing,
            mountaineering, and hiking. Our experienced guides will lead you on
            unforgettable journeys to some of the most beautiful and remote
            locations in the world.{" "}
          </p>
        </div>
        <div className={styles.feature_item}>
          <img alt="feature" src={thirdImage}></img>
          <h3>Amazing Views</h3>
          <p>
            From the towering mountains in the Himalayas to the crystal clear
            waters of the Maldives, we offer a wide range of destinations for
            you to discover and experience the most spectacular views in the
            world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
