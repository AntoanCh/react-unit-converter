import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import { useState } from "react";

const Volume = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputUnit, setInputUnit] = useState("");
  const handleClick = (unit) => {
    setInputUnit(unit);
  };

  let ltResult;
  let mlResult;
  let galResult;
  let pintResult;

  switch (inputUnit) {
    case "Liters":
      mlResult = inputValue * 1000;
      galResult = inputValue * 0.264172;
      pintResult = inputValue * 2.11338;
      break;
    case "Mililiters":
      ltResult = inputValue * 0.001;
      galResult = inputValue * 0.000264172;
      pintResult = inputValue * 0.00211338;
      break;
    case "US Galons":
      ltResult = inputValue * 3.78541;
      mlResult = inputValue * 3785.41;
      pintResult = inputValue * 8;
      break;
    case "US Pints":
      ltResult = inputValue * 0.473176;
      mlResult = inputValue * 473.176;
      galResult = inputValue * 0.125;
      break;
    default:
      console.log("Enter Input");
  }
  if (inputValue === "") {
    ltResult = 0;
    mlResult = 0;
    galResult = 0;
    pintResult = 0;
  }

  return (
    <div className="container">
      <h1>
        <h1>Area Units</h1>Volume Units
      </h1>
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
      {inputUnit !== "Liters" ? (
        <Output unit="Liters" inputValue={ltResult} handleClick={handleClick} />
      ) : (
        ""
      )}
      {inputUnit !== "Mililiter" ? (
        <Output
          unit="Mililiter"
          inputValue={mlResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "US Gallons" ? (
        <Output
          unit="US Gallons"
          inputValue={galResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "US Pints" ? (
        <Output
          unit="US Pints"
          inputValue={pintResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Volume;
