import React from 'react';
import './summary.css'
import form from '../../form.json'
import { useSelector } from 'react-redux'

function Summary() {

    const { appdata } = useSelector(state => state)
    const data = [...form.appdata, ...form.generaldata, ...form.Overfly, ...form.Business, ...form.Cargo, ...form.Technical, ...form.Medical, ...form.Training, ...form.additionaldata ]
    console.log(data);

    return (
        <div className='component'>
            <div >
                {
                    data.map((obj) => (
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h2 style={{ color: '#0748b0', marginTop: 20 }}>{obj.heading}</h2>
                            <label style={{ width: 250 }}>{obj.label}:</label>
                            <p style={{ marginTop: 15, color: 'green' }}>{appdata[obj.key]}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Summary;