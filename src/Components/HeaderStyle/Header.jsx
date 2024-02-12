import { Box, Typography, Button } from "@mui/material";
// import Resume from './ParamRaj_Resume.pdf'

import { motion } from "framer-motion";

const textContainerVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const childVarient = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Header() {
  function handleClick() {
    return window.open(
      "https://drive.google.com/u/0/uc?id=1N-tpdNqLwWpmLh2G_YlrWN4DzLNTvq2K&export=download"
    );
  }

  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="home"
    >
      <motion.div
        style={{ width: "80%", height: "50%" }}
        variants={textContainerVarient}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* <Intro></Intro> */}
          <Box textAlign={"left"}>
            <motion.h3 variants={childVarient}>
              <Typography
                sx={{ fontSize: { xs: "1rem", sm: "2rem" }, color: "white" }}
              >
                Hello I'm a
              </Typography>
            </motion.h3>
          </Box>
          <Box textAlign={"left"}>
            <motion.h3 variants={childVarient}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: { xs: "2rem", sm: "3.1rem" },
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.h3>
          </Box>
          {/* <Title></Title> */}
          <Box sx={{ display: "flex" }}>
            <a
              href="/"
              title="ParamRaj_Resume.pdf"
              download={"ParamRaj_Resume.pdf"}
              onClick={handleClick}
              // style={{
              //   alignSelf: "left",
              // }}
            >
              <motion.div variants={childVarient}>
                <Button
                  sx={{
                    border: "1px solid white",
                    borderRadius: "70px",
                    paddingInline: "20px",
                    paddingBlock: "10px",
                    color: "black",
                    background: "white",
                    // alignSelf: "left",
                    transition: "background  1s ease",
                    ":hover": {
                      color: "white",
                      background: "transparent",
                    },
                  }}
                >
                  Get Resume
                </Button>
              </motion.div>
            </a>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

// ParamRaj_Resume.pdf
