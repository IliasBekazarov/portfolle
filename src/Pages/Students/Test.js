import React, { useState, useEffect } from "react";
import "../Students/Student.css";
import aa1 from "./RSP.png";
import aa2 from "./random.png";
import aa3 from "./todo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Test = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div class="container1">
        <div class="hero-pic1">
          <a href="https://iliasbekazarov.github.io/Rock-Paper-Scissors/">
            {" "}
            <img src={aa1} alt="profile pic" />
          </a>
        </div>
        <div class="hero-text1">
          <h5>
            <span class="input">Rock-Paper-Scissors Challenge!</span>
          </h5>
          <h1></h1>
          <p>
            As a web developer, I believe in bringing simplicity and joy to
            every user experience. This interactive Rock-Paper-Scissors game is
            more than just a game—it's a showcase of clean, functional design
            and smooth user interaction. Want to test your strategy skills?
            Challenge the computer and see if you can outsmart the algorithm!
            Ready to Play? Let's make coding fun, one move at a time.
          </p>
        </div>
      </div>
      <div class="container1">
        <div class="hero-pic1">
          <a href="https://iliasbekazarov.github.io/random_nam./">
            {" "}
            <img src={aa2} alt="profile pic" />
          </a>
        </div>
        <div class="hero-text1">
          <h5>
            <span class="input">Random Numbers Generator</span>
          </h5>
          <h1></h1>
          <p>
            Want to add a touch of randomness to your day? This tool is designed
            to quickly generate random numbers for any purpose—whether you're
            drawing a lucky number, making decisions, or running simulations. As
            a web developer, I've crafted this tool to be fast, functional, and
            fun to use. Input your range, hit generate, and let the
            unpredictability begin!
          </p>
        </div>
      </div>{" "}
      <div class="container1">
        <div class="hero-pic1">
          <a href="https://iliasbekazarov.github.io/loto-list1/">
            {" "}
            <img src={aa3} alt="profile pic" />
          </a>
        </div>
        <div class="hero-text1">
          <h5>
            <span class="input">Add Your Plans "NoteBook"</span>
          </h5>
          <h1></h1>
          <p>
            Are you a planner or an idea generator? This simple yet effective
            tool helps you keep track of your creative thoughts and plans. Just
            type in your ideas and hit "Add." Designed with ease of use in mind,
            this tool helps you organize your thoughts and make sure no great
            idea is left behind.
          </p>
        </div>
      </div>
    </>
  );
};

export default Test;
