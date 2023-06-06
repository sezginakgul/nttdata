import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NavbarItem from "./NavbarItem";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const [checkedValue, setCheckedValue] = useState("Categories");
  const [smallNavbar, setSmallNavbar] = useState(false);
  const navbarData = [
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
    "Menu Item",
  ];

  const handleChange = (event) => {
    setCheckedValue(event.target.value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Container>
            <Toolbar sx={{ paddingX: "0", marginX: 0 }}>
              <Box
                sx={{
                  minWidth: "184px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  ml: { xs: "-10px", sm: "-25px" },
                }}
              >
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3765 17.952C19.2688 17.76 11.3029 3.936 10.3341 2.688C9.25765 1.056 7.96588 0 5.27471 0C2.90647 0 0 0.96 0 6.144V23.52H5.92059V9.024C5.92059 7.968 5.81294 6.432 5.81294 6.144C5.81294 5.952 5.81294 5.664 5.92059 5.568C6.13588 5.472 6.24353 5.664 6.35118 5.76C6.45882 5.856 13.8865 18.912 15.3935 21.024C16.47 22.56 17.8694 23.712 20.4529 23.712C22.8212 23.712 25.7276 22.752 25.7276 17.568V0.192H19.8071V14.688C19.8071 15.744 19.9147 17.28 19.9147 17.568C19.9147 17.76 19.9147 18.048 19.8071 18.144C19.6994 18.336 19.5918 18.144 19.3765 17.952Z"
                    fill="#0059BC"
                  />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.772949 0.191986V5.18399H9.16942V23.52H15.09V5.18399H23.4865V0.191986H0.772949Z"
                    fill="#0059BC"
                  />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginRight: "7px",
                  }}
                >
                  <path
                    d="M0.772949 0.191986V5.18399H9.16942V23.52H15.09V5.18399H23.4865V0.191986H0.772949Z"
                    fill="#0059BC"
                  />
                </svg>

                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9588 0.191986H0.134705V23.424H16.2818C22.6329 23.52 24.6782 20.64 24.6782 15.264V8.44799C24.6782 2.30399 21.9871 0.191986 15.9588 0.191986ZM18.65 15.456C18.65 17.664 17.7888 18.528 15.6359 18.528H6.05529V5.27999H15.6359C17.7888 5.27999 18.65 6.14399 18.65 8.35199V15.456Z"
                    fill="#0059BC"
                  />
                </svg>

                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.68939 18.528C6.82821 18.528 5.75174 18.144 5.75174 16.128C5.75174 14.112 6.72056 13.728 7.68939 13.728H18.8847V18.432L7.68939 18.528ZM16.3012 0.191986H1.44585V5.18399H15.9782C18.1311 5.18399 18.9923 6.04799 18.9923 8.25599C18.9923 8.25599 18.9923 8.92799 18.9923 9.02399H6.93585C2.30703 9.02399 0.0464478 11.04 0.0464478 15.744V16.8C0.0464478 21.6 2.41468 23.52 7.15115 23.52H24.8053V8.25599C24.8053 2.39999 22.5447 0.191986 16.3012 0.191986Z"
                    fill="#0059BC"
                  />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.881775 0.191986V5.18399H9.27825V23.52H15.1988V5.18399H23.5953V0.191986H0.881775Z"
                    fill="#0059BC"
                  />
                </svg>

                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8841 18.528C7.02292 18.528 5.94645 18.144 5.94645 16.128C5.94645 14.112 6.91527 13.728 7.8841 13.728H19.0794V18.432L7.8841 18.528ZM16.4959 0.191986H1.64057V5.18399H16.1729C18.3259 5.18399 19.187 6.04799 19.187 8.25599V9.02399H7.13056C2.50173 9.02399 0.24115 11.04 0.24115 15.744V16.8C0.24115 21.6 2.60939 23.52 7.34586 23.52H25V8.25599C24.8923 2.39999 22.847 0.191986 16.4959 0.191986Z"
                    fill="#0059BC"
                  />
                </svg>
              </Box>

              <Box
                sx={{
                  mx: "60px",
                  flexGrow: 3,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <TextField
                  hiddenLabel
                  id="filled-size-small"
                  variant="outlined"
                  size="small"
                  placeholder="Search..."
                  sx={{
                    width: {
                      md: "500px",
                      lg: "735px",
                    },
                  }}
                />
                <FormControl
                  sx={{
                    m: 1,
                    minWidth: 160,
                    position: { md: "absolute" },
                    left: { lg: 566, md: 331 },
                    display: { xs: "none", md: "inline-flex" },
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                  size="small"
                >
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={checkedValue}
                    sx={{
                      color: "black",
                      fontSize: "15px",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      background: "#F4F5F6",
                    }}
                    onChange={handleChange}
                    MenuProps={{
                      sx: {
                        "&& .Mui-selected": {
                          backgroundColor: "#0059BC",
                        },
                        "&& .Mui-selected:hover": {
                          backgroundColor: "#0059BC",
                        },
                        "& .MuiList-padding": {
                          py: 0,
                        },
                      },
                    }}
                  >
                    <MenuItem
                      sx={{
                        display: "none",
                      }}
                      value={"Categories"}
                    >
                      Categories
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&:hover": { backgroundColor: "#0059BC" },
                        backgroundColor: "#00254F",
                        fontSize: "15px",
                        color: "white",
                      }}
                      value={"Data"}
                    >
                      Data
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&:hover": { backgroundColor: "#0059BC" },
                        backgroundColor: "#00254F",
                        fontSize: "15px",
                        color: "white",
                      }}
                      value={"Category Name1"}
                    >
                      Category Name1
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&:hover": { backgroundColor: "#0059BC" },
                        backgroundColor: "#00254F",
                        fontSize: "15px",
                        color: "white",
                      }}
                      value={"Category Name2"}
                    >
                      Category Name2
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&:hover": { backgroundColor: "#0059BC" },
                        backgroundColor: "#00254F",
                        fontSize: "15px",
                        color: "white",
                      }}
                      value={"Category Name3"}
                    >
                      Category Name3
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&:hover": { backgroundColor: "#0059BC" },
                        backgroundColor: "#00254F",
                        fontSize: "15px",
                        color: "white",
                      }}
                      value={"Category Name4"}
                    >
                      Category Name4
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 2,
                  display: { sm: "block", md: "none" },
                  position: "absolute",
                  right: "-20px",
                }}
                onClick={() => setSmallNavbar(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      {smallNavbar && (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#FFFFFF",
            zIndex: "111",
            display: { md: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: 2,
              mr: 5,
            }}
          >
            <CloseIcon
              fontSize="large"
              onClick={() => setSmallNavbar(false)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <Box
            mt={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              my={2}
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
                cursor: "pointer",
              }}
            >
              Category 1
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
                cursor: "pointer",
              }}
            >
              Category 2
            </Typography>
            <Typography
              variant="h4"
              component="div"
              my={2}
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
                cursor: "pointer",
              }}
            >
              Category 3
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
                cursor: "pointer",
              }}
            >
              Category 4
            </Typography>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          height: "50px",
          backgroundColor: "white",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TextField
          hiddenLabel
          id="filled-size-small"
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{
            width: {
              xs: "364px",
            },
          }}
          InputProps={{
            sx: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
          }}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0059BC",
            width: "110px",
            height: "40px",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
        >
          <SearchIcon />
        </Button>
      </Box>
      <hr style={{ backgroundColor: "black" }} />
      <Container
        sx={{
          height: "55px",
          width: "100%",
          display: { xs: "none", md: "flex" },
          justifyContent: { md: "space-around", lg: "space-between" },
          alignItems: "center",
          px: { md: "100px", lg: "24px" },
        }}
      >
        {navbarData.map((data, i) => (
          <Box
            key={i}
            sx={{
              display: { xs: "none", lg: "flex" },
              color: "#6A6D70",
            }}
          >
            <NavbarItem data={data} />
          </Box>
        ))}
        {navbarData.slice(0, 6).map((data, i) => (
          <Box
            key={i}
            sx={{
              display: { xs: "none", md: "flex", lg: "none" },
              color: "#6A6D70",
            }}
          >
            <NavbarItem data={data} />
          </Box>
        ))}
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          defaultValue="More"
          sx={{
            color: "#6A6D70",
            border: "none",
            fontSize: "14px",
            "& fieldset": { border: "none" },
            minWidth: 80,
            marginLeft: "-20px",
            display: { xs: "none", md: "flex", lg: "none" },
          }}
          MenuProps={{
            sx: {
              "&& .Mui-selected": {
                backgroundColor: "#F4F5F6",
              },
              "& .MuiList-padding": {
                py: 0,
              },
            },
          }}
        >
          <MenuItem
            sx={{
              backgroundColor: "#F4F5F6",
              fontSize: "14px",
              display: "none",
            }}
            value={"More"}
          >
            More
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#F4F5F6",
              fontSize: "14px",
            }}
            value={"Menu Item"}
          >
            Menu Item
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#F4F5F6",
              fontSize: "14px",
            }}
            value={"Menu Item"}
          >
            Menu Item
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#F4F5F6",
              fontSize: "14px",
            }}
            value={"Menu Item"}
          >
            Menu Item
          </MenuItem>
        </Select>
      </Container>
    </div>
  );
};

export default Navbar;
