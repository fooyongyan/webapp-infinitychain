import React from 'react';
import './Calendar.css'
import Day from './Day/Day';
import moment from 'moment';
export default function Calendar (props) {

    const current = moment();
    const [config, setConfig] = React.useState({
        month: props.month ? props.month : current.month() + 1, 
        year: props.year ? props.year : current.year(), 
        days: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    });

    const begin = (moment(`${config.year}-${config.month}`));
    function back() {
        let newMonth = config.month - 1;
        const newConfig = {
            ...config,
            month: (newMonth < 1 ) ? 12 : newMonth, 
            year:  (newMonth < 1 ) ? config.year-1 : config.year, 
        }
        setConfig(newConfig);
    }
    
    function forward() {
        let newMonth = config.month + 1;
        const newConfig = {
            ...config,
            month: (newMonth > 12 ) ? 1 : newMonth, 
            year:  (newMonth > 12 ) ? config.year+1 : config.year, 
        }
        setConfig(newConfig);
    }

    function renderDays () {
        const daysInCalender = 42;
        let days = [];
        let currMoment = begin.day() === 0 ? begin.clone() : begin.clone().day(0);
        for ( let i = 0; i < daysInCalender ; i++ ) 
        {
            days.push( <Day 
                            key={currMoment.toDate()} 
                            isCurrentMonth={currMoment.month() + 1 === config.month } 
                            dateValue={currMoment.toDate()} 
                            day={currMoment.date()} 
                            month={currMoment.month()} 
                            dayOfMonth={i+1}
                            isCurrentDay = { currMoment.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD") }
                        />)
            currMoment = currMoment.clone().add(1, 'days');
        }
        return days;
    }
    
    return (
        <div className = "Calendar"> 
            <div className = "Calendar__header"> {begin.format("MMMM")} / {config.year} </div> 
            <div className = "Calendar__body"> 
                {config.days.map( e => <p key = {e}> {e} </p>)}
                {renderDays()}
            </div>
            <div className = "Calendar__Controls"> 
                <div class = "Calendar__Controls__Back"> <button onClick = {ev => {back()}}> Back </button> </div>
                <div class = "Calendar__Controls__Next"> <button onClick = {ev => {forward()}}> Next </button> </div>
            </div> 
        </div>
    );
}