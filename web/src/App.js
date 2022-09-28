import React from "react";
import UseReducer from "./Hooks/useReducer";
import UseState from "./Hooks/useState";
import UseState1 from "./Hooks/useState1";
import App1 from "./Hooks/createContext"

function App() {
  return (
    <div className="App">
      <UseState/>
      <UseState1/>
      <UseReducer/>
      <App1/>
    </div>
  );
}

export default App;
