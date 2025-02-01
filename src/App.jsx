import React, { useRef } from "react";
import Timer from "./Timer";

const App = () => {
  const inputElement = useRef(null);
  const InputFocus = () => {
    if (inputElement.current) {
      inputElement.current.focus();
      inputElement.current.value = "Issa";
    }
  };
  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputElement} placeholder="Name...." />
      <button onClick={() => InputFocus()}>Focus and write kissCraft</button>
      <Timer />
    </div>
  );
};

export default App;
