import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  // increment score
  incrementScore(currentState) {
    return {score: currentState.score + 1};
  }

  // singleSkill function
  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }

  // // tripleKill function
  // tripleKill() {
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  // }

  // tripleKill function
  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single kill!</button>
        <button onClick={this.tripleKill}>Triple kill!</button>
      </div>
    );
  }
}

export default ScoreKeeper;
