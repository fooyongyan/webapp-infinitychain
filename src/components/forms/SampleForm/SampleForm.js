import React from 'react';
import Field from '../Field/Field';

export default function SampleForm ( props ) {

    return (
        <div style = {{width: "300px", margin: "auto"}}> 
            <Field label = "Name" type="text"/>
            <Field label = "Email" type="email"/>
            <Field label = "Location" type="text"/>
            <Field label = "Salary" type = "number"/>
            <Field label = "Password" type = "password"/>
            <Field label = "Confirm Pass" type = "password"/>
        </div>
    )
}