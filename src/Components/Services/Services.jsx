import React from "react";
import { Boxes, BoxesItems, Headline, Image, Text } from "./SkillsStyle";
import { Box, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import CodeIcon from "@mui/icons-material/Code";
import ServicesCard from "./ServicesCard";

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

export default function Services() {
  // <a href="https://iconscout.com/icons/code" target="_blank">Code Icon</a> by <a href="https://iconscout.com/contributors/maninderkaur" target="_blank">maninderkaur</a>
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
          <Typography color={"#A39E9E"}>Serives</Typography>
          <Box>
            <Typography fontSize={{ xs: "2rem", sm: "2.7rem" }}>
              My <span style={{ color: "#AA7000" }}>Special Service</span> For
              your Business Development
            </Typography>
            <Typography fontSize={{ xs: "2rem", sm: "2.7rem" }}></Typography>
          </Box>
        </Box>
        {/* <Boxes>
          <BoxesItems>
            <div style={{ padding: "20px" }}>
              <Image src="https://flaticons.net/custom.php?i=YNxxtzyT05DMwibIVIeIxbhpeqkyI7&format=png&size=256" />
            </div>
            <Text>WebDesign</Text>
          </BoxesItems>
          <BoxesItems>
            <div style={{ padding: "20px" }}>
              <Image src="https://flaticons.net/custom.php?i=yzkZtjGI8bQX3UJIVIaIamcelop2uX&format=png&size=256" />
            </div>
            <Text>Front End</Text>
          </BoxesItems>
          <BoxesItems>
            <div style={{ padding: "20px" }}>
              <Image src="https://flaticons.net/custom.php?i=r5QFYZtNaD4QiBIxIkIxDhjPZYlu5&format=png&size=256" />
            </div>
            <Text>Back End</Text>
          </BoxesItems>
        </Boxes> */}
        <Box
          // border={"1px solid blue"}
          width={"100%"}
          padding={"2rem"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
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
                <ServicesCard
                  icon={ServiceIcon}
                  name={ServiceName}
                  tech={Teckstacks}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
