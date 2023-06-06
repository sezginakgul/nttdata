import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const ProductCard = ({
  product,
  favoriteProductsList,
  setFavoriteProductsList,
}) => {
  const { name, description, imageUrl, price, shippingMethod } = product;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (favoriteProductsList.find((data) => data.id === product.id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [product]);

  const paraBirimiCevir = (rakam) => {
    const formatter = new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: 2,
    });
    return formatter.format(rakam);
  };

  const redirectFunc = () => {
    window.location.href = "https://nttdata-solutions.com/tr/";
  };

  return (
    <Grid item md={3} sx={{ position: "relative", mx: { xs: "auto", md: 0 } }}>
      <Card
        variant="outlined"
        sx={{
          maxHeight: { md: 448 },
          maxWidth: { xs: 350, md: 448 },
          padding: "10px",
          mx: "auto",
        }}
        onClick={redirectFunc}
      >
        <CardMedia
          image={imageUrl}
          title={name}
          component="img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box sx={{ color: "#00254F", py: "5px" }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            pl={1}
            pt={1}
            sx={{
              fontWeight: "bold",
              lineHeight: "19px",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            pl={1}
            py={1}
            sx={{
              backgroundColor: "#E6EEF8;",
              fontWeight: "bold",
              lineHeight: "16px",
            }}
          >
            {paraBirimiCevir(price)} TL
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            py={1}
            pl={1}
            sx={{ fontWeight: "bold", lineHeight: "14px" }}
          >
            Description
          </Typography>

          <Typography
            variant="subtitle2"
            component="div"
            px={1}
            sx={{
              lineHeight: "14px",
              display: { xs: "block", md: "none", lg: "block" },
              height: "55px",
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            px={1}
            sx={{
              lineHeight: "14px",
              display: {
                xs: "none",
                md: "-webkit-box",
                lg: "none",
              },
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            pt={1}
            pl={1}
            sx={{
              color: "black",
              lineHeight: "12px",
            }}
          >
            {shippingMethod}
          </Typography>
        </Box>
      </Card>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: 22,
          right: 14,
        }}
      >
        <Paper
          sx={{
            padding: "4px",
            display: "flex",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: "2",
          }}
        >
          {!favorite ? (
            <FavoriteBorderIcon
              color="action"
              fontSize="small"
              onClick={() => {
                setFavoriteProductsList([...favoriteProductsList, product]);
                setFavorite(true);
              }}
            />
          ) : (
            <FavoriteSharpIcon
              color="error"
              fontSize="small"
              onClick={() => {
                setFavoriteProductsList(
                  favoriteProductsList.filter((pr) => pr.id !== product.id)
                );
                setFavorite(false);
              }}
            />
          )}
        </Paper>
      </Box>
    </Grid>
  );
};

export default ProductCard;
