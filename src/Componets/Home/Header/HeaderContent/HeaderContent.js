import React from "react";
import { Link } from "react-router-dom";
import "./HeaderContent.css";
const HeaderContent = () => {
  return (
    <div className="container">
      <div className="row HeaderContent">
        <div
          className="col-md-9 headerText"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1 className="myFont">
            THE BEST FITNESS <br /> STUDIO IN TOWN
          </h1>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            ipsum, debitis, ex blanditiis illum nesciunt placeat eos
            necessitatibus odit totam nihil accusantium pariatur sapiente enim!
          </small>{" "}
          <br />
          <Link to="/pricing">
            <button className="btn-brand mt-5">JOIN US</button>
          </Link>
        </div>

        <div className="col-md-3">
          <h1 style={{ fontSize: "60px" }}>
            <i class="fa-regular fa-circle-play text-white"></i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
