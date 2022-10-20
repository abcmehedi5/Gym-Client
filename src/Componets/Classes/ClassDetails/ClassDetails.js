import React, { useState } from 'react';
import './ClassDetails.css'
import { Link } from "react-router-dom";
import Loading from '../../Loading/Loading';
const ClassDetails = ({ classdata }) => {
    return (
        <div className='col-md-4'>
                    <div className='classCard card mt-5'>
                        <img className='img-fluid im' src={`http://localhost:5000/file/${classdata.img}`} alt="" />
                        <Link to={'/classDetails/' + classdata._id}><h5 className=' myFont classTitle position-absolute top-100 start-50 translate-middle'>{classdata.title} <i class="fas fa-long-arrow-right"></i></h5></Link>
                    </div>

        </div>
    );
};

export default ClassDetails;