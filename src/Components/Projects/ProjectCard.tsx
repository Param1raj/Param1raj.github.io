import React from "react";
// import { Description } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FlowRightAnimation from "../Animation/FlowRightAnimation";
import { Project } from "./Project";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function ProjectCard({
  name,
  description,
  banner,
  direction,
  link,
  techStack,
}: Project) {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
    >
      <Box
        display={"flex"}
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "column",
          lg: direction === "row" ? "row" : "row-reverse",
        }}
        width={"100%"}
      >
        {/* <motion.div> */}
        <Box
          // as={"img"}
          src={banner}
          width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
          height={{
            xs: "15rem",
            sm: "22rem",
            md: "30rem",
            lg: "25rem",
          }}
          sx={{ aspectRatio: 1 / 1 }}
          component={"img"}
        />
        {/* </motion.div> */}
        <Box
          width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
          display={"flex"}
          alignItems={"center"}
          // border={"1px solid blue"}
          justifyContent={"center"}
        >
          <Box
            width={{ xs: "90%", sm: "90%", md: "80%" }}
            height={"fit-content"}
            display={"flex"}
            flexDirection={"column"}
            rowGap={"25px"}
            padding={{
              xs: "0px",
              sm: "10px",
              md: "20px",
              lg: "0px",
            }}
            // border={"1px solid blue"}
          >
            <FlowRightAnimation>
              <Typography
                fontSize={"1rem"}
                fontWeight={"bold"}
                color={"#AA7000"}
              >
                Web Development
              </Typography>
            </FlowRightAnimation>
            <a
              href={link}
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              <FlowRightAnimation>
                <Typography
                  fontSize={{ xs: "2rem", sm: "2.5rem" }}
                  color={"white"}
                  sx={{
                    transition: "color 1s ease",
                    ":hover": { color: "#AA7000", cursor: "pointer" },
                  }}
                >
                  {name}
                </Typography>
              </FlowRightAnimation>
            </a>
            <FlowRightAnimation>
              <Typography color={"gray"}>{description}</Typography>
            </FlowRightAnimation>
            <FlowRightAnimation>
              <Box display={"flex"}>
                <Typography sx={{ color: "#AA7000" }}>Tech Stack :</Typography>
                <Box display={"flex"}>
                  {techStack.map(
                    (tech, index) =>
                      index <= 3 && (
                        <Typography sx={{ marginLeft: "5px", color: "white" }}>
                          {tech},
                        </Typography>
                      )
                  )}
                  {techStack.length > 4 && (
                    <Typography sx={{ marginLeft: "5px", color: "#AA7000" }}>
                      +{techStack.length - 4}
                    </Typography>
                  )}
                </Box>
              </Box>
            </FlowRightAnimation>
            <FlowRightAnimation>
              <a href={link} target="_blank" rel="noreferrer">
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // border: "1px solid red",
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
                  <FlowRightAnimation>
                    <ArrowOutwardIcon className="icon" sx={{ color: "gray" }} />
                  </FlowRightAnimation>
                </Box>
              </a>
            </FlowRightAnimation>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ProjectCard;
