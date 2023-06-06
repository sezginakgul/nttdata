import "./App.css";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useProductsCall from "./hooks/useProductsCall";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";

function App() {
  const { getProducts } = useProductsCall();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={80} />
        </Box>
      )}
      {!loading && !error && (
        <>
          {/* Navbar */}
          <Navbar />

          {/* Carousel */}
          <ImageCarousel />

          {/* Products */}
          <Products products={products} />

          {/* Footer */}
          <Footer />
        </>
      )}
      {error && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Typography variant="h3" component="div">
            404 Not Found!
          </Typography>
          <Typography variant="subtitle1" component="div" color="primary">
            Please reload page...
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default App;
