import React from "react";
import styles from "./card-view.module.css"
const UserCardFlex = ({children}) => {
    return (  <div className={styles['card-container-box']}>{children}</div>);
}
 
export default UserCardFlex;