import React from "react";
import { Paper, Button } from "@mui/material";

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
