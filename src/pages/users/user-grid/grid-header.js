import React from "react";
import styles from "./grid-view.module.css";

const GridHeader = () => {

  return (
    <div className={styles["grid-container"]}>
      <div className={styles["grid-item"]}>First name</div>
      <div className={styles["grid-item"]}>Last name</div>
      <div className={styles["grid-item"]}>phone</div>
      <div className={styles["grid-item"]}>Email</div>
      <div className={styles['grid-item']}>action</div>
    </div>
  );
};

export default GridHeader;
