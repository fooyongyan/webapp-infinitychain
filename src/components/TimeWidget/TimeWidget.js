import moment from 'moment';
import React from 'react';
import './TimeWidget.css'
export default function TimeWidget ( props ) {
    const [currentDateTime, setCurrent] = new React.useState(moment().format("MMMM Do YYYY, HH:mm"));
    setInterval ( () => {
        setCurrent(moment().format("MMMM Do YYYY, HH:mm:ss"));
    }, 1000);

    return (<div className = "TimeWidget"> 
        <span> {currentDateTime} </span>
        <p> {moment().format('dddd')}</p>
    </div>)
}