import React from 'react';
import './Field.scss'

export default function Field( props ) {

    return (
        <div className = "Field"> 
            <label> {props.label} </label>
            <input type={props.type}/>
            <span class = "Field___Validation"> {props.validation} </span>
        </div>
    )

}