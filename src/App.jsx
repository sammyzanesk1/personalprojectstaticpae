import Footer from "./components/Footer";
import Info from "./components/Info";
import About from "./components/About";
import React from "react";
import Interests from "./components/Interests";
import { FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <>
      <div className="app--container">
        <Info />
        <div className="main--container">
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </>
  );
}
