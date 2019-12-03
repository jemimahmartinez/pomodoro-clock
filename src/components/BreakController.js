import React, { Component } from "react";

export default class BreakController extends Component {
  handleBreakIncrement = () => {
    this.props.incrementBreakTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.breakTime);
    }
  };

  handleBreakDecrement = () => {
    this.props.decrementBreakTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.breakTime);
    }
  };

  render() {
    return (
      <div className="controller">
        <p>BREAK</p>
        <button onClick={this.handleBreakIncrement}> + </button>
        <span> {this.props.breakTime} </span>
        <button onClick={this.handleBreakDecrement}> - </button>
      </div>
    );
  }
}