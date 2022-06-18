import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";
class RollDice extends Component {
  state = {
    die1: this.numberToWord(1 + Math.floor(Math.random() * 6)),
    die2: this.numberToWord(1 + Math.floor(Math.random() * 6)),
    isRolling: false,
  };
  numberToWord(n) {
    switch (n) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      default:
        throw new Error("wrong dice value");
    }
  }
  rollDice = (event) => {
    const die1 = this.numberToWord(1 + Math.floor(Math.random() * 6));
    const die2 = this.numberToWord(1 + Math.floor(Math.random() * 6));
    this.setState({
      die1,
      die2,
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className="RollDice">
        <h2>Can you score a 12?</h2>
        <div className="RollDice-diceArea">
          <Die side={this.state.die1} isRolling={this.state.isRolling} />
          <Die side={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        <button
          onClick={this.rollDice}
          disabled={this.state.isRolling}
          className="RollDice-button"
        >
          {this.state.isRolling ? <p>Rolling ...</p> : <p>Roll Dice!</p>}
        </button>
        {this.state.die1 === "six" && this.state.die2 === "six" && (
          <h3 style={{ color: "green" }}>You win!</h3>
        )}
      </div>
    );
  }
}
export default RollDice;
