import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import Grid from "@mui/material/Grid";
import PaginationComponent from "../components/Pagination";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const [favoriteProductsList, setFavoriteProductsList] = useState([]);
  const [more, setMore] = useState(4);
  const [xsVisibleProduct, setXsVisibleProduct] = useState(1);
  const [showFavoriteProducts, setShowFavoriteProducts] = useState(false);

  return (
    <Box>
      <Container>
        <Box mt={4} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: "bolder",
              fontSize: { xs: "16px", md: "24px", lg: "32px" },
            }}
          >
            Content title goes here
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {favoriteProductsList.length > 0 ? (
              <FavoriteSharpIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
            <Typography>{favoriteProductsList.length} Ürün</Typography>

            {!showFavoriteProducts ? (
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#0059BC",
                  textTransform: "capitalize",
                }}
                onClick={() => setShowFavoriteProducts(true)}
                disabled={favoriteProductsList.length <= 0}
              >
                Beğenilenler
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#0059BC",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  setShowFavoriteProducts(false);
                  setXsVisibleProduct(1);
                }}
              >
                Tüm Ürünler
              </Button>
            )}
          </Box>
        </Box>
        <Box my={4} sx={{ gap: "15px" }}>
          {showFavoriteProducts && (
            <Grid container spacing={1}>
              {favoriteProductsList.map((product, i) => (
                <ProductCard
                  key={i}
                  product={product}
                  favoriteProductsList={favoriteProductsList}
                  setFavoriteProductsList={setFavoriteProductsList}
                />
              ))}
            </Grid>
          )}

          {!showFavoriteProducts && (
            <>
              <Grid
                container
                spacing={1}
                sx={{ display: { xs: "none", md: "inline-flex" } }}
              >
                {products.slice(0, more).map((product, i) => (
                  <ProductCard
                    key={i}
                    product={product}
                    favoriteProductsList={favoriteProductsList}
                    setFavoriteProductsList={setFavoriteProductsList}
                  />
                ))}
              </Grid>
            </>
          )}
          {!showFavoriteProducts && (
            <Grid
              container
              spacing={1}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              {products
                .slice(xsVisibleProduct - 1, xsVisibleProduct)
                .map((product, i) => (
                  <ProductCard
                    key={i}
                    product={product}
                    favoriteProductsList={favoriteProductsList}
                    setFavoriteProductsList={setFavoriteProductsList}
                  />
                ))}
            </Grid>
          )}
        </Box>
        {more < products.length && !showFavoriteProducts && (
          <Box my={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              endIcon={<EastIcon />}
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#0059BC",
                display: { xs: "none", md: "inline-flex" },
              }}
              onClick={() => setMore(more + 4)}
            >
              Daha Fazla
            </Button>
          </Box>
        )}

        {/* XS PRODUCT PAGINATION */}
        {!showFavoriteProducts && (
          <Box mb={6} sx={{ display: { md: "none" } }}>
            <PaginationComponent
              productLength={products.length}
              setXsVisibleProduct={setXsVisibleProduct}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Products;
