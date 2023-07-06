import React from "react";
import styles from "./main-layout.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const MainLayout = ({ children }) => {
  console.log(styles)
  return (
    <>
      <Header />
      <main className={styles['container']}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
