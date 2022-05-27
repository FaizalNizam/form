import React from 'react';
import './buisness.css'

function Buisness() {
    return (
        <div className='component'>
            <div className='left'>
                <div>
                    <label >Crew Details</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label >Passenger Details</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label >Copy of Receiving Party Letter</label><br />
                    <input type="file" multiple />
                </div>
            </div>

            <div className='right'>
                <div>
                    <label >Signature Card</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >Transfer Flight confirmation</label><br />
                    <input type="file"/>
                </div>
                <div>
                    <label style={{width:250}}>Ground Handling Confirmation</label><br />
                    <input type="text" />
                </div>
            </div>

        </div>
    );
}

export default Buisness;