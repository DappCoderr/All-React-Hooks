import React from "react";
import UseReducer from "./Hooks/useReducer";
import UseState from "./Hooks/useState";
import UseState1 from "./Hooks/useState1";
import App1 from "./Hooks/createContext"
import Number from "./component/map";

function App() {
  const numbers = [1,2,3,4,5]
  return (
    <div className="App">
      <Number numbers={numbers}/>
      <UseState/>
      <UseState1/>
      <UseReducer/>
      <App1/>
    </div>
  );
}

export default App;
