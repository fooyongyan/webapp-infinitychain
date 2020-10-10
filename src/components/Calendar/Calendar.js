import React from 'react';
import './Calendar.scss'
import Day from '../Day/Day';
import moment from 'moment';

/*********
 * 
 *  @props 
 *  year: 
 *  month: 
 *  days displays
 */
export default function Calendar (props) {

    const current = moment();
    const [config, setConfig] = React.useState({
        month: props.month ? props.month : current.month() + 1, 
        year: props.year ? props.year : current.year(), 
        days: props.days ? props.days : [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    });

    const begin = (moment(`${config.year}-${config.month}`));
    
    function onDaysClicked( date, isHighlighted) {
        console.log(date, isHighlighted);   
    }

    function renderDays () {
        const daysInCalender = 42;
        let days = [];
        let currMoment = begin.day() === 0 ? begin.clone() : begin.clone().day(0);
        for ( let i = 0; i < daysInCalender ; i++ ) 
        {
            days.push( <Day 
                            key = {i} 
                            isCurrentMonth={currMoment.month() + 1 === config.month } 
                            dateValue={currMoment.toDate()} 
                            day={currMoment.date()} 
                            month={currMoment.month()} 
                            dayOfMonth={i+1}
                            isCurrentDay = { currMoment.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD") }
                            isHighlighted = {i%2 === 0}
                            clicked = {onDaysClicked}
                        />)
            currMoment = currMoment.clone().add(1, 'days');
        }
        return days;
    }
    
    return (
        <div className = "Calendar" style = {props.style}> 
            <div className = "Calendar__header"> {begin.format("MMMM")} / {config.year} </div> 
            <div className = "Calendar__labels"> 
                {config.days.map( e => <p key = {e}> {e} </p>)}
            </div> 
            <div className = "Calendar__body"> 
                {renderDays()}
            </div>
        </div>
    );
}