import React from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followerData: [],
      value: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/MarjaCarty")
      .then((res) => {
        this.setState({
          userData: res.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/MarjaCarty/followers")
      .then((res) => {
        this.setState({
          followerData: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.value}`)
      .then((res) => {
        this.setState({
          userData: res.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.github.com/users/${this.state.value}/followers`)
      .then((res) => {
        this.setState({
          followerData: res.data,
        });
      })
      .catch((err) => console.log(err));

    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="bigContainer">
        <h1 className="App-header">Find me a user!</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Github username here"
        />
        <button onClick={this.handleClick}>Search users</button>
        <Card
          userData={this.state.userData}
          followerData={this.state.followerData}
        />
      </div>
    );
  }
}

export default App;
