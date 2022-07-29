import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        style={{ backgroundColor: !disabled ? buttonColor : "gray" }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        onChange={(e) => setDisabled(e.target.checked)}
        // onChange={(e) => {
        //   setDisabled((prevState) => {
        //     return !prevState;
        //   });
        // }}
        type="checkbox"
        checked={disabled}
        aria-checked={disabled}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
