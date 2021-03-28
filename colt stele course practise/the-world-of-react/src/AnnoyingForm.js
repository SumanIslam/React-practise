import React, { Component } from "react";

class AnnoyingForm extends Component {
  handleKeyUp(e) {
    if (e.keyCode === 56) {
      alert("************ I love the * character ************");
    } else {
      alert("Boo!!");
    }
  }
  render() {
    return (
      <div>
        <h3>Try typing in here: </h3>
        <textarea onKeyUp={this.handleKeyUp}></textarea>
      </div>
    );
  }
}

export default AnnoyingForm;
