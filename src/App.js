import React from "react";
import "./styles.css";

import { DisplayUser, columnStyle } from "./components/DisplayUser.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersList = await response.json();
    this.setState({ usersList, isLoading: false });
  }

  render() {
    const usersListCopy = this.state.usersList
      ? this.state.usersList.slice()
      : null;

    const renderedList = this.state.usersList
      ? usersListCopy.map(user => {
          return <DisplayUser key={user.id} userObject={user} />;
        })
      : null;

    return (
      <div>
        <table style={{ borderCollapse: "collapse" }}>
          <tr>
            <th style={columnStyle}>User Name</th>
            <th style={columnStyle}>User Email</th>
            <th style={columnStyle}>Website</th>
            <th style={columnStyle}>Phone</th>
            <th style={columnStyle}>Company Name</th>
          </tr>
          {renderedList}
        </table>
      </div>
    );
  }
}
