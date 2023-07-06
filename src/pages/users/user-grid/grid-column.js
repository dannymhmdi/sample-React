import React from "react";
import styles from "./grid-view.module.css"
const GridColumn = ({children , className}) => {
    return ( <div className={`${styles['grid-body-item']} ${className}`}>{children}</div> );
}
 
export default GridColumn;