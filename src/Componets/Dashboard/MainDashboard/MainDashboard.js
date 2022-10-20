import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Chart } from "react-google-charts";
import './MainDashboard.css'
const MainDashboard = () => {
    return (
        <div className="row ">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">

                <h5 className='mt-4'>Dashboard</h5>
                <div className="row container">
                    <div className="col-md-4">
                        <div style={{ backgroundColor: '#F1536E', height: '80px', borderRadius: '5px', }} className=' d-flex  justify-content-center align-items-center text-white lh-sm p-2 pe-4 ps-4 mt-4'>
                            <h1 className='me-3'>12</h1>
                            <p>Total <br /> Class</p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div style={{ backgroundColor: '#00C689', height: '80px', borderRadius: '5px', }} className=' d-flex  justify-content-center align-items-center text-white lh-sm p-2 pe-4 ps-4 mt-4'>
                            <h1 className='me-3'>50</h1>
                            <p>Total<br />Paid Custoamr</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ backgroundColor: '#FDA006', height: '80px', borderRadius: '5px', }} className=' d-flex  justify-content-center align-items-center text-white lh-sm p-2 pe-4 ps-4 mt-4'>
                            <h1 className='me-3'>305</h1>
                            <p>Total <br />Users</p>
                        </div>
                    </div>
                </div>

                <h4 className='text-brand mt-5'></h4>
                <h4 className=' mt-3 mb-3 myFont'>POWER X <span style={{ color: 'orange' }}>Analysis</span></h4>



                {/* chart google  */}
                <Chart
                    chartType="ColumnChart"
                    data={[
                        ['membar', 'Visitations', { role: 'style' }],
                        ['User', 350, 'color: orange'],
                        ['Paid Users', 102, 'color: blue'],
                        ['Paid Users', 200, 'color: #76A7FA'],
                        ['Paid Users', 12, 'color: gray'],
                        ['Paid Users', 302, 'color: #171C2A'],
                        ['Paid Users', 102, 'color: #76A7FA'],
                        ['Paid Users', 102, 'color: red'],
                    ]}
                    width="100%"
                    height="420px"
                    legendToggle
                />
                <Chart
                    chartType="PieChart"
                    data={[
                        ['member', 'Mhl'],
                        ['Total Users', 350],
                        ['Total Paid Customar', 50],
                        ['Spain', 44.4],
                        ['USA', 23.9],
                        ['Argentina', 14.5]
                    ]}
                    width="100%"
                    height="420px"
                    legendToggle
                />

            </div>
        </div>
    );
};

export default MainDashboard;