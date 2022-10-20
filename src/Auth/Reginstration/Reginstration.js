import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../Image/login.png'
import swal from 'sweetalert'
import Navbar from '../../Componets/Home/Header/Navbar/Navbar';
const Reginstration = () => {

    // state
    const [newUser, setnewUser] = useState({
        signup: false,
        login: true
    })

    // user information state
    const [user, setUser] = useState({
        // email: '',
        // password: '',
        // name: '',
        // phone: ''
    })

    // file upload information
    const [file, setFile] = useState(null);

    // button spinner state
    const [spinner, setSpinner] = useState(false);
    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        setSpinner(true)
        // user new account create start
        if (user.email && user.password && user.name && user.phone) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('name', user.name);
            formData.append('email', user.email);
            formData.append('phone', user.phone);
            formData.append('password', user.password);
            formData.append('create', new Date());

            fetch('http://localhost:5000/auth/registration', {
                method: 'POST',
                body: formData
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        setSpinner(false)
                        swal({
                            title: "Worng..",
                            text: `${data.error}`,
                            icon: "warning",
                            dangerMode: true,
                            button: "OK",
                        });
                    } else {
                        setSpinner(false)
                        swal({
                            title: "Good job!",
                            text: `${data.message}`,
                            icon: "success",
                            button: "OK",
                        });
                    }
                })
        }
    }

    // handle change password field 
    const handleChange = (e) => {
        let fieldvalid;
        if (e.target.name == 'email') {
            let isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            fieldvalid = isEmailValid;
        }

        if (e.target.name == 'password') {
            let passwordValid = e.target.value.length >= 6;
            fieldvalid = passwordValid;
        }

        if (e.target.name == 'name') {
            let nameValid = e.target.value.length >= 3;
            fieldvalid = nameValid;

        }
        if (e.target.name == 'phone') {
            let phoneValid = e.target.value //.length >= 11;
            fieldvalid = phoneValid;

        }
        if (fieldvalid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    // handle file change 
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <section style={{ background: '#323046', color: 'white' }}>
            <Navbar />



            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <h4 className='text-center mb-4'><i style={{ fontSize: '40px', marginLeft: '10px' }} class="fa-solid fa-user-plus"></i> <br /> Registration</h4>
                        <form onSubmit={handleSubmit}>

                            <input className='form-control mb-4 p-3 ' type="text" required name='name' onChange={handleChange} placeholder='Full Name' />
                            <input className='form-control mb-4 p-3 ' type="text" required name='email' onChange={handleChange} placeholder='Your Email' />
                            <input className='form-control mb-4 p-3 ' name='phone' required onChange={handleChange} placeholder='Phone Number' />
                            <input className='form-control mb-4 p-3 ' type="password" required name='password' onChange={handleChange} placeholder='Create Password' />
                            <input className='form-control mb-4 p-3' style={{ width: '100%' }} type="file" onChange={handleFileChange} />

                            {/* <small > <Link style={{ color: 'orange' }}>Forget Your Password</Link></small> <br /> */}

                            <button style={{ width: '100%', background: '#36BAFF', border: 'none' }} className=' btn mb-2 mt-3' type='submit'> {spinner &&  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} Registration</button> <br />
                            <p className='text-center'> <Link to='/login' style={{ color: 'orange', fontSize: '16px' }}>Already have an account ? login</Link></p>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <img className='img-fluid' src={login} alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Reginstration;