import React, { useState } from 'react'
import './GetInputs.css'
const GetInputs = (props) => {

    const [elementvalue, setelementvalue] = useState(0);
    let insertelement = () => {
        props.InsertElement(elementvalue);
    }
    const deleteelement = () => {
        props.DeleteElement(elementvalue);
    }
    const searchelement = () => {
        props.SearchElement(elementvalue);
    }
    const changevalue = (event) => {
        setelementvalue(event.target.value);
    }
    return (
        <div className='oprs'>
            <input className='inp' type="number" onChange={changevalue} ></input>
            <button className='btn' onClick={insertelement}>Insert</button>
            <button className='btn' onClick={deleteelement}>Delete</button>
            <button className='btn' onClick={searchelement}>Search</button>
        </div>
    );
}
export default GetInputs;