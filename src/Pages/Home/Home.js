// Home.js
import React, { useEffect } from "react";

import "../Home/Home.css";
import moduleName from "./ilas1.jpg";

import logo from "./ilias9.png";
import AOS from "aos";

import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div class="container">
        <div class="hero-pic">
          <img src={moduleName} alt="profile pic"  data-aos="fade-right"/>
        </div>
        <div class="hero-text" data-aos="fade-left">
          <h5>
            Hi I'm <span class="input">Web Developer</span>
          </h5>
          <h1>Ilias Bekazarov</h1>
          <p>
            {" "}
            I'm passionate about building intuitive, user-friendly tools that
            make life easier. From simple generators to fully interactive
            applications and I aim to create digital solutions that people find
            both functional and enjoyable. My approach combines clean design
            with practical functionality, ensuring that every tool I build is
            accessible, responsive, and engaging. I enjoy digging into user
            needs, identifying pain points, and then transforming complex
            problems into simple, efficient solutions. Whether it’s an automated
            generator for productivity or a full-featured application with
            interactive features, my goal is to streamline everyday tasks,
            saving users time and effort while enhancing their experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
