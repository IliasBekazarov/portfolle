import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Students from "./Pages/Students/Students";
import "./App.css";

const App = () => {
  return (
    <>
      <div style={{ margin: 0, padding: 0 }}>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
