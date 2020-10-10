import React from 'react'
import Month from '../Month/Month';
import './Year.scss';
import moment from 'moment';

export default function Year ( props ) {

    const year = props.year ? props.year : moment().year();
    function renderMonth () {
        const components = [];
        for ( let i = 1; i <= 12; i++) {
            components.push ( <Month year={year} month={i}/>)
        }
        return components;
    }
    return <div class ="Year"> {renderMonth()} </div>

}
