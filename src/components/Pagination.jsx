import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pageItem: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#D1D1D1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "7px",
    cursor: "pointer",
  },
  activePage: {
    backgroundColor: "#0059BC",
  },
}));

const PaginationComponent = ({ productLength, setXsVisibleProduct }) => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (event, page) => {
    setActivePage(page);
    setXsVisibleProduct(page);
  };

  return (
    <Box>
      <Box className={classes.pagination}>
        {[...Array(productLength)].map((_, index) => (
          <Box
            key={index}
            className={`${classes.pageItem} ${
              activePage === index + 1 ? classes.activePage : ""
            }`}
            onClick={(e) => handlePageChange(e, index + 1)}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default PaginationComponent;
