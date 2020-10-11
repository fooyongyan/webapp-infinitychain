import React from 'react'
import '../components.scss'

export default function Selection(props) {
    const options = props.options ? props.options : [ {value: "lime", label: "Lime"}];

    return (
        <div className = "Field"> 
            <label> {props.label} </label>
            <select>
                {options.map( e =>  <option value={e.value}>{e.label}</option>)}
            </select>
        </div>
    )

}