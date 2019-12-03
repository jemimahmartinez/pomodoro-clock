import React, { Component } from "react";

export default class WorkController extends Component {
  handleWorkIncrement = () => {
    this.props.incrementWorkTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  };

  handleWorkDecrement = () => {
    this.props.decrementWorkTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  };

  render() {
    return (
      <div className="controller">
        {/* <div> */}
        <p>SESSION</p>
        <button className="buttons" onClick={this.handleWorkIncrement}>
          +
        </button>
        <span> {this.props.workTime} </span>
        <button className="buttons" onClick={this.handleWorkDecrement}>
          -
        </button>
      </div>
    );
  }
}
