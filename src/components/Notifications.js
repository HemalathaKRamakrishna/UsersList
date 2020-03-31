import React from "react";
import "../styles.css";

export function Notifications(props) {
  return (
    <div style={props.notificationStyle}>
      <h1>{props.message}</h1>
      <button style={{ position: "absolute", right: "0", top: "0" }}>X</button>
    </div>
  );
}

const commonStyle = {
  fontSize: "20px",
  width: "600px",
  border: "1px solid black",
  textAlign: "center",
  position: "relative",
  height: "100px"
};

export const errorStyle = {
  ...commonStyle,
  backgroundColor: "pink",
  color: "red"
};

export const infoStyle = {
  ...commonStyle,
  backgroundColor: "aqua",
  color: "blue"
};

export const alertStyle = {
  ...commonStyle,
  backgroundColor: "lightyellow",
  color: "orange"
};

export const successStyle = {
  ...commonStyle,
  backgroundColor: "lime",
  color: "green"
};
