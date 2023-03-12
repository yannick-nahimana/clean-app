import React from "react";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
