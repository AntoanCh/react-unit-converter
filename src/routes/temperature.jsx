import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import { useState } from "react";

const Temperature = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputUnit, setInputUnit] = useState("");
  const handleClick = (unit) => {
    setInputUnit(unit);
  };

  let fahResult;
  let kelvResult;
  let celsResult;

  switch (inputUnit) {
    case "Celsius":
      fahResult = inputValue * 1.8 + 32;
      kelvResult = parseInt(inputValue) + 273.15;
      break;
    case "Fahrenheit":
      celsResult = (inputValue - 32) * 0.5556;
      kelvResult = (inputValue - 32) * 0.5556 + 273.15;
      break;
    case "Kelvin":
      celsResult = inputValue - 273.15;
      fahResult = (inputValue - 273.15) * 1.8 + 32;
      break;
    default:
      celsResult = 0;
      fahResult = 0;
      kelvResult = 0;
  }
  if (inputValue === "") {
    celsResult = 0;
    fahResult = 0;
    kelvResult = 0;
  }
  return (
    <div className="container">
      <h1>Temperature Units</h1>
      {inputUnit ? (
        <Input
          handleChange={handleChange}
          inputValue={inputValue}
          inputUnit={inputUnit}
        />
      ) : (
        ""
      )}

      <br />
      {inputUnit !== "Celsius" ? (
        <Output
          unit="Celsius"
          inputValue={celsResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Fahrenheit" ? (
        <Output
          unit="Fahrenheit"
          inputValue={fahResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Kelvin" ? (
        <Output
          unit="Kelvin"
          inputValue={kelvResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Temperature;
