import react from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/favicon.ico.png";
import { Link } from "react-scroll";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";

export type LinkType = {
  link: string;
  name: string;
};

function FooterLink({ link, name }: LinkType) {
  return (
    <Link to={link}>
      <Typography
        sx={{
          transition: "all 1s ease",
          ":hover": {
            cursor: "pointer",
            color: "#AA7000",
          },
        }}
        color={"#959595"}
      >
        {name}
      </Typography>
    </Link>
  );
}

const Links: LinkType[] = [
  {
    name: "Services",
    link: "services",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Project",
    link: "project",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

function Footer() {
  return (
    <Box
      width={"100%"}
      // border={"1px solid red"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"fit-content"}
      padding={"50px"}
      sx={{ background: "#1F1F1F" }}
    >
      <Box
        // border={"1px solid red"}
        width={{ md: "90%", lg: "85%", xl: "80%" }}
        height={"80%"}
        display={"grid"}
        gridTemplateColumns={{
          xs: "100%",
          md: "30% 45% 35%",
          lg: "35% 40% 35%",
          xl: "repeat(3,1fr)",
        }}
        // gridTemplateRows={{ xs: "" }}
        rowGap={"20px"}
      >
        <Link to="home" smooth={true} spy={true}>
          <Box
            display={"flex"}
            height={"100%"}
            gap={{ xs: "20px", md: "10px", lg: "20px" }}
            alignItems={{ xs: "center", md: "" }}
          >
            <Box
              component={"img"}
              src={Logo}
              width={{ xs: "15%", md: "18%", lg: "20%", xl: "15%" }}
              height={"fit-content"}
              sx={{ borderRadius: "10px", ":hover": { cursor: "pointer" } }}
            ></Box>
            <Typography
              color={"white"}
              fontSize={{
                xs: "2.0rem",
                md: "1.8rem",
                lg: "2.5rem",
                xl: "2.7rem",
              }}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
                // border: "1px solid red",
              }}
              height={"fit-content"}
            >
              Param Raj
            </Typography>
          </Box>
        </Link>
        <Box
          display={"flex"}
          flexDirection={"column"}
          rowGap={{ xs: "20px", md: "15px", lg: "25px" }}
          // border={"1px solid blue"}
        >
          <Typography color={"white"} fontWeight={"bold"}>
            Quick Links
          </Typography>
          <Box
            display={"flex"}
            gap={{
              xs: "1rem",
              sm: "3rem",
              md: "1rem",
              lg: "1.5rem",
              xl: "2rem",
            }}
          >
            {Links.map(({ name, link }) => (
              <FooterLink link={link} name={name} key={name} />
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={{
              xs: "1rem",
              sm: "3rem",
              md: "1rem",
              lg: "1.5rem",
              xl: "2rem",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={{
                xs: "1rem",
                sm: "2rem",
                md: "0.5rem",
                lg: "0.5rem",
                xl: "1rem",
              }}
            >
              <a
                href="https://www.linkedin.com/in/param-raj-997aa41ba/"
                target="_blank"
              >
                <LinkedInIcon
                  sx={{
                    color: "#0077B5",
                    width: "30px",
                    height: "30px",
                    // transition: "all 1s ease",
                    ":hover": {
                      cursor: "pointer",
                      //  color: "#AA7000"
                    },
                  }}
                />
              </a>
              <a href="https://github.com/Param1raj" target="_blank">
                <GitHubIcon
                  sx={{
                    color: "#ffffff",
                    width: "25px",
                    height: "25px",
                    // transition: "all 1s ease",
                    ":hover": {
                      cursor: "pointer",
                      // color: "#AA7000"
                    },
                  }}
                />
              </a>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          rowGap={{ xs: "20px", md: "15px", lg: "25px" }}
        >
          <Typography color={"white"} fontWeight={"bold"}>
            Address
          </Typography>
          <Box display={"flex"} columnGap={"10px"}>
            <MailOutlineIcon
              sx={{
                color: "white",
              }}
            />
            <a
              href="mailto: paramraj067@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  transition: "all 1s ease",
                  ":hover": {
                    cursor: "pointer",
                    color: "#AA7000",
                  },
                }}
                color={"#959595"}
              >
                paramraj067@gmail.com
              </Typography>
            </a>
          </Box>
          <Box display={"flex"} columnGap={"10px"}>
            <CallIcon
              sx={{
                color: "white",
              }}
            />
            <a href="callto: 7818869663" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  transition: "all 1s ease",
                  ":hover": {
                    cursor: "pointer",
                    color: "#AA7000",
                  },
                }}
                color={"#959595"}
              >
                91+ 7818869663
              </Typography>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
