import React from 'react';
import './Day.scss'
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

    function getClass () {
        const classes = ["Day"];
        if ( selected ) {
            classes.push("Day__selected");
        } else {
            if ( props.isCurrentMonth) 
                classes.push("Day__currentMonth");
        }
        if ( props.isCurrentDay ) classes.push ("Day__currentDay");
        return classes.join(' ');
    }

    return (
    <div className = {getClass()} onClick={onDayClicked}>
            <div> {props.day} </div> 
        </div>
    ); 
}