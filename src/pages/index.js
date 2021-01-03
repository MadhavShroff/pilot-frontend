import React from "react";
import { Helmet } from "react-helmet";
import "./index.css";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";

export default ({ children }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Navbar />
      <Carousel />
    </div>
  );
}
