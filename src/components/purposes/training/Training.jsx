import React from 'react';

function Training() {
    return (
        <div className='component'>
            <div className='left'>
                <div>
                    <label >Complete ATS Route</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label >Number of Touch & Go</label><br />
                    <input type="text" />
                </div>
            </div>

            <div className='right'>
                <div>
                    <label >Time of Training</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label style={{ width: 250 }}>Ground Handling Confirmation</label><br />
                    <input type="text" />
                </div>
            </div>

        </div>
    );
}

export default Training;