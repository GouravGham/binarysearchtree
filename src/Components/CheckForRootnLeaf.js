import React from 'react'
import './CheckForRootnLeaf.css'


const CheckForRootnLeaf = (props) => {
    if (props.flag === 0) {
        return (
            <div className='root_val'>
                <div className='value'>
                    {props.value}  </div>
                <div className='btm_line'></div>
            </div>
        );
    }
    else if (props.flag === 1) {
        return (
            <div className='node_val'>
                <div className='value'>
                    {props.value}  </div>
                <div className='btm_line'></div>
            </div>
        );
    }
    else if (props.flag === 2) {
        return (
            <div className='root_val'>
                <div className='value'>
                    {props.value}  </div>
            </div>
        );
    }
    else if (props.flag === 3) {
        return (
            <div className='node_val'>
                <div className='value'>
                    {props.value}  </div>
            </div>
        );
    }

}


export default CheckForRootnLeaf;