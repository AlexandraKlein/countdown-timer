import React from "react";
import CountdownTimer from "./CountdownTimer";

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const startTimer = () => () => {
    setIsPlaying(true);
  };

  const onComplete = () => {
    setIsPlaying(false);
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          pointerEvents: isPlaying ? "none" : "all",
          opacity: isPlaying ? 0.4 : 1,
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
          seconds={5}
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
