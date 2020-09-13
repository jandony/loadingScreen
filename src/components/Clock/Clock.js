import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      loading: true,
    };
  }

  // Mount functions
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  isLoading() {
    let isLoading = this.state.loading;

    if (isLoading === true) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
    }
  }

  startTimer() {
    this.timerID = setInterval(() => this.tick(), 500);
    this.loadCheck = setInterval(() => this.isLoading(), 3000);
  }

  // DID Mount
  componentDidMount() {
    this.startTimer();
  }

  // WILL UnMount
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: this.state.loading ? "center" : "left",
          alignItems: this.state.loading ? "center" : "flex-start",
          height: "100vh",
        }}
      >
        <h2 id="currentTime">
          {this.state.loading ? (
            <p id="animateLoad">
              <img
                src="https://img.pngio.com/free-loading-icon-233405-free-icons-library-loading-icon-png-980_926.jpg"
                alt="loading icon"
                width="50"
                height="50"
              />
            </p>
          ) : (
            <div>
              <h1>Hello, world!</h1>
              <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
          )}
        </h2>
      </div>
    );
  }
}

export default Clock;
