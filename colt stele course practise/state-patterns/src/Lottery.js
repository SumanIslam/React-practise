import React, { Component } from "react";
import LotteryBall from "./LotteryBall";

class Lottery extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      nums: Array.from({ length: this.props.NumBall }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((currstate) => ({
      nums: currstate.nums.map(
        (n) => Math.floor(Math.random() * this.props.MaxNum) + 1
      ),
    }));
  }
  handleClick() {
    this.generate();
  }

  render() {
    const props = this.props;
    return (
      <div>
        <h1>{props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <LotteryBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
