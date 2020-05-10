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
          count={60}
          size={80}
          strokeBgColor="black"
          strokeColor="lightblue"
          strokeWidth={3}
        />
        <CountdownTimer
          count={15}
          size={60}
          strokeBgColor="black"
          strokeColor="lemonchiffon"
          strokeWidth={2}
        />
        <CountdownTimer
          count={30}
          size={200}
          strokeBgColor="black"
          strokeColor="lightgreen"
          strokeWidth={12}
        />
        <CountdownTimer
          count={10}
          size={90}
          strokeBgColor="black"
          strokeColor="lightcoral"
          strokeWidth={4}
        />
        <CountdownTimer
          count={5}
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
