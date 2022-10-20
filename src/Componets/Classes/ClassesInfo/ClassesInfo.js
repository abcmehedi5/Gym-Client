import React, { useEffect, useState } from 'react';
import './ClassesInfo.css'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Home/Footer/Footer';
import Head from '../../Shared/Head';
const ClassesInfo = () => {
    const { classId } = useParams()
    const [classDetails, setClassDetails] = useState([])
    const filterData = classDetails.filter(fl => fl._id === classId);
    useEffect(() => {
        fetch('http://localhost:5000/dashboard/classget')
            .then(res => res.json())
            .then(data => setClassDetails(data))
    }, [])
    return (
        <div>
            <div className='classHead mb-5'>
                <Head />
                {
                    filterData.map(data => <h1 className='title myFont position-absolute top-50 start-50 translate-middle'>{data.title}</h1>)
                }
            </div>
            <div className='container mb-5'>
                <div className="row">
                    {
                        filterData.map(data => <div className="col-md-6 classesInfo">
                            <img className='img-fluid' src={`http://localhost:5000/file/${data.img}`} alt="" />
                            <p className='mt-5'>{data.description}</p>
                        </div>)
                    }
                    <div className="col-md-6">
                        <h1 className='scheduletitle myFont mb-5'><span style={{ color: '#FDE47F' }}>CLASS</span> SCHEDULE</h1>
                        <table className='table text-center'>
                            <thead>
                                <tr>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>monday: '8:00 AM - 9:00 AM'</td>
                                    <td>tuesday: '8:00 AM - 9:00 AM'</td>
                                    <td>wednesday: '8:00 AM - 9:00 AM'</td>
                                    <td>Thursday: '8:00 AM - 9:00 AM'</td>
                                    <td>friday: '8:00 AM - 9:00 AM</td>
                                    <td>saturday: '8:00 AM - 9:00 AM</td>
                                </tr>
                            </tbody>
                        </table>




                    </div>


                    <div className="col-md-6 ">
                        <ul className='classesList'>
                            <li> <i class="fa-solid fa-square-check"></i> Having Slimmer Shapely Thigh</li>
                            <li><i class="fa-solid fa-square-check"></i> Getting Stronger Body</li>
                            <li><i class="fa-solid fa-square-check"></i> Increased Metabolism</li>
                            <li><i class="fa-solid fa-square-check"></i> Increased Muscular Endurance</li>
                            <li><i class="fa-solid fa-square-check"></i> Maximum Results in Less Time</li>
                            <li><i class="fa-solid fa-square-check"></i> Firm Hips and Tummy</li>
                        </ul>
                    </div>
                    <div className="col-md-6 joinUs">
                        <Link to='/pricing'><button className='btn-brand btns'>JOIN US</button></Link>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default ClassesInfo;