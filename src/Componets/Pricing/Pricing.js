import React from 'react';
import Footer from '../Home/Footer/Footer';
import Head from '../Shared/Head';
import cardBg1 from '.././../Image/card1.jpg'
import cardBg2 from '.././../Image/card2.jpg'
import cardBg3 from '.././../Image/card3.jpg'
import PricingDetails from './PricingDetails/PricingDetails';
import './Pricing.css'
const pricingData = [
    {
        title: 'ADVANCE',
        price: 204,
        pricing: {
            list1: 'Mobile Optimized',
            list2: 'Best Hosting',
            list3: 'Free Custom',
            list4: 'Outstanding',
            list5: 'happy Customars'
        },
        bgImg: cardBg1
    },

    {
        title: 'BASIC PLAN',
        price: 204,
        pricing: {
            list1: 'Mobile Optimized',
            list2: 'Best Hosting',
            list3: 'Free Custom',
            list4: 'Outstanding',
            list5: 'happy Customars'
        },
        bgImg: cardBg2
    },

    {
        title: 'BEGINERS',
        price: 204,
        pricing: {
            list1: 'Mobile Optimized',
            list2: 'Best Hosting',
            list3: 'Free Custom',
            list4: 'Outstanding',
            list5: 'happy Customars'
        },
        bgImg: cardBg3
    },
]
const Pricing = () => {
    return (
        <div>
            <div className='classHead mb-5'>
                <Head />
                <h1 className=' title myFont position-absolute top-50 start-50 translate-middle'>PRICING PLANS</h1>
            </div>

            <div className="container">
                <div className='text-center container m-auto mb-5'>
                    <h1 className='myFont'><span style={{ color: '#FCC940' }}>CHOOSE THE OFFER</span> THAT SUITS YOU</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis optio mollitia molestiae dolor corrupti illo dolorum inventore nobis porro minus aperiam</p>
                </div>

                <div className='row pricing_Container'>
                    {
                        pricingData.map(price => <PricingDetails price={price} key={price.title}></PricingDetails>)
                    }
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Pricing;