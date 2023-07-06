import React from "react";
import { useState } from "react";

const Event = () => {
  const [bgColor,setbgColor] = useState('false')
  const test = () => {
    setbgColor(!bgColor);
    console.log(bgColor)
  };
  return (
    <button
      onClick={test}
      style={{
        display: "inline-block",
        backgroundColor: bgColor === true ? 'greenyellow' : 'skyblue',
        padding: "6px 16px",
        borderRadius: "5px",
        outline: "none",
        border: "1px solid greenyellow",
        color:'black',
        fontSize:'16px',
        cursor:'pointer'
      }}
    >
      Call Event
    </button>
  );
};

export default Event;
