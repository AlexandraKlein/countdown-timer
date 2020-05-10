import React from "react";
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <div className="App">
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          backgroundColor: "#333",
        }}
      >
        <CountdownTimer
          countdown={60}
          size={80}
          strokeBgColor="black"
          strokeColor="lightblue"
          strokeWidth={3}
        />
        <CountdownTimer
          countdown={15}
          size={60}
          strokeBgColor="black"
          strokeColor="lemonchiffon"
          strokeWidth={2}
        />
        <CountdownTimer
          countdown={30}
          size={200}
          strokeBgColor="black"
          strokeColor="lightgreen"
          strokeWidth={12}
        />
        <CountdownTimer
          countdown={10}
          size={90}
          strokeBgColor="black"
          strokeColor="lightcoral"
          strokeWidth={4}
        />
        <CountdownTimer
          countdown={5}
          size={120}
          strokeBgColor="black"
          strokeColor="lavender"
          strokeWidth={8}
        />
      </div>
    </div>
  );
}

export default App;
