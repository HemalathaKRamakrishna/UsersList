import React from "react";

export function DisplayUser(props) {
  return (
    <>
      <tr>
        <td style={columnStyle}>{props.userObject.name}</td>
        <td style={columnStyle}>{props.userObject.email}</td>
        <td style={columnStyle}>{props.userObject.website}</td>
        <td style={columnStyle}>{props.userObject.phone}</td>
        <td style={columnStyle}>{props.userObject.company.name}</td>
      </tr>
    </>
  );
}

export const columnStyle = {
  fontSize: "20px",
  width: "30%",
  border: "1px solid black",
  textAlign: "center",
  height: "50px"
};
