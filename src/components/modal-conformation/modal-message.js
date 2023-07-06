import React from "react";
import styles from "./modal.module.css";
const ModalMessage = ({ onShowModal , onYesClick}) => {
  return (
    <div className={styles["modal-message"]}>
      <div className={styles["modal-header"]}>
        <button onClick={onShowModal}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className={styles["modal-body"]}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "50px", backgroundColor: "transparent" }}
        >
          warning
        </span>
        <h3>Are you sure to delete user?</h3>
      </div>
      <div className={styles["modal-footer"]}>
        <button onClick={onYesClick}>Yes</button>
        <button onClick={onShowModal}>No</button>
      </div>
    </div>
  );
};

export default ModalMessage;
