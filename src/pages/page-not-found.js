import React from "react";
import { Link } from "react-router-dom";
import styles from './pages.module.css'

const PageNotFound = () => {
    return ( <div className={styles['page-not-found']}>
        <h3>Page Not Found.<Link to={'home'}>Home</Link></h3>
    </div> );
}
 
export default PageNotFound;