import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ handleChange, inputValue, inputUnit }) => {
  return (
    <div>
      <form>
        <TextField
          onChange={handleChange}
          value={inputValue}
          required
          fullWidth
          type="number"
          label={`Enter ${inputUnit}`}
          variant="outlined"
          InputProps={{}}
        />
      </form>
    </div>
  );
};

export default Input;
