import React from "react";
import styles from "./header.module.css";
import { Nav, NavBar } from "../nav-menu";
import NavItem from "../nav-menu/nav-item";
// import {Link} from 'react-router-dom'
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <header>
      <Nav>
        <NavBar className={styles["nav-bar"]}>
          <NavItem className={styles["nav-item"]}>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem className={styles["nav-item"]}>
            <NavLink to="/tutorials">tutorials</NavLink>
          </NavItem>
          <NavItem className={styles["nav-item"]}>
            <NavLink to="/user">Users</NavLink>
          </NavItem>
        </NavBar>
      </Nav>
    </header>
  );
};

export default Header;
