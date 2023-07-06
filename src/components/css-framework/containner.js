import React from "react";
import styles from "./containner.module.css";

const Containner = ({ children, fluid }) => {
  return (
    <div className={fluid ? styles["container"] : styles["container-fluid"]}>
      {children}
    </div>
  );
};

export default Containner;
