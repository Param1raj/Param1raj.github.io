import timeCampBanner from "./TimeCamp (1).png";
import PortfolioBanner from "./Portfoliobanner.png";
import RentomojoBanner from "./RentoMojo (1).png";
import BeatibeboBanner from "./Beautibebo.png";
import GetaBanner from "./yoga_project_landing_page_using_nextjs.png";
import { Box, Typography } from "@mui/material";
// import ProjectCard from "./ProjectCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FlowUpAnimation from "../Animation/FlowUpAnimation";
import ProjectCard from "./ProjectCard";

export type Project = {
  name: string;
  description: string;
  banner: string;
  direction: string;
  link: string;
  techStack: string[];
};

const ProjectList: Project[] = [
  {
    name: "Gita (Yoga Plateform)",
    description:
      "Gita is a yoga online learning plateform. Gita provides some free and paid services or content for learners, at Gita learners can consume content in different formats like video, blogs or books.",
    banner: GetaBanner,
    direction: "row",
    link: "https://paramnetlify.netlify.app/",
    techStack: [
      "Next.js",
      "Typescript",
      "Express.js",
      "MongoDB",
      "Material UI",
      "Framer Motion",
      "JSON Web Token",
      "Firebase",
    ],
  },
  {
    name: "Portfolio",
    description:
      "This is my portfolio website. It has react scrolling for ease in navigating from one to another section, it provides a good idea about me, my tech skills, projects and also a medium to connect with me.",
    banner: PortfolioBanner,
    direction: "row-reverce",
    link: "https://param1raj.github.io/",
    techStack: [
      "React",
      "Typescript",
      "Material UI",
      "Framer Motion",
      "React-Scroll",
      "Resned",
    ],
  },
  {
    name: "TimeCamp Clone",
    description:
      "TimeCamp (clone) is a web-based application to track the activity of computer users and it is dedicated either to freelancers or teams. The tool is a time tracking software to invoice the employees' work based on an hourly rate, measuring the work effectiveness and project management.",
    banner: timeCampBanner,
    direction: "row",
    link: "astonishing-sorbet-368da1.netlify.app",
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "Chakra UI",
      "Module CSS",
      "JSON Web Token",
    ],
  },
  {
    name: "BeautiBebo Clone",
    description:
      "Beauty Bebo is India’s fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products. We at Beauty Bebo are committed to provide genuine products on fair price to our customers. We bring worlds premium brands and products for you.",
    banner: BeatibeboBanner,
    direction: "row-reverce",
    link: "https://beautibebo-netlify.netlify.app/",
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "Chakra UI",
      "Module CSS",
      "JSON Web Token",
    ],
  },
  {
    name: "RentoMojo Clone",
    description:
      "RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. Purchasing a furniture piece, an appliance, or a gadget from the store will cost you thousands of rupees",
    banner: RentomojoBanner,
    direction: "row",
    link: "https://rentomojosite.netlify.app",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];

export default function Projects() {
  return (
    <Box sx={{ background: "black", border: "0px solid red" }} id="project">
      <Box textAlign={"center"} padding={"2rem"}>
        <FlowUpAnimation>
          <Typography color={"#A39E9E"}>Latest Works</Typography>
        </FlowUpAnimation>
        <FlowUpAnimation>
          <Typography fontSize={"2.5rem"} color={"white"}>
            Explore My Popular{" "}
            <span style={{ color: "#AA7000" }}>Projects</span>
          </Typography>
        </FlowUpAnimation>
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
            ({ name, description, banner, direction, link, techStack }) => {
              return (
                // <Box
                //   display={"flex"}
                //   flexdirection={{
                //     xs: "column",
                //     sm: "column",
                //     md: "column",
                //     lg: direction === "row" ? "row" : "row-reverse",
                //   }}
                //   width={"100%"}
                // >
                //   <Box
                //     as={"img"}
                //     src={banner}
                //     width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
                //     height={{
                //       xs: "15rem",
                //       sm: "22rem",
                //       md: "30rem",
                //       lg: "25rem",
                //     }}
                //     sx={{ aspectRatio: 1 / 1 }}
                //   ></Box>
                //   <Box
                //     width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
                //     display={"flex"}
                //     alignItems={"center"}
                //     justifyContent={"center"}
                //   >
                //     <Box
                //       width={{ xs: "90%", sm: "90%", md: "80%" }}
                //       height={"80%"}
                //       display={"flex"}
                //       flexdirection={"column"}
                //       rowGap={"25px"}
                //       padding={{
                //         xs: "0px",
                //         sm: "10px",
                //         md: "20px",
                //         lg: "0px",
                //       }}
                //     >
                //       <Typography
                //         fontSize={"1rem"}
                //         fontWeight={"bold"}
                //         color={"#AA7000"}
                //       >
                //         Web Development
                //       </Typography>
                //       <a
                //         href={link}
                //         target="_blank"
                //         style={{ textDecoration: "none" }}
                //         rel="noreferrer"
                //       >
                //         <Typography
                //           fontSize={{ xs: "2rem", sm: "2.5rem" }}
                //           color={"white"}
                //           sx={{
                //             transition: "color 1s ease",
                //             ":hover": { color: "#AA7000", cursor: "pointer" },
                //           }}
                //         >
                //           {name}
                //         </Typography>
                //       </a>
                //       <Typography color={"gray"}>
                //         {description}
                //       </Typography>
                //       <a href={link} target="_blank" rel="noreferrer">
                //         <Box
                //           sx={{
                //             width: "40px",
                //             height: "40px",
                //             borderRadius: "50%",
                //             border: "1px solid gray",
                //             display: "flex",
                //             alignItems: "center",
                //             justifyContent: "center",
                //             ":hover": {
                //               background: "#AA7000",
                //               border: "1px solid #AA7000",
                //               cursor: "pointer",
                //               "& .icon": {
                //                 color: "white",
                //               },
                //             },
                //           }}
                //         >
                //           <ArrowOutwardIcon
                //             className="icon"
                //             sx={{ color: "gray" }}
                //           />
                //         </Box>
                //       </a>
                //     </Box>
                //   </Box>
                // </Box>
                <ProjectCard
                  key={name}
                  name={name}
                  banner={banner}
                  direction={direction}
                  link={link}
                  description={description}
                  techStack={techStack}
                />
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
}
