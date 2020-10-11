import React from 'react';
import '../components.scss'

export default function Field( props ) {

    return (
        <div className = "Field"> 
            <label> {props.label} </label>
            <input type={props.type} maxlength={props.maxlength}/>
            <span class = "Field___Validation"> {props.validation} </span>
        </div>
    )

}