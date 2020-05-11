import React from "react";

type Props = {
  isPlaying: boolean;
  onComplete: () => void;
  seconds: number;
  size: number;
  strokeBgColor: string;
  strokeColor: string;
  strokeWidth: number;
};

type State = {
  countdown: number;
  isPlaying: boolean;
};

class CountdownTimer extends React.Component<Props, State> {
  milliseconds: number;
  radius: number;
  circumference: number;

  constructor(props: Props) {
    super(props);

    this.milliseconds = this.props.seconds * 1000;
    this.radius = this.props.size / 2;
    this.circumference = this.props.size * Math.PI;

    this.state = {
      countdown: this.milliseconds,
      isPlaying: false,
    };
  }

  strokeDashoffset = () => {
    return this.milliseconds !== 0
      ? this.circumference -
          (this.state.countdown / this.milliseconds) * this.circumference
      : this.circumference;
  };

  componentDidMount() {
    if (this.props.isPlaying) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.isPlaying !== this.props.isPlaying && this.props.isPlaying) {
      this.startTimer();
    }

    if (prevProps.seconds !== this.props.seconds) {
      this.milliseconds = this.props.seconds * 1000;
    }
  }

  startTimer = () => {
    if (this.state.countdown === 0) {
      return;
    }

    this.setState({ isPlaying: true });

    const interval = setInterval(() => {
      this.setState({ countdown: this.state.countdown - 10 });

      if (this.state.countdown === 0) {
        clearInterval(interval);

        this.props.onComplete();

        this.setState({
          countdown: this.milliseconds,
        });
      }
    }, 10);
  };

  render() {
    const countdownSizeStyles = {
      height: this.props.size,
      width: this.props.size,
    };

    const textStyles = {
      color: this.props.strokeColor,
      fontSize: this.props.size * 0.3,
    };

    const seconds = (this.state.countdown / 1000).toFixed();

    return (
      <div
        style={Object.assign(
          {},
          styles.countdownContainer,
          countdownSizeStyles
        )}
      >
        <p style={textStyles}>{seconds}s</p>
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
              this.state.isPlaying ? this.strokeDashoffset() : 0
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
  } as React.CSSProperties,
};

export default CountdownTimer;
