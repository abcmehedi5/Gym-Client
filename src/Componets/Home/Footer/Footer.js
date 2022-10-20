import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footerContainer'>
            <div className='container text-white'>
                <div className="row">
                    <div className="col-md-3">
                        <h4 className='logo'>POWER <span style={{ color: '#FCD842' }}>X</span></h4>
                    </div>

                    <div className="col-md-2">
                        <h6 className='mb-4'>Need Help? </h6>
                        <li>Help Center</li>
                        <li>Email Support</li>
                        <li>Live Chat</li>
                        <li>Gift Certificates</li>
                        <li>Feedback</li>
                    </div>

                    <div className="col-md-2">
                        <h6 className='mb-4'>Digital Resources </h6>
                        <li>Articles</li>
                        <li>E-books</li>
                       
                    </div>

                    <div className="col-md-2">
                        <h6 className='mb-4'>Connect with us </h6>
                        <span><i class="fa-brands fs-5 m-1 fa-youtube"></i></span>
                        <span><i class="fa-brands fs-5 m-1 fa-square-facebook"></i></span>
                        <span><i class="fa-brands fs-5 m-1 fa-twitter"></i></span>
                        <span><i class="fa-brands fs-5 m-1 fa-instagram"></i></span>
                        <span><i class="fa-brands fs-5 m-1 fa-whatsapp"></i></span>
                        <li>Forum</li>
                    </div>

                    <div className="col-md-3">
                        <h6 className='mb-4'>Join our Newslatter </h6>
                        <p>Get exclusive news, features , and  update from the sherdder Weight Loss Academy</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <p className='text-center text-white'>2022 Digital Mtv. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;