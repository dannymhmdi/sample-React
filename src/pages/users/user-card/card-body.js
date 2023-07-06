import React from "react";
import  styles from "./card-view.module.css"
import user1 from "../../../assets/images/avatar2.jpg";
const CardBody = ({ name ,lastName, phone , email , onClick ,stu}) => {
  console.log('vvvvvvvv',onClick)
  return (
   <div className={`${styles['card-padding']} ${styles["col-12"]} ${styles['col-md-4']}`} style={{padding:'5px 5px'}}>
     <div className={`${styles["card-container"]} `}>
      <div className={styles["user-image"]}>
        <img src={user1} alt="user1" />
      </div>
      <h3>{name} {lastName}</h3>
      <div className={styles["phone-box"]}>phone : {phone}</div>
      <div className={styles["email-box"]}>email : {email}</div>
      <button onClick={() => onClick(stu)} className={styles['delete-btn']}>Delete</button>
      <button className={styles['edit-btn']}>Edit</button>
    </div>
   </div>
  );
};

export default CardBody;
