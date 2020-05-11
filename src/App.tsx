import React from "react";
import CountdownTimer from "./CountdownTimer";

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const startTimer = () => () => {
    setIsPlaying(true);
  };

  const onTimerEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="App">
      <div
        style={{
          flex: 1,
          backgroundColor: "#333",
        }}
      >
        <div
          style={{
            pointerEvents: isPlaying ? "none" : "all",
            opacity: isPlaying ? 0.4 : 1,
          }}
        >
          <button onClick={startTimer()}>START</button>
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
            count={60}
            isPlaying={isPlaying}
            onComplete={onTimerEnd}
            size={80}
            strokeBgColor="black"
            strokeColor="lightblue"
            strokeWidth={3}
          />
          <CountdownTimer
            count={15}
            isPlaying={isPlaying}
            onComplete={onTimerEnd}
            size={60}
            strokeBgColor="black"
            strokeColor="lemonchiffon"
            strokeWidth={2}
          />
          <CountdownTimer
            count={30}
            isPlaying={isPlaying}
            onComplete={onTimerEnd}
            size={200}
            strokeBgColor="black"
            strokeColor="lightgreen"
            strokeWidth={12}
          />
          <CountdownTimer
            count={10}
            isPlaying={isPlaying}
            onComplete={onTimerEnd}
            size={90}
            strokeBgColor="black"
            strokeColor="lightcoral"
            strokeWidth={4}
          />
          <CountdownTimer
            count={5}
            isPlaying={isPlaying}
            onComplete={onTimerEnd}
            size={120}
            strokeBgColor="black"
            strokeColor="lavender"
            strokeWidth={8}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
