import React from "react";
import "../styles.css";

export class HeaderClass extends React.Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}>{this.props.message}</h1>
      </div>
    );
  }
}

const myStyle = {
  backgroundColor: "pink",
  color: "green",
  border: "1px solid red",
  textAlign: "center"
};
