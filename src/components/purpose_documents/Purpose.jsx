import React, { useState } from 'react';
import Heading from '../Heading';
import Buisness from '../purposes/buisness/Buisness';
import Cargo from '../purposes/cargo/Cargo';
import Medical from '../purposes/medical/Medical';
import Overfly from '../purposes/overfly/Overfly';
import Technical from '../purposes/technical/Technical';
import Training from '../purposes/training/Training';
import './Purpose.css'
import form from '../../form.json'

function Purpose() {

    const Purpose_heading = 'Purpose and Documents'
    const [purpose, setPurpose] = useState('')
    const [page, setPage] = useState([])

    const handleChange = (e) => {
        setPurpose(e.target.value)
        console.log(purpose)
        if (purpose === 'Overfly') {
            setPage(form.overfly)
        }
        if (purpose === 'Business') {
            setPage(form.buisness)
        }
        if (purpose === 'Cargo') {
            setPage(form.cargo)
        }
        if (purpose === 'Technical') {
            return <Technical />
        }
        if (purpose === 'Medical') {
            return <Medical />
        }
        if (purpose === 'Training') {
            return <Training />
        }
    }

    //const purpose_handle = () => { }

    return (
        <div className='component'>
            <div>
                <Heading heading={Purpose_heading} />
            </div>
            <div>
                <div>
                    <label style={{ color: '#030303' }}>Purpose</label><br />
                    <select name="" id="" value={purpose} onChange={(e) => handleChange(e)} className='purpose'>
                        <option value="Select Purpose">Select Purpose</option>
                        <option value="Overfly">Overfly</option>
                        <option value="Business">Business</option>
                        <option value="Cargo">Cargo</option>
                        <option value="Technical">Technical</option>
                        <option value="Medical">Medical</option>
                        <option value="Training">Training</option>
                    </select>
                </div>

                <div>
                    {page&&page.map((obj) => (
                        <div>
                            <label >{obj.label}</label><br />
                            <input type={obj.type} name={obj.key}  onChange={(e) => handleChange(e)} /><br />
                            {/*<label className='error'>{error[obj.key]}</label>*/}
                        </div>

                    ))
                    }

                </div>
                <button className='next2'>Next <i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default Purpose;