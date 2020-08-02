import React from "react";
import Player from "./Player/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Player id={1} />
      <Player id={2} />
    </div>
  );
}

export default App;
