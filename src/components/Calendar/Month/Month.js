import React from 'react';
import Day from './Day/Day';
import moment from 'moment';
import Card from '../Card/Card'

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
                            isHighlighted = {false}
                            clicked = {onDaysClicked}
                            isCurrentMonth={currMoment.month() + 1 === config.month } 
                        />)
            currMoment = currMoment.clone().add(1, 'days');
        }
        return days;
    }

    return (
        <Card style = {props.style} title = {`${begin.format("MMMM")} / ${config.year}`} > {renderDays()}</Card>
    );
}