import { Box, Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DockerImage from "../../assets/docker_icon_146192.png";
import JSImage from "../../assets/javascript_icon_130900.png";
import TSImage from "../../assets/file_type_typescript_official_icon_130107.png";
import NodeImage from "../../assets/file_type_node_icon_130301.png";
import ReactImage from "../../assets/react_original_logo_icon_146374.png";
import NativeImage from "../../assets/react_original_logo_icon_146374.png";
import NextImage from "../../assets/nextjs.256x256.png";
import ReduxImage from "../../assets/redux_original_logo_icon_146365.png";
import ExpressImage from "../../assets/express_original_logo_icon_146527.png";
import GraphqlImage from "../../assets/file_type_graphql_icon_130564.png";
import SkillCard from "./SkillCard";
// import { Boxes, Box, Image, Head } from "./ServicesStyle";

const SkillList = [
  {
    SkillIcon: JSImage,
    SkillName: "JavaScript",
    year: 1,
  },
  {
    SkillIcon: TSImage,
    SkillName: "TypeScript",
    year: 1,
  },
  {
    SkillIcon: ReactImage,
    SkillName: "ReactJS",
    year: 1,
  },
  {
    SkillIcon: NextImage,
    SkillName: "NextJS",
    year: 1,
  },
  {
    SkillIcon: NativeImage,
    SkillName: "React-Native",
    year: 1,
  },
  {
    SkillIcon: ReduxImage,
    SkillName: "Redux",
    year: 1,
  },
  {
    SkillIcon: NodeImage,
    SkillName: "Nodejs",
    year: 1,
  },
  {
    SkillIcon: ExpressImage,
    SkillName: "Express",
    year: 1,
  },
  {
    SkillIcon: GraphqlImage,
    SkillName: "GraphQL",
    year: 1,
  },

  {
    SkillIcon: DockerImage,
    SkillName: "Docker",
    year: 1,
  },
];

export default function Skills() {
  const arr = [1, 1, 1, 1, 1, 1];
  console.log(arr);
  return (
    <Box
      sx={{
        // border: "1px solid red",
        // padding: "100px",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        height: "auto",
        background: "black",
      }}
      id="skills"
    >
      {/* <Box
        // border={"1px solid blue"}
        padding={"30px"}
        color={"white"}
        textAlign={"center"}
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 33%, rgba(121,9,9,1) 73%, rgba(255,171,0,0.6755077030812324) 100%)",
        }}
      >
        <Typography fontSize={"2.5rem"}>Skills</Typography>
      </Box> */}
      <Box
        sx={{
          // border: "1px solid red",
          padding: { xs: "10px", sm: "40px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          // height: "auto",
          background: "black",
        }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "100%",
            md: "100%",
            lg: "40% 60%",
            xl: "40% 60%",
          }}
          gridTemplateRows={{ xs: "30% 70%", sm: "30% 1fr", md: "30% 1fr" }}
          width={{ md: "100%", lg: "100%", xl: "90%" }}
          // height={"fit-content"}
          // sx={{ border: "1px solid blue" }}
        >
          <Box
            // border={"1px solid red"}
            height={"fit-content"}
            padding={{ xs: "30px", md: "50px" }}
            display={"flex"}
            flexDirection={"column"}
            rowGap={"20px"}
          >
            <Box>
              <Typography color={"#A39E9E"}>My Skills</Typography>
            </Box>
            <Box color={"white"}>
              <Typography
                fontSize={{
                  xs: "2.1rem",
                  sm: "2.7rem",
                  md: "2.7rem",
                  lg: "2.7rem",
                  xl: "2.7rem",
                }}
              >
                Let’s Explore Popular
              </Typography>
              <Typography
                fontSize={{
                  xs: "2.1rem",
                  sm: "2.7rem",
                  md: "2.7rem",
                  lg: "2.7rem",
                  xl: "2.7rem",
                }}
                color={"#AA7000"}
              >
                Skills & Experience
              </Typography>
            </Box>
            <Box>
              <Typography
                color={"white"}
                width={{ xs: "100%", sm: "90%" }}
                fontSize={{
                  xs: "0.9rem",
                  sm: "1rem",
                }}
              >
                Delve into my skill set, where React and Next.js expertise
                converges with strong proficiency in JavaScript and Express.
                This section encapsulates my ability to architect robust and
                responsive web applications, showcasing a blend of front-end
                finesse and powerful back-end development skills.
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  borderRadius: "10px",
                  padding: "15px",
                  background: "#AA7000",
                  transition: "opacity 500ms ease",
                  ":hover": {
                    background: "#AA7000",
                    opacity: "0.8",
                  },
                }}
                variant="contained"
                endIcon={<ChevronRightIcon />}
              >
                {" "}
                Learn More
              </Button>
            </Box>
          </Box>
          <Box
            // border={"1px solid red"}
            height={"fit-content"}
            padding={{ xs: "30px", md: "50px" }}
            display={"grid"}
            gridTemplateColumns={{
              xs: "repeat(2,1fr)",
              sm: "repeat(3,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(5,1fr)",
            }}
            columnGap={"10px"}
            rowGap={"10px"}
          >
            {SkillList.map(({ SkillName, SkillIcon, year }) => {
              return (
                <SkillCard
                  key={SkillName}
                  icon={SkillIcon}
                  name={SkillName}
                  years={year}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
