import React from 'react';
import './Day.css'
import moment from 'moment';
export default function Day (props) {

    const [selected, setSelected] = React.useState(false);
    function onDayClicked() {
        console.log(moment(props.dateValue).format("YYYY-MM-DD"));
        setSelected(!selected);
    }
    console.log(props.isCurrentDay)
    const style = {
        color: props.isCurrentMonth ? null : "grey", 
        border: props.isCurrentDay || selected ? "2px solid black" : null, 
        backgroundColor: props.isCurrentDay ? "darkgrey" : null
    }
    return (
        <div className = "Calendar__day" style={style} onClick={ (ev) => onDayClicked(ev)}>
            <div style={{textAlign: "left", marginLeft: "5px"}}> { <span> {props.day} </span> } </div>  
            <div className = "Calendar__day__selection"> {selected ? "X" : "" }</div>
        </div>
    );
}