import React from 'react';
import '../Card.scss'
import Aux from '../../../../hoc/Auxiliary/Auxiliary'
import CalendarContext from '../../../../contexts/CalendarContext'
export default function Body (props ) {
    const config = React.useContext(CalendarContext) ;
    return <Aux> 
        <div className = "Calendar__labels"> 
            {config.labels.map( e => <p key = {e}> {e} </p>)}
        </div> 
        <div className = "Calendar__body"> 
            {props.children}
        </div>
    </Aux>
}
