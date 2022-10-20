import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Peyment = ({ handleProgressbar }) => {
    const[product] = useState({
        name:'Body bulder',
        price:200,
        description:'this is a body bulder description'
    })
    return (
        <div className='text-center'>
            <StripeCheckout
            
                // token={this.onToken}
                stripeKey="pk_test_51LrasiDnxedxlPaKkgGj59YtqrCwuWdd5BwzKBRq6DtJFHxnbZKYMlT2VHuyDaRNNQVCOY0EfCxE1KYD5lWM9fkF00gaWCDh1j"
                amount={product.price*100}
                name={product.name}
                billingAddress
                shippingAddress
            />
            {/* <button className='btn-brand mt-5' required onClick={() => { handleProgressbar() }}>Next</button> */}
        </div>
    );
};

export default Peyment;