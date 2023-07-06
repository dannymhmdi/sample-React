import React, { Fragment } from "react";
import Containner from "../css-framework/containner";
import { Helmet } from "react-helmet";

const BasePage = ({ children, title, fluid }) => {
  return (
    <Containner fluid={fluid}>
      <Helmet>
        <title>React case study-{title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      {children}
    </Containner>
  );
};

export default BasePage;
