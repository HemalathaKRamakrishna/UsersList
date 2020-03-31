import React from "react";
import "./styles.css";
//import { Header } from "./components/Header.js";
//import { HeaderClass } from "./components/HeaderClass.js";

import { Clock } from "./components/Clock.js";

//const myClass = "app App";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.hideOrShowClock = this.hideOrShowClock.bind(this);
    this.state = {
      showMyClock: false
    };
  }

  hideOrShowClock() {
    this.setState({
      showMyClock: !this.state.showMyClock
    });
  }

  render() {
    const value = (
      <button onClick={this.hideOrShowClock}>Show / Hide Clock</button>
    );
    return (
      <div>
        {value}
        {this.state.showMyClock && <Clock notificationStyle={infoStyle} />}
      </div>
    );
  }
}

/*export default function App() {
  return (
    <div>
      <HeaderClass message="This is my First React Header Class" />      
    </div>
  );
}*/

/*
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
}*/
