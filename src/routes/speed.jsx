import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import { useState } from "react";

const Speed = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputUnit, setInputUnit] = useState("");
  const handleClick = (unit) => {
    setInputUnit(unit);
  };

  let kmphResult;
  let mphResult;
  let mpsResult;
  let knResult;
  let sosResult;

  switch (inputUnit) {
    case "Kilometers per hour":
      mphResult = inputValue * 0.621371;
      mpsResult = inputValue * 0.277778;
      knResult = inputValue * 0.539957;
      sosResult = inputValue * 0.000809848;
      break;
    case "Miles per hour":
      kmphResult = inputValue * 1.60934;
      mpsResult = inputValue * 0.44704;
      knResult = inputValue * 0.868976;
      sosResult = inputValue * 0.00130332;
      break;
    case "Meters per second":
      kmphResult = inputValue * 3.6;
      mphResult = inputValue * 2.23694;
      knResult = inputValue * 1.94384;
      sosResult = inputValue * 0.00291545;
      break;
    case "Knots":
      kmphResult = inputValue * 1.852;
      mphResult = inputValue * 1.15078;
      mpsResult = inputValue * 0.514444;
      sosResult = inputValue * 0.00149984;
      break;
    case "Speed of sound":
      kmphResult = inputValue * 1234.8;
      mphResult = inputValue * 767.269;
      mpsResult = inputValue * 343;
      knResult = inputValue * 666.739;
      break;

    default:
      console.log("Enter Input");
  }
  if (inputValue === "") {
    kmphResult = 0;
    mphResult = 0;
    mpsResult = 0;
    knResult = 0;
    sosResult = 0;
  }

  return (
    <div className="container">
      <h1>Speed Units</h1>
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
      {inputUnit !== "Kilometers per hour" ? (
        <Output
          unit="Kilometers per hour"
          inputValue={kmphResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Miles per hour" ? (
        <Output
          unit="Miles per hour"
          inputValue={mphResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Meters per second" ? (
        <Output
          unit="Meters per second"
          inputValue={mpsResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Knots" ? (
        <Output unit="Knots" inputValue={knResult} handleClick={handleClick} />
      ) : (
        ""
      )}
      {inputUnit !== "Speed of sound" ? (
        <Output
          unit="Speed of sound"
          inputValue={sosResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Speed;
