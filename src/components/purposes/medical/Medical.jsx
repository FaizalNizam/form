import React from 'react';

function Medical() {
    return (
        <div className='component'>
            <div className='left'>
                <div>
                    <label >Letter from Hospital</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >Passenger Details </label><br />
                    <input type="file" />
                </div>
                <div>
                    <label style={{ width: 250 }}>Ground Handling Confirmation</label><br />
                    <input type="text" />
                </div>
            </div>

        </div>
    );
}

export default Medical;