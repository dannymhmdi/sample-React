import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./pages.module.css";
import { NavBar, NavItem } from "../components/nav-menu";
import Row from '../components/css-framework/row'
import {Outlet} from 'react-router-dom'
import {Helmet} from 'react-router-dom'
const Tutorials = () => {
  return (
    <div style={{paddingBottom:'16px'}}>
      <Row>
        <aside className={styles["aside-links"]}>
          <NavBar className={styles["nav-bar"]}>
            <h3 className="">React</h3>
            <NavItem>
              <NavLink to={'/tutorials'} className={styles['nav-link']} end>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"react-modules"} className={styles['nav-link']} >React Module</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'react-components'} className={styles['nav-link']}>React Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'w3schools'} className={styles['nav-link']}>W3 Sample</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'CSS-in-React'} className={styles['nav-link']}>CSS in React</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'class-module'} className={styles['nav-link']}>Class Modules</NavLink>
            </NavItem>
          </NavBar>
        </aside>
        <div className={styles["content"]}>
          <Outlet></Outlet>
        </div>
      </Row>
    </div>
  );
};

export default Tutorials;
