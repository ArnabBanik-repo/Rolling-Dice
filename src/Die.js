import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  static defaultProps = {
    side: "one",
  };
  render() {
    let diceFace = `Die-die fas fa-dice-${this.props.side}`;
    diceFace += this.props.isRolling ? " Die-roll" : "";

    return (
      <div className="Die">
        <i className={diceFace}></i>
      </div>
    );
  }
}
export default Die;
