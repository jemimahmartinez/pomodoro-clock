import React, { Component } from "react";
import Timer from "./Timer";
import TimerControllers from "./TimerControllers";
import Sound from "./Sound";
import styled from "styled-components";
// import WorkController from "./WorkController";
// import BreakController from "./BreakController";
// import logo from './logo.svg';
import "./App.css";

const Container = styled.div`
  position: relative;
  height: 60%;
  width: 80%;
  padding: 20px;
  background-color: #7fdbff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  transition: background-color 800ms linear;
`;

const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: "25:00",
      // currentTime: 25,
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      sound: "on"
    };
    this.state.currentTime = this.workTime;
  }
  setSound = sound => {
    this.setState({
      sound: sound
    });
  };

  incrementWorkTime = () => {
    this.setState({
      workTime: this.state.workTime + 1,
      currentTime: this.state.currentTime + 1
    });
  };

  decrementWorkTime = () => {
    this.setState({
      workTime: this.state.workTime - 1,
      currentTime: this.state.currentTime - 1
    });
  };

  incrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1,
      currentTime: this.state.currentTime + 1
    });
  };

  decrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime - 1,
      currentTime: this.state.currentTime - 1
    });
  };

  setCurrentTime = () => {
    this.setState({
      currentTime: this.state.currentTime
    });
  };

  setTimerRunning = () => {
    this.setState({
      timerRunning: this.state.timerRunning
    });
  };

  // startTimer = duration => {
  //   this.setState({ timerRunning: true });
  //   let time = duration * 60;
  //   let minutes;
  //   let seconds;
  //   let runningTimer = setInterval(() => {
  //     this.setState({
  //       timerId: runningTimer
  //     });
  //     minutes = Math.floor(time / 60);
  //     seconds = time - minutes * 60;
  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;
  //     this.setState({ currentTime: `${minutes} : ${seconds}` });
  //     // this.setState({ currentTime: minutes + ":" + seconds });
  //     if (time === 0) {
  //       if (this.state.cycle === "Session") {
  //         this.setState({
  //           cycle: "Break",
  //           timerRunning: false
  //         });
  //         clearInterval(this.state.timerId);
  //         this.startTimer(this.state.breakTime);
  //       } else {
  //         this.setState({
  //           cycle: "Session",
  //           timerRunning: false
  //         });
  //         clearInterval(this.state.timerId);
  //         this.startTimer(this.state.workTime);
  //       }
  //     }
  //     console.log(this.state.currentTime);
  //   }, 1000);
  // };

  render() {
    return (
      <div>
        <h1> POMODORO CLOCK </h1>
        <div className="main">
          <Timer
            wrapper={ContainerWrapper}
            // startTime={startTime}
            // duration={duration}
            // timeNow={timeNow}
            showTimeInTitle={true}
            handleBeforeUnload={true}
          />
          {/* <Timer currentTime={this.state.currentTime} /> */}
          {/* <button onClick={this.startTimer(this.props.workTime)}>START</button> */}
          {/* <button onClick={this.startTimer}>START</button> */}
          {/* <button>STOP</button> */}
          <div className="right-side">
            <TimerControllers
              workTime={this.state.workTime}
              breakTime={this.state.breakTime}
              incrementWorkTime={this.incrementWorkTime}
              decrementWorkTime={this.decrementWorkTime}
              incrementBreakTime={this.incrementBreakTime}
              decrementBreakTime={this.decrementBreakTime}
            />
            <p></p>
            <Sound setSound={this.setSound} sound={this.state.sound} />
          </div>
        </div>
      </div>
    );
  }
}
