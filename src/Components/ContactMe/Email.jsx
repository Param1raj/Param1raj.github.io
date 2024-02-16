import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/contactFormImage.jpg";
function Email({ name, email, phone, subject, message }) {
  return (
    <Box sx={{ padding: "50px", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          background: "white",
          width: { x: "90%", sm: "80%", md: "70%" },
        }}
      >
        <Box
          as="img"
          src={banner}
          sx={{ maxWidth: "100%", alignSelf: "center" }}
        ></Box>
        <Box
          padding={"20px"}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"2rem"}
        >
          <Box>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", color: "black" }}
            >
              <span style={{ color: "#AA7000" }}> Hi,</span> Param
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: { xs: "none", md: "bold" },
                color: "black",
              }}
            >
              You have recieved notification from portfolio contact form.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
                color: "#AA7000",
              }}
            >
              {subject}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: { xs: "none", md: "bold" },
                color: "black",
                width: { lg: "60%", xl: "50%" },
              }}
            >
              {message}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
                color: "#AA7000",
              }}
            >
              Contact Details
            </Typography>
            <Box>
              <Typography>Name - {name}</Typography>
              <Typography>Email - {email}</Typography>
              <Typography>Phone - {phone}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Email;
