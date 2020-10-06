import React from 'react';
import './Calendar.css'
import Day from './Day/Day';
import moment from 'moment';
export default function Calendar () {

    //TODO: Would need to make this into 2 Variables
    const [month, setMonth] = React.useState(moment().month());
    const [year, setYear] = React.useState(moment().year());
    const begin = (moment(`${year}-${month}-1`));
    const end = (moment(`${year}-${month}-${begin.daysInMonth()}`))
    //console.log(`First day of the month is on ${begin.day()}`)
    //console.log(`End day of the month is on ${end.day()}`)

    function back() {
        let newValue = month - 1;
        if ( newValue < 1 ) {
            newValue = 12;
            setYear(year-1);
        }
        setMonth(newValue);
    }

    
    function forward() {
        let newValue = month + 1;
        if ( newValue > 12 ) {
            newValue = 1;
            setYear(year+1);
        }
        setMonth(newValue);
    }

    const monthDisplay = begin.format("MMMM");
    const dayOfWeek = begin.day();
    const startOfWeek = dayOfWeek == 0 ? begin.clone() : begin.clone().day(0);
    let count = 42;
    var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'   ];
    function renderDays () {
        let days = [];
        let curr = startOfWeek;
        for ( let i = 0; i < count; i++ ) 
        {
            days.push( <Day key = {curr.toDate().getTime()} isCurrentMonth= {curr.month() == month-1 } dateValue = {curr.toDate()} day={curr.date()} month={curr.month()} dayOfMonth={i+1}> {i + 1} </Day>)
            curr = curr.clone().add(1, 'days');
        }
        return days;
    }
    
    return (
        <div className = "Calendar"> 
            <div className = "Calendar__header"> {monthDisplay} | {year} </div> 
            <div className = "Calendar__body"> 
                {days.map( e => <p key = {e}> {e} </p>)}
                {renderDays()}
            </div>
            <div className = "Calendar__Controls"> 
                <div class = "Calendar__Controls__Back"> <a href="#" onClick = {ev => {back()}}> Back </a> </div>
                <div class = "Calendar__Controls__Next"> <a href="#" onClick = {ev => {forward()}}> Next </a> </div>
            </div> 
        </div>
    );
}