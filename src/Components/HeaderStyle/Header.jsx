import { Box, Typography, Button } from "@mui/material";
import { Intro, Title } from "./HeaderStyle";
import { background } from "@chakra-ui/react";
// import Resume from './ParamRaj_Resume.pdf';

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
      <Box
        sx={{
          width: "80%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <Intro></Intro> */}
        <Box textAlign={"left"}>
          <Typography
            sx={{ fontSize: { xs: "1rem", sm: "2rem" }, color: "white" }}
          >
            Hello I'm a
          </Typography>
        </Box>
        <Box textAlign={"left"}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "normal",
              fontSize: { xs: "2rem", sm: "3.1rem" },
            }}
          >
            Full Stack Developer
          </Typography>
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
          </a>
        </Box>
      </Box>
    </Box>
  );
}

// ParamRaj_Resume.pdf
