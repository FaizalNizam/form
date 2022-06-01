import React, { useState } from 'react';
import form from '../../form.json'
import '../form/form.css'
import { useDispatch, useSelector } from 'react-redux'
import { additionalData, appData, generalData, purposeData, addData } from '../../redux/Action';
import Summary from '../summary/Summary';


function Form() {

    const dispatch = useDispatch()
    const { appdata, generaldata, purposedata, additionaldata, adddata } = useSelector(state => state)
    const [error, setError] = useState({})
    const [selectError, setSelectError] = useState({})
    const [page, setPage] = useState('application')
    const [purpose, setPurpose] = useState('')
    const [select, setSelect] = useState('purpose')
    const [arr, setArr] = useState([])


    const appHandleChange = (e) => {
        dispatch(appData({ ...appdata, [e.target.name]: e.target.value }))
        setError({ ...error, [e.target.name]: '' })
    }
    const generalHandleChange = (e) => {
        dispatch(generalData({ ...generaldata, [e.target.name]: e.target.value }))
        setError({ ...error, [e.target.name]: '' })
    }
    const purposeHandleChange = (e) => {
        dispatch(purposeData({ ...purposedata, [e.target.name]: e.target.value }))
        setSelectError({ ...selectError, [e.target.name]: '' })
    }
    const additionalHandleChange = (e) => {
        dispatch(additionalData({ ...additionaldata, [e.target.name]: e.target.value }))
        setError({ ...error, [e.target.name]: '' })
    }


    const purposeChange = (e) => {
        setError('')
        if (e.target.value === 'Select Purpose') {
            setPage('purpose')
            console.log(page);
        }
        if (e.target.value === 'Overfly') {
            setPurpose(form.Overfly)
            setSelect(e.target.value)
        }
        if (e.target.value === 'Business') {
            setPurpose(form.Business)
            setSelect(e.target.value)
        }
        if (e.target.value === 'Cargo') {
            setPurpose(form.Cargo)
            setSelect(e.target.value)
        }
        if (e.target.value === 'Technical') {
            setPurpose(form.Technical)
            setSelect(e.target.value)
        }
        if (e.target.value === 'Medical') {
            setPurpose(form.Medical)
            setSelect(e.target.value)
        }
        if (e.target.value === 'Training') {
            setPurpose(form.Training)
            setSelect(e.target.value)
        }
    }


    const type = (type, id, name, value, eventHandler, multiples) => {
        switch (type) {
            case 'text':
                return <input type='text' id={id} name={name} value={value} onChange={(e) => eventHandler(e)} ></input>

            case 'date':
                return <input type='date' id={id} name={name} value={value} onChange={(e) => eventHandler(e)} ></input>

            case 'time':
                return <input type='time' id={id} name={name} value={value} onChange={(e) => eventHandler(e)} ></input>

            case 'select':
                return <select id={id} name={name} value={value} onChange={(e) => eventHandler(e)} className='purpose'>
                    <option>select your country</option>
                    <option value='United kingdom'>United kingdom</option>
                    <option value='United arab emirates'>United arab emirates</option>
                    <option value='India'>India</option>
                    <option value='Canada'>Canada</option>
                    <option value='Australia'>Australia</option>
                </select>

            case 'file':
                return <input type='file' id={id} name={name} value={null} onChange={(e) => eventHandler(e)} multiple={multiples} ></input>
        }
    }


    const addFiles = (type, key) => {
        setArr((files) =>
            [...files, { type: type, name: key }])
    }

    const handleAddChange = (e) => {
        const index = e.target.id;
        setArr((files) => {
            const newArr = files.slice()
            newArr[index].key = e.target.value;
            return newArr;
        })

    }


    const render = () => {
        switch (page) {
            case 'application':
                return form.appdata.map((obj) => (
                    <div key={obj.key}>
                        <label >{obj.label}</label><br />
                        {
                            type(obj.type, obj.key, obj.key, appdata[obj.key], appHandleChange)
                        }
                        {error && <label id={obj.key} style={{ color: 'red', marginLeft: 10 }}>{error[obj.key]}</label>}
                    </div>
                ))

            case 'general':
                return form.generaldata.map((obj) => (
                    <div key={obj.key}>
                        <label >{obj.label}</label><br />
                        {
                            type(obj.type, obj.key, obj.key, generaldata[obj.key], generalHandleChange)
                        }
                        <label id={obj.key} style={{ color: 'red', marginLeft: 10 }}>{error[obj.key]}</label>
                    </div>
                ))

            case 'purpose':
                return <div >
                    <select onChange={(e) => purposeChange(e)} className='purpose'>
                        <option value="Select Purpose">Select Purpose</option>
                        <option value="Overfly">Overfly</option>
                        <option value="Business">Business</option>
                        <option value="Cargo">Cargo</option>
                        <option value="Technical">Technical</option>
                        <option value="Medical">Medical</option>
                        <option value="Training">Training</option>
                    </select>

                    <label style={{ color: 'red', marginLeft: 10 }}>{error.select}</label>
                    <div >
                        {purpose && purpose.map((obj) => (
                            <div key={obj.key}>
                                <label >{obj.label}</label><br />
                                {
                                    type(obj.type, obj.key, obj.key, purposedata[obj.key], purposeHandleChange, obj.multiple)
                                }
                                {obj.multiple ? <i class="bi bi-file-plus" style={{ marginLeft: 10 }} onClick={() => addFiles(obj.type, obj.key)}></i> : ''}

``
                                <label id={obj.key} style={{ color: 'red', marginLeft: 10 }}>{selectError[obj.key]}</label>
                            </div>

                        ))}
                        <div >
                            {
                                arr && arr.map((item, i) => (
                                    <input type={item.type} name={item.key} id={i} onChange={(e) => handleAddChange(e, item.key)} key={i} ></input>
                                ))
                            }
                        </div>
                    </div>

                </div>

            case 'additional':
                return form.additionaldata.map((obj) => (
                    <div key={obj.key}>
                        <label >{obj.label}</label><br />
                        {
                            type(obj.type, obj.key, obj.key, additionaldata[obj.key], additionalHandleChange)
                        }
                        <label id={obj.key} style={{ color: 'red', marginLeft: 10 }}>{error[obj.key]}</label>
                    </div>
                ))

            case 'summary':
                return <Summary />


            default: return page
        }
    }


    const onNext = () => {
        let error = {}
        switch (page) {
            case 'application':
                form.appdata.map((obj) => {
                    if (!appdata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)

                if (appdata.email) {
                    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    if (!emailRegex.test(appdata.email)) {
                        error.email = 'Please enter a valid email!'
                        setError(error)
                    }
                }

                if (Object.keys(error).length === 0) {
                    setPage('general')
                }
                break

            case 'general':
                form.generaldata.map((obj) => {
                    if (!generaldata[obj.key]) {
                        error[obj.key] = 'Mandatory field'
                    }
                })
                setError(error)
                if (Object.keys(error).length === 0) {
                    setPage('purpose')
                }
                break

            case 'additional':
                form.additionaldata.map((obj) => {
                    if (!additionaldata[obj.key]) {
                        error[obj.key] = '(optional field)'
                    }
                })
                setError(error)
                if (Object.keys(error).length !== 0) {
                    setPage('summary')
                }
                break
        }
    }


    const onSelectNext = () => {
        let selectError = {}
        let error = {}
        switch (select) {
            case 'purpose':
                if (select === 'purpose') {
                    error.select = 'Select a purpose'
                }

                setError(error)
                if (Object.keys(error).length === 0) {
                    setPage('additional')
                }
                break

            case 'Overfly':
                form.Overfly.map((obj) => {
                    if (!purposedata[obj.key]) {
                        selectError[obj.key] = 'Mandatory field'
                    }
                })
                setSelectError(selectError)
                if (Object.keys(selectError).length === 0) {
                    setPage('additional')
                }
                break

            case 'Business':
                form.Business.map((obj) => {
                    if (!purposedata[obj.key]) {
                        selectError[obj.key] = 'Mandatory field'
                    }
                })
                setSelectError(selectError)
                if (Object.keys(selectError).length === 0) {
                    setPage('additional')
                }
                break

            case 'Cargo':
                form.Cargo.map((obj) => {
                    if (!purposedata[obj.key]) {
                        selectError[obj.key] = 'Mandatory field'
                    }
                })
                setSelectError(selectError)
                if (Object.keys(selectError).length === 0) {
                    setPage('additional')
                }
                break

            case 'Technical':
                form.Technical.map((obj) => {
                    if (!purposedata[obj.key]) {
                        selectError[obj.key] = 'Mandatory field'
                    }
                })
                setSelectError(selectError)
                if (Object.keys(selectError).length === 0) {
                    setPage('additional')
                }
                break

            case 'Medical':
                form.Medical.map((obj) => {
                    if (!purposedata[obj.key]) {
                        selectError[obj.key] = 'Mandatory field'
                    }
                })
                setSelectError(selectError)
                if (Object.keys(selectError).length === 0) {
                    setPage('additional')
                }
                break

            case 'Training':
                form.Training.map((obj) => {
                    if (!purposedata[obj.key]) {
                        selectError[obj.key] = 'Mandatory field'
                    }
                })
                setSelectError(selectError)
                if (Object.keys(selectError).length === 0) {
                    setPage('additional')
                }
                break
        }
    }


    const onSubmit = () => {

    }


    return (
        <div>
            <div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={page === 'application' ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => setPage('application')}>Application information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={page === 'general' ? "nav-link active" : "nav-link"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => setPage('general')}>General Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={page === 'purpose' ? "nav-link active" : "nav-link"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => setPage('purpose')}>Purpose and Documents</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={page === 'additional' ? "nav-link active" : "nav-link"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => setPage('additional')}>Additional Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={page === 'summary' ? "nav-link active" : "nav-link"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => setPage('summary')}>Summary</button>
                    </li>
                </ul>
            </div>

            <div >
                {
                    render()
                }
            </div>


            <div >
                {page === 'summary' ? <button className='next' onClick={onSubmit} >Submit</button>
                    : <button className='next' onClick={() => { page === 'purpose' ? onSelectNext() : onNext() }} >Next<i className="bi bi-arrow-right"></i></button>}
            </div>

        </div>
    );
}

export default Form;