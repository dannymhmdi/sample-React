import React from "react";
import styles from "./grid-view.module.css";
const GridBody = ({ user ,children}) => {
    return (
      <div className={styles["grid-body"]}>
       {children}
      </div>
    );
};

export default GridBody;
{/* <div className={styles["grid-body-item"]}>{user.firstName}</div>
<div className={styles["grid-body-item"]}>{user.lastName}</div>
<div className={styles["grid-body-item"]}>{user.phone}</div>
<div className={styles["grid-body-item"]}>{user.email} </div>
<div className={styles["grid-body-item"]}>
  <span class="material-symbols-outlined">delete</span>
  <span class="material-symbols-outlined">edit</span>
</div> */}