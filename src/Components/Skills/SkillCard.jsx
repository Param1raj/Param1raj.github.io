import { Box, Button, Typography } from "@mui/material";
import React from "react";

function SkillCard({ icon, name, years }) {
  return (
    <Box
      border={"1px solid hsla(0,0%,100%,.1)"}
      borderRadius={"15px"}
      paddingBlock={"20px"}
      sx={{
        background: "#1F1F1F",
        transition: "border 1s ease",
        ":hover": {
          border: "1px solid white",
          "& .Button": {
            background: "hsla(0,0%,100%,.1)",
          },
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        rowGap={"20px"}
      >
        <Box
          as={"img"}
          src={icon}
          sx={{
            width: "50%",
            // borderRadius: "50%",
            ...(name === "NextJS" && {
              background: "white",
              borderRadius: "50%",
              border: "1px solid white",
            }),
          }}
          alt="The house from the offer."
        ></Box>
        <Box>
          <Typography fontSize={{ xs: "1rem", md: "1.3rem" }} color={"white"}>
            {name}
          </Typography>
        </Box>
        <Box width={"70%"}>
          <Button
            sx={{
              width: "100%",
              border: "1px solid hsla(0,0%,100%,.1)",
              color: "white",
              background: "#131313",
              transition: "background 1s ease",
              borderRadius: "20px",
            }}
            className="Button"
          >
            {years}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SkillCard;
