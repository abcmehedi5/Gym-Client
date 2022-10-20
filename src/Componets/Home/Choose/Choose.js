import React from 'react';
import img1 from '../../../Image/Group 87.png'
import img2 from '../../../Image/Group 88.png'
import img3 from '../../../Image/gift-2.png'
import ChooseDetails from './ChooseDetails/ChooseDetails';
import './Choose.css'
const chooseData = [
    {
        title: 'FREE FITNESS TRENING',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente asperiores cum voluptates ',
        img: img1,
    },

    {
        title: 'TONS OF CARDIO $ STRENGTH',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente asperiores cum voluptates',
        img: img2,
    },

    {
        title: 'NO COMMITMENT MEMBARSHIP',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente asperiores cum voluptates',
        img: img3
    },
]
const Choose = () => {
    return (
        <div className='container mb-5'>
            <h1 className='text-center mb-5 myFont'><span style={{ color: '#FCD842' }}>WHY</span> CHOOSE US</h1>

            <div className="row">
                {
                    chooseData.map(Choose => <ChooseDetails Choose={Choose} key={Choose.title}></ChooseDetails>)
                }
            </div>
        </div>
    );
};

export default Choose;