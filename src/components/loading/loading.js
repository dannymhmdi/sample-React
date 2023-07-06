import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["loading-element"]}></div>
    </div>
  );
};

export default Loading;
