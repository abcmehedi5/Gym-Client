import React from 'react';
import HeaderContent from './HeaderContent/HeaderContent';
import Navbar from './Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <section className=' headers-container'>
            <Navbar />
            <HeaderContent />
        </section>
    );
};

export default Header;