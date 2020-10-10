import {createContext} from 'react';

const calendarConfiguration = {
    labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
}

export default createContext(calendarConfiguration);
