import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import { useState } from "react";

const Weight = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputUnit, setInputUnit] = useState("");
  const handleClick = (unit) => {
    setInputUnit(unit);
  };

  let kiloResult;
  let lbsResult;
  let ozResult;
  let grResult;
  let stResult;

  switch (inputUnit) {
    case "Kilograms":
      lbsResult = inputValue * 2.2;
      ozResult = inputValue * 35.273962;
      grResult = inputValue * 1000;
      stResult = inputValue * 0.157473;
      break;
    case "Pounds":
      kiloResult = inputValue / 2.2;
      ozResult = inputValue * 16;
      grResult = inputValue / 0.0022;
      stResult = inputValue * 0.0714286;
      break;
    case "Ounces":
      kiloResult = inputValue / 35.273962;
      lbsResult = inputValue / 16;
      grResult = inputValue / 0.035;
      stResult = inputValue * 0.00446429;
      break;
    case "Grams":
      kiloResult = inputValue / 1000;
      lbsResult = inputValue * 0.0022;
      ozResult = inputValue * 0.035;
      stResult = inputValue * 0.000157473;
      break;
    case "Stones":
      kiloResult = inputValue * 6.35029;
      lbsResult = inputValue * 14;
      ozResult = inputValue * 224;
      grResult = inputValue * 6350.29;
      break;
    default:
      console.log("Enter Input");
  }
  if (inputValue === "") {
    kiloResult = 0;
    lbsResult = 0;
    ozResult = 0;
    grResult = 0;
    stResult = 0;
  }

  return (
    <div className="container">
      <h1>Weight Units</h1>
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
      {inputUnit !== "Kilograms" ? (
        <Output
          unit="Kilograms"
          inputValue={kiloResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Pounds" ? (
        <Output
          unit="Pounds"
          inputValue={lbsResult}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      {inputUnit !== "Ounces" ? (
        <Output unit="Ounces" inputValue={ozResult} handleClick={handleClick} />
      ) : (
        ""
      )}
      {inputUnit !== "Grams" ? (
        <Output unit="Grams" inputValue={grResult} handleClick={handleClick} />
      ) : (
        ""
      )}
      {inputUnit !== "Stones" ? (
        <Output unit="Stones" inputValue={stResult} handleClick={handleClick} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Weight;
