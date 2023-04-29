import React from "react";
import styles from "./MyLogs.module.scss";
import Button from "../UI/Button/Button";

const MyLogs = () => {
  return (
    <section className={styles.myLogs_section}>
      <div className={styles.myLogs_content}>
        <h2>Create a memory to remember</h2>
        <p>
          Whether you’re seeking adventure, relaxation, or cultural immersion,
          there’s a travel experience waiting for you. Capture your memories and
          share them with others by keeping a travel log.
        </p>
        <Button transparent theme={styles.logsBtn}>
          My Travel Logs
        </Button>
      </div>
    </section>
  );
};

export default MyLogs;
