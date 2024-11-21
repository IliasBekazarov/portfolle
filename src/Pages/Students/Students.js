import React, { useEffect } from "react";
import aa1 from "./RSP.png";
import aa2 from "./random.png";
import aa3 from "./todo.png";

import "../Students/Student.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Students = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="content0">
        <div className="content1">
          <div className="textLI">Library section</div>
        </div>
      </div>
      <div className="content0_0">
        <div className="content1_1">
          <a href="https://iliasbekazarov.github.io/Rock-Paper-Scissors">
            <img src={aa1} />
          </a>
          <div className="text1"></div>
        </div>
        <div className="content1_1">
          <a href="https://iliasbekazarov.github.io/random_nam./">
            <img src={aa2} />
          </a>
          <div className="text1"></div>
        </div>
        <div className="content1_1">
          <a href="https://iliasbekazarov.github.io/loto-list1/">
          <img src={aa3} />
          </a>
          <div className="text1"></div>
        </div>
      </div>
    
    </>
  );
};

export default Students;
