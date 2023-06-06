import React from "react";
import { Paper } from "@mui/material";

const Item = ({ item }) => {
  return (
    <Paper>
      <img
        src={item.image}
        alt="image"
        width={"100%"}
        style={{ objectFit: "cover", minHeight: "450px" }}
      />
    </Paper>
  );
};

export default Item;
