import React from "react";
import "./WorkDetails.css";
const WorkDetails = ({ work }) => {
  return (
    <div
      className="col-md-4"
      data-aos="flip-left"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-duration="1000"
    >
      <div class="card">
        <div className="priceBg">
          <img src={work.bgImg} class="card-img-top cardImg" />
        </div>
        <div class="card-body cardBody">
          <img src={work.img} alt="" />
          <h1 class="card-title mt-5 myFont">{work.title}</h1>
          <p class="card-text">{work.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
