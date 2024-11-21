// About.js
import React from "react";
import "../About/About.css";
import a11 from "../About/ilias11.jpeg";
import a12 from "../About/ilias12.png";
import a13 from "../About/ilias13.png";

const About = () => {
  return (
    <>
      <div class="container1">
        <div class="hero-pic1">
          <img src={a11} alt="profile pic" />
        </div>
        <div class="hero-text1">
          <h5>
            <span class="input">Childhood Life</span>
          </h5>
          <h1></h1>
          <p>
            My childhood was peaceful but filled with interesting experiences.
            My parents instilled in me the value of a good education and always
            emphasized the importance of learning. I tried to excel in school,
            always seeking to learn something new in every subject. I
            particularly enjoyed subjects like mathematics, literature, and
            history, which played a big role in shaping my worldview.
            Additionally, during my childhood, I developed a love for sports and
            the arts, participating in various clubs and activities. Spending
            time with friends was also invaluable to me, as we grew up together
            and shared countless experiences, which helped shape my early years.
          </p>
        </div>
      </div>
      <div class="container1">
        <div class="hero-pic1">
          <img src={a13} alt="profile pic" />
        </div>
        <div class="hero-text1">
          <h5>
            <span class="input">Current Life</span>
          </h5>
          <h1></h1>
          <p>
            Currently, I am studying at a university. This period of my life
            demands a lot of responsibility but is also incredibly rewarding.
            University has opened up new opportunities for me and broadened my
            outlook on the future. I am studying a wide range of subjects,
            gaining deep knowledge in areas such as programming and data
            analysis, which are particularly intriguing to me. Furthermore, I am
            deeply interested in current technological trends and am gaining
            valuable experience in understanding how they shape our lives.
            Outside of my studies, I try to dedicate my free time to personal
            development, working on private projects, and participating in
            community activities to gain more hands-on experience.
          </p>
        </div>
      </div>{" "}
      <div class="container1">
        <div class="hero-pic1">
          <img src={a12} alt="profile pic" />
        </div>
        <div class="hero-text1">
          <h5>
            <span class="input">Future Plans and Goals</span>
          </h5>
          <h1></h1>
          <p>
            In the future, I aim to apply my knowledge and experience to achieve
            significant success in my professional career. My goal is to become
            an expert in programming and data-related fields, conducting
            in-depth research and bringing new innovations into these areas.
            Additionally, I have a strong desire to venture into
            entrepreneurship, planning to start my own business in the field of
            information technology, where I can implement my ideas and projects.
            Beyond that, I hope to continue developing myself holistically by
            traveling the world and immersing myself in new cultures and
            experiences. I believe that all of this will greatly contribute to
            my personal and professional growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
