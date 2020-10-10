import React from 'react'
import Month from '../Month/Month';
import './Year.scss';
import moment from 'moment';

export default function Year ( props ) {

    const year = props.year ? props.year : moment().year();
    const daysHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    function renderMonth () {
        const components = [];
        for ( let i = 1; i <= 12; i++) {
            components.push ( <Month year={year} month={i} days={daysHeader}/>)
        }
        return components;
    }
    return <div class ="Year"> {renderMonth()} </div>

}
