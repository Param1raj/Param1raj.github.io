import React, { PropsWithChildren } from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  SvgIconTypeMap,
} from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

/**
 * @param
 */

type CustomInputPropsType = PropsWithChildren<{
  placeholder?: string;
  inputColor?: string;
  backgroundColor?: string;
  onFocusBorderColor?: string;
  borderRadius?: string;
  width?: string;
  fontSize?: string;
  Icon?: React.ReactElement;
  register: () => UseFormRegisterReturn<string>;
}>;

export default function Input({
  placeholder = "Name",
  inputColor = "#fff",
  backgroundColor = "#1F1F1F",
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
}: CustomInputPropsType) {
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
        // InputProp={{
        //   sx: {
        //     "&:hover fieldset": {
        //       // border: "0px solid white!important",
        //       // borderRadius: 0,
        //     },
        //     "&:focus-within fieldset, &:focus-visible fieldset": {
        //       border: `2px solid ${onFocusBorderColor}!important`,
        //     },
        //     "& fieldset": {
        //       // outline: "1px solid white",
        //       border: "1px solid hsla(0,0%,100%,.1)!important",
        //       borderRadius: borderRadius,
        //       transition: "all 0.5s ease",
        //       // backgroundColor: "white",
        //     },
        //   },
        // }}
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
