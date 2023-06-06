import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ color: "white", backgroundColor: "#0059BC" }}>
      <Container>
        <Grid container spacing={1}>
          <Grid container item xs={12} md={6}>
            <Box width={"100%"}>
              <Typography
                variant="h2"
                component="div"
                sx={{ marginBottom: "-15px" }}
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 18.7C17.9 18.5 10.5 4.1 9.6 2.8C8.6 1.1 7.4 0 4.9 0C2.7 0 0 1 0 6.4V24.5H5.5V9.4C5.5 8.3 5.4 6.7 5.4 6.4C5.4 6.2 5.4 5.9 5.5 5.8C5.7 5.7 5.8 5.9 5.9 6C6 6.1 12.9 19.7 14.3 21.9C15.3 23.5 16.6 24.7 19 24.7C21.2 24.7 23.9 23.7 23.9 18.3V0.2H18.4V15.3C18.4 16.4 18.5 18 18.5 18.3C18.5 18.5 18.5 18.8 18.4 18.9C18.3 19.1 18.2 18.9 18 18.7Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.799988 0.200012V5.40001H8.59999V24.5H14.1V5.40001H21.9V0.200012H0.799988Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <path
                    d="M0.799988 0.200012V5.40001H8.59999V24.5H14.1V5.40001H21.9V0.200012H0.799988Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0.200012H0.299988V24.4H15.3C21.2 24.5 23.1 21.5 23.1 15.9V8.80001C23.1 2.40001 20.6 0.200012 15 0.200012ZM17.5 16.1C17.5 18.4 16.7 19.3 14.7 19.3H5.79999V5.50001H14.7C16.7 5.50001 17.5 6.40001 17.5 8.70001V16.1Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.39999 19.3C6.59999 19.3 5.59998 18.9 5.59998 16.8C5.59998 14.7 6.49999 14.3 7.39999 14.3H17.8V19.2L7.39999 19.3ZM15.4 0.200012H1.59998V5.40001H15.1C17.1 5.40001 17.9 6.30001 17.9 8.60001C17.9 8.60001 17.9 9.30001 17.9 9.40001H6.69998C2.39998 9.40001 0.299988 11.5 0.299988 16.4V17.5C0.299988 22.5 2.49999 24.5 6.89999 24.5H23.3V8.60001C23.3 2.50001 21.2 0.200012 15.4 0.200012Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.299988 0.200012V5.40001H8.09999V24.5H13.6V5.40001H21.4V0.200012H0.299988Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.39999 19.3C6.59999 19.3 5.59998 18.9 5.59998 16.8C5.59998 14.7 6.49999 14.3 7.39999 14.3H17.8V19.2L7.39999 19.3ZM15.4 0.200012H1.59998V5.40001H15.1C17.1 5.40001 17.9 6.30001 17.9 8.60001C17.9 8.60001 17.9 9.30001 17.9 9.40001H6.69998C2.39998 9.40001 0.299988 11.5 0.299988 16.4V17.5C0.299988 22.5 2.49999 24.5 6.89999 24.5H23.3V8.60001C23.3 2.50001 21.2 0.200012 15.4 0.200012Z"
                    fill="white"
                  />
                </svg>
              </Typography>
            </Box>
            <Box width={"100%"}>
              <Typography variant="caption" component="div" color="white">
                Trusted Global Innovator
              </Typography>
            </Box>
            <Box width={"100%"}>
              <Typography
                color={"white"}
                mt={3}
                maxWidth={"407px"}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
                aliquam neque.
              </Typography>
            </Box>

            <Box
              sx={{
                my: "30px",
              }}
            >
              <TextField
                hiddenLabel
                id="filled-size-small"
                variant="outlined"
                size="small"
                color="primary"
                defaultValue="Email"
                height="38px"
                sx={{
                  backgroundColor: "white",
                  width: {
                    xs: "175px",
                    sm: "245px",
                    lg: "310px",
                  },
                }}
                InputProps={{ sx: { borderRadius: 0 } }}
              />
              <Button
                variant="text"
                sx={{
                  backgroundColor: "#00254F",
                  height: "40px",
                  color: "white",
                  borderRadius: 0,
                  textTransform: "capitalize",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Grid>

          <Grid
            container
            item
            md={6}
            mt={5}
            sx={{
              display: {
                xs: "none",
                md: "block",
                lg: "flex",
                justifyContent: "end",
              },
            }}
          >
            <Grid
              container
              item
              lg={4}
              sx={{
                display: { xs: "none", md: "block", lg: "flex" },
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" component="div">
                Title
              </Typography>
              <Box sx={{ display: { xs: "none", lg: "inline" } }} my={2}>
                <Typography variant="subtitle1" component="div">
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div" my={1}>
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div" mt={1}>
                  Subtitle
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              item
              lg={4}
              sx={{
                display: { xs: "none", md: "block", lg: "flex" },
                flexDirection: "column",

                margin: { sm: 0 },
              }}
            >
              <Typography variant="h6" component="div">
                Title
              </Typography>
              <Box sx={{ display: { xs: "none", lg: "inline" } }} my={2}>
                <Typography variant="subtitle1" component="div">
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div" my={1}>
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div" mt={1}>
                  Subtitle
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              item
              lg={2}
              sx={{
                display: { xs: "none", md: "block", lg: "flex" },
                flexDirection: "column",
                marginRight: "-35px",
              }}
            >
              <Typography variant="h6" component="div">
                Title
              </Typography>
              <Box sx={{ display: { xs: "none", lg: "inline" } }} my={2}>
                <Typography variant="subtitle1" component="div">
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div" my={1}>
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Subtitle
                </Typography>
                <Typography variant="subtitle1" component="div" mt={1}>
                  Subtitle
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              item
              lg={2}
              sx={{
                display: { xs: "none", md: "block", lg: "none" },
                flexDirection: "column",
                marginRight: "-35px",
              }}
            >
              <Typography variant="h6" component="div">
                Title
              </Typography>
            </Grid>
            <Grid
              container
              item
              lg={2}
              sx={{
                display: { xs: "none", md: "block", lg: "none" },
                flexDirection: "column",
                marginRight: "-35px",
              }}
            >
              <Typography variant="h6" component="div">
                Title
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Container>
        <Box py={3} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>contact@nttdata.com</Typography>
          <Typography>+3 9876 765 444</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1.5rem",
              display: { xs: "none", md: "flex" },
            }}
          >
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
