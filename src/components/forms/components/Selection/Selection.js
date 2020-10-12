import React from 'react'
import '../components.scss'

export default function Selection(props) {
    const options = props.options ? props.options : [ 
        {value: "lime", label: "Lime"},
        {value: "lemon", label: "Lemon"},
        {value: "apple", label: "Apple"},
    ];
    const selected = props.selected ? props.selected : "lime"

    return (
        <div className = "Field"> 
            <label> {props.label} </label>
            <select>
                {options.map( e =>  <option value={e.value} selected = {e.value === selected}>{e.label}</option>)}
            </select>
        </div>
    )

}