import React from "react";

export class Notification1 extends React.Component {
  constructor(props) {
    super(props);
    this.hideOrShowNotification = this.hideOrShowNotification.bind(this);
    this.state = {
      showNotifications: false
    };
  }

  hideOrShowNotification() {
    this.setState({
      showNotifications: !this.state.showNotifications
    });
  }

  render() {
    const value = (
      <button onClick={this.hideOrShowNotification}>Show / Hide</button>
    );
    return (
      <div style={this.props.notificationStyle}>
        {value}
        {this.state.showNotifications ? <h1>{this.props.message}</h1> : null}
      </div>
    );
  }
}
