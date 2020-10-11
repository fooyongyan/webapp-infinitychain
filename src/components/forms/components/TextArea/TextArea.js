import React from 'react';
import '../components.scss'

export default function TextArea ( props ) {
    const length = 0;
    const status = () => props.maxlength ? `Current Length: ${ length}/${props.maxlength}` : `Current Length: ${length}`
    return (
        <div className = "Field"> 
            <label> {props.label} </label>
            <span class = "Field___Validation"> {props.validation} </span>
            <textarea type={props.type} rows={props.rows} maxlength={props.maxlength}/>
            <span class = "Field___CharacterLength"> {status()}</span>
        </div>
    );
}