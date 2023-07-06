import React from "react";
import styles from "./modal.module.css";
import ModalMessage from "./modal-message";
const Modal = ({onShowModal , onYesClick}) => {
  return (
    <div className={styles["modal-container"]}>
      <ModalMessage onShowModal={onShowModal} onYesClick={onYesClick}/>
    </div>
  );
};

export default Modal;
