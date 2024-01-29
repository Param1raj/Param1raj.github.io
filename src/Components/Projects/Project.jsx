// import {
//   Boxes,
//   BoxesItems,
//   Button,
//   Buttons,
//   Container,
//   Heading,
//   H3,
//   Description,
//   UL,
// } from "./ProjectStyle";
// import project1 from "./React App - Google Chrome 17-10-2022 18_54_00.png";
import project2 from "./TimeCamp.png";

import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import { Button } from "bootstrap";

const ProjectList = [
  {
    ProjectName: "Gita(Yoga Plateform)",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: project2,
    Direction: "row",
  },
  {
    ProjectName: "Gita(Yoga Plateform)",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: project2,
    Direction: "row-reverce",
  },
  {
    ProjectName: "Gita(Yoga Plateform)",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: project2,
    Direction: "row",
  },
  {
    ProjectName: "Gita(Yoga Plateform)",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: project2,
    Direction: "row-reverce",
  },
  {
    ProjectName: "Gita(Yoga Plateform)",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: project2,
    Direction: "row",
  },
];
export default function Projects() {
  return (
    <Box sx={{ background: "black" }}>
      <Box textAlign={"center"} padding={"2rem"}>
        <Typography color={"#A39E9E"}>Latest Works</Typography>
        <Typography fontSize={"2.5rem"} color={"white"}>
          Explore My Popular <span style={{ color: "#AA7000" }}>Projects</span>
        </Typography>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"20px"}
        padding={{ xs: "3rem", sm: "5rem", md: "5.2rem", lg: "2rem" }}
        // border={"1px solid blue"}
      >
        <Box
          width={{ lg: "88%", xl: "80%" }}
          // width={"70%"}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"3em"}
          // border={"1px solid blue"}
        >
          {ProjectList.map(
            ({ ProjectName, ProjectDescription, ProjectBanner, Direction }) => {
              return (
                <Box
                  display={"flex"}
                  // height={"10rem"}
                  flexDirection={{
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: Direction === "row" ? "row" : "row-reverse",
                  }}
                  width={"100%"}
                  // border={"1px solid red"}
                >
                  <Box
                    as={"img"}
                    src={ProjectBanner}
                    width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
                    height={{
                      xs: "20rem",
                      sm: "22rem",
                      md: "30rem",
                      lg: "25rem",
                    }}
                    sx={{ aspectRatio: 1 }}
                  ></Box>
                  <Box
                    width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box
                      width={{ xs: "90%", sm: "90%", md: "80%" }}
                      height={"80%"}
                      // border={"1px solid white"}
                      display={"flex"}
                      flexDirection={"column"}
                      rowGap={"25px"}
                      padding={{
                        xs: "0px",
                        sm: "10px",
                        md: "20px",
                        lg: "0px",
                      }}
                    >
                      <Typography
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        color={"#AA7000"}
                      >
                        Web Development
                      </Typography>
                      <Typography
                        fontSize={"2.5rem"}
                        color={"white"}
                        sx={{
                          transition: "color 1s ease",
                          ":hover": { color: "#AA7000", cursor: "pointer" },
                        }}
                      >
                        {ProjectName}
                      </Typography>
                      <Typography color={"gray"}>
                        {ProjectDescription}
                      </Typography>
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          // color: "white",
                          border: "1px solid gray",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          ":hover": {
                            background: "#AA7000",
                            border: "1px solid #AA7000",
                            cursor: "pointer",
                            "& .icon": {
                              color: "white",
                            },
                          },
                        }}
                      >
                        <ArrowOutwardIcon
                          className="icon"
                          sx={{ color: "gray" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
}
