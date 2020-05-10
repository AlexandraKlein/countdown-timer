import React from "react";

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);

    this.seconds = this.props.count * 100;
    this.radius = this.props.size / 2;
    this.circumference = this.props.size * Math.PI;

    this.state = {
      countdown: this.seconds,
      hasStartedCountdown: false,
    };
  }

  startTimer = () => {
    this.setState({ hasStartedCountdown: true });

    const interval = setInterval(() => {
      this.setState({ countdown: this.state.countdown - 1 });

      if (this.state.countdown === 0) {
        clearInterval(interval);
        this.setState({
          countdown: this.seconds,
          hasStartedCountdown: false,
        });
      }
    }, 10);
  };

  getStrokeDashOffset() {
    const percentageLeft = this.state.countdown / this.seconds;
    return this.circumference - percentageLeft * this.circumference;
  }

  render() {
    const countdownSizeStyles = {
      height: this.props.size,
      width: this.props.size,
    };

    const textStyles = {
      color: this.props.strokeColor,
      fontSize: this.props.size * 0.3,
    };

    return (
      <div>
        <div
          style={{
            pointerEvents: this.state.hasStartedCountdown ? "none" : "all",
            opacity: this.state.hasStartedCountdown ? 0.4 : 1,
          }}
        >
          <button
            style={styles.button}
            onClick={!this.state.hasStartedCountdown ? this.startTimer : null}
          >
            START
          </button>
        </div>
        <div
          style={Object.assign(
            {},
            styles.countdownContainer,
            countdownSizeStyles
          )}
        >
          <p style={textStyles}>{(this.state.countdown / 100).toFixed()}s</p>
          <svg style={styles.svg}>
            <circle
              cx={this.radius}
              cy={this.radius}
              r={this.radius}
              fill="none"
              stroke={this.props.strokeBgColor}
              strokeWidth={this.props.strokeWidth}
            ></circle>
          </svg>
          <svg style={styles.svg}>
            <circle
              strokeDasharray={this.circumference}
              strokeDashoffset={
                this.state.hasStartedCountdown ? this.getStrokeDashOffset() : 0
              }
              r={this.radius}
              cx={this.radius}
              cy={this.radius}
              fill="none"
              strokeLinecap="round"
              stroke={this.props.strokeColor}
              strokeWidth={this.props.strokeWidth}
            ></circle>
          </svg>
        </div>
      </div>
    );
  }
}

const styles = {
  countdownContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "rotateY(-180deg) rotateZ(-90deg)",
    overflow: "visible",
  },
  button: {
    fontSize: 16,
    padding: "15px 40px",
    margin: "10px auto 30px",
    display: "block",
    backgroundColor: "#4d4d4d",
    color: "lightgray",
    border: "none",
    cursor: "pointer",
    outline: 0,
  },
};

export default CountdownTimer;
