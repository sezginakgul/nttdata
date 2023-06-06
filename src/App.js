import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <ImageCarousel />

      <Footer />
    </div>
  );
}

export default App;
