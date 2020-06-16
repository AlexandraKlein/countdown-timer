import React from "react";
import CountdownTimer from "./CountdownTimer";

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [seconds, setSeconds] = React.useState(5);

  const startTimer = () => () => {
    setIsPlaying(true);
  };

  const onComplete = () => {
    // setSeconds(0);
    // setIsPlaying(false);
  };

  const isComplete = seconds === 0;

  return (
    <div style={styles.container}>
      <div
        style={{
          pointerEvents: isPlaying || isComplete ? "none" : "all",
          opacity: isPlaying || isComplete ? 0.4 : 1,
        }}
      >
        <button style={styles.button} onClick={startTimer()}>
          START
        </button>
      </div>
      <div
        style={{
          padding: 24,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <CountdownTimer
          seconds={seconds}
          isPlaying={isPlaying}
          onComplete={onComplete}
          size={120}
          strokeBgColor="black"
          strokeColor="lavender"
          strokeWidth={8}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#333",
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
export default App;
