import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";

export default function ServicesCard({ icon, name, tech }) {
  console.log(tech);
  return (
    <Box
      border={"1px solid hsla(0,0%,100%,.1)"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        background: "#1F1F1F",
        transition: "border 1s ease",
        ":hover": {
          border: "1px solid white",
          "& .icon": {
            color: "white",
          },
        },
      }}
    >
      <Box
        className={"icon"}
        color={"hsla(0,0%,100%,.1)"}
        sx={{ transition: "color 1s ease" }}
      >
        {icon}
      </Box>
      <Box
        width={"100%"}
        // border={"1px solid red"}

        paddingInline={"25px"}
      >
        <Typography
          borderBottom={"1px solid white"}
          width={"fit-content"}
          fontSize={"1.7rem"}
        >
          {name}
        </Typography>
      </Box>
      <Box width={"100%"} paddingInline={"10px"}>
        <List
          // subheader={
          //   <ListSubheader
          //     component="div"
          //     id="nested-list-subheader"
          //     sx={{ fontWeight: "bold" }}
          //   >
          //     {name}
          //   </ListSubheader>
          // }
          dense={true}
        >
          {tech.map((Item) => {
            return (
              <ListItem key={Item} sx={{ border: "0px solid red" }}>
                {/* <ListItemButton> */}
                <ListItemText primary={Item}>{Item}</ListItemText>
                {/* </ListItemButton> */}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
