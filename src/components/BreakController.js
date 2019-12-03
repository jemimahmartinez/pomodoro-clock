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
        {/* <div> */}
        <p>BREAK</p>
        <button className="buttons" onClick={this.handleBreakIncrement}>
          +
        </button>
        <span> {this.props.breakTime} </span>
        <button className="buttons" onClick={this.handleBreakDecrement}>
          -
        </button>
      </div>
    );
  }
}
