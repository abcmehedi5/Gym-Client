import React from "react";
import about from "../../../Image/about us.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container aboutContainer pb-5">
      <div className="row">
        <div
          className="col-md-6"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-duration="2000"
        >
          <img className="img-fluid" src={about} alt="" />
        </div>
        <div
          className="col-md-6"
          data-aos="zoom-out-right"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-duration="1000"
        >
          <h1 className="aboutus myFont">ABOUT US</h1>
          <h1 className="myFont">
            WE ARE HERO TO DREAM! <br />
            <span style={{ color: "#FCCE51" }}>OUR TEAM IS HERE SURVE YOU</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            facere ea in officia dicta minima, rerum corrupti at aliquid
            obcaecati impedit tempora, mollitia temporibus doloremque quis
            aperiam! Voluptatem necessitatibus dolorum officiis eos modi, fugit
            suscipit dolores ullam vitae magnam
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
