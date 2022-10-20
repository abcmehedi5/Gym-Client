import React from 'react';
import './Loading.css'
import { FidgetSpinner } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
    return (
        <>
            <h6 className='text-center mt-5'>Loading....</h6>
            <div className='spin'>
                <FidgetSpinner
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    ballColors={['#ff0000', '#00ff00', '#0000ff']}
                    backgroundColor="#F4442E"
                />
            </div>
        </>
    );
};

export default Loading;