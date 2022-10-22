import React from "react";

const ChooseDetails = ({ Choose }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="ChooseCard card"
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-duration="1000">
        <img className="w-25 m-auto m-5 mb-5" src={Choose.img} alt="" />
        <h3 className="myFont">{Choose.title}</h3>
        <p>{Choose.description}</p>
      </div>
    </div>
  );
};

export default ChooseDetails;
