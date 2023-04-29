import React from "react";
import styles from "./Packages.module.scss";
import Plus from "../UI/Icons/Plus";
import image from "../img/packages-img.png";

const Packages = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.packages}>
          <h1>Our most popular travel packages</h1>
          <ul className={styles.list}>
            <li>
              <p>
                <span>Nature Retreat:</span> This package is perfect for those
                who likes spend some time surrounded by nature
              </p>

              <span className={styles.plus}>
                <Plus />
              </span>
            </li>
            <li>
              <p>
                <span>Beach Getaway:</span> If you love the sun, sand, and surf,
                this package is for you
              </p>

              <span className={styles.plus}>
                <Plus />
              </span>
            </li>
            <li>
              <p>
                <span>Cultural Expedition:</span> For the curious traveler,
                explore new cultures and learning about history
              </p>

              <span className={styles.plus}>
                <Plus />
              </span>
            </li>
            <li>
              <p>
                <span>Mountain Adventure:</span> If you're a thrill-seeker who
                loves a challenge, this package is sure to satisfy
              </p>

              <span className={styles.plus}>
                <Plus />
              </span>
            </li>
          </ul>
        </div>
        <img alt="photoimage" src={image} className={styles.image} />
      </div>
    </section>
  );
};

export default Packages;
