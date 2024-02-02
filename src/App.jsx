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
        <div className="card--container">
          <Info />
          <div className="main--container">
            <About />
            <Interests />
            <div className="footer--container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
