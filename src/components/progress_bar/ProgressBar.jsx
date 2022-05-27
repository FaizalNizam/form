import React from 'react';
import { useNavigate } from 'react-router-dom'
import './progressbar.css'
import form from '../../form.json'

function ProgressBar(props) {

    const navigate = useNavigate()

    const handleClick = (tab) => {

        if (tab === 'application') {
            props.setPage(form.appdata)
        }
        if (tab === 'general') {
            props.setPage(form.generaldata)
        }
        if (tab === 'purpose') {
            props.setPage('')
        }
        
    }

    return (
        <div >
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => handleClick('application')}>Application information</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => handleClick('general')}>General Information</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => handleClick('purpose')}>Purpose and Documents</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => handleClick('additional')}>Additional Information</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => handleClick('summary')}>Summary</button>
                </li>
            </ul>

        </div>
    );
}

export default ProgressBar;