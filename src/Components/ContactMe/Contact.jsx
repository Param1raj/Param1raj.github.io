// import { Box } from "./ContactStyle";

import {
  Box,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import InputComponent from "./InputComponent";
import MaxHeightTextarea from "./TextArea";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import { motion } from "framer-motion";
import FlowUpAnimation from "../Animation/FlowUpAnimation";
const Experties = [
  "2+ Years Of Experience",
  "Professional Web Developer",
  "Mobile Apps Developer",
  "Custom Solution Development",
];
const IconStyles = {
  color: "white",
  height: "53px",
  width: "20px",
};
export default function ContactMe() {
  const { register, handleSubmit, reset } = useForm();
  return (
    // <>
    //   <Container id="contact">
    //     <Heading>Contact Me</Heading>
    //     {/* style={{width:"80%",margin:"auto",textAlign:'left',display:"grid",gridTemplateColumns:["50% 50%","50"]}}https://cdn-icons-png.flaticon.com/512/1384/1384014.png */}
    //     <Box>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "space-evenly",
    //           alignItems: "flex-start",
    //           gap: "10px",
    //         }}
    //       >
    //         <OverlayTrigger
    //           trigger="click"
    //           key={"right"}
    //           placement={"right"}
    //           overlay={
    //             <Popover id={`popover-positioned-right`}>
    //               <Popover.Header as="h3">Email</Popover.Header>
    //               <Popover.Body>
    //                 <strong>pr6587424@gmail.com</strong>
    //               </Popover.Body>
    //             </Popover>
    //           }
    //         >
    //           <Button h="fit-content" w="fit-content" borderRadius={"50%"}>
    //             <Image
    //               src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"
    //               width="100px"
    //               height="100px"
    //               alt="insta icon"
    //             ></Image>
    //           </Button>
    //         </OverlayTrigger>
    //         <OverlayTrigger
    //           trigger="click"
    //           key={"right"}
    //           placement={"right"}
    //           overlay={
    //             <Popover id={`popover-positioned-right`}>
    //               <Popover.Header as="h3">Phone or Whats-App</Popover.Header>
    //               <Popover.Body>
    //                 <strong>+91 7818869663</strong>
    //               </Popover.Body>
    //             </Popover>
    //           }
    //         >
    //           <Button h="fit-content" w="fit-content" borderRadius={"50%"}>
    //             <Image
    //               src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
    //               width="100px"
    //               height="100px"
    //               alt="insta icon"
    //             ></Image>
    //           </Button>
    //         </OverlayTrigger>

    //         <a
    //           href="https://github.com/Param1raj"
    //           target={"_blank"}
    //           rel="noreferrer"
    //         >
    //           <Image
    //             src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
    //             alt="github icon"
    //           ></Image>
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/in/param-raj-997aa41ba/"
    //           target={"_blank"}
    //           rel="noreferrer"
    //         >
    //           <Image
    //             src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
    //             width="100px"
    //             height="100px"
    //             alt="insta icon"
    //           ></Image>
    //         </a>
    //         <a
    //           href="https://www.facebook.com/param.raj.9822"
    //           target={"_blank"}
    //           rel="noreferrer"
    //         >
    //           <Image
    //             src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
    //             width="100px"
    //             height="100px"
    //             alt="Email icon"
    //           ></Image>
    //         </a>
    //       </div>
    //       <form>
    //         <div class="form-group">
    //           <label for="exampleFormControlInput1">Email address</label>
    //           <input
    //             type="email"
    //             class="form-control"
    //             id="exampleFormControlInput1"
    //             placeholder="name@example.com"
    //           />
    //         </div>
    //         <div class="form-group">
    //           <label for="exampleFormControlSelect1">Motive</label>
    //           <select class="form-control" id="exampleFormControlSelect1">
    //             <option>Collaboration</option>
    //             <option>Guildence</option>
    //             <option>Offer</option>
    //             <option>Projection</option>
    //           </select>
    //         </div>

    //         <div class="form-group">
    //           <label for="exampleFormControlTextarea1">Message</label>
    //           <textarea
    //             class="form-control"
    //             id="exampleFormControlTextarea1"
    //             rows="3"
    //           ></textarea>
    //         </div>
    //         <button type="submit" class="btn btn-primary">
    //           Submit
    //         </button>
    //       </form>
    //     </Box>
    //   </Container>
    // </>
    <Box
      sx={{
        padding: { xs: "3rem", sm: "5rem", md: "5.5rem" },
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid red",
      }}
      id="contact"
    >
      <Box
        minWidth={"90%"}
        height={"fit-content"}
        display={"grid"}
        gridTemplateColumns={{ md: "100%", lg: "40% 60%", xl: "30% 70%" }}
      >
        <Box
          // border={"1px solid red"}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"20px"}
        >
          <FlowUpAnimation>
            <Typography color={"#A39E9E"}>Get In Touch</Typography>
          </FlowUpAnimation>
          <FlowUpAnimation style={{ width: "100%" }}>
            <Typography
              color={"white"}
              fontSize={"2.7rem"}
              width={{ sm: "85%", xl: "80%" }}
              lineHeight={"1.2"}
            >
              Let’s Talk For Your{" "}
              <span style={{ color: "#AA7000" }}>Next Projects</span>
            </Typography>
          </FlowUpAnimation>
          <FlowUpAnimation>
            <Typography fontSize={"1rem"} width={"85%"} color={"#959595"}>
              Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
              inventore veritatis
            </Typography>
          </FlowUpAnimation>
          <Box>
            <List>
              {Experties.map((line) => {
                return (
                  <FlowUpAnimation>
                    <ListItem key={line} sx={{ padding: "5px" }}>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: "#AA7000" }}
                          fontSize="large"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={line}
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      />
                    </ListItem>
                  </FlowUpAnimation>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box
          // border={"1px solid red"}
          paddingInline={{ xs: "", sm: "0", lg: "3rem" }}
          paddingBlock={{ xs: "2rem", lg: "" }}
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: "1rem", sm: "2rem" }}
          as={"form"}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
        >
          <Box
            border={"0px solid red"}
            display={"flex"}
            flexDirection={"column"}
            gap={{ xs: "1rem", sm: "2rem" }}
          >
            <FlowUpAnimation>
              <Box
                display={"grid"}
                gridTemplateColumns={{ xs: "100%", sm: "repeat(2,1fr)" }}
                gap={{ xs: "1em", sm: "10px" }}
              >
                <InputComponent
                  Icon={<AccountCircleOutlinedIcon sx={IconStyles} />}
                  register={() => register("name", { required: true })}
                />
                <InputComponent
                  placeholder="Email"
                  Icon={<EmailOutlinedIcon sx={IconStyles} />}
                  register={() => register("email", { required: true })}
                />
              </Box>
            </FlowUpAnimation>
            <FlowUpAnimation>
              <Box
                display={"grid"}
                gridTemplateColumns={{ xs: "100%", sm: "repeat(2,1fr)" }}
                gap={{ xs: "1em", sm: "10px" }}
              >
                <InputComponent
                  placeholder="Phone"
                  Icon={<PhoneEnabledOutlinedIcon sx={IconStyles} />}
                  register={() => register("phone", { required: true })}
                />
                <InputComponent
                  placeholder="Subject"
                  Icon={<TitleOutlinedIcon sx={IconStyles} />}
                  register={() => register("subject", { required: true })}
                />
              </Box>
            </FlowUpAnimation>
          </Box>
          <FlowUpAnimation>
            <Box>
              <MaxHeightTextarea
                register={() => register("message", { required: true })}
              />
            </Box>
          </FlowUpAnimation>
          <FlowUpAnimation>
            <Input
              sx={{
                width: { xs: "6rem", sm: "12rem" },
                marginLeft: "5px",
                padding: { xs: "10px", sm: "20px" },
                background: "#AA7000",
                borderRadius: "20px",
                // border: "1px solid red",
                ":hover": {
                  background: "#AA7000",
                  opacity: "0.9",
                  cursor: "pointer",
                },
                "&:focus-visible": {
                  border: "0px ",
                },
              }}
              type="submit"
              disableUnderline
            >
              Send Message
            </Input>
          </FlowUpAnimation>
        </Box>
      </Box>
    </Box>
  );
}
