import React from "react";
import { Helmet } from "react-helmet";
import "./index.css";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import TabbedView from "../components/TabbedView/TabbedView";
import { ParallaxProvider } from 'react-scroll-parallax';
import HomePageContent from "../components/HomePageContent/HomePageContent";
import Footer from "../components/Footer/Footer";

export default ({ children }) => {
  return (
    <ParallaxProvider>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Navbar />
      <Carousel />
      <HomePageContent />
      <Footer />
    </ParallaxProvider>
  );
}
