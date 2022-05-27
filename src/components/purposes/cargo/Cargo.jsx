import React from 'react';

function Cargo(props) {
    return (
        <div className='component'>
            <div className='left'>
                <div>
                    <label >Copy of CR</label><br />
                    <input type="file"/>
                </div>
                <div>
                    <label >Health Certificate</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label >Signature Card</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label >Consignee letter</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label >Airworthiness Certificates</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label >Air Operator Certificates</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label >Aircraft Insurance Certificates</label><br />
                    <input type="file" multiple />
                </div>
            </div>

            <div className='right'>
                <div>
                    <label >Noise Certificates</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label style={{ width: 250 }}>Aircraft Registration Certificates</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >Airway Bill</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >Insurance Certificate</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >Import Permit</label><br />
                    <input type="file" />
                </div>
                <div>
                    <label >Dangerous Good</label><br />
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

export default Cargo;