import React, { Component } from "react";

import "./ButtonList.css";
class ButtonList extends Component {
  static defaultProps = {
    colors: ["purple", "red", "cyan", "yellow"],
  };

  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }
  handleClick(c) {
    this.setState({color: c});
  }
  render() {
    return (
      <div className="ButtonList" style={{backgroundColor: this.state.color}}>
        {this.props.colors.map((c) => {
          return <button style={{ backgroundColor: c }} onClick={this.handleClick.bind(this,c)}>click On me!</button>;
        })}
      </div>
    );
  }
}

export default ButtonList;
