import React, { Component } from "react";
import "./Lottery2.css";
import LotteryBall2 from "./LotteryBall2";
class Lottery2 extends Component {
  static defaultProps = {
    title: "Lotto",
    numOfBall: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numOfBall }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((currstate) => ({
      nums: currstate.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <LotteryBall2 num={n} />
          ))}
        </div>
        <button className="btn" onClick={this.handleClick}>
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery2;
