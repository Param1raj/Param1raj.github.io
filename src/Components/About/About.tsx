import { Box, Link, Typography } from "@mui/material";
// import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import ProfilePicture from "./param.png";
import { motion } from "framer-motion";
import FlowUpAnimation from "../Animation/FlowUpAnimation";
// import { Link } from "react-router-dom";
const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export default function About() {
  return (
    <Box
      id="about"
      sx={{
        background: "black",
        padding: { xs: "40px", sm: "70px", md: "90px", lg: "90px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
      color={"white"}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{ sm: "100%", md: "55% 45%" }}
        width={{ md: "100%", lg: "100%", xl: "90%" }}
        // border={"1px solid blue"}
        rowGap={"30px"}
      >
        <Box
          height={"fit-content"}
          // border={"1px solid blue"}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"20px"}
        >
          <FlowUpAnimation>
            <Typography color={"#A39E9E"}>About Me</Typography>
          </FlowUpAnimation>
          <Box>
            <FlowUpAnimation>
              <Typography
                fontSize={{ xs: "2rem", sm: "2.7rem" }}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "90%",
                    md: "85",
                    lg: "95%",
                    xl: "90%",
                  },
                }}
              >
                Professional{" "}
                <span style={{ color: "#AA7000" }}>Problem Solutions</span> For
                Digital Products
              </Typography>
            </FlowUpAnimation>
            {/* <Typography fontSize={"2.2rem"}></Typography> */}
          </Box>
          <FlowUpAnimation>
            <Typography width={{ sm: "85%", md: "80%" }}>
              A full stack software developer with the experience of 2 year of
              working with technologies like Nextjs, React native, apollo,
              express. An adaptive, passionate about tech individual looking
              forward for a better opportunity to enhance my skills set.
            </Typography>
          </FlowUpAnimation>
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Box
              display={"grid"}
              gridTemplateColumns={{ xs: "100%", sm: "repeat(2,1fr)" }}
              // border={"1px solid red"}
              width={{ sm: "90%", xl: "80%" }}
              rowGap={"10px"}
            >
              <motion.div variants={child}>
                <Box
                  display={"flex"}
                  columnGap={{ lg: "5px", xl: "10px" }}
                  alignItems={"center"}
                >
                  <CheckIcon fontSize="large" sx={{ color: "#AA7000" }} />
                  <Typography fontSize={{ sm: "1.2rem", xl: "1.5rem" }}>
                    Web Development
                  </Typography>
                </Box>
              </motion.div>
              <motion.div variants={child}>
                <Box
                  display={"flex"}
                  columnGap={{ lg: "5px", xl: "10px" }}
                  alignItems={"center"}
                >
                  <CheckIcon fontSize="large" sx={{ color: "#AA7000" }} />
                  <Typography fontSize={{ sm: "1.2rem", xl: "1.5rem" }}>
                    Android Developement
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
          <FlowUpAnimation>
            <Box
              width={{ xs: "100%", sm: "80%" }}
              border={"1px solid hsla(0,0%,100%,.1)"}
              display={"grid"}
              gridTemplateColumns={{
                xs: "100%",
                sm: "repeat(2,1fr)",
                md: "100%",
                lg: "repeat(2,1fr)",
              }}
              padding={"20px"}
              borderRadius={"20px"}
              sx={{ background: "#1F1F1F" }}
              rowGap={"20px"}
            >
              <Box display={"flex"} columnGap={"10px"}>
                <Box
                  // border={"1px solid red"}
                  borderRadius={"50%"}
                  width={"40px"}
                  height={"40px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ background: "#AA7000" }}
                >
                  <EmailOutlinedIcon
                    sx={{ color: "black", fontWeight: "bold" }}
                  />
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography color={"#A39E9E"} fontSize={"12px"}>
                    Email us
                  </Typography>
                  <Link
                    href={"mailto:paramraj067@gmail.com"}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      transition: "color 1s ease",
                      ":hover": {
                        color: "#AA7000",
                        textDecoration: "none",
                      },
                      // fontWeight: "bold",
                    }}
                    // onClick={openMailBox}
                  >
                    paramraj067@gmail.com
                  </Link>
                  {/* <Link to={"mailto:paramraj067@gmail.com"}>
                    paramraj067@gmail.com
                  </Link> */}
                </Box>
              </Box>
              <Box display={"flex"} columnGap={"10px"}>
                {" "}
                <Box
                  // border={"1px solid red"}
                  borderRadius={"50%"}
                  width={"40px"}
                  height={"40px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ background: "#AA7000" }}
                >
                  <CallIcon sx={{ color: "black", fontWeight: "bold" }} />
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography color={"#A39E9E"} fontSize={"12px"}>
                    Contact us
                  </Typography>
                  <Link
                    href={"callto:+917818869663"}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      transition: "color 1s ease",
                      ":hover": {
                        color: "#AA7000",
                        textDecoration: "none",
                      },
                      // fontWeight: "bold",
                    }}
                    // onClick={openMailBox}
                  >
                    +917818869663
                  </Link>
                  {/* <Link to={"mailto:paramraj067@gmail.com"}>
                    paramraj067@gmail.com
                  </Link> */}
                </Box>
              </Box>
            </Box>
          </FlowUpAnimation>
        </Box>
        <FlowUpAnimation
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box
            zIndex={1}
            // as={"img"}
            component={"img"}
            src={ProfilePicture}
            maxWidth={{ xs: "80%", sm: "100%" }}
            maxHeight={"25rem"}
            sx={{ borderRadius: "50%" }}
          />
        </FlowUpAnimation>
      </Box>
    </Box>
    // </>
  );
}

// export const Paragraph = styled.div`
//   font-size: 1.5vw;
//   text-align: initial;
//   @media all and (min-width: 320px) and (max-width: 500px) {
//     font-size: 2.6vw;
//   }
// `;
