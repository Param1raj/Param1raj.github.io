import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

export default function MaxHeightTextarea({ register }) {
  // const blue = {
  //   100: "#DAECFF",
  //   200: "#b6daff",
  //   400: "#3399FF",
  //   500: "#007FFF",
  //   600: "#0072E5",
  //   900: "#003A75",
  // };

  // const grey = {
  //   50: "#F3F6F9",
  //   100: "#E5EAF2",
  //   200: "#DAE2ED",
  //   300: "#C7D0DD",
  //   400: "#B0B8C4",
  //   500: "#9DA8B7",
  //   600: "#6B7A90",
  //   700: "#434D5B",
  //   800: "#303740",
  //   900: "#1C2025",
  // };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: #fff;
    background: #1F1F1F;
    border: 2px solid hsla(0,0%,100%,.1);
    // height: 4rem;
    &:hover {
    //   border: 2px solid #AA7000;
    }

    &:focus {
      border: 2px solid #AA7000;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <Textarea
      minRows={5}
      maxRows={5}
      aria-label="maximum height"
      placeholder="Write your message"
      {...register()}
    />
  );
}
