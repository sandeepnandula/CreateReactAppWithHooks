import React, { createContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HackButton from "./components/useStateHook";
import UseEffectButtion from "./components/useEffectHook";
import CreateContextHook from "./components/createContextHook";
import UseContextHook from "./components/useContextHook";

export const userContext = createContext();

function App() {
  return (
    <div className="App">
      <div>
        <h1>useState Hook</h1>
        <HackButton />
        <h1>useEffect Hook </h1>
        <p>(check console for logs)</p>
        <UseEffectButtion />
        <h1>createContext Hook </h1>
        <userContext.Provider value={"aditya"}>
          <CreateContextHook />
        </userContext.Provider>
        <h1>useContext Hook </h1>
        <userContext.Provider value={"sandeep"}>
          <UseContextHook />
        </userContext.Provider>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
