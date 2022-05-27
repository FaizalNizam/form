import React from 'react';

function Additional() {
    return (
        <div>
            <div>
                <label >Additional details</label><br />
                <input type="text" />
            </div>
            <div>
                <label >Additional attachment</label><br />
                <input type="file" multiple />
            </div>
            <button className='next2'>Next <i className="bi bi-arrow-right"></i></button>
        </div>
    );
}

export default Additional;