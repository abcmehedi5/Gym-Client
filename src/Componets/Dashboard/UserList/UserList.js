import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './UserList.css';
const UserList = () => {
    // user all data state
    const [userData, setUserData] = useState([]);
    console.log(userData);
    // load all user data
    useEffect(() => {
        fetch('http://localhost:5000/auth/allUser')
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [])
    return (
        <div className='row'>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9 mt-4">
                <h3 className='mb-5'>Total User </h3>
                <div className='container'>
                    <table className='table table-hover' style={{ width: '100%', padding: '50px' }}>

                        <thead >
                            <tr style={{ backgroundColor: '#0FCFE8' }} className='text-secondary'>
                                <th scope="col">Photo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Password</th>
                                <th scope="col">Create Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            userData.map(user => <tbody key={user._id}>
                                <tr>
                                    <td className='classPhoto'>
                                        <img style={{width:'50px',height:'50px'}} type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" className='img-fluid' src={` http://localhost:5000/file/${user.img}`} alt="" />
                                    </td>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.password}</td>
                                    <td>{user.create}</td>


                                    <td>
                                        <button className='btn'><i className="fa-solid fa-trash fs-5"></i></button>
                                    </td>



                                </tr>

                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;