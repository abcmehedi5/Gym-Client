import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Head from '../Shared/Head';
import ParsonalDetails from './ParsonalDetails/ParsonalDetails';
import Peyment from './Peyment/Peyment';

const Membarship = () => {
    const [pageNavigate, setNavigate] = useState(false)
    //progress bar state
    const [progress, setProgress] = useState(0);
    // submit state
    const [parsonalData, setParsonalData] = useState({})

    const handleChange = (e) => {
        const newChange = { ...parsonalData }
        newChange[e.target.name] = e.target.value
        setParsonalData(newChange);
    }

    // handle submit 
    const handleProgressbar = (e) => {
        let newProgress = { ...progress }
        e.preventDefault()
        newProgress = progress + 50;
        setProgress(newProgress)
        setNavigate(true)
    }
    return (
        <div>
            <div className='classHead'>
                <Head />
                <h1 className='title myFont position-absolute top-50 start-50 translate-middle'>YOUR GYM MEMBARSHIP</h1>
            </div>

            <div className='container  mb-5'>
                <div>
                    <div class="position-relative m-4 mb-5 mt-5">
                        <div class="progress" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: '2rem', height: '2rem' }}>1</button>
                        <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: '2rem', height: '2rem' }}>2</button>
                        <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: '2rem', height: '2rem' }}>3</button>
                    </div>


                    {
                        pageNavigate ? <Peyment handleProgressbar={handleProgressbar}></Peyment> : <ParsonalDetails handleProgressbar={handleProgressbar} handleChange={handleChange}></ParsonalDetails>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Membarship;