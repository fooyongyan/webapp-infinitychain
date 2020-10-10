import React from 'react';
import './Day.scss'
import moment from 'moment';
export default function Day (props) {

    console.log(props.value.format("YYYY-MM-DD"),  moment().format("YYYY-MM-DD"), props.value.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD"));
    const state = {
        date: props.value,
        dayOfMonth:  props.value.month(),
        isCurrentDay: props.value.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD"),
        isCurrentMonth: props.isCurrentMonth, 
        day: props.value.date()
    };

    console.log(state.isCurrentDay);
    const [selected, setSelected] = React.useState(props.isHighlighted);
    function onDayClicked() {
        setSelected(!selected);
        if ( props.clicked ) {
            props.clicked(props.dateValue, selected);
        }
    }

    function getClass () {
        if ( selected ) {
            return ("Day__selected");
        } else {
            if ( state.isCurrentMonth)  
                return ("Day__currentMonth");
        }
        if ( state.isCurrentDay ) return ("Day__currentDay");
        return "Day__prevMonth"; 
    }

    return (
        <button className = {getClass()} onClick={ onDayClicked}>
            {state.day} 
        </button>
    ); 
}