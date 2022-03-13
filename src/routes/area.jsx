import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import { useState } from "react";

const Area = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputUnit, setInputUnit] = useState("");
  const handleClick = (unit) => {
    setInputUnit(unit);
  };

  let sqkmResult;
  let sqmlResult;
  let hecResult;
  let acrResult;
  let sqftResult;
  let sqmResult;

  switch (inputUnit) {
    case "Square Kilometers":
      sqmlResult = inputValue * 0.386102;
      hecResult = inputValue * 100;
      acrResult = inputValue * 247.105;
      sqftResult = inputValue * 10763910;
      sqmResult = inputValue * 1000000;
      break;
    case "Square Miles":
      sqkmResult = inputValue * 2.58999;
      hecResult = inputValue * 259;
      acrResult = inputValue * 640;
      sqftResult = inputValue * 27878400;
      sqmResult = inputValue * 2589988;
      break;
    case "Hectares":
      sqkmResult = inputValue * 0.01;
      sqmlResult = inputValue * 0.00386102;
      acrResult = inputValue * 2.47105;
      sqftResult = inputValue * 107639;
      sqmResult = inputValue * 10000;
      break;
    case "Acres":
      sqkmResult = inputValue * 0.00404686;
      sqmlResult = inputValue * 0.0015625;
      hecResult = inputValue * 0.404686;
      sqftResult = inputValue * 43560;
      sqmResult = inputValue * 4046.86;
      break;
    case "Square Feet":
      sqkmResult = inputValue / 10763910;
      sqmlResult = inputValue / 27878400;
      hecResult = inputValue * 0.0000092903;
      acrResult = inputValue * 0.0000229568;
      sqmResult = inputValue * 0.09290304;
      break;
    case "Square Meters":
      sqkmResult = inputValue * 0.000001;
      sqmlResult = inputValue / 2589988;
      hecResult = inputValue * 0.0001;
      acrResult = inputValue * 0.0002471054;
      sqftResult = inputValue * 10.763910417;
      break;
    default:
      console.log("Enter Input");
  }
  if (inputValue === "") {
    sqkmResult = 0;
    sqmlResult = 0;
    hecResult = 0;
    acrResult = 0;
    sqftResult = 0;
    sqmResult = 0;
  }

  return (
    <div className="container">
      <h1>Area Units</h1>
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
      {inputUnit !== "Sqare Kilometers" ? (
        <Output
          unit="Square Kilometers"
          inputValue={sqkmResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Square Miles" ? (
        <Output
          unit="Square Miles"
          inputValue={sqmlResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Hectares" ? (
        <Output
          unit="Hectares"
          inputValue={hecResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Acres" ? (
        <Output unit="Acres" inputValue={acrResult} handleClick={handleClick} />
      ) : (
        ""
      )}
      {inputUnit !== "Square Feet" ? (
        <Output
          unit="Square Feet"
          inputValue={sqftResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Square Meters" ? (
        <Output
          unit="Square Meters"
          inputValue={sqmResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Area;
