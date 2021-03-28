import React, { Component } from 'react'
import './WiseSquares.css';
class WiseSquaresWithProps extends Component {
  // constructor(props) {
  //   super(props);
  //   this.dispenseWisdom = this.dispenseWisdom.bind(this);
  // }
  static defaultProps = {
    messages: [
      "A fool think himself to be wise, but a wise man knows himself a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced",
    ],
  };
  dispenseWisdom = () => {
    let index = Math.floor(Math.random() * this.props.messages.length);
    console.log(this.props.messages[index]);
  }
  render() {
    return (
      <div className="WiseSquares" onMouseEnter={this.dispenseWisdom} style={{backgroundColor: 'cyan'}}>
        <span role="img" aria-label="smiley">
          😃
        </span>
      </div>
    );
  }
}

export default WiseSquaresWithProps;