import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import navbarimg from "../assets/navbarimg.png";

const NavbarItem = ({ data }) => {
  const [active, setActive] = useState(false);
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  useEffect(() => {
    if (!visibleNavbar) {
      setActive(false);
    }
  }, [visibleNavbar]);

  return (
    <>
      <Box
        onClick={() => (setVisibleNavbar(true), setActive(true))}
        onMouseLeave={() => (setActive(false), setVisibleNavbar(false))}
        sx={{
          display: { xs: "none", md: "flex" },
          color: "#6A6D70",
        }}
      >
        <Typography
          className={active ? "active" : "null"}
          variant="body2"
          component="span"
          sx={{
            cursor: "pointer",
          }}
        >
          {data}
        </Typography>
      </Box>

      {/* Navbar Content */}
      {visibleNavbar && (
        <Box
          onMouseEnter={() => (setVisibleNavbar(true), setActive(true))}
          onMouseLeave={() => setVisibleNavbar(false)}
          sx={{
            width: { md: "880px", lg: "1180px" },
            height: { lg: "300px" },
            mx: "auto",
            padding: "20px",
            backgroundColor: "#F4F5F6",
            display: { xs: "none", md: "block" },
            position: "absolute",
            left: "10px",
            right: "10px",
            top: "105px",
            zIndex: "111",
          }}
        >
          <Grid container spacing={1}>
            <Grid container item md={4}>
              <Grid
                container
                item
                md={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="subtitle2" component="div">
                  Header
                </Typography>

                <Box>
                  <Typography variant="body2" component="div" mt={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" my={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div">
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" my={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div">
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" my={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div">
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" mt={1}>
                    Subheader
                  </Typography>
                </Box>
              </Grid>
              <Grid
                container
                item
                md={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="subtitle2" component="div">
                  Header
                </Typography>

                <Box>
                  <Typography variant="body2" component="div" mt={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" my={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div">
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" my={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div">
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" my={1}>
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div">
                    Subheader
                  </Typography>
                  <Typography variant="body2" component="div" mt={1}>
                    Subheader
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container item md={8} ml={"-10px"}>
              <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                <img src={navbarimg} alt="images" />
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex", lg: "none" } }}>
                <img
                  src={navbarimg}
                  alt="images"
                  width={"580px"}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default NavbarItem;
