import React, { useState } from 'react';
import Heading from '../Heading';
import './General.css'
import {useDispatch,useSelector} from 'react-redux'
import { generalData } from '../../redux/Action';

function General() {

    const dispatch = useDispatch()
    const {generaldata} =useSelector(state=>state)

    const [error,setError] = useState({})

    const general_heading='General Information'

    const handleChange=(e)=>{
        dispatch(generalData({...generaldata,[e.target.name]:e.target.value}))
    }

    const handleClick=()=>{
        let error=formValidation()
        console.log(error);
    }

    const formValidation=()=>{
        let error={}
        if(!generaldata.agent){
            error.agent='Mandatory field'
        }
        if(!generaldata.registration){
            error.registration='Mandatory field'
        }
        if(!generaldata.type){
            error.type='Mandatory field'
        }
        if(!generaldata.startDate){
            error.startDate='Mandatory field'
        }
        if(!generaldata.startTime){
            error.startTime='Mandatory field'
        }
        if(!generaldata.operator){
            error.operator='Mandatory field'
        }
        if(!generaldata.alternate){
            error.alternate='Mandatory field'
        }
        if(!generaldata.weight){
            error.weight='Mandatory field'
        }
        if(!generaldata.endDate){
            error.endDate='Mandatory field'
        }
        if(!generaldata.endTime){
            error.endTime='Mandatory field'
        }

        setError(error)
        return error
    }

    return (
        <div className='component'>
            <div>
                <Heading heading={general_heading}/>
            </div>

            <div className='wrapper'>
                <div className='left'>
                    <div>
                        <label >Name of agent</label><br />
                        <input type="text" name='agent' onChange={(e)=>handleChange(e)} /> <br />
                        <label  style={{color:'#ff0000'}}>{error.agent}</label>
                    </div>
                    <div>
                        <label >Aircraft Registration</label><br />
                        <input type="text" name='registration' onChange={(e)=>handleChange(e)}/><br />
                        <label  style={{color:'#ff0000'}}>{error.registration}</label>
                    </div>
                    <div>
                        <label >Type of Aircraft </label><br />
                        <input type="text" name='type' onChange={(e)=>handleChange(e)}/><br />
                        <label  style={{color:'#ff0000'}}>{error.type}</label>
                    </div>
                    <div>
                        <label >Start Date</label><br />
                        <input type="date" name='startDate' onChange={(e)=>handleChange(e)}/><br />
                        <label  style={{color:'#ff0000'}}>{error.startDate}</label>
                    </div>
                    <div>
                        <label >Start Time</label><br />
                        <input type="time" name='startTime' onChange={(e)=>handleChange(e)} /><br />
                        <label  style={{color:'#ff0000'}}>{error.startTime}</label>
                    </div>
                </div>

                <div className='right'>
                    <div>
                        <label >Name of operator</label><br />
                        <input type="text" name='operator' onChange={(e)=>handleChange(e)} /><br />
                        <label  style={{color:'#ff0000'}}>{error.operator}</label>
                    </div>
                    <div>
                        <label >Alternate registration</label><br />
                        <input type="text" name='alternate' onChange={(e)=>handleChange(e)}/><br />
                        <label  style={{color:'#ff0000'}}>{error.alternate}</label>
                    </div>
                    <div>
                        <label >Maximum takeoff weight</label><br />
                        <input type="text" name='weight' onChange={(e)=>handleChange(e)}/><br />
                        <label  style={{color:'#ff0000'}}>{error.weight}</label>
                    </div>
                    <div>
                        <label >End Date</label><br />
                        <input type="date" name='endDate' onChange={(e)=>handleChange(e)}/><br />
                        <label  style={{color:'#ff0000'}}>{error.endDate}</label>
                    </div>
                    <div>
                        <label >End Time</label><br />
                        <input type="time" name='endTime' onChange={(e)=>handleChange(e)}/><br />
                        <label  style={{color:'#ff0000'}}>{error.endTime}</label>
                    </div>
                </div>

            </div>
            <button className='next2' onClick={handleClick}>Next <i className="bi bi-arrow-right"></i></button>
        </div>
    );
}

export default General;