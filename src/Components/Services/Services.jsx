import React from "react";
import { Box, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import CodeIcon from "@mui/icons-material/Code";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import FlowUpAnimation from "../Animation/FlowUpAnimation";

const ServiceList = [
  {
    ServiceIcon: <CodeIcon sx={{ fontSize: "10rem" }} />,
    ServiceName: "Web Developement",
    Teckstacks: [
      "Nextjs",
      "Express",
      "MongoDB, Postgres",
      "Redis",
      "RabbitMQ",
      "GRPC",
      "Docker",
      "Google Cloud Console",
    ],
  },
  {
    ServiceIcon: <AndroidIcon sx={{ fontSize: "10rem" }} />,
    ServiceName: "Android Developement",
    Teckstacks: [
      "React Native",
      "Express",
      "MongoDB, Postgres",
      "Redis",
      "RabbitMQ",
      "GRPC",
      "Docker",
      "Google Cloud Console",
    ],
  },
];

const parent = {
  hidden: {
    // opacity: 0,
  },
  visible: {
    // opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.4,
      duration: 1,
    },
  },
};
const child = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export default function Services() {
  return (
    <>
      <Box
        id="services"
        sx={{
          background: "black",
          height: "auto",
        }}
        color={"white"}
      >
        <Box
          sx={{
            // borderBlock: "1px solid white",
            textAlign: { xs: "left", sm: "center" },
            padding: { xs: "40px", md: "30px" },
          }}
        >
          <FlowUpAnimation>
            <Typography color={"#A39E9E"}>Serives</Typography>
          </FlowUpAnimation>
          <Box>
            <FlowUpAnimation>
              <Typography fontSize={{ xs: "2rem", sm: "2.7rem" }}>
                My <span style={{ color: "#AA7000" }}>Special Service</span> For
                your Business Development
              </Typography>
            </FlowUpAnimation>
          </Box>
        </Box>
        <Box
          // border={"1px solid blue"}
          width={"100%"}
          padding={"2rem"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Box
              minWidth={{ xs: "60%", md: "40%" }}
              height={"90%"}
              display={"grid"}
              gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
              columnGap={{ md: "2rem" }}
              rowGap={{ xs: "2rem", md: "" }}
              // border={"1px solid green"}
            >
              {ServiceList.map(({ ServiceIcon, ServiceName, Teckstacks }) => {
                return (
                  <motion.div variants={child}>
                    <ServicesCard
                      icon={ServiceIcon}
                      name={ServiceName}
                      tech={Teckstacks}
                    />
                  </motion.div>
                );
              })}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}
