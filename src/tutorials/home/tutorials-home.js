 import React from "react";
 import Event from "./event";
import BasePage from "../../components/base-page/base-page";

const TutorialsHome = () => {
  const handleAlert = () => {
    alert('test is done')
  } 
  return (
    <BasePage fluid={true} title={'tutorials-home'}>
    <div>
      <h2>React Tutorial</h2>
      {/* <button onClick={handleAlert}>Event Test</button> */}
      <Event/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque
        nostrum fuga explicabo laudantium dignissimos, possimus voluptatibus
        quas recusandae magni nemo veniam assumenda dolorem. Nam labore a ab non
        hic.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque
        nostrum fuga explicabo laudantium dignissimos, possimus voluptatibus
        quas recusandae magni nemo veniam assumenda dolorem. Nam labore a ab non
        hic.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque
        nostrum fuga explicabo laudantium dignissimos, possimus voluptatibus
        quas recusandae magni nemo veniam assumenda dolorem. Nam labore a ab non
        hic.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque
        nostrum fuga explicabo laudantium dignissimos, possimus voluptatibus
        quas recusandae magni nemo veniam assumenda dolorem. Nam labore a ab non
        hic.
      </p>
    </div>
    </BasePage>
  );
};

export default TutorialsHome;
