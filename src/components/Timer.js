import React, { Component } from "react";
import Circle from "./circle";
// import ms from "pretty-ms";
import TimeFill from "./time-fill";
// import styled from "styled-components";
import styled, { ThemeProvider } from "styled-components";
// import { defaultTheme } from "../constants";

const Container = styled.div`
  margin: auto;
  width: 350px;
  height: 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class Timer extends Component {
  // timer = () => {
  //   if (this.props.timerRunning === true) {
  //     clearInterval(this.props.timerId);
  //     this.props.setCurrentTime("25 : 00");
  //     // this.props.setCurrentTime(this.props.workTime);
  //     this.props.setTimerRunning();
  //   } else {
  //     this.props.cycle === "Session"
  //       ? this.props.startTimer(this.props.workTime)
  //       : this.props.startTimer(this.props.breakTime);
  //     // clearInterval(this.props.timerId);
  //     // ? this.props.setCurrentTime(this.props.workTime)
  //     // : this.props.setCurrentTime(this.props.breakTime);
  //   }
  // };
  // render() {
  //   return (
  //     <div className="timer">
  //       <span className="count-down" onClick={this.timer}>
  //         {this.props.currentTime}
  //       </span>
  //       <span> {this.props.cycle} </span>
  //     </div>
  //   );
  // }

  constructor(props) {
    super(props);
    //   this.state = {
    //     time: 0,
    //     start: 0,
    //     isOn: false
    //   };
    //   this.startTimer = this.startTimer.bind(this);
    //   this.stopTimer = this.stopTimer.bind(this);
    //   this.resetTimer = this.resetTimer.bind(this);
    // }
    // startTimer() {
    //   this.setState({
    //     time: this.state.time,
    //     start: Date.now() - this.state.time,
    //     isOn: true
    //   });
    //   this.timer = setInterval(
    //     () =>
    //       this.setState({
    //         time: Date.now() - this.state.start
    //         // time: this.state.time - 0.0001
    //       }),
    //     1000
    //   );
    // }
    // stopTimer() {
    //   this.setState({ isOn: false });
    //   clearInterval(this.timer);
    // }
    // resetTimer() {
    //   this.setState({ time: 0 });
    // }
    // render() {
    //   let start =
    //     this.state.time == 0 ? (
    //       <button onClick={this.startTimer}>start</button>
    //     ) : null;
    //   let stop = this.state.isOn ? (
    //     <button onClick={this.stopTimer}>stop</button>
    //   ) : null;
    //   let reset =
    //     this.state.time != 0 && !this.state.isOn ? (
    //       <button onClick={this.resetTimer}>reset</button>
    //     ) : null;
    //   let resume =
    //     this.state.time != 0 && !this.state.isOn ? (
    //       <button onClick={this.startTimer}>resume</button>
    //     ) : null;
    //   return (
    //     <div>
    //       <h3>timer: {ms(this.state.time)}</h3>
    //       {start}
    //       {resume}
    //       {stop}
    //       {reset}
    //     </div>
    //   );
    // }

    this.state = {
      minutes: 1,
      seconds: 0,
      isOn: false,
      cycle: "SESSION"
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

    const myConstNestedObject = {
      originalMinutes: 1,
      originalSeconds: 0
    };

    Object.freeze(myConstNestedObject);
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          isOn: true,
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          this.setState({ isOn: false });
          clearInterval(this.myInterval);
          //here
        } else {
          this.setState(({ minutes }) => ({
            isOn: true,
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }
  resetTimer() {
    this.setState({ minutes: 1, seconds: 0 });
  }

  render() {
    const { minutes, seconds } = this.state;

    const { wrapper: Wrapper, theme, showTimeInTitle } = this.props;
    const { diameter } = this.state;

    let start =
      minutes === 1 && seconds === 0 && !this.state.isOn ? (
        <button className="buttons" onClick={this.startTimer}>
          start
        </button>
      ) : null;
    let stop = this.state.isOn ? (
      <button className="buttons" onClick={this.stopTimer}>
        stop
      </button>
    ) : null;
    let reset =
      minutes !== 1 && seconds !== 0 && !this.state.isOn ? (
        <button className="buttons" onClick={this.resetTimer}>
          reset
        </button>
      ) : null;
    let resume =
      minutes !== 1 && seconds !== 0 && !this.state.isOn ? (
        <button className="buttons" onClick={this.startTimer}>
          resume
        </button>
      ) : null;
    let end =
      minutes === 0 && seconds === 0 && this.state.isOn ? (
        <button className="buttons" onClick={this.resetTimer}>
          start
        </button>
      ) : null;

    const renderContent = () => {
      const secondsPass = (this.state.minutes - 1) * 60 + this.state.seconds;
      const percent = secondsPass / (1 * 60);
      // const secondsLeft = duration * 60 - secondsPass;
      return (
        <React.Fragment>
          <Circle>
            <TimeFill percent={percent} />
            <h2>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h2>
            <span> {this.state.cycle} </span>
          </Circle>
        </React.Fragment>
      );
    };

    return (
      <div>
        {/* <Circle> */}

        <Container
          ref={el => (this.view = el)}
          style={{ width: diameter, height: diameter }}
        >
          {this.view && renderContent()}
        </Container>

        {start}
        {resume}
        {stop}
        {reset}
        {end}
        {/* </Circle> */}
        {/* {minutes}:{seconds < 10 ? `0${seconds}` : seconds} */}
        {/* <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
          <Wrapper ref={el => (this.wrapper = el)}>
            <Container
              ref={el => (this.view = el)}
              style={{ width: diameter, height: diameter }}
            >
              {this.view && renderContent()}
            </Container>
          </Wrapper>
        </ThemeProvider> */}
      </div>
    );
  }

  // componentDidMount() {
  //   this.onResize();
  //   window.addEventListener("resize", this.onResize);
  //   if (this.props.handleBeforeUnload) {
  //     window.addEventListener("beforeunload", this.exitPage);
  //   }
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.onResize);
  //   if (this.props.handleBeforeUnload) {
  //     window.removeEventListener("beforeunload", this.exitPage);
  //   }
  // }

  // onResize = () => {
  //   const { width, height } = this.wrapper.getBoundingClientRect();
  //   const diameter = Math.min(width, height);
  //   this.setState({ width, height, diameter });
  // };
}
