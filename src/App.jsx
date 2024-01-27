import Footer from "./components/Footer";
import Info from "./components/Info";
import About from "./components/About";
import React from "react";
import Interests from "./components/Interests";

export default function App() {
  return (
    <>
      <div className="app--container">
        <Info />
        <div className="main--text">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </>
  );
}
