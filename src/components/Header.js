import React from "react";
import "../styles.css";

export function Header(props) {
  return (
    <div>
      <h1 style={testStyleFunction(true)}>{props.headerName}</h1>
      <h1 style={testStyleFunction(false)}>Second Header</h1>
      <h1 style={{ color: "black" }}>Third Header</h1>

      <button onClick={props.onButtonClick}>Click me</button>
    </div>
  );
}

const isAvailable = true;
const myStyle1 = {
  backgroundColor: "pink",
  color: { isAvailable } ? "blue" : "green"
};

const myStyle2 = {
  backgroundColor: "yellow",
  color: { isAvailable } ? "green" : "blue"
};

let testStyleFunction = isAvailable => {
  return isAvailable ? myStyle1 : myStyle2;
};
