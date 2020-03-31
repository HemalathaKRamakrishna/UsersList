import React from "react";
import "./styles.css";
//import { Header } from "./components/Header.js";
//import { Notification1 } from "./components/Notification1.js";
import {
  Notifications,
  errorStyle,
  successStyle,
  alertStyle,
  infoStyle
} from "./components/Notifications";

//const myClass = "app App";
export default function App() {
  return (
    <div>
      <HeaderClass message="This is my First React Header Class" />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Notifications
        notificationStyle={infoStyle}
        message="I am an Information Message"
        closeButtonMessage="Closing Information Box"
      />

      <Notifications
        notificationStyle={alertStyle}
        message="I am an Alert Message"
        closeButtonMessage="Closing Alert Box"
      />

      <Notifications
        notificationStyle={errorStyle}
        message="I am an Error Message"
        closeButtonMessage="Closing Error Box"
      />

      <Notifications
        notificationStyle={successStyle}
        message="I am a Success Message"
        closeButtonMessage="Closing Success Box"
      />
    </div>
  );
}
