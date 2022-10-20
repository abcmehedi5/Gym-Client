import React, { useState } from 'react';

const ParsonalDetails = ({ handleProgressbar,handleChange }) => {
    return (

        <div className='formContainer'>
            <form onSubmit={handleProgressbar}>
                <div className="inputMainContainer row">
                    {/* left group */}
                    <div className="leftInput col-md-6">

                        <div class="mb-3">
                            <label for="fastName" className="form-label">Fast Name</label>
                            <input type="text" name='fastName' onChange={handleChange} required className="form-control p-2" id="name" />
                        </div>

                        <div class="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" name='eamil' onChange={handleChange} required className="form-control p-2" id="eamil" />
                        </div>

                        <div class="mb-3">
                            <label for="birthday" className="form-label">Date of Birth</label>
                            <input type="date" name='birthday' onChange={handleChange} required className="form-control p-2" id="birthday" />
                        </div>

                        <div class="mb-3">
                            <label for="address" className="form-label">Address Line1:</label>
                            <input type="text" name='address' onChange={handleChange} required className="form-control p-2" id="address" />
                        </div>

                        <div class="mb-3">
                            <label for="city" className="form-label">City</label>
                            <input type="text" name='city' onChange={handleChange} required className="form-control p-2" id="city" />
                        </div>


                    </div>
                    {/* right group */}

                    <div className="rightInput col-md-6">
                        <div class="mb-3">
                            <label for="lastName" className="form-label">Last Name</label>
                            <input type="text" name='lastName' onChange={handleChange} required className="form-control p-2" id="lastName" />
                        </div>

                        <div class="mb-3">
                            <label for="number" className="form-label">Mobile Number</label>
                            <input type="number" name='mobileNumber' onChange={handleChange} required className="form-control p-2" id="eamil" />
                        </div>

                        <div class="mb-3">
                            <label for="birthday" className="form-label">Gender</label>
                            <input type="text" name='gender' onChange={handleChange} required className="form-control p-2" id="gender" />
                        </div>

                        <div class="mb-3">
                            <label for="country" className="form-label">Country/Region</label>
                            <input type="text" name='country' onChange={handleChange} required className="form-control p-2" id="country" />
                        </div>

                        <div class="mb-3">
                            <label for="postcode" className="form-label">Postcode</label>
                            <input type="number" name='postcode'  onChange={handleChange} required className="form-control p-2" id="postcode" />
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn-brand' onChange={handleChange} required onClick={() => { handleProgressbar() }}>Next</button>
            </form>
        </div>

    );
};

export default ParsonalDetails;