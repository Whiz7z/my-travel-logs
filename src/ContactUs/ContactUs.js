import React from "react";
import styles from "./ContactUs.module.scss";
import image from "../img/contactUs-img.png";
import Button from "../UI/Button/Button";

const ContactUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.form_container}>
          <h1>Be updated!</h1>
          <form>
            <input
              type="text"
              placeholder="First Name*"
              className={styles.inputs}
            />
            <input
              type="text"
              placeholder="Last Name*"
              className={styles.inputs}
            />
            <input
              type="email"
              placeholder="Email*"
              className={styles.inputs}
            />
            <textarea
              type="textarea"
              placeholder="Write tour message..."
              className={styles.textarea}
            ></textarea>
            <Button theme={styles.submit_btn}>Submit Email</Button>
          </form>
        </div>
        <img alt="image us" src={image} className={styles.image} />
      </div>
    </section>
  );
};

export default ContactUs;
