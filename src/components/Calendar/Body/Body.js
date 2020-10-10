import React from 'react';
import '../Calendar.scss'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

export default function CalendarBody (props ) {
    return <Aux> 
        <div className = "Calendar__labels"> 
            {props.labels.map( e => <p key = {e}> {e} </p>)}
        </div> 
        <div className = "Calendar__body"> 
            {props.children}
        </div>
    </Aux>
}

