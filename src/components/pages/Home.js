import React from "react";
import Homes from "../houses/Homes";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Homes />
      <Footer />
    </div>
  );
};

export default Home;
