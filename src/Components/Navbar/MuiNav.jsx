import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
// import { ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const drawerWidth = 240;
const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Services", link: "services" },
  { name: "Project", link: "project" },
  { name: "Contact", link: "contact" },
  { name: "Resume", link: "" },
];

const parent = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 1,
    },
  },
};
const child = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
function DrawerAppBar(props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log("clicked");
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = () => {
    window.open(
      "https://drive.usercontent.google.com/u/0/uc?id=1FgfUQQLwIrJNQmdhHUcPOHOsz2WIT6wd&export=download"
    );
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Param Raj
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            {item.name === "Resume" ? (
              <ListItemButton
                sx={{ textAlign: "left" }}
                // onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ) : (
              <ScrollLink
                to={item.link}
                smooth={true}
                spy={true}
                onClick={handleDrawerToggle}
                style={{
                  width: "100%",
                  display: "flex",
                  // justifyContent: "left",
                  // border: "1px solid red",
                  justifyContent: "flex-start",
                }}
              >
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  // onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ScrollLink>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 33%, rgba(121,9,9,1) 73%, rgba(255,171,0,0.6755077030812324) 100%)",
          // zIndex: 10,
        }}
      >
        <motion.div variants={parent} initial="hidden" animate="visible">
          <Toolbar
            sx={{
              margin: "10px",
              // border: "1px solid white",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                columnGap: "10px",
                ":focus": {
                  outline: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <motion.div
              variants={child}
              style={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",

                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: {
                      xs: "block",
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Param Raj
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    width: { sm: "80%", md: "70%", lg: "50%", xl: "50%" },
                    // border: "1px solid red",
                    justifyContent: "space-evenly",
                  }}
                >
                  {navItems.map(({ name, link }) => (
                    <React.Fragment key={name}>
                      {name === "Resume" ? (
                        <Button
                          sx={{
                            color: "#fff",
                            fontSize: "1.1rem",
                            ":focus": {
                              outline: "none",
                            },
                          }}
                          variant="text"
                          onClick={handleClick}
                        >
                          {/* <ScrollLink scrollTo > */}
                          {name}
                          {/* </ScrollLink> */}
                        </Button>
                      ) : (
                        <ScrollLink to={link} smooth={true} spy={true}>
                          <Button
                            sx={{
                              color: "#fff",
                              fontSize: "1.1rem",
                              ":focus": {
                                outline: "none",
                              },
                            }}
                            variant="text"
                          >
                            {/* <ScrollLink scrollTo > */}
                            {name}
                            {/* </ScrollLink> */}
                          </Button>
                        </ScrollLink>
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Toolbar>
        </motion.div>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  windows: PropTypes.func,
};

export default DrawerAppBar;
