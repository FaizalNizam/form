import React from 'react';
import './summary.css'
import form from '../../form.json'
import { useSelector } from 'react-redux'

function Summary() {

    const { appdata, generaldata, purposedata, additionaldata } = useSelector(state => state)
    const data = [...form.Overfly, ...form.Business, ...form.Cargo, ...form.Technical, ...form.Medical, ...form.Training]

    return (
        <div className='component'>
            {Object.keys(appdata).length !== 0 && <>
                <h2 style={{ color: '#0748b0', marginTop: 20 }}>Application Information</h2>
                <div >
                    {
                        form.appdata.map((obj) => (
                            appdata[obj.key] && <div style={{ display: 'flex', flexDirection: 'row' }} key={obj.key}>
                                <label style={{ width: 250 }}>{obj.label}:</label>
                                <p style={{ marginTop: 15, color: 'green' }}>{appdata[obj.key]}</p>
                            </div>
                        ))
                    }
                </div>
            </>
            }

            {Object.keys(generaldata).length !== 0 && <>
                <h2 style={{ color: '#0748b0', marginTop: 20 }}>General Information</h2>
                <div >
                    {
                        form.generaldata.map((obj) => (
                            generaldata[obj.key] && <div style={{ display: 'flex', flexDirection: 'row' }} key={obj.key}>
                                <label style={{ width: 250 }}>{obj.label}:</label>
                                <p style={{ marginTop: 15, color: 'green' }}>{generaldata[obj.key]}</p>
                            </div>
                        ))
                    }
                </div>
            </>
            }

            {Object.keys(purposedata).length !== 0 && <>
                <h2 style={{ color: '#0748b0', marginTop: 20 }}>Documents</h2>
                <div >
                    {
                        data.map((obj) => (
                            purposedata[obj.key] && <div style={{ display: 'flex', flexDirection: 'row' }} key={obj.key}>
                                <label style={{ width: 250 }}>{obj.label}:</label>
                                <a style={{ marginTop: 15, color: 'green' }}>{purposedata[obj.key]}</a>
                            </div>
                        ))
                    }
                </div>
            </>
            }

            {Object.keys(additionaldata).length !== 0 && <>
                <h2 style={{ color: '#0748b0', marginTop: 20 }}>Additional information</h2>
                <div >
                    {
                        form.additionaldata.map((obj) => (
                            additionaldata[obj.key] && <div style={{ display: 'flex', flexDirection: 'row' }} key={obj.key}>
                                <label style={{ width: 250 }}>{obj.label}:</label>
                                <p style={{ marginTop: 15, color: 'green' }}>{additionaldata[obj.key]}</p>
                            </div>
                        ))
                    }
                </div>
            </>
            }

        </div>
    );
}

export default Summary;