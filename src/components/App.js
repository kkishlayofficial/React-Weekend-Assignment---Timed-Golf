import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
    this.start = this.start.bind(this);
    this.move = this.move.bind(this);
    this.stop = this.stop.bind(this);
    this.id;
    this.timer = this.timer.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate(){
    if (this.state.x === 250 && this.state.y === 250) {
      document.removeEventListener("keydown", this.move);
      clearInterval(this.id);
    }
  }
  componentWillUnmount() {
    
  }
  start() {
    document.addEventListener("keydown", this.move);
    this.timer();
  }
  move(evt) {
    if (evt.keyCode === 37) {
      const left = this.state.x - 5;
      this.setState({ x: left });
    } else if (evt.keyCode === 38) {
      const up = this.state.y - 5;
      this.setState({ y: up });
    } else if (evt.keyCode === 39) {
      const right = this.state.x + 5;
      this.setState({ x: right });
    } else if (evt.keyCode === 40) {
      const down = this.state.y + 5;
      this.setState({ y: down });
    }
  }
  stop() {}
  timer() {
    this.id = setInterval(() => {
      const newTime = this.state.time + 1;
      this.setState({ time: newTime });
    }, 1 * 1000);
  }
  render() {
    return (
      <>
        <div className="heading-timer">{this.state.time}</div>
        <div
          className="ball"
          style={{ top: this.state.y + "px", left: this.state.x + "px" }}
        ></div>
        <button className="start ballProvider" onClick={this.start}>
          Start
        </button>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
