import React from 'react';
import Field from '../components/Field/Field';
import TextArea from '../components/TextArea/TextArea';
import Selection from '../components/Selection/Selection';
import Button from '../components/Button/Button';
import './SampleForm.scss'
export default function SampleForm ( props ) {

    return (
        <div style = {{width: "400px", margin: "auto"}}> 
            <p> Hello, Please fill in the forms accordingly</p>
            <Field label = "Name" type="text" name="name"/>
            <Field label = "Email" type="email"/>
            <Field label = "Location" type="text"/>
            <Field label = "Salary" type = "number"/>
            <Field label = "Password" type = "password"/>
            <Field label = "Confirm Pass" type = "password"/>
            <Field label = "Attachment" type = "file"/>
            <TextArea label = "Description" validation = "error" rows={10}/>
            <Selection label = "Options" />
            <div className = "Commands"> 
                <Button type = "Primary"> Submit </Button>
                <Button type = "Secondary"> Cancel </Button>
            </div>
        </div>
    )
}