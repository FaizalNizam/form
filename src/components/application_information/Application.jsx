import React, { useState } from 'react';
import Heading from '../Heading';
import './Application.css'
import { useDispatch, useSelector } from 'react-redux'
import { appData } from '../../redux/Action';

function Application() {

    const [error, setError] = useState({})

    const dispatch = useDispatch()
    const { appdata } = useSelector(state => state)
    console.log(appdata);

    const application_heading = 'Application Information'

    const handleChange = (e) => {
        dispatch(appData({ ...appdata, [e.target.name]: e.target.value }))
        setError({ ...error, [e.target.name]: '' })
    }

    const handleClick = () => {
        let error = formValidation()
        console.log(error);
    }

    const formValidation = () => {
        let error = {}

        if (!appdata.name) {
            error.name = 'Mandatory Field'
        }
        if (!appdata.city) {
            error.city = 'Mandatory Field'
        }
        if (!appdata.mobile) {
            error.mobile = 'Mandatory Field'
        }
        if (!appdata.pin) {
            error.pin = 'Mandatory Field'
        }
        if (!appdata.email) {
            error.email = 'Mandatory Field'
        }
        if (!appdata.address) {
            error.address = 'Mandatory Field'
        }
        if (!appdata.country) {
            error.country = 'Mandatory Field'
        }

        setError(error)
        return error
    }

    return (
        <div>
            <div>
                <Heading heading={application_heading} />
            </div>
            <div>
                <div className='left'>
                    <div>
                        <label >Name</label><br />
                        <input type="text" name='name' value={appdata.name} onChange={(e) => handleChange(e)} /><br />
                        <label className='error'>{error.name}</label>
                    </div>
                    <div>
                        <label >City</label><br />
                        <input type="text" name='city' value={appdata.city} onChange={(e) => handleChange(e)} /><br />
                        <label className='error'>{error.city}</label>
                    </div>
                    <div>
                        <label >Mobile number</label><br />
                        <input type="text" name='mobile' value={appdata.mobile} onChange={(e) => handleChange(e)} /><br />
                        <label className='error'>{error.mobile}</label>
                    </div>
                    <div>
                        <label >Pin</label><br />
                        <input type="text" name='pin' value={appdata.pin} onChange={(e) => handleChange(e)} /><br />
                        <label className='error'>{error.pin}</label>
                    </div>
                </div>

                <div className='right'>
                    <div>
                        <label >Email Address</label><br />
                        <input type="text" name='email' value={appdata.email} onChange={(e) => handleChange(e)} /><br />
                        <label className='error'>{error.email}</label>
                    </div>
                    <div>
                        <label >Country</label><br />
                        <input type="text" name='country' value={appdata.country} onChange={(e) => handleChange(e)} /> <br />
                        <label className='error'>{error.country}</label>
                    </div>
                    <div>
                        <label >Address</label><br />
                        <input type="text" name='address' value={appdata.address} onChange={(e) => handleChange(e)} /><br />
                        <label className='error' >{error.address}</label>
                    </div>
                </div>

            </div>
            <div style={{marginTop:80}}>
                <button className='next' onClick={handleClick}>Next <i className="bi bi-arrow-right"></i></button>
            </div>

        </div>
    )
}

export default Application;