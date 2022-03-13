import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import { useState } from "react";

const Length = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputUnit, setInputUnit] = useState("");
  const handleClick = (unit) => {
    setInputUnit(unit);
  };

  let kmResult;
  let mileResult;
  let ftResult;
  let yardResult;
  let inchResult;
  let mResult;
  let nauResult;

  switch (inputUnit) {
    case "Kilometers":
      mileResult = inputValue * 0.621371;
      ftResult = inputValue * 3280.84;
      yardResult = inputValue * 1093.61;
      inchResult = inputValue * 39370.1;
      mResult = inputValue * 1000;
      nauResult = inputValue * 0.539957;
      break;
    case "Miles":
      kmResult = inputValue * 1.60934;
      ftResult = inputValue * 5280;
      yardResult = inputValue * 1760;
      inchResult = inputValue * 63360;
      mResult = inputValue * 1609.34;
      nauResult = inputValue * 0.868976;
      break;
    case "Feet":
      kmResult = inputValue * 0.0003048;
      mileResult = inputValue * 0.000189394;
      yardResult = inputValue * 0.333333;
      inchResult = inputValue * 12;
      mResult = inputValue * 0.3048;
      nauResult = inputValue * 0.000164579;
      break;
    case "Inches":
      kmResult = inputValue * 0.0000254;
      mileResult = inputValue * 0.00001578283;
      ftResult = inputValue * 0.0833333;
      yardResult = inputValue * 0.0277778;
      mResult = inputValue * 0.0254;
      nauResult = inputValue / 72913.4;
      break;
    case "Yards":
      kmResult = inputValue * 0.0009144;
      mileResult = inputValue * 0.000568182;
      ftResult = inputValue * 3;
      inchResult = inputValue * 36;
      mResult = inputValue * 0.9144;
      nauResult = inputValue * 0.00049;
      break;
    case "Meters":
      kmResult = inputValue / 1000;
      mileResult = inputValue * 0.000621371;
      ftResult = inputValue * 3.28084;
      yardResult = inputValue * 1.09361;
      inchResult = inputValue * 39.3701;
      nauResult = inputValue * 0.000539957;
      break;
    case "Nautical Mile":
      kmResult = inputValue * 1.852;
      mileResult = inputValue * 1.15078;
      ftResult = inputValue * 6076.12;
      yardResult = inputValue * 2025.37;
      inchResult = inputValue * 72913.4;
      mResult = inputValue * 1852;
      break;
    default:
      console.log("Enter Input");
  }
  if (inputValue === "") {
    kmResult = 0;
    mileResult = 0;
    ftResult = 0;
    yardResult = 0;
    inchResult = 0;
    mResult = 0;
    nauResult = 0;
  }

  return (
    <div className="container">
      <h1>Length Units</h1>
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
      {inputUnit !== "Kilometers" ? (
        <Output
          unit="Kilometers"
          inputValue={kmResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Miles" ? (
        <Output
          unit="Miles"
          inputValue={mileResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Feet" ? (
        <Output unit="Feet" inputValue={ftResult} handleClick={handleClick} />
      ) : (
        ""
      )}
      {inputUnit !== "Inches" ? (
        <Output
          unit="Inches"
          inputValue={inchResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Yards" ? (
        <Output
          unit="Yards"
          inputValue={yardResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Meters" ? (
        <Output unit="Meters" inputValue={mResult} handleClick={handleClick} />
      ) : (
        ""
      )}
      {inputUnit !== "Nautical Miles" ? (
        <Output
          unit="Nautical Miles"
          inputValue={nauResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Length;
