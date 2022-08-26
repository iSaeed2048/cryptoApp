import React from "react";
// Style
import styles from "./Loader.module.css";

const Loader = () => {
  setInterval(() => {
    document.querySelector("p").innerHTML = '<a href="/">refresh?</a>';
  }, 5000);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
