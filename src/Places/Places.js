import React from "react";
import styles from "./Places.module.scss";
import planePhoto from "../img/Airplace.png";
import bigPlacePhoto from "../img/places-big.png";
import smallPlacePhoto from "../img/places-small.png";
import stikerImage from "../img/Tape.png";

const Places = () => {
  return (
    <section className={styles.places_container}>
      <section className={styles.places_title}>
        <img alt="plane" src={planePhoto} className={styles.plane_photo} />
        <h1>
          See places you've <span>never</span> been before
        </h1>
        <p>
          Explore <span>Discover</span> Wander
        </p>
      </section>
      <section className={styles.places_content}>
        <div className={styles.bigPhoto_wrapper}>
          <img alt="sticker" src={stikerImage} className={styles.tape} />
          <img alt="place" src={bigPlacePhoto} className={styles.big_photo} />
        </div>
        <img alt="place" src={smallPlacePhoto} className={styles.small_photo} />
        <div className={styles.place_info_container}>
          <div className={styles.place_info}>
            <h3>Conquer the Summit & Serenity of the Lake</h3>
            <p>
              Take a moment to pause and reflect as you gaze at the tranquil
              waters of this beautiful lake. Surrounded by stunning natural
              scenery, let your mind and body relax and unwind in the peace and
              serenity of this beautiful location.
            </p>
            <p>
              Challenge yourself to conquer the heights of this majestic
              mountain. Experience the thrill and exhilaration of reaching the
              summit and taking in the breathtaking views from the top. Let the
              beauty of the natural world inspire and motivate you to push
              beyond your limits and achieve your goals.
            </p>
          </div>
          <div className={styles.arrow_container}>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Places;
