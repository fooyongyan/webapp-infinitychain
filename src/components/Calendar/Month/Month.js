import React from 'react';
import Day from './Day/Day';
import moment from 'moment';
import Calendar from '../Container/Calendar'

/*********
 * 
 *  @props 
 *  year: 
 *  month: 
 *  days displays
 */
export default function MonthlyCalendar (props) {

    const current = moment();
    const config = {
        month: props.month ? props.month : current.month() + 1, 
        year: props.year ? props.year : current.year(), 
        days: props.days ? props.days : [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    };
    
    const begin = (moment(`${config.year}-${config.month}`));
    
    function onDaysClicked( date, isHighlighted) {
        console.log(date, isHighlighted);   
    }

    ///Create a Monthly Calendar
    function renderDays () {
        const daysInCalender = 42;
        let days = [];
        let currMoment = begin.day() === 0 ? begin.clone() : begin.clone().day(0);
        for ( let i = 0; i < daysInCalender ; i++ ) 
        {
            days.push( <Day 
                            key = {i} 
                            value = {currMoment}
                            dateValue={currMoment.toDate()} 
                            month={currMoment.month()} 
                            isHighlighted = {true}
                            clicked = {onDaysClicked}
                            isCurrentMonth={currMoment.month() + 1 === config.month } 
                        />)
            currMoment = currMoment.clone().add(1, 'days');
        }
        return days;
    }

    return (
        <Calendar style = {props.style} title = {`${begin.format("MMMM")} / ${config.year}`} labels={config.days}> {renderDays()}</Calendar>
    );
}