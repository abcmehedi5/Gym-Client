import React from 'react';

const TreningProgramsDetails = ({ trening }) => {
    return (

        <div className="col-md-6 treningCard">
            <img className='img-fluid' src={trening.img} alt="" />
            <h4 className='treningTitle myFont'>{trening.title}</h4>
        </div>

    );
};

export default TreningProgramsDetails;