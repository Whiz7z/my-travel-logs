import React, { useState, useEffect, useRef } from "react";
import styles from "./CustomersReviews.module.scss";
import userPhoto from "../img/user-photo.png";
import IconArrowBackSharp from "../UI/Arrows/IconArrowBackSharp";
import IconArrowForwardSharp from "../UI/Arrows/IconArrowForwardSharp";
let DUMMY_CUSTOMERS = [
  {
    name: "John Doe",
    review:
      "I had a wonderful experience with this service. The staff was very helpful and knowledgeable. Highly recommended!",
  },
  {
    name: "Jane Smith",
    review:
      "I've been using this service for a while now and I am extremely satisfied. They always go above and beyond to make sure I am happy with my travel experience.",
  },
  {
    name: "David Lee",
    review:
      "I recently used this service to plan my trip and I was very impressed. The itinerary they provided was well thought out and they were able to accommodate all of my requests.",
  },
  {
    name: "Patrick Bateman",
    review:
      "I had a great time on my trip thanks to this service. The hotel they recommended was amazing and the activities they suggested were perfect for me.",
  },
  {
    name: "Michael Brown",
    review:
      "I had some issues with my travel plans, but the customer service team at this service was very helpful and resolved everything quickly.",
  },
  {
    name: "Emily Davis",
    review:
      "I had an average experience with this service. While they were able to plan my trip, I didn't feel like they went out of their way to make it special.",
  },
];

const CustomersReviews = () => {
  const refs = useRef([]);
  const [indexes, setIndexes] = useState([0, 1, 2]);
  useEffect(() => {
    console.log(indexes);
  }, [indexes]);
  const handleBack = () => {
    setIndexes((prev) => [
      (prev[0] - 1) % DUMMY_CUSTOMERS.length === -1
        ? DUMMY_CUSTOMERS.length - 1
        : (prev[0] - 1) % DUMMY_CUSTOMERS.length,
      (prev[1] - 1) % DUMMY_CUSTOMERS.length === -1
        ? DUMMY_CUSTOMERS.length - 1
        : (prev[1] - 1) % DUMMY_CUSTOMERS.length,
      (prev[2] - 1) % DUMMY_CUSTOMERS.length === -1
        ? DUMMY_CUSTOMERS.length - 1
        : (prev[2] - 1) % DUMMY_CUSTOMERS.length,
    ]);
  };
  const handleForward = () => {
    setIndexes((prev) => [
      (prev[0] + 1) % DUMMY_CUSTOMERS.length,
      (prev[1] + 1) % DUMMY_CUSTOMERS.length,
      (prev[2] + 1) % DUMMY_CUSTOMERS.length,
    ]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Here's what they have to say...</h1>

        <div className={styles.slider}>
          <div
            className={`${styles.arrow} ${styles.left_arrow}`}
            onClick={() => handleBack()}
          >
            <IconArrowBackSharp />
          </div>

          <div key={indexes[0]} className={`${styles.review}`}>
            <img
              alt="profile"
              src={userPhoto}
              className={styles.customer_photo}
            />
            <h3>{DUMMY_CUSTOMERS[indexes[0]].name}</h3>
            <p>{DUMMY_CUSTOMERS[indexes[0]].review}</p>
          </div>

          <div key={indexes[1]} className={`${styles.review}`}>
            <img
              alt="profile"
              src={userPhoto}
              className={styles.customer_photo}
            />
            <h3>{DUMMY_CUSTOMERS[indexes[1]].name}</h3>
            <p>{DUMMY_CUSTOMERS[indexes[1]].review}</p>
          </div>

          <div key={indexes[2]} className={`${styles.review}`}>
            <img
              alt="profile"
              src={userPhoto}
              className={styles.customer_photo}
            />
            <h3>{DUMMY_CUSTOMERS[indexes[2]].name}</h3>
            <p>{DUMMY_CUSTOMERS[indexes[2]].review}</p>
          </div>

          <div
            className={`${styles.arrow} ${styles.right_arrow}`}
            onClick={() => handleForward()}
          >
            <IconArrowForwardSharp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersReviews;
