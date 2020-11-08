import React from "react";
import "./About.css";
import Iframe from "react-iframe";

const About = () => {
  return (
    <div className="about">
      <div className="about-info">
        <h1>WHAT IS KRAZY IT?</h1>
        <p>
          Krazy IT is an Australian based company that continually exceeds our
          clients’ expectations, with our uniquely designed services. <br />
          <br />
          Before providing a quote, we carefully evaluate your requirements,
          analysing and working together with you, to outline step by step
          checkpoints for developing exactly what you need. <br /> <br />
          At Krazy IT our team has extensive experience, developed over two
          decades, so no matter what size your enterprise is, whether you are
          just starting out or have already blossomed into a well established
          company, we are capable of suiting all your IT needs. <br /> <br />
          Whether it’s creating a completely new business IT infrastructure or
          building your business from scratch, we’ve got you covered.
        </p>
        <button>Our Expertise</button>
      </div>
      <div className="customer-story">
        <h1>Krazy Customer Stories</h1>
        <p>
          Learn about us from our Krazy beautiful customers around Australia.
        </p>
        <Iframe
          url="https://www.youtube.com/embed/E7wJTI-1dvQ"
          width="450px"
          height="250px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/E7wJTI-1dvQ"
          width="450px"
          height="250px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    </div>
  );
};

export default About;
