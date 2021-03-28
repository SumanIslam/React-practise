import React, { Component } from "react";
import "./App.css";
import WiseSquares from "./WiseSquares";
import AnnoyingForm from "./AnnoyingForm";
import CopyDemo from "./CopyDemo";
import WiseSquaresWithProps from "./WiseSquaresWithProps";
import ButtonList from "./ButtonList";
import NumberList from "./NumberList";
import BetterNumberList from "./BetterNumberList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <WiseSquares />
        <WiseSquaresWithProps /> */}
        {/* <AnnoyingForm />
        <CopyDemo /> */}
        {/* <ButtonList /> */}
        <NumberList />
        <BetterNumberList />
      </div>
    );
  }
}

export default App;
