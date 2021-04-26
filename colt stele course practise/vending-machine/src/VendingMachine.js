import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h2>hello i am a vending machine. what would you like to eat?</h2>
        </Message>

        <Message>
          <h3>
            <Link exact to="/soda">
              Soda
            </Link>
          </h3>

          <h3>
            <Link exact to="/sardines">
              Sardines
            </Link>
          </h3>
          <h3>
            <Link exact to="/chips">
              Chips
            </Link>
          </h3>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
