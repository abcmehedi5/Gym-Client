import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='row'>
           <div className="col-md-3 ">
                <Sidebar></Sidebar>
           </div>
        </div>
    );
};

export default Dashboard;