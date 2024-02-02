import timeCampBanner from "./TimeCamp (1).png";
import PortfolioBanner from "./Portfoliobanner.png";
import RentomojoBanner from "./RentoMojo (1).png";
import BeatibeboBanner from "./Beautibebo.png";
import GetaBanner from "./yoga_project_landing_page_using_nextjs.png";
import { Box, Typography } from "@mui/material";
// import ProjectCard from "./ProjectCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectList = [
  {
    ProjectName: "Gita (Yoga Plateform)",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: GetaBanner,
    Direction: "row",
    link: "https://paramnetlify.netlify.app/",
  },
  {
    ProjectName: "Portfolio",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: PortfolioBanner,
    Direction: "row-reverce",
    link: "https://param1raj.github.io/",
  },
  {
    ProjectName: "TimeCamp Clone",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: timeCampBanner,
    Direction: "row",
    link: "astonishing-sorbet-368da1.netlify.app",
  },
  {
    ProjectName: "BeautiBebo Clone",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: BeatibeboBanner,
    Direction: "row-reverce",
    link: "https://beautibebo-netlify.netlify.app/",
  },
  {
    ProjectName: "RentoMojo Clone",
    ProjectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus id quibusdam at iure aspernatur porro laborum accusantium et libero, earum consequuntur alias, iste ipsa ad excepturi, officia doloribus facere.",
    ProjectBanner: RentomojoBanner,
    Direction: "row",
    link: "https://rentomojosite.netlify.app",
  },
];
export default function Projects() {
  return (
    <Box sx={{ background: "black", border: "0px solid red" }} id="project">
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
        padding={{ xs: "2rem", sm: "5rem", md: "5.2rem", lg: "2rem" }}
        // border={"1px solid red"}
      >
        <Box
          width={{ lg: "88%", xl: "80%" }}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"3em"}
          // border={"1px solid red"}
        >
          {ProjectList.map(
            ({
              ProjectName,
              ProjectDescription,
              ProjectBanner,
              Direction,
              link,
            }) => {
              return (
                <Box
                  display={"flex"}
                  flexDirection={{
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: Direction === "row" ? "row" : "row-reverse",
                  }}
                  width={"100%"}
                >
                  <Box
                    as={"img"}
                    src={ProjectBanner}
                    width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
                    height={{
                      xs: "15rem",
                      sm: "22rem",
                      md: "30rem",
                      lg: "25rem",
                    }}
                    sx={{ aspectRatio: 1 / 1 }}
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
                      <a
                        href={link}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          fontSize={{ xs: "2rem", sm: "2.5rem" }}
                          color={"white"}
                          sx={{
                            transition: "color 1s ease",
                            ":hover": { color: "#AA7000", cursor: "pointer" },
                          }}
                        >
                          {ProjectName}
                        </Typography>
                      </a>
                      <Typography color={"gray"}>
                        {ProjectDescription}
                      </Typography>
                      <a href={link} target="_blank">
                        <Box
                          sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
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
                      </a>
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
