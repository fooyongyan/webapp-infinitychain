import React from 'react';
import Field from '../components/Field/Field';
import TextArea from '../components/TextArea/TextArea';
import Selection from '../components/Selection/Selection';

export default function SampleForm ( props ) {

    return (
        <div style = {{width: "400px", margin: "auto"}}> 
            <Field label = "Name" type="text"/>
            <Field label = "Email" type="email"/>
            <Field label = "Location" type="text"/>
            <Field label = "Salary" type = "number"/>
            <Field label = "Password" type = "password"/>
            <Field label = "Confirm Pass" type = "password"/>
            <Field label = "Attachment" type = "file"/>
            <TextArea label = "Description" validation = "error" rows={10}/>
            <Selection label = "Options" />
        </div>
    )
}