import React from "react";
import "./TreaningPrograms.css";
import trening1 from "../../../Image/Training-programs.png";
import trening2 from "../../../Image/Training-programs1.jpg";
import TreningProgramsDetails from "./TreningProgramsDetails/TreningProgramsDetails";

const treningData = [
  {
    title: "YOGA TRENING SESSION",
    img: trening1,
  },

  {
    title: "CRADIO TRENING SESSION",
    img: trening2,
  },
];
const TreaningPrograms = () => {
  return (
    <div className="container mb-5">
      <h1
        className="text-center mb-5 myFont"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-duration="1000"
      >
        TRENING <span style={{ color: "#FCD842" }}>PROGRAMS</span>
      </h1>
      \
      <div
        className="row"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-duration="1000"
      >
        {treningData.map((trening) => (
          <TreningProgramsDetails
            key={trening.title}
            trening={trening}
          ></TreningProgramsDetails>
        ))}
      </div>
    </div>
  );
};

export default TreaningPrograms;
