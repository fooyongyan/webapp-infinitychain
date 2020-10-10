import React from 'react' 
import '../Calendar.scss'
export default function CalenderHeader (props) {
    return <div className = "Calendar__Header"> {props.children} </div> 
}