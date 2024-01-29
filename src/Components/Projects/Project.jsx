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
import project4 from "./PharmaEasy.png";
import project3 from "./Todoapp.png";
import project5 from "./Beautibebo.png";
// import { CiStreamOn } from "react-icons/ci";
// import { AiFillGithub } from "react-icons/ai";

import { Box, Button, Typography } from "@mui/material";
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
      {/* <Container id="project">
        <Heading>Projects</Heading>
        <Boxes>
          <BoxesItems>
            <H3>Rentomojo</H3>
            <img
              src={project1}
              width="90%"
              style={{ borderRadius: "5px" }}
              alt=""
            />
            <Description>
              <h6 style={{ fontWeight: "bold" }}>Description</h6>
              <Button>
                <a
                  href="https://hellow-this-is-param1raj.netlify.app/"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <Buttons>
                    <CiStreamOn />
                  </Buttons>
                </a>
                <a
                  href="https://github.com/Param1raj/sore-rate-9569"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  {" "}
                  <Buttons>
                    <AiFillGithub />
                  </Buttons>
                </a>
              </Button>
              RentoMojo is a top-rated appliance rental brand, committed to
              providing our customers in Gurgaon the very best in furniture,
              appliances, and electronics. This is a Solo project which is a
              clone of Rentomojo
            </Description>
            <Description>
              <h6 style={{ fontWeight: "bold" }}>
                Tech-Stack:-
                <UL
                  style={{
                    display: "flex",
                    columnGap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <li>React</li>
                  <li>ChakraUI</li>
                  <li>JavaScript</li>
                  <li>Styled-components</li>
                  <li>React-Bootstrap</li>
                  <li>JSON-Server</li>
                </UL>
              </h6>
            </Description>
          </BoxesItems>
          <BoxesItems>
            <H3>TimeCamp</H3>
            <img
              src={project2}
              width="90%"
              style={{ borderRadius: "5px" }}
              alt=""
            />
            <Description>
              <h6 style={{ fontWeight: "bold" }}>Description</h6>
              <Button>
                <a
                  href="https://astonishing-sorbet-368da1.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <CiStreamOn />
                  </Buttons>
                </a>
                <a
                  href="https://github.com/singhprakash14/husky-care-7787"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <AiFillGithub />
                  </Buttons>
                </a>
              </Button>
              TimeCamp (clone) is a web-based application to track the activity
              of computer users and it is dedicated either to freelancers or
              teams.The tool is a time tracking software to invoice the
              employees' work based on an hourly rate.
            </Description>
            <Description>
              <h6 style={{ fontWeight: "bold" }}>
                Tech-Stack:-
                <UL
                  style={{
                    display: "flex",
                    columnGap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <li>React</li>
                  <li>ChakraUI</li>
                  <li>JavaScript</li>
                  <li>Styled-components</li>
                  <li>React-Bootstrap</li>
                  <li>JSON-Server</li>
                </UL>
              </h6>
            </Description>
          </BoxesItems>
          <BoxesItems>
            <H3>Beauty Bebo</H3>
            <img
              src={project5}
              width="90%"
              style={{ borderRadius: "5px" }}
              alt=""
            />
            <Description>
              <h6 style={{ fontWeight: "bold" }}>Description</h6>
              <Button>
                <a
                  href="https://beautibebo-netlify.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <CiStreamOn />
                  </Buttons>
                </a>
                <a
                  href="https://github.com/arun-developers/rapid-competition-275"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <AiFillGithub />
                  </Buttons>
                </a>
              </Button>
              Beauty Bebo is India’s fastest growing online retail store for the
              day to day and special occasion need of the Makeup, Skin care,
              Hair care, Personal care, Mom and Baby care, Fragrance and
              Ayurveda products.
            </Description>
            <Description>
              <h6 style={{ fontWeight: "bold" }}>
                Tech-Stack:-
                <UL
                  style={{
                    display: "flex",
                    columnGap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <li>React</li>
                  <li>ChakraUI</li>
                  <li>JavaScript</li>
                  <li>Styled-components</li>
                  <li>React-Bootstrap</li>
                  <li>JSON-Server</li>
                </UL>
              </h6>
            </Description>
          </BoxesItems>
          <BoxesItems>
            <H3>PharmEasy</H3>
            <img
              src={project4}
              width="90%"
              style={{ borderRadius: "5px" }}
              alt=""
            />
            <Description>
              <h6 style={{ fontWeight: "bold" }}>Description</h6>
              <Button>
                <a
                  href="https://cool-biscuit-9d1f37.netlify.app/home"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <CiStreamOn />
                  </Buttons>
                </a>
                <a
                  href="https://github.com/Param1raj/Pharmaeasy-clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <AiFillGithub />
                  </Buttons>
                </a>
              </Button>
              PharmEasy is here to help you take it easy! We are amongst one of
              India's top online pharmacy and medical care platforms.This is, a
              clone of PharmEasy, a solo project done in 5 days.
            </Description>
            <Description>
              <h6 style={{ fontWeight: "bold" }}>
                Tech-Stack:-
                <UL
                  style={{
                    display: "flex",
                    columnGap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <li>React</li>
                  <li>ChakraUI</li>
                  <li>JavaScript</li>
                  <li>Styled-components</li>
                  <li>React-Bootstrap</li>
                  <li>JSON-Server</li>
                </UL>
              </h6>
            </Description>
          </BoxesItems>
          <BoxesItems>
            <H3>Todo App</H3>
            <img
              src={project3}
              width="90%"
              style={{ borderRadius: "5px" }}
              alt=""
            />
            <Description>
              <h6 style={{ fontWeight: "bold" }}>Description</h6>
              <Button>
                <a
                  href="https://marvelous-vacherin-f874af.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <CiStreamOn />
                  </Buttons>
                </a>
                <a
                  href="https://github.com/Param1raj?tab=repositories"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Buttons>
                    <AiFillGithub />
                  </Buttons>
                </a>
              </Button>
              This is a miniproject of todo application. With the help of this
              application, anyone can use it for helping themself to improve
              their effeciency and productivity.This is solo project build in 2
              day. Deployed on netlify.
            </Description>
            <Description>
              <h6 style={{ fontWeight: "bold" }}>
                Tech-Stack:-
                <UL style={{ columnGap: "20px", flexWrap: "wrap" }}>
                  <li>Html</li>
                  <br />
                  <li>JavaScript</li>
                  <br />
                  <li>Css</li>
                  <br /> <br />
                  <li>Local-Storage</li>
                </UL>
              </h6>
            </Description>
          </BoxesItems>
        </Boxes>
      </Container> */}
      <Box textAlign={"center"}>
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
        padding={"2rem"}
        // border={"1px solid blue"}
      >
        <Box
          width={"70%"}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"3em"}
        >
          {ProjectList.map(
            ({ ProjectName, ProjectDescription, ProjectBanner, Direction }) => {
              return (
                <Box
                  display={"flex"}
                  // height={"10rem"}
                  flexDirection={{
                    md: Direction === "row" ? "row" : "row-reverse",
                  }}
                  minWidth={"60%"}
                  // border={"1px solid red"}
                >
                  <Box
                    as={"img"}
                    src={ProjectBanner}
                    width={"50%"}
                    height={"25rem"}
                    sx={{ aspectRatio: 1 }}
                  ></Box>
                  <Box
                    width={"50%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box
                      width={"80%"}
                      height={"80%"}
                      // border={"1px solid white"}
                      display={"flex"}
                      flexDirection={"column"}
                      rowGap={"25px"}
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
