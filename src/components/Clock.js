import React from "react";

export class Clock extends React.Component {
  timerVal;
  constructor(props) {
    super(props);
    this.state = {
      clockValue: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerVal = setInterval(() => {
      this.setState({
        clockValue: new Date().toLocaleTimeString()
      });
      console.log("Component Did Mount");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerVal);
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <div style={this.props.notificationStyle}>
        <h1>{this.state.clockValue}</h1>
      </div>
    );
  }
}
