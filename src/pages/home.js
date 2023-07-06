import React from "react";
import Container from "../tutorials/w3schools/container";
import Containner from "../components/css-framework/containner";
import BasePage from "../components/base-page/base-page";

const Home = () => {
  return (
    
    <BasePage fluid={true} title={'Home'}>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          padding: "16px 12px",
        }}
      >
        <h3>React introduction</h3>
        <hr />
        <p style={{ fontSize: "20px" }}>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components. It is maintained by Meta
          and a community of individual developers and companies. React can be
          used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js.
        </p>
        <p style={{ fontSize: "20px", wordSpacing: "3" }}>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components. It is maintained by Meta
          and a community of individual developers and companies. React can be
          used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js.
        </p>
        <p style={{ fontSize: "20px", wordSpacing: "3" }}>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components. It is maintained by Meta
          and a community of individual developers and companies. React can be
          used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js.
        </p>
        <p style={{ fontSize: "20px", wordSpacing: "3" }}>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components. It is maintained by Meta
          and a community of individual developers and companies. React can be
          used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js.
        </p>
      </div>
    
    </BasePage>

  );
};

export default Home;
