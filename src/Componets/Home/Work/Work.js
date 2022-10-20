import React from 'react';
import card1 from '../../../Image/card icon.png'
import card2 from '../../../Image/card icon1.png'
import card3 from '../../../Image/card icon3.png'
import cardBg1 from '.././../../Image/card1.jpg'
import cardBg2 from '.././../../Image/card2.jpg'
import cardBg3 from '.././../../Image/card3.jpg'
import WorkDetails from './WorkDetails/WorkDetails';
import './Work.css'
const workData = [
    {
        title: 'PROGRESSION',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente asperiores cum voluptate laudantium nesciunt eius dolores totam aliqu',
        img: card1,
        bgImg: cardBg1
    },

    {
        title: 'WORKOUT',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente asperiores cum voluptate laudantium nesciunt eius dolores totam aliqu',
        img: card2,
        bgImg: cardBg2
    },

    {
        title: 'NUTRITION',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente asperiores cum voluptate laudantium nesciunt eius dolores totam aliqu',
        img: card3,
        bgImg: cardBg3
    },
]
const Work = () => {
    return (
        <div className='container  mb-5 pb-5'>
            <div className="row d-flex justify-content-center work  mt-5 pt-5 ">
                {
                    workData.map(work => <WorkDetails work={work} key={work.title}></WorkDetails>)
                }
            </div>
        </div>
    );
};

export default Work;