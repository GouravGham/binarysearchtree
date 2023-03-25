

import React from 'react'
import './DisplayBtree.css'
import CheckForRootnLeaf from './CheckForRootnLeaf'


const DisplayBtree = (props) => {
    if (props.node === null) {
        return (
            <div className='empty'>Enter value to add nodes</div>
        )
    }
    const { value, left, right } = props.node;
    if (left && right) {
        return (
            <div className='node'>
                <CheckForRootnLeaf value={value} flag={props.flag} />
                <div className='left_right'>
                    <div className='left_node'> <DisplayBtree node={left} flag={1} /> </div>
                    <div className='right_node'> <DisplayBtree node={right} flag={1} /> </div>
                </div>
            </div>
        );
    }
    else if (left) {
        return (
            <div className='node'>
                <CheckForRootnLeaf value={value} flag={props.flag} />
                <div className='left_right'>
                    <div className='left_node'> <DisplayBtree node={left} flag={1} /> </div>
                </div>
            </div>
        );
    }
    else if (right) {
        return (
            <div className='node'>
                <CheckForRootnLeaf value={value} flag={props.flag} />
                <div className='left_right'>
                    <div className='right_node'> <DisplayBtree node={right} flag={1} /> </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='node'>
                <CheckForRootnLeaf value={value} flag={props.flag + 2} />
            </div>
        );
    }

}


export default DisplayBtree;