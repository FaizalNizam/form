import React, { useState } from 'react';
import form from '../../form.json'
import '../form/form.css'
import { useDispatch, useSelector } from 'react-redux'
import { appData } from '../../redux/Action';
import Summary from '../summary/Summary';


function Form() {

    const dispatch = useDispatch()
    const { appdata } = useSelector(state => state)
    const [error, setError] = useState({})
    const [page, setPage] = useState('application')
    const [purpose, setPurpose] = useState('')


    const handleChange = (e) => {
        dispatch(appData({ ...appdata, [e.target.name]: e.target.value }))
        setError({ ...error, [e.target.name]: '' })
        console.log(appdata)
    }

    const purposeChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'Overfly') {
            setPurpose(form.Overfly)
        }
        if (e.target.value === 'Business') {
            setPurpose(form.Business)
        }
        if (e.target.value === 'Cargo') {
            setPurpose(form.Cargo)
        }
        if (e.target.value === 'Technical') {
            setPurpose(form.Technical)
        }
        if (e.target.value === 'Medical') {
            setPurpose(form.Medical)
        }
        if (e.target.value === 'Training') {
            setPurpose(form.Training)
        }
    }


    const render = () => {

        switch (page) {
            case 'application':
                console.log(page);
                return form.appdata.map((obj) => (
                    <div>
                        <label >{obj.label}</label><br />
                        <input type={obj.type} name={obj.key} onChange={(e) => handleChange(e)} /><br />
                        <label style={{color:'red'}}>{error[obj.key]}</label>
                    </div>
                ))

            case 'general':

                return form.generaldata.map((obj) => (
                    <div>
                        <label >{obj.label}</label><br />
                        <input type={obj.type} name={obj.key} onChange={(e) => handleChange(e)} /><br />
                        <label style={{color:'red'}}>{error[obj.key]}</label>
                    </div>
                ))

            case 'purpose':

                return <div>
                    <select onChange={(e) => purposeChange(e)} className='purpose'>
                        <option value="Select Purpose">Select Purpose</option>
                        <option value="Overfly">Overfly</option>
                        <option value="Business">Business</option>
                        <option value="Cargo">Cargo</option>
                        <option value="Technical">Technical</option>
                        <option value="Medical">Medical</option>
                        <option value="Training">Training</option>
                    </select>

                    {purpose && purpose.map((obj) => (
                        <div>
                            <label >{obj.label}</label><br />
                            <input type={obj.type} name={obj.key} value={appdata[obj.key]} onChange={(e) => handleChange(e)} /><br />

                        </div>

                    ))}

                </div>

            case 'additional':

                return form.additionaldata.map((obj) => (
                    <div>
                        <label >{obj.label}</label><br />
                        <input type={obj.type} name={obj.key} value={appdata[obj.key]} onChange={(e) => handleChange(e)} /><br />

                    </div>
                ))

            case 'summary':

                return <Summary />

            default: return page

        }
    }

    const onNext = () => {
        let error = {}
        switch (page) {
            case 'application':
                console.log(page)
                
                form.appdata.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                console.log(error);
            break

            case 'general':
                console.log(page)
                form.generaldata.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                console.log(error);
            break

            case 'Overfly':
                console.log(page)
                form.Overfly.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                console.log(error);
            break

            case 'Business':
                console.log(page)
                form.Business.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                console.log(error);
            break

            case 'Cargo':
                console.log(page)
                form.Cargo.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                console.log(error);
            break

            case 'Technical':
                console.log(page)
                form.Technical.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                console.log(error);
            break

            case 'Technical':
                console.log(page)
                form.Technical.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                console.log(error);
            break

        }
    }


    return (
        <div>
            <div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => setPage('application')}>Application information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => setPage('general')}>General Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => setPage('purpose')}>Purpose and Documents</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => setPage('additional')}>Additional Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => setPage('summary')}>Summary</button>
                    </li>
                </ul>
            </div>

            <div >
                {
                    render()
                }

            </div>


            <div >
                <button className='next' onClick={onNext} >Next <i className="bi bi-arrow-right"></i></button>
            </div>

        </div>
    );
}

export default Form;