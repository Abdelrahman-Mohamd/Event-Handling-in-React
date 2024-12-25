import React, { useState } from "react";

function App() {
  let [heading, setHeading] = useState("Hello");
  let [mouseOver, setMouseOver] = useState(false);
  let blackBgColor = {
    backgroundColor: "black",
  };
  let whiteBgColor = {
    backgroundColor: "white",
  };

  function handleClick() {
    setHeading("Submitted");
  }

  function handleOnMouseOver() {
    setMouseOver(!mouseOver);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOver}
        style={mouseOver ? blackBgColor : whiteBgColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
