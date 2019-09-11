import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HackButton from "./components/useStateHook";
function App() {
  return (
    <div className="App">
      <div>
        <h1>useState Hook</h1>
        <HackButton />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
