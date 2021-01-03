import React from "react";
import { Helmet } from "react-helmet";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="about" />
        <html lang="en" />
      </Helmet>
      About
    </div>
  );
}
