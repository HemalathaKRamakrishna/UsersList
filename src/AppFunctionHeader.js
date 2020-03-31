import React from "react";
import "./styles.css";
//import { Header } from "./components/Header.js";
import { HeaderClass } from "./components/HeaderClass.js";

//const myClass = "app App";
export default function App() {
  return (
    <div>
      <HeaderClass message="This is my First React Header Class" />
    </div>
  );
}
