import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HackButton from "./components/useStateHook";
import UseEffectButtion from "./components/useEffectHook";

function App() {
  return (
    <div className="App">
      <div>
        <h1>useState Hook</h1>
        <HackButton />
        <h1>useEffect Hook </h1>
        <p>(check console for logs)</p>
        <UseEffectButtion />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
