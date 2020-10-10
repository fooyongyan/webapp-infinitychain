import React from 'react';
import './Card.scss'
import Header from './Header/Header'
import CalendarBody from './Body/Body'

export default function Calendar (props) {

    return (
        <div className = "Calendar" style = {props.style}> 
            <Header> {props.title} </Header> 
            <CalendarBody labels = {props.labels}> 
                {props.children}
            </CalendarBody>
        </div>
    );
}