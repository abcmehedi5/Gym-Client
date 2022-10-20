import React from 'react';
import {Link} from 'react-router-dom'
const PricingDetails = ({ price }) => {
    return (
        <div className='col-md-4'>
            <div class="card  mb-5">
                <div className='priceBg'>
                    <img src={price.bgImg} class="card-img-top pricingImg" />
                </div>
                <div class="pricingBody position-absolute top-50 start-50 translate-middle">
                    <div className='text-center myFont'>
                        <h6>BILLED MONTHLY</h6>
                        <h1 class="card-title ">{price.title}</h1>
                        <h1 className='price '>${price.price}</h1>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-square-check"></i> {price.pricing.list1}</li>
                        <li> <i class="fa-solid fa-square-check"></i> {price.pricing.list2}</li>
                        <li> <i class="fa-solid fa-square-check"></i> {price.pricing.list3}</li>
                        <li> <i class="fa-solid fa-square-check"></i> {price.pricing.list4}</li>
                        <li> <i class="fa-solid fa-square-check"></i> {price.pricing.list5}</li>
                    </ul>

                    <Link to='/membarship'><button className='btn-brand'>PURCHASE</button></Link>

                </div>


            </div>
        </div>
    );
};

export default PricingDetails;