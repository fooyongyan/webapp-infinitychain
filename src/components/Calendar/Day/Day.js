import React from 'react';
import './Day.css'
import moment from 'moment';
export default function Day (props) {

    const [selected, setSelected] = React.useState(false);
    function onDayClicked( ev ) {
        console.log(moment(props.dateValue).format("YYYY-MM-DD"));
        setSelected(!selected);

    }

    return (
        <div className = "Calendar__day" style={{color: props.isCurrentMonth ? null : "grey"}}onClick={ (ev) => onDayClicked(ev)}>
            <div style={{textAlign: "left"}}> {props.day} </div>  
            <div className = "Calendar__day__selection"> {selected ? "X" : "" }</div>
        </div>
    );
}