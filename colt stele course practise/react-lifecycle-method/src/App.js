import React, { Component } from "react";
import "./App.css";
import GithubUserInfo from "./GithubUserInfo";
import Timer from "./Timer";
import ZenQuote from "./ZenQuote";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Timer /> */}
        <ZenQuote />
        {/* <GithubUserInfo username="SumanIslam" />
        <GithubUserInfo username="aneagoie" />
        <GithubUserInfo username="Colt" />
        <GithubUserInfo username="jonasschmedtmann" />
        <GithubUserInfo username="bradtraversy" />
        <GithubUserInfo username="iamshaunjp" /> */}
      </div>
    );
  }
}

export default App;
