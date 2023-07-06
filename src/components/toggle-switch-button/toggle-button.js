import React from "react";
import styles from "./toggle-button.module.css";
const ToggleButton = () => {
  return (
    <div className={styles["toggle-button-cover"]}>
      <div className={styles["button-cover"]}>
        <div
          className={`${styles["button"]} ${styles["r"]}`}
          id={styles["button-9"]}
        >
          <input type="checkbox" className={styles["checkbox"]} />
          <div className={styles["knobs"]}>
            <span></span>
          </div>
          <div className={styles["layer"]}></div>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
