import React from "react";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";

const Output = ({ unit, inputValue, handleClick }) => {
  return (
    <div>
      <form
        style={{
          margin: "10px 0px",
          backgroundColor: "#999",
        }}
      >
        <TextField
          onClick={() => handleClick(unit)}
          value={inputValue}
          fullWidth
          type="text"
          variant="filled"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">{unit}</InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};

export default Output;
