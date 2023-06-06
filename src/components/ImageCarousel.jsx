import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const ImageCarousel = () => {
  const data = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
  ];
  return (
    <Carousel
      indicators={true}
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-10px",
          height: "40px",
          position: "absolute",
          bottom: "0px",
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4.5px)",
          display: "flex",
          justifyContent: "end",
          paddingRight: "30px",
        },
      }}
    >
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
