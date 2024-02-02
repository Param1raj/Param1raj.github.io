import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";

/**
 * @param count Number of unique email to be generarted. Default is 5.
 */
export default function Input({
  placeholder = "Name",
  inputColor = "#fff",
  backgroundColor = "#1F1F1F",
  border,
  onFocusBorderColor = "#AA7000",
  borderRadius = "10px",
  width = "100%",
  fontSize = "15px",
  Icon = (
    <VisibilityOff
      sx={{
        color: "white",
        background: "#1F1F1F",
        height: "53px",
        width: "20px",
        // border: "1px solid red",
      }}
    />
  ),
  register,
}) {
  return (
    // <Box>
    <FormControl variant="outlined" color="warning">
      <OutlinedInput
        {...register()}
        placeholder={placeholder}
        color="warning"
        // label="Name"
        inputProps={{
          sx: {
            color: inputColor,
            paddingLeft: "25px",
            fontSize: fontSize,
            background: backgroundColor,
            borderRadius: "10px",
          },
        }}
        InputProps={{
          sx: {
            "&:hover fieldset": {
              // border: "0px solid white!important",
              // borderRadius: 0,
            },
            "&:focus-within fieldset, &:focus-visible fieldset": {
              border: `2px solid ${onFocusBorderColor}!important`,
            },
            "& fieldset": {
              // outline: "1px solid white",
              border: "1px solid hsla(0,0%,100%,.1)!important",
              borderRadius: borderRadius,
              transition: "all 0.5s ease",
              // backgroundColor: "white",
            },
          },
        }}
        sx={{
          width: width,
          background: backgroundColor,
        }}
        endAdornment={<InputAdornment position="end">{Icon}</InputAdornment>}
      />
    </FormControl>
  );
}

// export default InputComponent;
