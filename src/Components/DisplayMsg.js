
import React from 'react'
import './DisplayMsg.css'


const DisplayMsg = (props) => {
    return (
        <div className='gg'>
            {props.msg}
        </div>
    );
}
export default DisplayMsg;