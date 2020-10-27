import React from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
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
  }

  render() {
    return (
      <div>
        <Card userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
