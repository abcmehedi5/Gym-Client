import React from 'react';
import About from './About/About';
import Choose from './Choose/Choose';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import TreaningPrograms from './TreaningPrograms/TreaningPrograms';
import Work from './Work/Work';

const Home = () => {
    return (
        <div>
            <Header/>
            <Work/>
            <About/>
            <TreaningPrograms/>
            <Choose/>
            <Footer/>
        </div>
    );
};

export default Home;