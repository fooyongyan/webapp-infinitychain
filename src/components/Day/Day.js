import React from 'react';
import './Day.css'
import moment from 'moment';
export default function Day (props) {

    const [selected, setSelected] = React.useState(props.isHighlighted);
    function onDayClicked() {
        console.log(moment(props.dateValue).format("YYYY-MM-DD"));
        setSelected(!selected);
        if ( props.clicked ) {
            props.clicked(props.dateValue, selected);
        }
    }

    const style = {
        color: props.isCurrentMonth ? null : "darkgrey", 
        border: props.isCurrentDay ? "2px solid black" : null, 
        backgroundColor: selected ? "rgb(233, 182, 218)" : "white",
    }

    return (
        <div className = "Day" style={style} onClick={onDayClicked}>
            <div style = {{width: "100%", height: "100%"}}> {props.day} </div> 
        </div>
    );
}