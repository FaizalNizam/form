import React from 'react';

function Technical() {
    return (
        <div className='component'>
            <div className='left'>
                <div>
                    <label >Maintenance Confirmation</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >Crew Disembarkation</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >If Yes please provide Hotel Confirmation</label><br />
                    <input type="file" />
                </div>
            </div>

            <div className='right'>
                <div>
                    <label >Crew Details</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label style={{width:250}}>Ground Handling Confirmation</label><br />
                    <input type="text" />
                </div>
            </div>

        </div>
    );
}

export default Technical;